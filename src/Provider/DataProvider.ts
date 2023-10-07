import { stringify } from "query-string";
import { ResourceMapper } from "./ResourceMapper";
import { CondOperator, RequestQueryBuilder } from "@nestjsx/crud-request";

import { DataProvider, fetchUtils, GetManyParams } from "react-admin";
import { httpCall } from "./httpCall";
import { UrlBuilder } from "./APIDefinitions/UrlBuilder";

export default {
  getList: async (resource, params) => {
    return listAndMany(resource, params);
  },

  getOne: async (resource, params) => {
    const url = UrlBuilder.at(`/${resource}/${params.id}`);

    return httpCall(url).then(({ json }) => ({
      data: ResourceMapper.augmentResourceByIdField(resource, json),
    }));
  },

  getMany: async (resource: string, params: GetManyParams) => {
    const query: any = {
      filter:
        ResourceMapper.getIdKeyForResource(resource) +
        "||in||" +
        params.ids.join(","),
    };

    if (params.meta) {
      Object.keys(params.meta).forEach((key) => {
        query[key] = params.meta[key];
      });
    }

    const url = UrlBuilder.at(`/${resource}?${stringify(query)}`);
    return httpCall(url).then(({ json }) =>
      processListResponse(resource, json)
    );
  },

  getManyReference: async (resource, params) => {
    return listAndMany(resource, params);
  },

  update: async (resource, params) => {
    return httpCall(UrlBuilder.at(`/${resource}/${params.id}`), {
      method: "PATCH",
      body: JSON.stringify(
        ResourceMapper.transformManyToManyRelationsToApi(resource, params.data)
      ),
    }).then(({ json }) => ({
      data: ResourceMapper.augmentResourceByIdField(resource, json),
    }));
  },

  updateMany: () => {
    throw new Error("update Many is not implemented");
    // return Promise.all(
    //     params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(params.data),
    //     }))
    // ).then((responses: any) => ({
    //     data: responses.map(({json}) => json),
    // }));
  },

  create: (resource, params) =>
    httpCall(UrlBuilder.at(`/${resource}`), {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      return {
        data: ResourceMapper.augmentResourceByIdField(resource, json),
      };
    }),

  delete: (resource, params) =>
    httpCall(UrlBuilder.at(`/${resource}/${params.id}`), {
      method: "DELETE",
    }).then(() => {
      return {
        data: { id: params.id },
      };
    }),

  deleteMany: async (resource, params) => {
    return Promise.all(
      params.ids.map((id) =>
        httpCall(UrlBuilder.at(`/${resource}/${id}`), {
          method: "DELETE",
        })
      )
    ).then((responses: any) => ({
      data: responses.map(({ json }: any) => json),
    }));
  },
} as DataProvider;

async function listAndMany(resource: string, params: any) {
  const { page, perPage } = params.pagination;
  let { field, order } = params.sort;
  if (field === "id") field = ResourceMapper.getIdKeyForResource(resource);
  let sort = {
    field,
    order,
  };

  let filter = composeFilter(params.filter);
  if (params.target) {
    filter.push({
      field: params.target,
      operator: CondOperator.EQUALS,
      value: params.id,
    });
  }

  const query = RequestQueryBuilder.create({
    filter,
  })
    .setLimit(perPage)
    .setPage(page)
    .sortBy(sort)
    .setOffset((page - 1) * perPage)
    .query();

  const url = UrlBuilder.at(`/${resource}?${query}`);

  return httpCall(url).then(({ json }) => processListResponse(resource, json));
}

function processListResponse(resourceType: string, json: any) {
  if (Array.isArray(json)) {
    return {
      data: ResourceMapper.augmentManyResourcesByIdField(resourceType, json),
      total: json.length,
    };
  }
  return {
    data: ResourceMapper.augmentManyResourcesByIdField(resourceType, json.data),
    total: json.total,
  };
}

function composeFilter(paramsFilter: any) {
  if (
    paramsFilter === "" ||
    (typeof paramsFilter.q !== "undefined" && paramsFilter.q === "")
  ) {
    paramsFilter = {};
  }

  const flatFilter = fetchUtils.flattenObject(paramsFilter);
  return Object.keys(flatFilter).map((key) => {
    const splitKey = key.split("_");
    const ops = splitKey[1] ? splitKey[1] : "cont";
    let field = splitKey[0];

    if (field.indexOf("_") === 0 && field.indexOf(".") > -1) {
      field = field.split(/\.(.+)/)[1];
    }
    return { field, operator: ops as any, value: flatFilter[key] };
  });
}

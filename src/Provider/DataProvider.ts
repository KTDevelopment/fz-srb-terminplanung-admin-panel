import {stringify} from 'query-string';
import {ResourceMapper} from "./ResourceMapper";
import {CondOperator, RequestQueryBuilder} from "@nestjsx/crud-request";
import {config} from "../Config/config";
import httpClient from "./HttpClient";
import {DataProvider, fetchUtils} from 'react-admin';

const apiUrl = config.apiBasePath;

export default {
    getList: (resource, params) => {
        return listAndMany(resource, params);
    },

    getOne: (resource, params) => {
        let url = `${apiUrl}/${resource}/${params.id}`;

        return httpClient(url).then(({json}) => ({
                data: ResourceMapper.augmentResourceByIdField(resource, json),
            })
        )
    },

    getMany: (resource, params) => {
        const query: any = {
            filter: ResourceMapper.getIdKeyForResource(resource) + '||in||' + params.ids.join(','),
        };

        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}) => processListResponse(resource, json));
    },

    getManyReference: (resource, params) => {
        return listAndMany(resource, params);
    },

    update: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(ResourceMapper.transformManyToManyRelationsToApi(resource, params.data)),
        }).then(({json}) => ({data: ResourceMapper.augmentResourceByIdField(resource, json)}))
    },

    updateMany: () => {
        throw new Error('update Many is not implemented');
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
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => {
            return {
                data: ResourceMapper.augmentResourceByIdField(resource, json),
            }
        }),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(() => {
            return {
                data: {id: params.id},
            };
        }),

    deleteMany: (resource, params) => {
        return Promise.all(
            params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}`, {
                method: 'DELETE',
            })),
        ).then((responses: any) => ({
            data: responses.map(({json}) => json),
        }));
    }
} as DataProvider;

function listAndMany(resource, params) {
    const {page, perPage} = params.pagination;
    let {field, order} = params.sort;
    if (field === 'id') field = ResourceMapper.getIdKeyForResource(resource);
    let sort = {
        field,
        order
    };

    let filter = composeFilter(params.filter);
    if (params.target) {
        filter.push({
            field: params.target,
            operator: CondOperator.EQUALS,
            value: params.id,
        });
    }

    const query = RequestQueryBuilder
        .create({
            filter
        })
        .setLimit(perPage)
        .setPage(page)
        .sortBy(sort)
        .setOffset((page - 1) * perPage)
        .query();

    const url = `${apiUrl}/${resource}?${query}`;

    return httpClient(url).then(({json}) => processListResponse(resource, json));
}

function processListResponse(resourceType: string, json) {
    if (Array.isArray(json)) {
        return {
            data: ResourceMapper.augmentManyResourcesByIdField(resourceType, json),
            total: json.length
        }
    }
    return {
        data: ResourceMapper.augmentManyResourcesByIdField(resourceType, json.data),
        total: json.total
    }
}

function composeFilter(paramsFilter) {

    if (paramsFilter === '' || (typeof paramsFilter.q !== 'undefined' && paramsFilter.q === '')) {
        paramsFilter = {}
    }

    const flatFilter = fetchUtils.flattenObject(paramsFilter);
    return Object.keys(flatFilter).map(key => {
        const splitKey = key.split('||');
        const ops = splitKey[1] ? splitKey[1] : 'cont';
        let field = splitKey[0];

        if (field.indexOf('_') === 0 && field.indexOf('.') > -1) {
            field = field.split(/\.(.+)/)[1];
        }
        return {field, operator: ops as any, value: flatFilter[key]};
    });
}

export const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export class UrlBuilder {
  private queryParameters: QueryParameter[] = [];
  private url: string;

  constructor() {
    this.url = API_BASE_URL;
  }

  static at(partial: string): UrlBuilder {
    return new UrlBuilder().addPath(partial);
  }

  addPath(partial: string) {
    if (partial.startsWith("/")) {
      partial = partial.substring(1);
    }
    this.url = this.url + "/" + partial;
    return this;
  }

  addFilter(field: string, value: QueryParameterValue) {
    return this.addQueryParameter("filter", field + "||eq||" + value);
  }

  addArrayFilter(field: string, values: QueryParameterValue[]) {
    return this.addQueryParameter(
      "filter",
      field + "||in||" + values.join(",")
    );
  }

  addCustomFilter(field: string, value: QueryParameterValue, operator: string) {
    return this.addQueryParameter(
      "filter",
      field + "||" + operator + "||" + value
    );
  }

  addQueryParameter(name: string, value: QueryParameterValue) {
    this.queryParameters.push({
      name: name,
      value: value,
    });
    return this;
  }

  sortBy(field: string, sortingDirection: SortingDirection) {
    return this.addQueryParameter("sort", field + "," + sortingDirection);
  }

  build() {
    const queryString = this.queryParameters
      .map((queryParameter) => {
        return queryParameter.name + "=" + queryParameter.value;
      })
      .join("&");

    if (queryString.length > 0) {
      return this.url + "?" + queryString;
    }

    return this.url;
  }
}

interface QueryParameter {
  name: string;
  value: QueryParameterValue;
}

type QueryParameterValue = string | number | boolean;

type SortingDirection = "ASC" | "DESC";

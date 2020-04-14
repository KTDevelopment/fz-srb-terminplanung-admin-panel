import {config} from "../Config/config";

const BASE_URL = config.apiBasePath;

interface QueryParameter {
    name: string;
    value: string
}

export class UrlBuilder {

    queryParameters: QueryParameter[] = [];
    url: string;

    constructor(uri: string = '') {
        this.url = BASE_URL + uri;
    }

    addPath(partial: string) {
        this.url = this.url + '/' + partial;
        return this
    }

    addQueryParameter(name: string, value: string) {
        this.queryParameters.push({
            name: name,
            value: value
        });
        return this
    }

    build() {
        let queryString = this.queryParameters.map((queryParameter) => {
            return queryParameter.name + '=' + queryParameter.value;
        }).join('&');

        if (queryString.length > 0) {
            return this.url + '?' + queryString;
        }

        return this.url;
    }

}

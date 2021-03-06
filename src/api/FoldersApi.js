/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient'
import ContentFolder from '../models/ContentFolder'
import ContentFolderResult from '../models/ContentFolderResult'

/**
* Folders service.
* @module api/FoldersApi
* @version 20.4
*/
export default class FoldersApi {

    /**
    * Constructs a new FoldersApi.
    * @alias module:api/FoldersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }



    /**
     * To access a content folder, you construct a URL using the template shown below. This template requires you to  specify a content folder id and a subfolder level. In response, the server returns a corresponding content  folder document. Only content folder, which are marked as online are returned.
     * @param {String} id The id of the requested content folder.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ContentFolder} and HTTP response
     */
    getFoldersByIDWithHttpInfo(id, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error('Missing the required parameter \'id\' when calling getFoldersByID')
        }


        const pathParams = {
            id
        }
        const queryParams = {
            levels: opts.levels,
            locale: opts.locale
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ContentFolder

        return this.apiClient.callApi(
            '/folders/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * To access a content folder, you construct a URL using the template shown below. This template requires you to  specify a content folder id and a subfolder level. In response, the server returns a corresponding content  folder document. Only content folder, which are marked as online are returned.
     * @param {String} id The id of the requested content folder.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ContentFolder}
     */
    getFoldersByID(id, opts) {
        return this.getFoldersByIDWithHttpInfo(id, opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }


    /**
     * @param {Array.<String>} ids
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ContentFolderResult} and HTTP response
     */
    getFoldersByIDsWithHttpInfo(ids, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'ids' is set
        if (ids === undefined || ids === null) {
            throw new Error('Missing the required parameter \'ids\' when calling getFoldersByIDs')
        }


        const pathParams = {
            ids
        }
        const queryParams = {
            levels: opts.levels,
            locale: opts.locale
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ContentFolderResult

        return this.apiClient.callApi(
            '/folders/({ids})', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * @param {Array.<String>} ids
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ContentFolderResult}
     */
    getFoldersByIDs(ids, opts) {
        return this.getFoldersByIDsWithHttpInfo(ids, opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }


}

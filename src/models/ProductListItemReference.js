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
import ProductDetailsLink from './ProductDetailsLink'
import ProductListLink from './ProductListLink'





/**
* The ProductListItemReference model module.
* @module models/ProductListItemReference
* @version 20.4
*/
export default class ProductListItemReference {
    /**
    * Constructs a new <code>ProductListItemReference</code>.
    * @alias module:models/ProductListItemReference
    * @class
    * @param id {String} The id of the product list item.
    */

    constructor(id) {





        this.id = id


    }

    /**
    * Constructs a <code>ProductListItemReference</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductListItemReference} obj Optional instance to populate.
    * @return {module:models/ProductListItemReference} The populated <code>ProductListItemReference</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductListItemReference()





            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('priority')) {
                obj.priority = ApiClient.convertToType(data.priority, 'Number')
            }
            if (data.hasOwnProperty('product_details_link')) {
                obj.product_details_link = ProductDetailsLink.constructFromObject(data.product_details_link)
            }
            if (data.hasOwnProperty('product_list')) {
                obj.product_list = ProductListLink.constructFromObject(data.product_list)
            }
            if (data.hasOwnProperty('public')) {
                obj.public = ApiClient.convertToType(data.public, 'Boolean')
            }
            if (data.hasOwnProperty('purchased_quantity')) {
                obj.purchased_quantity = ApiClient.convertToType(data.purchased_quantity, 'Number')
            }
            if (data.hasOwnProperty('quantity')) {
                obj.quantity = ApiClient.convertToType(data.quantity, 'Number')
            }
            if (data.hasOwnProperty('type')) {
                obj.type = ApiClient.convertToType(data.type, 'String')
            }
        }
        return obj
    }

    /**
    * The id of the product list item.
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {Number} priority
    */
    priority = undefined;
    /**
    * @member {module:models/ProductDetailsLink} product_details_link
    */
    product_details_link = undefined;
    /**
    * The link of the product list, the item is assigned
    * @member {module:models/ProductListLink} product_list
    */
    product_list = undefined;
    /**
    * @member {Boolean} public
    */
    public = undefined;
    /**
    * @member {Number} purchased_quantity
    */
    purchased_quantity = undefined;
    /**
    * @member {Number} quantity
    */
    quantity = undefined;
    /**
    * @member {module:models/ProductListItemReference.TypeEnum} type
    */
    type = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {

        /**
         * value: "product"
         * @const
         */
        product: 'product',

        /**
         * value: "gift_certificate"
         * @const
         */
        gift_certificate: 'gift_certificate'
    };



}



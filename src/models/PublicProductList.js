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
import ProductListEvent from './ProductListEvent'
import ProductListRegistrant from './ProductListRegistrant'
import ProductListShippingAddress from './ProductListShippingAddress'
import ProductSimpleLink from './ProductSimpleLink'
import PublicProductListItem from './PublicProductListItem'





/**
* The PublicProductList model module.
* @module models/PublicProductList
* @version 20.4
*/
export default class PublicProductList {
    /**
    * Constructs a new <code>PublicProductList</code>.
    * @alias module:models/PublicProductList
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>PublicProductList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PublicProductList} obj Optional instance to populate.
    * @return {module:models/PublicProductList} The populated <code>PublicProductList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicProductList()





            if (data.hasOwnProperty('co_registrant')) {
                obj.co_registrant = ProductListRegistrant.constructFromObject(data.co_registrant)
            }
            if (data.hasOwnProperty('creation_date')) {
                obj.creation_date = ApiClient.convertToType(data.creation_date, 'Date')
            }
            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('event')) {
                obj.event = ProductListEvent.constructFromObject(data.event)
            }
            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('items_link')) {
                obj.items_link = ProductSimpleLink.constructFromObject(data.items_link)
            }
            if (data.hasOwnProperty('last_modified')) {
                obj.last_modified = ApiClient.convertToType(data.last_modified, 'Date')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('product_list_items')) {
                obj.product_list_items = ApiClient.convertToType(data.product_list_items, [PublicProductListItem])
            }
            if (data.hasOwnProperty('product_list_shipping_address')) {
                obj.product_list_shipping_address = ProductListShippingAddress.constructFromObject(data.product_list_shipping_address)
            }
            if (data.hasOwnProperty('public')) {
                obj.public = ApiClient.convertToType(data.public, 'Boolean')
            }
            if (data.hasOwnProperty('registrant')) {
                obj.registrant = ProductListRegistrant.constructFromObject(data.registrant)
            }
            if (data.hasOwnProperty('type')) {
                obj.type = ApiClient.convertToType(data.type, 'String')
            }
        }
        return obj
    }

    /**
    * The coRegistrant of this product list.
    * @member {module:models/ProductListRegistrant} co_registrant
    */
    co_registrant = undefined;
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined;
    /**
    * The description of this product list.
    * @member {String} description
    */
    description = undefined;
    /**
    * The event of this product list.
    * @member {module:models/ProductListEvent} event
    */
    event = undefined;
    /**
    * The id of this product list.
    * @member {String} id
    */
    id = undefined;
    /**
    * The resource link to the items of this product list.
    * @member {module:models/ProductSimpleLink} items_link
    */
    items_link = undefined;
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined;
    /**
    * The name of this product list.
    * @member {String} name
    */
    name = undefined;
    /**
    * The product list items
    * @member {Array.<module:models/PublicProductListItem>} product_list_items
    */
    product_list_items = undefined;
    /**
    * The abbreviated shipping address of this product list representing what anonymous user can see.
    * @member {module:models/ProductListShippingAddress} product_list_shipping_address
    */
    product_list_shipping_address = undefined;
    /**
    * Indicates whether the owner made this product list available for access by other customers.
    * @member {Boolean} public
    */
    public = undefined;
    /**
    * The registrant of this product list.
    * @member {module:models/ProductListRegistrant} registrant
    */
    registrant = undefined;
    /**
    * The type of the product list.
    * @member {module:models/PublicProductList.TypeEnum} type
    */
    type = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {

        /**
         * value: "wish_list"
         * @const
         */
        wish_list: 'wish_list',

        /**
         * value: "gift_registry"
         * @const
         */
        gift_registry: 'gift_registry',

        /**
         * value: "shopping_list"
         * @const
         */
        shopping_list: 'shopping_list',

        /**
         * value: "custom_1"
         * @const
         */
        custom_1: 'custom_1',

        /**
         * value: "custom_2"
         * @const
         */
        custom_2: 'custom_2',

        /**
         * value: "custom_3"
         * @const
         */
        custom_3: 'custom_3'
    };



}



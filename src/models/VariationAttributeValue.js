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
import Image from './Image'





/**
* The VariationAttributeValue model module.
* @module models/VariationAttributeValue
* @version 20.4
*/
export default class VariationAttributeValue {
    /**
    * Constructs a new <code>VariationAttributeValue</code>.
    * Document representing a variation attribute value.
    * @alias module:models/VariationAttributeValue
    * @class
    * @param value {String} The actual variation value.
    */

    constructor(value) {





        this.value = value


    }

    /**
    * Constructs a <code>VariationAttributeValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/VariationAttributeValue} obj Optional instance to populate.
    * @return {module:models/VariationAttributeValue} The populated <code>VariationAttributeValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariationAttributeValue()





            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('image')) {
                obj.image = Image.constructFromObject(data.image)
            }
            if (data.hasOwnProperty('image_swatch')) {
                obj.image_swatch = Image.constructFromObject(data.image_swatch)
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('orderable')) {
                obj.orderable = ApiClient.convertToType(data.orderable, 'Boolean')
            }
            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
        }
        return obj
    }

    /**
    * The localized description of the variation value.
    * @member {String} description
    */
    description = undefined;
    /**
    * The first product image for the configured viewtype and this variation value.
    * @member {module:models/Image} image
    */
    image = undefined;
    /**
    * The first product image for the configured viewtype and this variation value. (typically the swatch image)
    * @member {module:models/Image} image_swatch
    */
    image_swatch = undefined;
    /**
    * The localized display name of the variation value.
    * @member {String} name
    */
    name = undefined;
    /**
    * A flag indicating whether at least one variant with this variation attribute value is available to sell.
    * @member {Boolean} orderable
    */
    orderable = undefined;
    /**
    * The actual variation value.
    * @member {String} value
    */
    value = undefined;








}



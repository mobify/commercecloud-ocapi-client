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
import PriceAdjustmentLimit from './PriceAdjustmentLimit'





/**
* The PriceAdjustmentLimits model module.
* @module models/PriceAdjustmentLimits
* @version 20.4
*/
export default class PriceAdjustmentLimits {
    /**
    * Constructs a new <code>PriceAdjustmentLimits</code>.
    * Document representing a list of PriceAdjustmentLimit items.  It returns all the price adjustment limits for a particular user  across various Access Roles.
    * @alias module:models/PriceAdjustmentLimits
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>PriceAdjustmentLimits</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PriceAdjustmentLimits} obj Optional instance to populate.
    * @return {module:models/PriceAdjustmentLimits} The populated <code>PriceAdjustmentLimits</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAdjustmentLimits()





            if (data.hasOwnProperty('limits')) {
                obj.limits = ApiClient.convertToType(data.limits, [PriceAdjustmentLimit])
            }
        }
        return obj
    }

    /**
    * The list of price adjustment limits applicable for a user across all roles.
    * @member {Array.<module:models/PriceAdjustmentLimit>} limits
    */
    limits = undefined;








}



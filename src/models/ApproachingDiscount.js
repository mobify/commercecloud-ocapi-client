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
import Discount from './Discount'
import PromotionLink from './PromotionLink'
import ShippingMethod from './ShippingMethod'





/**
* The ApproachingDiscount model module.
* @module models/ApproachingDiscount
* @version 20.4
*/
export default class ApproachingDiscount {
    /**
    * Constructs a new <code>ApproachingDiscount</code>.
    * Document representing a note to an object.
    * @alias module:models/ApproachingDiscount
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>ApproachingDiscount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ApproachingDiscount} obj Optional instance to populate.
    * @return {module:models/ApproachingDiscount} The populated <code>ApproachingDiscount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApproachingDiscount()





            if (data.hasOwnProperty('condition_threshold')) {
                obj.condition_threshold = ApiClient.convertToType(data.condition_threshold, 'Number')
            }
            if (data.hasOwnProperty('discount')) {
                obj.discount = Discount.constructFromObject(data.discount)
            }
            if (data.hasOwnProperty('merchandise_total')) {
                obj.merchandise_total = ApiClient.convertToType(data.merchandise_total, 'Number')
            }
            if (data.hasOwnProperty('promotion_link')) {
                obj.promotion_link = PromotionLink.constructFromObject(data.promotion_link)
            }
            if (data.hasOwnProperty('shipment_id')) {
                obj.shipment_id = ApiClient.convertToType(data.shipment_id, 'String')
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj.shipping_methods = ApiClient.convertToType(data.shipping_methods, [ShippingMethod])
            }
            if (data.hasOwnProperty('type')) {
                obj.type = ApiClient.convertToType(data.type, 'String')
            }
        }
        return obj
    }

    /**
    * The total amount needed to receive the discount.
    * @member {Number} condition_threshold
    */
    condition_threshold = undefined;
    /**
    * The discount the customer can receive if eligible.
    * @member {module:models/Discount} discount
    */
    discount = undefined;
    /**
    * The amount the customer basket contributes towards the purchase condition.
    * @member {Number} merchandise_total
    */
    merchandise_total = undefined;
    /**
    * The link to details of the promotion associated with this discount.
    * @member {module:models/PromotionLink} promotion_link
    */
    promotion_link = undefined;
    /**
    * The unique id of the shipment the discount relates to.
    * @member {String} shipment_id
    */
    shipment_id = undefined;
    /**
    * The shipping methods the promotion relates to.
    * @member {Array.<module:models/ShippingMethod>} shipping_methods
    */
    shipping_methods = undefined;
    /**
    * The type of the approaching discount (\"order\" or \"shipping\").
    * @member {String} type
    */
    type = undefined;








}

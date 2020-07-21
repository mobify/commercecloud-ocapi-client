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





/**
* The OrderPaymentCardRequest model module.
* @module models/OrderPaymentCardRequest
* @version 20.4
*/
export default class OrderPaymentCardRequest {
    /**
    * Constructs a new <code>OrderPaymentCardRequest</code>.
    * Document representing an order payment card request.
    * @alias module:models/OrderPaymentCardRequest
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>OrderPaymentCardRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderPaymentCardRequest} obj Optional instance to populate.
    * @return {module:models/OrderPaymentCardRequest} The populated <code>OrderPaymentCardRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentCardRequest()





            if (data.hasOwnProperty('card_type')) {
                obj.card_type = ApiClient.convertToType(data.card_type, 'String')
            }
            if (data.hasOwnProperty('credit_card_token')) {
                obj.credit_card_token = ApiClient.convertToType(data.credit_card_token, 'String')
            }
            if (data.hasOwnProperty('expiration_month')) {
                obj.expiration_month = ApiClient.convertToType(data.expiration_month, 'Number')
            }
            if (data.hasOwnProperty('expiration_year')) {
                obj.expiration_year = ApiClient.convertToType(data.expiration_year, 'Number')
            }
            if (data.hasOwnProperty('holder')) {
                obj.holder = ApiClient.convertToType(data.holder, 'String')
            }
            if (data.hasOwnProperty('issue_number')) {
                obj.issue_number = ApiClient.convertToType(data.issue_number, 'String')
            }
            if (data.hasOwnProperty('number')) {
                obj.number = ApiClient.convertToType(data.number, 'String')
            }
            if (data.hasOwnProperty('security_code')) {
                obj.security_code = ApiClient.convertToType(data.security_code, 'String')
            }
            if (data.hasOwnProperty('valid_from_month')) {
                obj.valid_from_month = ApiClient.convertToType(data.valid_from_month, 'Number')
            }
            if (data.hasOwnProperty('valid_from_year')) {
                obj.valid_from_year = ApiClient.convertToType(data.valid_from_year, 'Number')
            }
        }
        return obj
    }

    /**
    *
    * @member {String} card_type
    */
    card_type = undefined;
    /**
    *
    * @member {String} credit_card_token
    */
    credit_card_token = undefined;
    /**
    *
    * @member {Number} expiration_month
    */
    expiration_month = undefined;
    /**
    *
    * @member {Number} expiration_year
    */
    expiration_year = undefined;
    /**
    *
    * @member {String} holder
    */
    holder = undefined;
    /**
    *
    * @member {String} issue_number
    */
    issue_number = undefined;
    /**
    *
    * @member {String} number
    */
    number = undefined;
    /**
    * The security code for the payment card.
    * @member {String} security_code
    */
    security_code = undefined;
    /**
    *
    * @member {Number} valid_from_month
    */
    valid_from_month = undefined;
    /**
    *
    * @member {Number} valid_from_year
    */
    valid_from_year = undefined;








}



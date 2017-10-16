# ShopApi.CouponItemModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The coupon code. | 
**couponItemId** | **String** | The coupon item id. | [optional] 
**statusCode** | **String** | The status of the coupon item. | [optional] 
**valid** | **Boolean** | A flag indicating whether the coupon item is valid. A coupon line item is valid if  the status code is &#39;applied&#39; or &#39;no_applicable_promotion&#39;. | [optional] 


<a name="StatusCodeEnum"></a>
## Enum: StatusCodeEnum


* `coupon_code_already_in_basket` (value: `"coupon_code_already_in_basket"`)

* `coupon_code_already_redeemed` (value: `"coupon_code_already_redeemed"`)

* `coupon_code_unknown` (value: `"coupon_code_unknown"`)

* `coupon_disabled` (value: `"coupon_disabled"`)

* `redemption_limit_exceeded` (value: `"redemption_limit_exceeded"`)

* `customer_redemption_limit_exceeded` (value: `"customer_redemption_limit_exceeded"`)

* `timeframe_redemption_limit_exceeded` (value: `"timeframe_redemption_limit_exceeded"`)

* `no_active_promotion` (value: `"no_active_promotion"`)

* `coupon_already_in_basket` (value: `"coupon_already_in_basket"`)

* `no_applicable_promotion` (value: `"no_applicable_promotion"`)

* `applied` (value: `"applied"`)

* `adhoc` (value: `"adhoc"`)





# ShopApi.PriceAdjustmentLimitModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The value for the currency or null if no currency value is specified. | [optional] 
**currency** | **String** | Returns the currency of the Price Adjustment Limit or null if not applicable.    Will be null if this is a percent limit only.    Price adjustment limits can be given up to a fixed amount (unit&#x3D;a currency unit). | [optional] 
**percent** | **Number** | Returns percentage value of the Price Adjustment Limit or null if not applicable.    Will be null if this is a currency limit only.   | [optional] 
**type** | **String** | The Price Adjustment Limit type - ITEM, SHIPPING or ORDER. It identifies the level at which the Price Adjustment  is applicable. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `item` (value: `"item"`)

* `shipping` (value: `"shipping"`)

* `order` (value: `"order"`)





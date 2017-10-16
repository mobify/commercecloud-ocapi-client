# ShopApi.Range2FilterModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filterMode** | **String** | compare mode: overlap, containing, contained (default to \&quot;overlap\&quot;). It is optional. | [optional] 
**fromField** | **String** | The field name of the field that start the range 1. | 
**fromInclusive** | **Boolean** | A flag indicating whether the lower bound of the range is inclusive (or exclusive). The default is true (which means that the given  lower bound is inclusive). | [optional] 
**fromValue** | **Object** | The configured lower bound of the filter range. The lower bound is optional. If not given, the range is  open ended with respect to the lower bound. | [optional] 
**toField** | **String** | The field name of the field that end the range 1. | 
**toInclusive** | **Boolean** | A flag indicating whether the upper bound of the range is inclusive (or exclusive). The default is true (which means that the given  upper bound is inclusive). | [optional] 
**toValue** | **Object** | The configured upper bound of the filter range. The upper bound is optional. If not given, the range is  open ended with respect to the upper bound. | [optional] 


<a name="FilterModeEnum"></a>
## Enum: FilterModeEnum


* `overlap` (value: `"overlap"`)

* `containing` (value: `"containing"`)

* `contained` (value: `"contained"`)





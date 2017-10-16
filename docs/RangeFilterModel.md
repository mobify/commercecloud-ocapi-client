# ShopApi.RangeFilterModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | The search field. | 
**from** | **Object** | The configured lower bound of the filter range. The lower bound is optional. If not given, the range is  open ended with respect to the lower bound. | [optional] 
**fromInclusive** | **Boolean** | A flag indicating whether the lower bound of the range is inclusive (or exclusive). The default is true (which means that the given  lower bound is inclusive). | [optional] 
**to** | **Object** | The configured upper bound of the filter range. The upper bound is optional. If not given, the range is  open ended with respect to the upper bound. | [optional] 
**toInclusive** | **Boolean** | A flag indicating whether the upper bound of the range is inclusive (or exclusive). The default is true (which means that the given  upper bound is inclusive). | [optional] 



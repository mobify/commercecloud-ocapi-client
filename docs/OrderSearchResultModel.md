# ShopApi.OrderSearchResultModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents. | [optional] 
**data** | **[Object]** |  | [optional] 
**expand** | **[String]** | The list of expands set for the search request. Expands are optional. | [optional] 
**hits** | [**[OrderSearchHitModel]**](OrderSearchHitModel.md) | The sorted array of search hits. This array can be empty. | [optional] 
**next** | [**ResultPageModel**](ResultPageModel.md) | The data that can be used (as parameters on the search request) to retrieve the next result page. | [optional] 
**previous** | [**ResultPageModel**](ResultPageModel.md) | The data that can be used to retrieve the previous result page (as parameters on the search request). | [optional] 
**query** | [**QueryModel**](QueryModel.md) | The query passed into the search | [optional] 
**select** | **String** | The fields that you want to select. | [optional] 
**sorts** | [**[SortModel]**](SortModel.md) | The list of sort clauses configured for the search request. Sort clauses are optional. | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 
**total** | **Number** | The total number of documents. | [optional] 



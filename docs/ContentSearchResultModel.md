# ShopApi.ContentSearchResultModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents. | [optional] 
**data** | **[Object]** |  | [optional] 
**hits** | [**[ContentModel]**](ContentModel.md) | The sorted array of search hits. Can be empty. | [optional] 
**next** | **String** | The URL of the next result page. | [optional] 
**previous** | **String** | The URL of the previous result page. | [optional] 
**query** | **String** | The query String that was searched for. | [optional] 
**refinements** | [**[ContentSearchRefinementModel]**](ContentSearchRefinementModel.md) | The sorted array of search refinements. Can be empty. | [optional] 
**selectedRefinements** | **{String: String}** | Map of selected refinement attribute id/value(s) pairs. The sorting order is the same like in request URL. | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 
**total** | **Number** | The total number of documents. | [optional] 



# ShopApi.ProductSearchResultModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents. | [optional] 
**data** | **[Object]** |  | [optional] 
**fetchDate** | **Number** |  | [optional] 
**hits** | [**[ProductSearchHitModel]**](ProductSearchHitModel.md) | The sorted array of search hits. This array can be empty. | [optional] 
**next** | **String** | The URL of the next result page. | [optional] 
**previous** | **String** | The URL of the previous result page. | [optional] 
**query** | **String** | The query String that was searched for. | [optional] 
**refinements** | [**[ProductSearchRefinementModel]**](ProductSearchRefinementModel.md) | The sorted array of search refinements. This array can be empty. | [optional] 
**searchPhraseSuggestions** | [**SuggestionModel**](SuggestionModel.md) | The suggestion given by the system for the submitted search phrase. | [optional] 
**selectedRefinements** | **{String: String}** | A map of selected refinement attribute id/value(s) pairs. The sorting order is the same as in request URL. | [optional] 
**selectedSortingOption** | **String** | The id of the applied sorting option. | [optional] 
**sortingOptions** | [**[ProductSearchSortingOptionModel]**](ProductSearchSortingOptionModel.md) | The sorted array of search sorting options. This array can be empty. | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 
**total** | **Number** | The total number of documents. | [optional] 



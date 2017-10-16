# ShopApi.ContentSearchRefinementValueModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The localized description of the refinement value. | [optional] 
**hitCount** | **Number** | The number of search hits (0 or more) when selecting the refinement value. | [optional] 
**label** | **String** | The localized label of the refinement value. | [optional] 
**presentationId** | **String** | The optional presentation id associated with the refinement value.  The presentation id can be used, for example, to associate an id with  an HTML widget. | [optional] 
**value** | **String** | The refinement value. In the case of an attribute refinement, this is the bucket,  the attribute value, or a value range. In the case of a content folder refinement,  this is the folder id. | [optional] 
**values** | [**[ContentSearchRefinementValueModel]**](ContentSearchRefinementValueModel.md) | The array of hierarchical refinement values. This array can be empty. | [optional] 



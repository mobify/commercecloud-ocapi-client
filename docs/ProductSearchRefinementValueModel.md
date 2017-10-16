# ShopApi.ProductSearchRefinementValueModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The localized description of the refinement value. | [optional] 
**hitCount** | **Number** | The number of search hits when selecting the refinement value. Can be 0. | [optional] 
**label** | **String** | The localized label of the refinement value. | [optional] 
**presentationId** | **String** | The optional presentation id associated with the refinement value.  The presentation id can be used, for example, to associate an id with  an HTML widget. | [optional] 
**value** | **String** | The refinement value. In the case of an attribute refinement, this is the bucket,  the attribute value, or a value range. In the case of a category refinement, this is the  category id. In the case of a price refinement,k this is the price range. Ranges are  enclosed by parentheses and separated by \&quot;..\&quot;; for example, \&quot;(100..999)\&quot; and \&quot;(Aa..Fa)\&quot;  are valid ranges. | [optional] 
**values** | [**[ProductSearchRefinementValueModel]**](ProductSearchRefinementValueModel.md) | The array of hierarchical refinement values. This array can be empty. | [optional] 



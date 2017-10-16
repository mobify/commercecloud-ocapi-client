# ShopApi.ProductSearchRefinementModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeId** | **String** | The id of the search refinement attribute. In the case of an attribute refinement, this is the attribute id.  Custom attributes are marked by the prefix \&quot;c_\&quot; (for example, \&quot;c_refinementColor\&quot;). In the case of a  category refinement, the id must be \&quot;cgid\&quot;. In the case of a price refinement, the id must be \&quot;price\&quot;. | 
**label** | **String** | The localized label of the refinement. | [optional] 
**values** | [**[ProductSearchRefinementValueModel]**](ProductSearchRefinementValueModel.md) | The sorted array of refinement values. This array can be empty. | [optional] 



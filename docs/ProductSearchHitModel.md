# ShopApi.ProductSearchHitModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** | The ISO 4217 mnemonic code of the currency. | [optional] 
**image** | [**ImageModel**](ImageModel.md) | The first image of the product hit for the configured viewtype. | [optional] 
**link** | **String** | The URL addressing the product. | [optional] 
**orderable** | **Boolean** | A flag indicating whether the product is orderable. | [optional] 
**price** | **Number** | The sales price of the product. In case of complex products like master or set this is the minimum price of  related child products. | [optional] 
**priceMax** | **Number** | The maximum sales of related child products in case of complex products like master or set. | [optional] 
**prices** | **{String: Number}** | The prices map with price book ids and their values. | [optional] 
**productId** | **String** | The id (SKU) of the product. | [optional] 
**productName** | **String** | The localized name of the product. | [optional] 
**productType** | [**ProductTypeModel**](ProductTypeModel.md) | The type information for the product. | [optional] 
**variationAttributes** | [**[VariationAttributeModel]**](VariationAttributeModel.md) | The array of represented variation attributes (for the master product only). This array can be empty. | [optional] 



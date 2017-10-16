# ShopApi.InventoryModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ats** | **Number** | The ats of the product. If it is infinity, the return value is 999999. The value can be overwritten by the  OCAPI setting &#39;product.inventory.ats.max_threshold&#39;. | [optional] 
**backorderable** | **Boolean** | A flag indicating whether the product is back orderable. | [optional] 
**id** | **String** | The inventory id. | 
**inStockDate** | **Date** | A flag indicating the date when the product will be in stock. | [optional] 
**orderable** | **Boolean** | A flag indicating whether at least one of products is available to sell. | [optional] 
**preorderable** | **Boolean** | A flag indicating whether the product is pre orderable. | [optional] 
**stockLevel** | **Number** | The stock level of the product. If it is infinity, the return value is 999999. The value can be overwritten by the  OCAPI setting &#39;product.inventory.stock_level.max_threshold&#39;. | [optional] 



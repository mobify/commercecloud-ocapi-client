# ShopApi.ShippingItemModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustedTax** | **Number** | The tax of the product item after adjustments applying. | [optional] 
**basePrice** | **Number** | The base price for the line item, which is the  price of the unit before applying adjustments, in the purchase  currency. The base price may be net or gross of tax depending  on the configured taxation policy. | [optional] 
**itemId** | **String** | The item identifier. Use this to identify an item when  updating the item quantity or creating a custom price adjustment for an  item. | [optional] 
**itemText** | **String** | The text describing the item in more detail. | [optional] 
**price** | **Number** | The price of the line item before applying any adjustments. If the line item is based on net pricing  then the net price is returned. If the line item is based on gross  pricing then the gross price is returned. | [optional] 
**priceAdjustments** | [**[PriceAdjustmentModel]**](PriceAdjustmentModel.md) | Array of price adjustments. Can be empty. | [optional] 
**priceAfterItemDiscount** | **Number** | The price of the product line item after applying all product-level  adjustments. For net pricing the adjusted net price is returned. For gross pricing, the adjusted  gross price is returned. | [optional] 
**shipmentId** | **String** | The identifier of the shipment to which this item belongs. | [optional] 
**tax** | **Number** | The tax of the product item before adjustments applying. | [optional] 
**taxBasis** | **Number** | The price used to calculate the tax for this product item. | [optional] 
**taxClassId** | **String** | The tax class ID for the product item or null  if no tax class ID is associated with the product item. | [optional] 
**taxRate** | **Number** | The tax rate, which is the decimal tax rate to be applied  to the product represented by this item. | [optional] 



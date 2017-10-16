# ShopApi.ProductItemModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustedTax** | **Number** | The tax of the product item after adjustments applying. | [optional] 
**basePrice** | **Number** | The base price for the line item, which is the  price of the unit before applying adjustments, in the purchase  currency. The base price may be net or gross of tax depending  on the configured taxation policy. | [optional] 
**bonusDiscountLineItemId** | **String** | The id of the bonus discount line item this bonus product relates to. | [optional] 
**bonusProductLineItem** | **Boolean** | A flag indicating whether the product item is a bonus. | [optional] 
**bundledProductItems** | [**[ProductItemModel]**](ProductItemModel.md) | The array of bundled product items. Can be empty. | [optional] 
**cFromStoreId** | **String** | Links the store to the product line item for grouping shipments in the checkout process. | [optional] 
**gift** | **Boolean** | Returns true if the item is a gift. | [optional] 
**giftMessage** | **String** | The gift message. | [optional] 
**inventoryId** | **String** | The inventory list id associated with this item. | [optional] 
**itemId** | **String** | The item identifier. Use this to identify an item when updating the item quantity or creating a custom price  adjustment for an item. | [optional] 
**itemText** | **String** | The text describing the item in more detail. | [optional] 
**optionItems** | [**[OptionItemModel]**](OptionItemModel.md) | The array of option items. This array can be empty. | [optional] 
**price** | **Number** | The price of the line item before applying any adjustments. If the line item is based on net pricing  then the net price is returned. If the line item is based on gross  pricing then the gross price is returned. | [optional] 
**priceAdjustments** | [**[PriceAdjustmentModel]**](PriceAdjustmentModel.md) | Array of price adjustments. Can be empty. | [optional] 
**priceAfterItemDiscount** | **Number** | The price of the product line item after applying all product-level  adjustments. For net pricing the adjusted net price is returned. For gross pricing, the adjusted  gross price is returned. | [optional] 
**priceAfterOrderDiscount** | **Number** | The price of this product line item after considering all  dependent price adjustments and prorating all order-level  price adjustments. For net pricing the net price is returned. For gross  pricing, the gross price is returned. | [optional] 
**productId** | **String** |  | [optional] 
**productListItem** | [**ProductListItemReferenceModel**](ProductListItemReferenceModel.md) |  | [optional] 
**productName** | **String** | The name of the product. | [optional] 
**quantity** | **Number** | The quantity of the products represented by this item. | 
**shipmentId** | **String** | The id of the shipment which includes the product item. | [optional] 
**shippingItemId** | **String** | The reference to the related shipping item if it exists. This is the case if for example when a surcharge is  defined for individual products using a particular a shipping method. | [optional] 
**tax** | **Number** | The tax of the product item before adjustments applying. | [optional] 
**taxBasis** | **Number** | The price used to calculate the tax for this product item. | [optional] 
**taxClassId** | **String** | The tax class ID for the product item or null  if no tax class ID is associated with the product item. | [optional] 
**taxRate** | **Number** | The tax rate, which is the decimal tax rate to be applied  to the product represented by this item. | [optional] 



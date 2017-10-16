# ShopApi.ShipmentModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustedMerchandizeTotalTax** | **Number** | The products tax after discounts applying in purchase currency. Adjusted merchandize prices represent the sum of  product prices before services such as shipping have been added, but after adjustment from promotions have been  added.   Note that order level adjustments are considered if Discount Taxation preference is set to  \&quot;Tax Products and Shipping Only Based on Adjusted Price\&quot;. | [optional] 
**adjustedShippingTotalTax** | **Number** | The tax of all shipping line items of the line item container after shipping adjustments have been applied. | [optional] 
**cFromStoreId** | **String** | Used to map the shipment to a  brick and mortar store. | [optional] 
**cShipmentType** | **String** |  | [optional] 
**cStorePickupMessage** | **String** | This is text used by the end user when sending a message to the brick and mortar store about the shipment.  This is reflected in the order export. | [optional] 
**gift** | **Boolean** | A flag indicating whether the shipment is a gift. | [optional] 
**giftMessage** | **String** | The gift message. | [optional] 
**merchandizeTotalTax** | **Number** | The products total tax in purchase currency. Merchandize total prices represent the sum of product prices before  services such as shipping or adjustment from promotions have been added. | [optional] 
**productSubTotal** | **Number** | The total price of all product items after all product discounts. Depending on taxation policy the returned price  is net or gross. | [optional] 
**productTotal** | **Number** | The total price of all product items after all product and order discounts. Depending on taxation policy the  returned price is net or gross. | [optional] 
**shipmentId** | **String** | The order specific id to identify the shipment. | [optional] 
**shipmentNo** | **String** | Returns the shipment number for this shipment.   This number is automatically generated. | [optional] 
**shipmentTotal** | **Number** | The total price of the shipment, including products, shipping and tax.   Note that order level adjustments are not considered. | [optional] 
**shippingAddress** | [**OrderAddressModel**](OrderAddressModel.md) | The shipping address. | [optional] 
**shippingMethod** | [**ShippingMethodModel**](ShippingMethodModel.md) | The shipping method. | [optional] 
**shippingStatus** | **String** | The shipping status of the shipment. | [optional] 
**shippingTotal** | **Number** | The total shipping price of the shipment after all shipping discounts. Excludes tax if taxation policy is net.  Includes tax if taxation policy is gross. | [optional] 
**shippingTotalTax** | **Number** | The tax of all shipping line items of the line item container before shipping adjustments have been applied. | [optional] 
**taxTotal** | **Number** | The total tax amount of the shipment.   Note that order level adjustments are considered if Discount Taxation preference is set to  \&quot;Tax Products and Shipping Only Based on Adjusted Price\&quot;. | [optional] 
**trackingNumber** | **String** | The tracking number of the shipment. | [optional] 


<a name="ShippingStatusEnum"></a>
## Enum: ShippingStatusEnum


* `not_shipped` (value: `"not_shipped"`)

* `shipped` (value: `"shipped"`)





# ShopApi.OrderPaymentInstrumentRequestModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The payment transaction amount. | [optional] 
**bankRoutingNumber** | **String** | The bank routing number. | [optional] 
**createCustomerPaymentInstrument** | **Boolean** | A flag indicating whether a related customer payment instrument should be created. The CustomerPaymentInstrument  is only created when the OrderPaymentInstrument was authorized successfully. | [optional] 
**customerPaymentInstrumentId** | **String** | The id of a customer payment instrument. | [optional] 
**giftCertificateCode** | **String** | The gift certificate code. | [optional] 
**paymentBankAccount** | [**PaymentBankAccountRequestModel**](PaymentBankAccountRequestModel.md) | The payment bank account request data. | [optional] 
**paymentCard** | [**OrderPaymentCardRequestModel**](OrderPaymentCardRequestModel.md) | The payment card. | [optional] 
**paymentMethodId** | **String** | The payment method id. Optional if a customer payment instrument id is specified. | [optional] 



# ShopApi.PaymentCardModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardType** | **String** | The payment card type (for example, &#39;Visa&#39;). | [optional] 
**creditCardExpired** | **Boolean** | A flag indicating if the credit card is expired. | [optional] 
**creditCardToken** | **String** | A credit card token. If a credit card is tokenized, the token can be used to look up the credit card data at the  token store. | [optional] 
**expirationMonth** | **Number** | The month when the payment card expires. | [optional] 
**expirationYear** | **Number** | The year when the payment card expires. | [optional] 
**holder** | **String** | The payment card holder. | [optional] 
**issueNumber** | **String** | The payment card issue number. | [optional] 
**maskedNumber** | **String** | The masked credit card number. | [optional] 
**numberLastDigits** | **String** | The last digits of credit card number. | [optional] 
**validFromMonth** | **Number** | The payment card valid from month. | [optional] 
**validFromYear** | **Number** | The payment card valid from year. | [optional] 



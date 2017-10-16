# ShopApi.PaymentCardSpecModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardType** | **String** | The type of the payment card. | [optional] 
**checksumVerificationEnabled** | **Boolean** | A flag indicating whether the card number is verified using the Luhn checksum algorithm. | [optional] 
**description** | **String** | The localized description of the payment card. | [optional] 
**image** | **String** | The URL to the image that represents the payment card. | [optional] 
**name** | **String** | The localized name of the payment card. | [optional] 
**numberLengths** | **[String]** | The sorted list of number lengths (individual lengths as well as  length ranges). | [optional] 
**numberPrefixes** | **[String]** | The sorted list of number prefixes (individual prefixes as well  as prefix ranges). | [optional] 
**securityCodeLength** | **Number** | The length of the security code for this card. | [optional] 



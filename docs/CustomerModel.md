# ShopApi.CustomerModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[CustomerAddressModel]**](CustomerAddressModel.md) | The customer&#39;s addresses. | [optional] 
**authType** | **String** | The customer&#39;s authorization type (indicates if the customer is a guest  or a registered customer). | [optional] 
**birthday** | **Date** | The customer&#39;s birthday. | [optional] 
**cFamilyStatus** | **String** |  | [optional] 
**companyName** | **String** | The customer&#39;s company name. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] 
**customerId** | **String** | The customer&#39;s number (id). Both registered and guest customers have a  customer id. | [optional] 
**customerNo** | **String** | The customer&#39;s number (id). Only a registered customer has a customer  number. | [optional] 
**email** | **String** | The customer&#39;s email address. | [optional] 
**enabled** | **Boolean** | A flag indicating whether this customer is is enabled and can log in. | [optional] 
**fax** | **String** | The customer&#39;s fax number. The length is restricted to 32 characters. | [optional] 
**firstName** | **String** | The customer&#39;s first name. | [optional] 
**gender** | **Number** | The customer&#39;s gender. | [optional] 
**jobTitle** | **String** | The customer&#39;s job title. | [optional] 
**lastLoginTime** | **Date** | The time when the customer last logged in. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] 
**lastName** | **String** | The customer&#39;s last name. | [optional] 
**lastVisitTime** | **Date** | The time when the customer last visited. | [optional] 
**login** | **String** | The customer&#39;s login. | [optional] 
**note** | **String** | The customer&#39;s note. | [optional] 
**paymentInstruments** | [**[CustomerPaymentInstrumentModel]**](CustomerPaymentInstrumentModel.md) | The customer&#39;s payment instruments. | [optional] 
**phoneBusiness** | **String** | The customer&#39;s business phone number. | [optional] 
**phoneHome** | **String** | The customer&#39;s home phone number. | [optional] 
**phoneMobile** | **String** | The customer&#39;s mobile phone number. | [optional] 
**preferredLocale** | **String** | The customer&#39;s preferred locale. | [optional] 
**previousLoginTime** | **Date** | The time when the customer logged in previously. | [optional] 
**previousVisitTime** | **Date** | The time when the customer last visited the store. | [optional] 
**salutation** | **String** | The salutation to use for the customer. | [optional] 
**secondName** | **String** | The customer&#39;s second name. | [optional] 
**suffix** | **String** | The customer&#39;s suffix (for example, \&quot;Jr.\&quot; or \&quot;Sr.\&quot;). | [optional] 
**title** | **String** | The customer&#39;s title (for example, \&quot;Mrs\&quot; or \&quot;Mr\&quot;). | [optional] 


<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `guest` (value: `"guest"`)

* `registered` (value: `"registered"`)




<a name="GenderEnum"></a>
## Enum: GenderEnum


* `1` (value: `1`)

* `2` (value: `2`)





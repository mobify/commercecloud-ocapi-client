# Salesforce Commerce Cloud OCAPI Client

```
_______________________________________________________________________________________________________________________________________________________

                                                            /                    /                                 ,             /   ,                 
----__----__---_--_---_--_----__---)__----__----__----__---/----__-----------__-/--------__----__----__------__------------__---/--------__----__--_/_-
  /   ' /   ) / /  ) / /  ) /___) /   ) /   ' /___) /   ' /   /   ) /   /  /   /       /   ) /   ' /   )   /   ) /       /   ' /   /   /___) /   ) /   
_(___ _(___/_/_/__/_/_/__/_(___ _/_____(___ _(___ _(___ _/___(___/_(___(__(___/_______(___/_(___ _(___(___/___/_/_______(___ _/___/___(___ _/___/_(_ __
                                                                                                         /                                             
                                                                                                        /                                              
```

[![NPM](https://nodei.co/npm/commercecloud-ocapi-client.png?downloads=true&stars=true)](https://nodei.co/npm/commercecloud-ocapi-client/)

[![CircleCI](https://circleci.com/gh/mobify/commercecloud-ocapi-client.svg?style=svg)](https://circleci.com/gh/mobify/commercecloud-ocapi-client)

## Introduction

ShopApi - ES6 JavaScript client for Salesforce Commerce Cloud OCAPI Shop API.

- API version: 17.8

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install commercecloud-ocapi-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import ShopApi from 'commercecloud-ocapi-client'

ShopApi.ApiClient.instance = new ShopApi.ApiClient({
    clientUsername: 'YOUR USERNAME', // Configure HTTP basic authorization: customers_auth
    clientPassword: 'YOUR PASSWORD', // Configure HTTP basic authorization: customers_auth
    oAuthAccessToken: '' // Configure OAuth2 access token for authorization: oauth2_application
})

const api = new ShopApi.BasketsApi()

const basketId = "basketId_example" // {String} the id of the basket to be retrieved

api.deleteBasketsByID(basketId)
    .then(() {
        console.log('API called successfully.')
    })
    .catch((fault) => {
        console.error(fault)
    })

```

## Documentation for API Endpoints

- [API Docs](https://mobify.github.io/commercecloud-ocapi-client/)

## Documentation for Authorization


### client_id

- **Type**: API key
- **API key parameter name**: x-dw-client-id
- **Location**: HTTP header

### customers_auth

- **Type**: HTTP basic authentication

### oauth2_application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**:
- **Scopes**: N/A

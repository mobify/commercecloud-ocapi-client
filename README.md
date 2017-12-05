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

## 🙌 Introduction

Salesforce Commerce Cloud Open Commerce API (OCAPI) for Node and browsers.

- API version: 17.8

### ⚒ Installation

This library is distrbuted on npm, In order to add it as a dependency, run the following command:

```shell
npm install commercecloud-ocapi-client --save
```

### 🔦 Webpack Configuration

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

## 👨🏻‍💻 Getting Started

### 💡 Usage

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import ShopApi from 'commercecloud-ocapi-client'

ShopApi.ApiClient.instance = new ShopApi.ApiClient()

const api = new ShopApi.CategoriesApi()

api.getCategoriesByIDs(['mens', 'newarrivals'])
    .then(() {
        console.log('API called successfully.')
    })
    .catch((fault) => {
        console.error(fault)
    })
```


### 🔌 Configuration

The API client accepts an configuration object, example:

```js
import ShopApi from 'commercecloud-ocapi-client'

const config = {
  basePath: 'https://localhost/s/siteId/dw/shop/v17_8',
  defaultHeaders: {}, // HTTP header for all requests
  timeout: 60000, // Request timeout in milliseconds
  cache: true, // If set to false an additional timestamp parameter is added to all API GET calls to prevent browser caching
  enableCookies: false, //If set to true, the client will save the cookies from each server response, and return them in the next request.
}

ShopApi.ApiClient.instance = new ShopApi.ApiClient(config)
```

    

### 🔐 Authorization

To access secure end points, you can pass the username, password and access token in the configuration, example:

```js
import ShopApi from 'commercecloud-ocapi-client'

const config = {
  clientUsername,
  clientPassword,
  oauth2AccessToken // You need to obtain the OAuth 2.0 access token and pass it into the API client
}

ShopApi.ApiClient.instance = new ShopApi.ApiClient(config)
```

## ✅ Testing

Because Salesforce OCAPI is not public available, you need to have a running instance that you can test against. In the test folder, there is a file `config.json` that has the example configuration for your environment. Simply update the file with your instance information

Example: 
```json
{
  "clientId": "5640cc6b-f5e9-466e-9134-9853e9f9db93",
  "baseUrl": "https://localhost/s/siteId/dw/shop/v17_8"
}
```
Then run the following command:

```sh
npm test
```

## 📖 Documentation

- [API Docs](https://mobify.github.io/commercecloud-ocapi-client/)


## 👥 Owner

This project is open sourced and actively maintained by [Mobify](https://github.com/mobify).
We will make an effort to support the library, but we reserve the right to make incompatible changes when necessary.


## 🏅 Contributors

- [@jeremywiebe](https://github.com/jeremywiebeh)
- [@bendvc](https://github.com/bendvc)

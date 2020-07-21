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

- API version: 20.4

### ⚒ Installation

This library is distributed on npm, in order to add it as a dependency, run the following command:

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
  overrideHttpPut: true // If set to true, any methods specified as using http PUT will be sent using POST along the header value 'x-dw-http-method-override' set to 'PUT'.
}

ShopApi.ApiClient.instance = new ShopApi.ApiClient(config)
```



### 🔐 Authorization

To access secure end points, you can pass the username, password in the configuration, example:

```js
import ShopApi from 'commercecloud-ocapi-client'

const config = {
  clientUsername: 'username',
  clientPassword: 'password',
}

ShopApi.ApiClient.instance = new ShopApi.ApiClient(config)
```

Or to use oAuth token:

```js
import ShopApi from 'commercecloud-ocapi-client'

const config = {
  oauth2AccessToken: 'token'
}

ShopApi.ApiClient.instance = new ShopApi.ApiClient(config)
```

## ✅ Testing

Because Salesforce OCAPI is not publicly available, you need to have a running instance that you can test against. In the test folder, there is a file `config.json` that has the example configuration for your environment. Simply update the file with your instance information

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

### ♻️ Continuous Integration

We use Circle CI to protect the `develop` and `master` branch to make sure the builds follows the code style and passes all tests. For every pull request, it is required to pass ALL checks including the following tests:

- Linting: `npm run lint`
- Unit Tests: `npm run test`

## 📦 Build and Deployment

At Mobify, we practice several branching strategies, [Release Deployment](https://github.com/mobify/branching-strategy/blob/master/release-deployment.md) is a strategy for projects where feature gets bundled into a release periodically. `master` contains the code for current version, `develop` has the features that is under development and waiting to be released. For new features and bug fixes, please propose pull requests to merge into `develop`.

This package is distributed on npm, on every release, we run scripts to automatically merge `develop` into `master`, test the build in Circle CI as well as publish the package on NPM.

### Changelog

To understand the change between versions, please read [CHANGELOG.md](./CHANGELOG.md). Note that it is required to have a `# To be released` section filled out if you are planning to make pull requests that include new features or bug fixes.

Example:
```markdown
## To be released
- Update npm package to ship with three builds: `UMD`, `CommonJS` and `ES2015` [#4](https://github.com/mobify/commercecloud-ocapi-client/pull/4)

## v0.1.1 (November 7, 2017)
- Update Rollup output format to 'es'

...
```


## 📖 Documentation

- [API Docs](https://mobify.github.io/commercecloud-ocapi-client/)


## 👥 Owner

This project is open sourced and actively maintained by [Mobify](https://github.com/mobify).
We will make an effort to support the library, but we reserve the right to make incompatible changes when necessary.


## 🏅 Contributors

- [@jeremywiebe](https://github.com/jeremywiebe)
- [@bendvc](https://github.com/bendvc)
- [@kevinxh](https://github.com/kevinxh)

/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import StorageFactory from './StorageFactory'

export default class LocalStorageFactory extends StorageFactory {
    constructor() {
        if (typeof localStorage === 'undefined' || localStorage === null) {
            const {LocalStorage} = require('node-localstorage')

            super(new LocalStorage('./localStorage'))
        } else {
            super(window.localStorage)
        }
    }

    _set(key, value) {
        return this.storage.setItem(key, value)
    }

    _get(key) {
        return this.storage.getItem(key)
    }

    _delete(key) {
        return this.storage.removeItem(key)
    }
}

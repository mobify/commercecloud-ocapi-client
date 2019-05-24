/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

export default class StorageFactory {
    constructor(instance) {
        this.storage = instance
    }

    set(key, value) {
        return this._set(key, value)
    }
    _set() {
        throw new Error('StorageFactory._set undefined')
    }

    get(key) {
        return this._get(key)
    }
    _get() {
        throw new Error('StorageFactory._get undefined')
    }

    delete(key) {
        return this._delete(key)
    }
    _delete() {
        throw new Error('StorageFactory._delete undefined')
    }
}

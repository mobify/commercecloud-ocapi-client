/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import StorageFactory from './StorageFactory'

export default class MemoryStorageFactory extends StorageFactory {
    constructor() {
        super(new Map())
    }

    _set(key, value) {
        this.storage.set(key, value)
    }

    _get(key) {
        return this.storage.get(key) || null
    }

    _delete(key) {
        this.storage.delete(key)
    }
}

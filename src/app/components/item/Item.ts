//
// Created by edgar on 14/5/24 at 10:00:34.
//

export interface Item {
    name: string
    path?: string
    items?: Item[]
}

export interface Item_ {
    name: string
    path?: string
    items?: Item_[]
}

export interface Menu_ {
    name: string
    path?: string
    items?: Item_[]
}

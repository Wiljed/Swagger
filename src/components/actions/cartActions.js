export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (cartId, cartImgSrc) => {
    return {
        type: ADD_TO_CART,
        cartId,
        cartImgSrc
    }
}

export const REMOVE_ITEM = 'REMOVE_ITEM'

export const removeItem = (cartId) => {
    return {
        type: REMOVE_ITEM,
        cartId
    }
}

export const ADD_QUANTITY = 'ADD_QUANTITY'

export const addQuantity = (cartId) => {
    return {
        type: ADD_QUANTITY,
        cartId
    }
}

export const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY'

export const subtractQuantity = (cartId) => {
    return {
        type: SUBTRACT_QUANTITY,
        cartId
    }
}

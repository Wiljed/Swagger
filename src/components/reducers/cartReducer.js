import { getProduct } from '../productDataBase'
import { ADD_TO_CART, REMOVE_ITEM, SUBTRACT_QUANTITY, ADD_QUANTITY } from '../actions/cartActions'
import { isEquivalent } from '../../util/ObjectUtil'

const initState = {
    addedItems: [],
    total: 0
}

function addToCart(state, action) {
    let existingItem = state.addedItems.find(item => isEquivalent(item.cartId, action.cartId))
    if (existingItem) {
        existingItem.quantity += 1

        return {
            ...state
        }
    }
    else {
        let productFromDb = getProduct(action.cartId.productId);
        let itemToAdd = {
            cartId: action.cartId,
            image: action.cartImgSrc,
            title: productFromDb.title,
            desc: productFromDb.desc,
            price: productFromDb.price,
            quantity: 1
        }

        return {
            ...state,
            addedItems: [...state.addedItems, itemToAdd]
        }
    }
}

function removeItem(state, action) {
    let remainingItems = state.addedItems.filter(item => !isEquivalent(item.cartId, action.cartId))

    return {
        ...state,
        addedItems: remainingItems
    }
}

function addQuantity(state, action) {
    let addedItem = state.addedItems.find(item => isEquivalent(item.cartId, action.cartId))
    addedItem.quantity += 1
    return {
        ...state
    }
}

function subtractQuantity(state, action) {
    let addedItem = state.addedItems.find(item => isEquivalent(item.cartId, action.cartId))
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
        return removeItem(state, action);
    }
    else {
        addedItem.quantity -= 1
        return {
            ...state
        }
    }
}

export const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        return addToCart(state, action);
    }

    if (action.type === REMOVE_ITEM) {
        return removeItem(state, action);
    }

    if (action.type === ADD_QUANTITY) {
        return addQuantity(state, action);
    }

    if (action.type === SUBTRACT_QUANTITY) {
        return subtractQuantity(state, action);
    }

    return state
}
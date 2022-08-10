const redux = require('redux')
const { ADD_CAR, SELL_CAR, ADD_MOTO, SELL_MOTO } = require('./Actions')
const combineReducers = redux.combineReducers
const initial_state_car = {
    car_count: 5,
    car_price: 1000,
    car_income: 0
}
const initial_state_moto = {
    moto_count: 6,
    moto_price: 500,
    moto_income: 0
}
const reducer_car = (state = initial_state_car, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,
                car_count: state.car_count + 1
            }
        case SELL_CAR:
            return {
                ...state,
                car_count: state.car_count - 1,
                car_income: state.car_income + state.car_price
            }
        default: return state

    }
}
const reducer_moto = (state = initial_state_moto, action) => {
    switch (action.type) {
        case ADD_MOTO:
            return {
                ...state,
                moto_count: state.moto_count + 1

            }
        case SELL_MOTO:
            return {
                ...state,
                moto_count: state.moto_count - 1,
                moto_income: state.moto_income + state.moto_price
            }



        default:
            return state
    }
}

const reducer = combineReducers({
    car: reducer_car,
    moto: reducer_moto
})
export default reducer
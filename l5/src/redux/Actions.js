export const ADD_CAR='ADD_CAR'
export const SELL_CAR='SELL_CAR'
export const ADD_MOTO='ADD_MOTO'
export const SELL_MOTO='SELL_MOTO'

export const addCar=()=>{
    return{
        type:ADD_CAR,
        info:'One car is added to service'
    }
}
export const sellCar=()=>{
    return{
        type:SELL_CAR,
        info:'One car is sold'
    }
}
export const addMoto=()=>{
    return{
        type:ADD_MOTO,
        info:'One moto is added to service'
    }
}
export const sellMoto=()=>{
    return{
        type:SELL_MOTO,
        info:'One moto is sold'
    }
}
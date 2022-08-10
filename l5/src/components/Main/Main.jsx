import './style.css'
import React from 'react'
import { addCar, addMoto, sellCar, sellMoto } from '../../redux/Actions'
import {connect} from 'react-redux'

function Main(props){
    return(
        <div className='main-container'>
            <div className='inner-container'>
                <h2>Car Count: {props.car_count}</h2>
                <h3>Car Income: {props.car_income}</h3>
                <p>Car price: {props.car_price}</p>
                <button onClick={props.addCar}>ADD CAR</button>
                <button onClick={props.sellCar}>SELL CAR</button>
            </div>
            <div className='inner-container'>
            <h2>Moto Count: {props.moto_count}</h2>
                <h3>Moto Income: {props.moto_income}</h3>
                <p>Moto price: {props.moto_price}</p>
                <button onClick={props.addMoto}>ADD MOTO</button>
                <button onClick={props.sellMoto}>SELL MOTO</button>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        car_count:state.car.car_count,
        car_income:state.car.car_income,
        car_price:state.car.car_price, 
        moto_count:state.moto.moto_count,
        moto_price:state.moto.moto_price,
        moto_income:state.moto.moto_income
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addCar:()=>dispatch(addCar()),
        sellCar:()=>dispatch(sellCar()),
        addMoto:()=>dispatch(addMoto()),
        sellMoto:()=>dispatch(sellMoto())
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Main)
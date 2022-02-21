import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';

function Shop() {

  const dispatch = useDispatch();
  const {depositeMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div className='container my-5'>
        <h2>Deposit / Withdraw money</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(200)}}>-</button>
            Update Balance
        <button className="btn btn-primary mx-2 my-5" onClick={()=>{depositeMoney(500)}}>+</button>
    </div>
  )
}

export default Shop
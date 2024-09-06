import React from 'react'
import {useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';




function Transaction() {

const [text, setText] = useState('');

const [amount, setAmount] = useState(0);
const {addTransaction} = useContext(GlobalContext);
const onSubmit=e=>{
  e.preventDefault();
  const newTransaction={
    id:Math.floor(Math.random()*100000000),
    text,
    amount:+amount
  }
  addTransaction(newTransaction);
  // setText('');
  // setAmount(0);
}


  return (
    <div>
       <h3>Add new transaction</h3>
      <htmlForm onSubmit={onSubmit}>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{
            setText(e.target.value)
          }} placeholder="Enter text..." />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>{
            setAmount(e.target.value)
          }} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={onSubmit}>Add transaction</button >
      </htmlForm>
    </div>
  )
}

export default Transaction

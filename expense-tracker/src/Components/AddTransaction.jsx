import React from 'react'
import {useState} from 'react'



function Transaction() {
const [text, setText] = useState('');

const [amount, setAmount] = useState(0);

  return (
    <div>
       <h3>Add new transaction</h3>
      <htmlForm >
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
        <button className="btn">Add transaction</button>
      </htmlForm>
    </div>
  )
}

export default Transaction

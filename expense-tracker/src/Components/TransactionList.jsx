import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';


function TransactionList() {
  const {transactions}=useContext(GlobalContext);
  // console.log(context);

  return (
    <>
    <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=>(<li className="minus">
           {transaction.text}<span>-$400</span><button className="delete-btn">x</button>
        </li>))}
        
      </ul>
      </>
  )
}

export default TransactionList

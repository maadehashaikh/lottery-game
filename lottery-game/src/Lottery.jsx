import React, { useState } from 'react'
import { genTickt ,sum } from './helper';
import Ticket from './Ticket';

function Lottery({n =3 , winningSum=15}) {
  let [ticket,setTicket] = useState(genTickt(n));
  let isWinning = sum(ticket) === winningSum;
  let BuyTicket = () => {
    setTicket(genTickt(n));
  } 
  return (
    <>
    <h1>Lottery Game </h1>
    <Ticket ticket={ticket}/>
      <button onClick={BuyTicket}>Buy New Ticket</button>
      <h3>{isWinning ? "Congrats ! You have Won" : "Try again for Lottery"}</h3>
    </>
      
    
  )
}

export default Lottery

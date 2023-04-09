import React, { useState } from 'react'
import './board.css';

const Board = () => {

  const [board, setBoard] = useState(Array(9).fill(''));

  const [mark , setMark] = useState('X');

  const clickHandler = (index)=>{
    const square = [...board];
    square[index] = mark;

    if(board[index] === '')
    {
      if(mark === 'X'){
        setMark("O")
        setBoard(square)
      }else{
        setMark("X")
        setBoard(square)
      }
    }
    else{
      alert("You Are Not Allowed For This Block")
    }

    // Winner Function Call

    if(checkWinner(square)){
      alert(`Player Wins`);
      square.fill('');
      setBoard(square)
    }

    // Match Draw Condition Check
    if(checkDraw(square)){
      alert(`Match Tie`);
      square.fill('');
      setBoard(square);
    }
  }


  // Conditions Checked For Winner

  const checkWinner = (board)=>{
    const conditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    let flag =  false ;
    conditions.forEach((ele)=>{
      if(board[ele[0]]==='X' && board[ele[1]] ==='X' && board[ele[2]]==='X')
      {
        flag = true;
      }
      
      if(board[ele[0]]==='O' && board[ele[1]]==='O' && board[ele[2]]==='O'){
        flag = true 
      }

    })

    console.log(flag);
    return flag;
  }


  

  // Check Draw Condition

  const checkDraw = (board)=>{
    let count = 0
    board.forEach(element =>{
      if(element !== '')
      {
        count++
      } 
    });

    if(count >= 9)
    {
        return true;
    }
    else{
        return false;
    }
  }

  return (
    <table>
      <tbody>
        <tr>
          <td onClick={()=>{clickHandler(0)}}>{board[0]}</td>
          <td onClick={()=>{clickHandler(1)}}>{board[1]}</td>
          <td onClick={()=>{clickHandler(2)}}>{board[2]}</td>
        </tr>
        <tr>
          <td onClick={()=>{clickHandler(3)}}>{board[3]}</td>
          <td onClick={()=>{clickHandler(4)}}>{board[4]}</td>
          <td onClick={()=>{clickHandler(5)}}>{board[5]}</td>
        </tr>
        <tr>
          <td onClick={()=>{clickHandler(6)}}>{board[6]}</td>
          <td onClick={()=>{clickHandler(7)}}>{board[7]}</td>
          <td onClick={()=>{clickHandler(8)}}>{board[8]}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Board
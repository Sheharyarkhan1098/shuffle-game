import React, {useState} from 'react';
import {Card, Button} from "react-bootstrap";



function ReactGame() {
  const [isReady, setIsReady] = useState(false);
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState(0);
  const [imgOne, setImgOne] = useState({src: "cup.png", class: "withOutBall"});
  const [imgTwo, setImgTwo] = useState({src: "cup_ball.png", class: "withBall"});

  const handleShuffle = () => {
    setResult("")
    const ans = Math.floor(Math.random() * 10);
    console.log(ans, "ans")
    if(ans < 4){ // 0.4 win
      setAnswer(1)
    }else if ( ans > 6){  // 0.4 lose
      setAnswer(2)
    }else { // 0.2 reverse
      setAnswer(3)
    }
    setImgOne({src: "cup.png", class: "withOutBall animateOne"})
    setImgTwo({src: "cup.png", class: "withOutBall animateTwo"})
  }

  const handleSelection = (cupNumber) =>{
    console.log(answer, " ", cupNumber)
    if(answer === cupNumber){     // 0.4  win
      if(cupNumber === 1){
        setImgOne({src: "cup_ball.png", class: "withBall"})
        setImgTwo({src: "cup.png", class: "withOutBall"})
      }else{
        setImgOne({src: "cup.png", class: "withOutBall"})
        setImgTwo({src: "cup_ball.png", class: "withBall"})
      }
     setResult("You Won!!")
    }else if(answer === 3 ) {  // 0.2 reverse
      if(cupNumber !== 1){
        setImgOne({src: "cup.png", class: "withOutBall"})
        setImgTwo({src: "cup_no_ball.png", class: "withBall"})
      }else{
        setImgOne({src: "cup_no_ball.png", class: "withBall"})
        setImgTwo({src: "cup.png", class: "withOutBall"})
      }
      setResult("You Lost!!")
    }else  {                              // 0.4 Lose
      if(cupNumber === 1){    
        setImgOne({src: "cup_no_ball.png", class: "withBall"})
        setImgTwo({src: "cup.png", class: "withOutBall"})
      }else{
        setImgOne({src: "cup.png", class: "withOutBall"})
        setImgTwo({src: "cup_no_ball.png", class: "withBall"})
      }
      setResult("You Lost!!")
    }
  }

  const handleReady = () => {
    setIsReady(true)
    setImgTwo({src: "cup.png", class: "withOutBall"})
  }

  return (
    <div className='main'>
      <Card style={{maxHeight: 500, width: 500, marginTop: 50, backgroundColor: "rgba(255,255,255,.2)"}}>
        <Card.Title style={{textAlign: "center"}}><h2>Shuffle Game</h2></Card.Title>
        <Card.Title style={{textAlign: "center"}}><h2>{result}</h2></Card.Title>
      <Card.Body style={{display: 'flex', justifyContent: 'center', flexDirection: "column"}}>
        <Card.Text style={{textAlign: "center", display: 'flex', justifyContent: 'space-around', height: 220}}>
          <img onClick={result !== "" ? null : () => handleSelection(1)} src={imgOne.src}  className={imgOne.class} />
          <img onClick={result !== "" ? null : () => handleSelection(2)} src={imgTwo.src}  className={imgTwo.class} />
        </Card.Text>
        {isReady ? 
        <Button style={{backgroundColor: "orange", fontWeight: "bolder"}} onClick={handleShuffle} variant="outline">Shuffle</Button> :
        <Button style={{backgroundColor: "orange", fontWeight: "bolder"}} onClick={handleReady} variant="outline">Ready</Button> 
        }
      </Card.Body>
    </Card>
    </div>
  );
}

export default ReactGame;

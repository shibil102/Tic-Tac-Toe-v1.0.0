import React, { useState } from "react";

import Icons from "./Components/Icon";
// import toastify code here
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [cross, setCross] = useState(false);

  const [winner, setWinner] = useState("");

  const Restart = () => {
    itemArray.fill("empty", 0, 9)
    setCross (false)
    setWinner("")

  };
  const isWinner = () => {
 if(itemArray[0] === itemArray[1] && 
  itemArray[0] === itemArray[2] &&
  itemArray[0] !== "empty"){
  setWinner(`${itemArray[0]} wins`)

  } else if (itemArray[3] === itemArray[4] && 
    itemArray[4] === itemArray[5] &&
    itemArray[3] !== "empty"){
      setWinner(`${itemArray[3]} wins`)

  } else if (itemArray[6] === itemArray[7] && 
    itemArray[7] === itemArray[8] &&
    itemArray[6] !== "empty"){
      setWinner(`${itemArray[6]} wins`)

  }else if(itemArray[0] === itemArray[3] && 
    itemArray[3] === itemArray[6] &&
    itemArray[0] !== "empty"){
      setWinner(`${itemArray[0]} wins`)

  }else if(itemArray[1] === itemArray[4] && 
    itemArray[4] === itemArray[7] &&
    itemArray[1] !== "empty"){
      setWinner(`${itemArray[1]} wins`)

  }else if(itemArray[2] === itemArray[5] && 
    itemArray[5] === itemArray[8] &&
    itemArray[2] !== "empty"){
     setWinner(`${itemArray[2]} wins`)
  }else if(itemArray[0] === itemArray[4] && 
    itemArray[4] === itemArray[8] &&
    itemArray[0] !== "empty"){
     setWinner(`${itemArray[0]} wins`)

  }else if(itemArray[2] === itemArray[4] && 
    itemArray[4] === itemArray[6] &&
    itemArray[4] !== "empty"){
    setWinner(`${itemArray[2]} wins`)
  }
  };

  const changeItem = (itemNumber) => {
    if(winner){
      return toast(winner, {type : 'success'})
    }
      if (itemArray[itemNumber] === "empty") {
        itemArray[itemNumber] = cross ? "Cross":"Circle" 
        setCross(!cross)
      }
      else{
        return toast("Already filled", {type : 'error'})
      }
      isWinner()
  };
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
        {winner ? (
          <div className="mb-2 mt-2">
          <h1 className = "text-success text-uppercase text-center">{winner}</h1>
          <Button color="success"
          block 
          onClick = {Restart}>Restart</Button>
          </div>
        ):(
           <h1 className="text-center text-secondary">
           {cross ? "Cross": "Circle"} turn</h1>
        )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card className="card" onClick = {() => changeItem(index)}>
                <CardBody className="box">
                  <Icons name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <button className='reButton' onClick={Restart}>Restart</button>
    </Container>
  );
};

export default App;

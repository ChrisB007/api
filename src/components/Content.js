import React, {useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import Riddle from './Riddles';



function Content(props){

  return (
    <>
      <Row>
        <Col className="colclass" xs="12" sm="4">
          <div id="easy" className="colsdiv">
            <Riddle id="easyriddle" />
          </div>
        </Col>
        <Col className="colclass" xs="12" sm="4">
          <div id="medium" className="colsdiv">
            <Riddle id="mediumriddle" />
          </div>
        </Col>
        <Col className="colclass" xs="12" sm="4">
          <div id="hard" className="colsdiv">
            <Riddle id="hardriddle" />
          </div>
        </Col>
      </Row>
    </>
    );
  }



export default Content;

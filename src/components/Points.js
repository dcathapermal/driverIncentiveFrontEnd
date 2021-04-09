import "../styles/points.css";
import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import ReactDOM from 'react-dom';
import inc_arrow from "../images/inc_arrow.png";
import dec_arrow from "../images/dec_arrow.png";



export const PointHistoryEntry = (props) => {
  var arrow = (props.pointChange >= 0) ? inc_arrow : dec_arrow;
  
  return (
      <div class="pointHistoryEntry">
          <img src={arrow} />
          <p>
              {"Point Change: " + props.pointChange + " | " +
              "Date: " + props.date + " | " +
              "Sponsor: " + props.sponsor + " | " +
              "Reason: " + props.reason}
          </p>
      </div>
  )
}

export const PointHistory = () => {
  var tempEntryNum = 6;
  var list = [];
  
  for (var i = 0; i < tempEntryNum; i++) {
      list.push(
          <PointHistoryEntry
              pointChange="-5"
              date="March 1, 2021"
              sponsor="Truck Co."
              reason="Following speed limit." />
      );
  }
  
  return (
      <div class="pointHistory">
          <h3>Point History</h3>
          <hr />
          <div>{list}</div>
      </div>
  )
}

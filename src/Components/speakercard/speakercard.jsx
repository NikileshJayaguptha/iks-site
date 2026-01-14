import React from "react";
import "./speakercard.css";

export default function Speakercard(props) {
  return (
    <div
      className="cardwrapper"
      style={{
        flexDirection: props.direct === "right" ? "row-reverse" : "row",
      }}
    >
      <img className="speakerimg" src={props.path} alt="Speaker" />

      <div className="speakertext">
        <div className="speakername">{props.name}</div>
        <div className="speakerdesc">{props.desc}</div>
        <div className="speechtopic">
          Topic: {props.topic}
        </div>
      </div>
    </div>
  );
}

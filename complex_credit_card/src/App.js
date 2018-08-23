import React, { Component } from "react";
import "./App.css";

import Card from "./composants/card";
import Formulaire from "./composants/Formulaire";

class App extends Component {
  constructor() {
    super();
    this.state = {
      serieNumber: null,
      cardHolderName: "",
      validThru: null,
      serialWarning: "",
      holderWarning: "",
      validWarning: ""
    };
    this.formatSerialNumber = this.formatSerialNumber.bind(this);
  }

  formatSerialNumber() {
    let i = 0;
    let format = "";
    while (i < String(this.state.serieNumber).length) {
      format = format + String(this.state.serieNumber).substr(i, 4) + " ";
      i = i + 4;
    }
    return format;
  }

  formatValidThru = () => {
    return (
      String(this.state.validThru)
        .substr(0, 2)
        .padEnd(2, "x") +
      "/" +
      String(this.state.validThru)
        .substr(2)
        .padEnd(2, "y")
    );
  };

  changeSerialHandle = e => {
    console.log("ok");
    if (!Number.isInteger(Number(e.target.value))) {
      this.setState({
        serieNumber: null,
        serialWarning: "Enter only 16 numbers !!!"
      });
    } else {
      if (e.target.value.length <= 16) {
        this.setState({
          serieNumber: e.target.value.padEnd(16, "x"),
          serialWarning: ""
        });
      } else {
        e.target.value = this.state.serieNumber;
      }
    }
  };

  changeHolderHandle = e => {
    let regex = /^[a-z.\s]+$/i;
    if (!regex.test(e.target.value)) {
      this.setState({
        cardHolderName: "",
        holderWarning: "CardHolder shoud contain only characters!!!"
      });
    } else {
      if (e.target.value.length <= 20) {
        this.setState({
          cardHolderName: e.target.value,
          holderWarning: ""
        });
      } else {
        e.target.value = this.state.cardHolderName;
      }
    }
  };

  changeValidThruHandle = e => {
    let regex = /^[0-9]+$/;
    if (!regex.test(e.target.value)) {
      this.setState({
        validThru: null,
        validWarning: "Valid Thru should include only 4 numbers !!!"
      });
    } else {
      if (e.target.value.length <= 4) {
        this.setState({
          validThru: e.target.value,
          validWarning: ""
        });
      } else {
        e.target.value = this.state.validThru;
      }
    }
  };

  keyUpSerialEvent = e => {
    if (e.keyCode === 13) {
      this.holder.focus();
    }
  };

  keyUpHolderEvent = e => {
    if (e.keyCode === 13) {
      this.valid.focus();
    }
  };

  keyUpValidEvent = e => {
    if (e.keyCode === 13) {
      this.valid.blur();
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <Card
            serialNumber={
              this.state.serieNumber
                ? this.formatSerialNumber()
                : "xxxx xxxx xxxx xxxx"
            }
            holderCard={
              this.state.cardHolderName ? (
                this.state.cardHolderName
              ) : (
                <span style={{ fontSize: 20 }}>**********</span>
              )
            }
            validThru={this.state.validThru ? this.formatValidThru() : "xx/yy"}
          />
        </div>
        <div className="formulaire">
          <Formulaire
            changeSerialEvent={this.changeSerialHandle}
            changeHolderEvent={this.changeHolderHandle}
            changeValidThruEvent={this.changeValidThruHandle}
            serialRef={serie => {
              this.serial = serie;
            }}
            holderRef={holder => {
              this.holder = holder;
            }}
            validRef={valid => {
              this.valid = valid;
            }}
            keyUpSerialHandle={this.keyUpSerialEvent}
            keyUpHolderHandle={this.keyUpHolderEvent}
            keyUpValidHandle={this.keyUpValidEvent}
            serialWarning={this.state.serialWarning}
            holderWarning={this.state.holderWarning}
            validWarning={this.state.validWarning}
          />
        </div>
      </div>
    );
  }
}

export default App;

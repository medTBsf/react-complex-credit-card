import React from "react";
import "./Formulaire.css";

const Formulaire = props => {
  return (
    <form>
      <div>
        <label htmlFor="serie">Serial number :</label>
        <input
          type="text"
          name="serie"
          id="serie"
          placeholder="Exp : 1245689565215894"
          onChange={props.changeSerialEvent}
          ref={props.serialRef}
          onKeyUp={props.keyUpSerialHandle}
        />
        <div className="serial-warning">{props.serialWarning}</div>
      </div>
      <div>
        <label htmlFor="holder">Card Holder :</label>
        <input
          type="text"
          name="holder"
          id="holder"
          placeholder="Exp : Med Taieb Bsf"
          onChange={props.changeHolderEvent}
          ref={props.holderRef}
          onKeyUp={props.keyUpHolderHandle}
        />
        <div className="holder-warning">{props.holderWarning}</div>
      </div>
      <div>
        <label htmlFor="thru">Valid Thru :</label>
        <input
          type="text"
          name="thru"
          id="thru"
          placeholder="Exp : 5832"
          onChange={props.changeValidThruEvent}
          ref={props.validRef}
          onKeyUp={props.keyUpValidHandle}
        />
        <div className="valid-warning">{props.validWarning}</div>
      </div>
    </form>
  );
};

export default Formulaire;

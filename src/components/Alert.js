import React from "react";

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    //to capitalize words
  return (
  <div style={{height: "50px"}}>
     {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
  </div>
  );
}
// In line 11 props.alert.type means the type of alert sent by App.js and props.alert.msg means alert message
// In line 9 the && syntax is used because initially the app has no alert to show. So the entire return() block doesn't executed initially by logical and(&&) after the calling of alert function the alert message will be shown when the initiall props will be true

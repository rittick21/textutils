import React from "react";
// import { useState } from "react";

export default function About(props) {
    // let[btnText,setText]=useState('Enable Dark Mode')
    // let [myStyle,setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    // const toggleDM=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setText('Enable Light Mode')
    //     }else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setText('Enable Dark Mode')
    //     }
    // }
    let myStyle={
      color: props.mode==="dark" ? "white":"black",
      backgroundColor: props.mode==="dark" ? "#212529":"white"
    }
  return (
    <div className="container" style={{backgroundColor: props.mode==="dark" ? "rgb(29, 14, 117)":"white"}}>
     <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <h5>About this App</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is a react based text utility app.</strong> You can modify and count your text length, character length and modify your text as per your preference. This is actual my first project in the journey of react learning.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <h5>About Developer</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>Name: </strong> Rittick Roy
            <br />
              <strong>College: </strong> RCC Institute of information and Technology
              <br />
              <strong>Stream: </strong> Computer Science and Engineering
              <br />
              <strong>Contact: </strong> 8017217452
              <br />
              <strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/rittick-roy-05a07a225/">https://www.linkedin.com/in/rittick-roy-05a07a225/</a>
              <br />
              <strong>Github: </strong> <a href="https://github.com/rittick21">https://github.com/rittick21</a>
              <br />
              <strong>Facebook: </strong> <a href="https://www.facebook.com/rittick.roy.942">https://www.facebook.com/rittick.roy.942</a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <h5>Learning Source</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             Online articles, Youtube, Code with Harry, React Official documentation, W3 School, Bootstrap.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      {/* <button onClick={toggleDM} type="button" className="btn btn-primary my-3">{btnText}</button> */}
      </div>
    </div>
  );
}

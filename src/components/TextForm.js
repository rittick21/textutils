import React, {useState} from 'react'
// importing use state hook from react, Hooks provide you the class featues without using classes. Use state returns initial var value and a function via which you can update the var value
export default function TextForm(props) {
  const [text,setText] = useState('');
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  //used to convert lowercase

  function handleUpClick(){
    // console.log("button clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  //to convert uppercase

  function handleOnChange(event){
    // console.log("On change");
    setText(event.target.value);
  }
  // it recognize the input events(mouse event, keyboard event) and set texts in textbox according to the event.target.value. If we don't use it in text area then we cannot write anything to the textbox.

  const handleCClick=()=>{
    setText("");
    props.showAlert("Removed text","success");
  }
  //to clear text

  const handleCopy=()=>{
    let newText=document.getElementById("myBox");
    newText.select(); //select method selects the entire text written in the box
    navigator.clipboard.writeText(newText.value); //this function is used to copy a text in clipboard
    document.getSelection().removeAllRanges(); // after copy task the engine deselect the text
    props.showAlert("Copied to clipboard","success");
  }
  // to copy text

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);  //Regex in JS
    setText(newText.join(" "));
    props.showAlert("Removed extra Spaces","success");
  }
  //this function removes the extra space
  
  return (
    <>
    <div className="container">
       <h2 className="mb-4">{props.heading}</h2>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark' ? 'rgb(53 55 129)':'white', color: props.mode==='dark' ? 'white': 'black'}}  id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className="btn btn-success mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>

       <button disabled={text.length===0} className="btn btn-success mx-2 my-3" onClick={handleLowClick}>Convert to Lowercase</button>

       <button disabled={text.length===0} className="btn btn-danger mx-2 my-3" onClick={handleCClick}>Clear</button>

       <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy Text</button>
       
       <button disabled={text.length===0} className="btn btn-success mx-2 my-3" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3">
    <h1>Your Text summary</h1>
    {/* split function splits the string as per your requrements */}
    {/* <p>{text.split(/\S+/).length-1} words and {text.length} characters including spaces</p>  */}
    {/* Alternative method */}
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters including spaces</p> 
    {/* use of regex */}
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <p>Number of Sentence: {text.split(/\./).length-1}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}



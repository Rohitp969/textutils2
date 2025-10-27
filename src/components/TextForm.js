import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to upper case","success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("convert to lower case","success")
  }

  const handleClearClick = () => {
    let newText = ' ';
    setText(newText);
     props.showAlert("clear to the text","success")
  }

  const handleCopy = () => {
    let textarea = document.getElementById("myBox");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
     props.showAlert("copy to the text","success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
     props.showAlert("Remove Extra Spaces","success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" 
           style={{
             backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
             color: props.mode === 'dark' ? 'white' : '#042743'
           }}>
        <h1 className="mb-3">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}>
          </textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" 
           style={{
             backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
             color: props.mode === 'dark' ? 'white' : '#042743'
           }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}

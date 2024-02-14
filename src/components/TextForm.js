import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=() =>{
        
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=() =>{
        
      let newText=text.toLowerCase();
      setText(newText);
  }
    const handleOnChange=(event) =>{
        
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("dlkwdkck");

  return (
    <>
    <div className='Container'>
  <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" onChange={handleOnChange} value={text} id="MyBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}  >Convert To UPPERCASE</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}  >Convert To lowercase</button>
    </div>
    <div className="container my-3" >
<h2>Your Text summary</h2>
<p>{text.split(" ").length} Words and {text.length} Characters</p>
<p>{0.008* text.split(" ").length} Minutes Read</p>
<h2>Preview </h2>
<p>{text}</p>
    </div>
    </>
  )
}

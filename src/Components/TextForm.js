import React,{useState} from 'react'

export default function TextForm (props) { 
    const handleToUpper=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleToLower=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    
    const [text, setText]=useState("");
    const handleClear=()=>{
        setText('');
        props.showAlert("Cleared!","success");
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#343a40' : 'white',color:props.mode==='dark'?'white' : 'black'}} onChange={handleOnChange} id="MyBox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleToUpper}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleToLower}>Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-1" style={{color: props.mode==='dark'?'white' : 'black'}}>
        <h1>Summery of Your Text</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} {text.split(/\s+/).filter((element)=>{return element.length!==0}).length>1?'Words' :'Word'} {text.length-(text.split(/\s+/).filter((element)=>{return element.length!==0}).length-1)} {text.length-(text.split(/\s+/).filter((element)=>{return element.length!==0}).length-1)>1?'Characters':'Character'}</p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Enter something in text box above to preview"}</p>
        <p>Require {0.008*text.split().filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
    </div>
    </>
    )
}

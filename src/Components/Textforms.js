import React, { useState } from 'react'


const Textforms = (props) => {

    const [text, setText] = useState("");
    const convertUp=()=>{
       // console.log(text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const convertLow=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const convertTitleCase=()=>{
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }
    const speak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
     
    }
    const handleCopy=()=>{
        let newText =document.getElementById("myBox");
        newText.select();
         
        navigator.clipboard.writeText(newText.value);
    }
    const handleExtraspace=()=>{
        let newText = text.split(/[ ]+/)
         setText(newText.join(" "))
    }
    

    const clear=()=>{
        let newText=' ';
        setText(newText);
    }
    const convertOnChange=(event)=>{
       // console.log("upperCase clicked")
        setText(event.target.value)
    }

    //
    const [myStyle,setmyStyle]=useState( {})
    const [btnText,setbtnText]=useState("Enable Dark Mode")
    const [btnStyle,setbtnStyle]=useState({})
    const toggleStyle=()=>{
        if(myStyle.color === 'white'){
            setmyStyle({
                color:'black',
                backgroundColor:'white',
            })
            setbtnStyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnText("Enable Dark Mode")
        }
        else{
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border: '1px solid white'
            })
            setbtnStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnText("Enable Light Mode")
        }
    }

    return (
        <>
        <div className='container' style={myStyle}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea style={myStyle} className="form-control" value={text} onChange={convertOnChange} id="myBox" rows="10"></textarea>
            </div>

            <button className='btn btn-primary mx-2' onClick={convertUp} >
                Convert To UpperCase
            </button>
            <button className='btn btn-primary mx-2' onClick={convertLow}>
                Convert To LowerCase
            </button>
            <button className='btn btn-primary mx-2' onClick={convertTitleCase}>
                Convert To  Title Case
            </button>
            <button className='btn btn-primary mx-2' onClick={handleExtraspace}>
                Remove Extra Space
            </button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>
                Copy
            </button>
            <button className='btn btn-primary mx-2' onClick={speak}>
                Speak
            </button>
            <button className='btn btn-primary' onClick={clear}>
                Clear Text
            </button>
            </div>
            <div className='conatiner my-3'>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(" ").length} Words & {text.length} Character
                </p>
                <p>
                    {0.008 * text.split(" ").length} Minutes Read;
                </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            <div className='container my-3'>
                <button type="button" class="btn btn-secondary" onClick={toggleStyle} style={btnStyle}>{btnText}</button>
            </div>
        </>
    )
}

export default Textforms;


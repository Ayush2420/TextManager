import React, { useState } from 'react'


const Textforms = (props) => {

    const [text, setText] = useState("");
    const convertUp=()=>{
       // console.log(text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to Uppercase","success")
    }
    const convertLow=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase","success")
    }
    const convertTitleCase=()=>{
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Coverted to Title case","success")
    }
    const speak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("wait","success")
    }
    const handleCopy=()=>{
        let newText =document.getElementById("myBox");
        newText.select();
         
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied","success")
    }
    const handleExtraspace=()=>{
        let newText = text.split(/[ ]+/)
         setText(newText.join(" "))
         props.showAlert("Optimized the Extraspace","success")
    }
    

    const clear=()=>{
        let newText=' ';
        setText(newText);
        props.showAlert("Done!","success")
    }
    const convertOnChange=(event)=>{
       // console.log("upperCase clicked")
        setText(event.target.value)
    }

    //
    const word_count=()=>{
        if(text===""){
            return 0;
        }
        let count=0;
        let arr=text.split(" ");
        for(let i=0;i<arr.length;i++){
             if(arr[i]==="" ||arr[i]===" "){
               continue;
             }
             count++;
        }
       return count;
        
    }
    const char_count=()=>{
        if(text===""){
            return 0;
        }
        let count=0;
         
        for(let i=0;i<text.length;i++){
             if(text[i]==="" ||text[i]===" "){
               continue;
             }
             count++;
        }
       return count;
        
    }
     

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?"white":"black"}} >
            <h1 >{props.heading}</h1>
            <div className="mb-3" >
                <textarea style={{backgroundColor:props.mode==='dark'?"rgb(54, 69, 79)":"white",color:props.mode==='dark'?"white":"black"}} className="form-control" value={text} onChange={convertOnChange} id="myBox" rows="10"></textarea>
            </div>

            <button className='btn btn-primary mx-2  ' onClick={convertUp} >
                Convert To UpperCase
            </button>
            <button className='btn btn-primary mx-2  ' onClick={convertLow}>
                Convert To LowerCase
            </button>
            <button className='btn btn-primary mx-2 ' onClick={convertTitleCase}>
                Convert To  Title Case
            </button>
            <button className='btn btn-primary mx-2  ' onClick={handleExtraspace}>
                Remove Extra Space
            </button>
            <button className='btn btn-primary mx-2  ' onClick={handleCopy}>
                Copy
            </button>
            <button className='btn btn-primary mx-2 my-1' onClick={speak}>
                Speak
            </button>
            <button className='btn btn-primary' onClick={clear}>
                Clear Text
            </button>
            </div>
            <div className='conatiner my-3' style={{color:props.mode==='dark'?"white":"black"}} >
                <h2>Your Text Summary</h2>
                <p>
                    {/* {text.length<=0? 0: text.split(" ").length} Words & {text.length} Character */}
                    {word_count()} Words & {char_count()} Character
                </p>
                <p>
                    {0.008 * word_count()} Minutes Read;
                </p>
                <h3>Preview</h3>
                <p>{text.length>0? text:"Enter your text in the text box above to preview it ."}</p>
            </div>
             
        </>
    )
}

export default Textforms;


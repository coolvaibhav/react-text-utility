import React,{useState} from 'react'

export default function TextForm(props) {

    console.log(props.mode);
    const [text,setText] = useState("");

    const convertToUpper = () => {
        let upper_text=text.toUpperCase();
        setText(upper_text);
        props.showAlert("Text converted to upper case",'success');
    }

    const changeMyText = (textType) => {
       if(textType==='uppercase') {
            setText(text.toUpperCase());
            props.showAlert("Text converted to upper case",'success');
        };
       if(textType==='lowercase') {
            setText(text.toLowerCase()) ;
            props.showAlert("Text is converted to lower case",'success');
        } ;
       if(textType==='clear') {
        setText('');
        props.showAlert("Text is cleared ",'success');
       };
       if(textType==='removeExtraSpace') { 
            setText(text.replace(/  +/g, ' '));
            props.showAlert("Extra Space is removed from text ",'success');
        }
       if(textType==='copy') {
        let comment=document.getElementById('commentBox');
        comment.select();
        navigator.clipboard.writeText(comment.value);
       props.showAlert("Text copied to clipboard ",'success'); 
    };
    } 

    const handleChangeEvent = (event) => {
        console.log("Text changed");
        setText(event.target.value);
    }
    /*
    const convertToLower=() =>{
        setText(text.toLowerCase());
    }
    */
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <form>
    
        <div className="mb-3">
            <textarea className="form-control" id="commentBox" value={text} onChange={handleChangeEvent} style={{backgroundColor: props.mode ==='dark' ? 'grey' : 'white', color: props.mode ==='dark' ? 'white' : '#042743' }} rows="9"> </textarea>
        </div>
        
        {/*Method 1 to call function on event :: without parameter*/} 
        <button type="button" className="btn btn-primary mx-1" onClick={convertToUpper}>Convert To Uppercase</button>

         {/*Method 2 to call function on event :: with parameter*/} 
        <button type="button" className="btn btn-primary mx-1" onClick={()=>changeMyText('uppercase')}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={()=> changeMyText('lowercase')}>Convert To Lowercase</button>

        {/*Method 3 to call function on event :: with parameter button value*/} 
        <button type="button" value='clear' className="btn btn-primary mx-1" onClick={e=> changeMyText(e.target.value)}>Clear Text</button>
        
        <button type="button" value='removeExtraSpace' className="btn btn-primary mx-1" onClick={e=> changeMyText(e.target.value)}>Remove Extra Space</button>
       

        <button type="button" value='copy' className="btn btn-primary mx-1" onClick={e=> changeMyText(e.target.value)}>Copy Text</button>

        
        </form>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark' ? 'white' : '#042743' }}>
            
                <h3>Your Text Summary</h3>
            
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{text.split(" ").length * 0.008} Minutes to read</p>
            <h4>Preview</h4>
            <pre>{text.length >0 ? text : 'Enter something  into text area to preview'}</pre>
        </div>

    </>
  )
}

import React,{useState} from 'react'



export default function TextForm(props) {
  
    const [text, setext] = useState('this is the best way to built an application');

   const  uppercase= ()=> {
         setext(text.toLocaleUpperCase());
        }
   const  lowercase= ()=> {
         setext(text.toLocaleLowerCase());
        }
   const clear= ()=> {
         setext(" ");
        }
    
    const handleChange=(event)=> {
            setext( event.target.value);
          }
    const  clearextraspaces=()=>{
     let newtext = text.replace(/\s+/g,' ').trim();//to clear extra spaces from any string okay keep grinding
        setext(newtext)
    }      

  return (
    <>
    <div className={`container text-${props.set==='dark'?'light':'dark'}`}>
     <div className="mb-3">
     <h2>Enter your text here</h2> 
     <textarea className={`form-control bg-${props.set==='dark'?'dark':'light'} text-${props.set==='dark'?'light':'dark'}`} value={text}  onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
     </div>
     <button  className="btn btn-primary mx-2" onClick={uppercase} >Convert to uppercase</button>
     <button  className="btn btn-primary mx-2" onClick={lowercase} >Convert to lowercase</button>
     <button  className="btn btn-primary mx-2" onClick={clear} >Clear text</button>
     <button  className="btn btn-primary mx-2" onClick={clearextraspaces} >Clear extra spaces</button>
     <p>{text.length}characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>

     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  )
}

import React, { useState } from 'react' //useState is a hook 

export default function TextForm(props) {
    // console.log(text);
    // setText("I am Muhammd Uzair Ishfaq");
    const handleUpClick = () => {
        // console.log("Changed Made on click!" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert('info','Converted to UpperCase')

    }
    const handlelowClick = () => {
        // console.log("Changed Made on click!" + text);
        let lowtext = text.toLowerCase();
        setText(lowtext)
        props.showAlert('warning','Converted to LowerCase')


    }
    const handleclearClick = () => {
        // console.log("Changed Made on click!" + text);
        let clear ='';
        setText(clear)
        props.showAlert('danger','Data Cleared!')


    }
    const handleOnChange = (event) => {
        // console.log("Changed Made!");

        setText(event.target.value)
    }
    const [text, setText] = useState('');

    // States---------------------------
    return (



        <>
            <div className="container">

                <div className="mb-3 container">
                    <h3 className={`my-3 form-label text-${props.mode==='dark'?'light':'dark'}`}>{props.head}</h3>
                    <textarea className="my-4 form-control" placeholder='Enter your text here!' id="mybox" rows="10" onChange={handleOnChange} value={text}></textarea>
                    <button onClick={handleUpClick} type="button" className="btn btn-primary">Capitaliz it!</button>
                    <button onClick={handlelowClick} type="button" className="btn btn-warning lowerbutton">Lower Case it!</button>
                    <button onClick={handleclearClick} type="button" className="btn btn-danger lowerbutton">Clear it!</button>

                </div>

            </div>
            <div className="container">
                <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Deatils:</h3>
                <p className={`text-${props.mode==='dark'?'light':'dark'}`}> Total Words:<span className='chardata'>{text.split(" ").length}</span>      <span className='charpara'>Total Characters:<span className='chardata'>{text.length}</span> </span> <span className='charpara'>Time Needed to Read:<span className='chardata'>{0.008 * text.split(" ").length+" Min"}</span> </span></p> 
            </div>

            <div className="container backpreviews" style={{backgroundColor:props.mode==='dark'?'white':'black',borderRadius:10}}>
                <div className="container">

                <h3 className='headpre'>Read Text</h3>
                <p  style={{paddingTop:10,paddingBottom:50,background:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white',}}>{text}</p>
                </div>
            </div>

        </>


    )
}



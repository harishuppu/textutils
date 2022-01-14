import React, { useState } from 'react';

export default function Textform(props) {
    const [Text, SetText] = useState('Enter Your Text');

    const handleonchange = (event) => {
        console.log('handled on change');
        SetText(event.target.value);

    }

    const handleupclick = () => {
        console.log('clicked on button');
        let newtext = Text.toUpperCase();
        SetText(newtext);
        props.showAlert('Text converted to Uppercase','success')
    }


    const handlelowclick = () => {
        console.log('clicked on change 2');
        let newtxt = Text.toLowerCase();
        SetText(newtxt);
        props.showAlert('Text converted to Lowercase','success')
    }

    const handleclcclick = () => {
        console.log('clicked on change 3');
        let newtxt = '';
        SetText(newtxt);
        props.showAlert('Text cleared !','success')
    }

    const handlecopy = () => {
        console.log('clicked on change 4');
        let newtxt = document.getElementById('Textarea1');
        newtxt.select();
        navigator.clipboard.writeText(newtxt.value);
        props.showAlert('Text Copied','success')
    }

    const handleextraspaces = () => {
        console.log('clicked on change 5');
        let newtxtt = Text.split(/[ ]+/);
        SetText(newtxtt.join(" "));
        props.showAlert('Extra spaces removed','success')
    }

    const handlebold=()=>{

        var target = document.getElementById("Textarea1");
        if( target.style.fontWeight === "bolder" ) {
            target.style.fontWeight = "normal";
        } else {
            target.style.fontWeight = "bolder";
        }
        props.showAlert('Text converted to bold','success')
    }

   
    return (
        <>
        
            <div className="mmmm" >
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>{props.heading}</h1>

                    <div className="my-3">

                        <textarea className="form-control border-primary" value={Text}  onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#646464' : 'white', color: props.mode === 'dark' ? '#cdd6d6' : 'black' }} id="Textarea1" rows="8"></textarea>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between " >
                        <button type="button" className="btn btn-secondary mx-3 " onClick={handleupclick} >Convert To Uppercase</button>
                        <button type="button" className="btn btn-secondary mx-3 " onClick={handlelowclick} >Convert To Lowecase</button>
                        <button type="button" className="btn btn-secondary mx-3 " onClick={handleclcclick} >Clear Text</button>
                        <button type="button" className="btn btn-secondary mx-3" onClick={handlecopy} >Copy text</button>
                        <button type="button" className="btn btn-secondary mx-3" onClick={handleextraspaces} >Remove Extra Spaces</button>
                        <button type="button" className="btn btn-secondary mx-3" onClick={handlebold} >Make Bold</button>
                    </div>
                  
                </div>
                <div className={`container my-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h2>Text Summary</h2>
                    <p>Input text contains {Text.split(" ").length} words and {Text.length} characters.</p>
                    <p>An average person can read the text in {0.008 * Text.split(" ").length} minutes</p>
                </div>
                <div className="mineee">
                    <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <h2>Preview</h2>

                        <p>{Text}</p>
                    </div>
                </div>

            </div>
            <div    className="invisible">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur molestiae facere necessitatibus velit maxime dolorem iure provident voluptas eligendi sapiente. Itaque explicabo unde sit aspernatur sunt. Aperiam facilis vel dicta!</div>
        </>

    )
}

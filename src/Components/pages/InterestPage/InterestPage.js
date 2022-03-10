import React, { useState } from "react";

const InterstPage = () => {
    const [values, setValues] = useState ( {
        all : false,
        coding : false,
        music : false,
        reading : false
    }

    );

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("values = ???")
    }
    const handleOnChange = evt => {
        console.log('evt= ', evt.target.name);
        setValues({
            ...values,
            [evt.target.name]: evt.target.checked
        })
    }

    const handleAllChange = evt => {
        setValues ({
          coding : evt.target.checked,
          music : evt.target.checked,
          reading : evt.target.checked
        })
    }
    console.log('values= ',values);
    const all = values.reading && values.music && values.coding;
    return (
        <div className="interest-page">
          <p>Choose your Interest</p>
          <form action="">
          <div>
             <input checked = { all } onChange= { handleAllChange } type="checkbox" id="all"></input>
             <label htmlFor="all">All</label>
          </div>        
          <div>
             <input name="coding" checked = {values.coding} onChange = { handleOnChange } type="checkbox" id="coding"></input>
             <label htmlFor="coding">Coding</label>
          </div>
          <div>
             <input name="music" checked = {values.music} onChange = { handleOnChange } type="checkbox" id="music"></input>
             <label htmlFor="music">Music</label> 
          </div>
          <div>
             <input name="reading" checked = {values.reading } onChange = { handleOnChange } type="checkbox" id="reading"></input>
             <label htmlFor="reading">Reading books</label>
          </div>
          <button type="submit" onClick={ handleSubmit }>Submit</button>
          </form>
        </div>
    );
};

export default InterstPage;
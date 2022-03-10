const Welcome = ({ age,name, color }) => {
    return (
        <div style={{backgroundColor: color, padding: '20px', margin: '10px'}}>
       <><h1>Name: {name} </h1><h2>Age: {age} </h2></>
        </div>   

    )
};

export default Welcome;
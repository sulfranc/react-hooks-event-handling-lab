// Code Keypad Component Here

function handleChange(){
    console.log("Entering password...")
}

function Keypad(){
    return(
        <input type="password" 
            name="keypad" 
            placeholder="Enter number"
            onChange={handleChange}
        ></input>
    )
}

export default Keypad

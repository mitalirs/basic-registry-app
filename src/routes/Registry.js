import React , { useState , useEffect} from "react";
import { Link } from "react-router-dom"

function Registry(){
    const [registryData, setRegistryData] = useState([])     //returns 1st arg: state var, and 2nd: function that updates state (prefixed with set usually)  a func
    const [textInput, setTextInput] = useState("")
    const [error , setError] = useState(false)

    //e accepts event
    const addItem = (e) => {
        e.preventDefault(); 
        if(error) return;
        
        const tempData = [...registryData]; //copy of state var registryData since state var is read-only type and can't be appended to
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    } 

    useEffect(() => {
        //effect
        if(textInput.length > 10){
            setError(true)
        }
        else {
            setError(false)
        }
        // return () => {
        //     cleanup
        // }
    }, [textInput])
    // first arg is arrow func which is triggered when side effect is triggered
    // second arg here means effect called everytime text updates

    //console.log(registryData)

    const removeItem = (index) => {
        let newData = [...registryData]
        newData.splice(index, 1)
        setRegistryData(newData)
    }
    //splice takes index and no. of items to be removed

    const editItem = (index) => {
        if(error) return
        let newData = [...registryData]
        newData[index] = textInput;
        setRegistryData(newData)
    }

    return (
        <div style = {{backgroundColor: "black", margin: "0px", paddingTop: "70px"}}>
            <h1 style = {{ color: "white", fontSize: "50px", fontFamily: "Calibri",  backgroundColor: "black", marginTop:"0px"}}>Registry </h1>
            <Link to= "/" style = {{textDecoration: "none", color: "white", fontFamily: "Calibri", textAlign: "center"}}>Click here to go to home</Link>
            <form onSubmit = {addItem}>
                <label style = {{color: "white", fontFamily: "Calibri", textAlign: "center"}}  >text input: 
                    <input type = "text" value = {textInput} onChange = {(e) => setTextInput(e.target.value)} style = {{marginTop: "40px", marginRight: "20px", color: "black", backgroundColor: "white", marginLeft: "12px"}}/>
                </label>
                <input type = "Submit" value = "Submit" style = {{color: "white", backgroundColor: "black"}}></input>
            </form>
            {error ? <span style = {{color: "red"}}>error occured</span>: null}
            {
                registryData.map((item, index) => {
                    return (
                        <ul style = {{color: "white", fontFamily: "Calibri", marginTop: "30px"}}><li key = {index} style = {{color: "white", backgroundColor: "black", fontFamily: "Calibri", marginRight: "100px"}}><div style= {{marginRight: "30px", display: "inline-block"}}>{item}</div><button style = {{color: "white", backgroundColor: "black", fontFamily: "Calibri", marginLeft: "40px"}} onClick = {() => removeItem(index)}>Remove</button>  <button style = {{color: "white", backgroundColor: "black", fontFamily: "Calibri",  marginLeft: "40px"}} onClick = {() => editItem(index)}>Update</button></li>
                        </ul>
                    )
                }
            )}
        </div>
    )
}

export default Registry;
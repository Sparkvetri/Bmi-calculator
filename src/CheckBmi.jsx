import React, { useState } from 'react'

export const CheckBmi = () => {
    const [bmi,setBmi] = useState(null);
    const [status,setStatus] = useState("normal weight")
    const [weight,setWeight] = useState();
    const [height,setHeight] = useState();
    const [error,setError] = useState("")
     
    
     
    function CalculateBmi(){
        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);

        if (isValidHeight && isValidWeight){
            const heightInMeters = height/100;
            const bmiValue = weight/(heightInMeters*heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if (bmiValue<18.5){
                setStatus("Underweight");
            } else if (bmiValue>=18.5 && bmiValue<24.9){
                setStatus("Normal Weight")
            } else if (bmiValue>=24.9 && bmiValue<29.9){
                setStatus("Over Weight");
            } else {setStatus("obeas")}
            setError("");
        } else {
            setBmi(null);
            setStatus("");
            setError("Please Enter Valid Numeric Values For Height & Weight")
        }

    }
    const ClearBmi = () =>{
        setHeight("");
        setWeight("");
        setBmi(null);
        setStatus("");
    }
   
  return (
   <> 
   <div className='container'>
    <div className="box"></div>
    <div className="data">
        <h2>Bmi Calculator</h2>
       {error && <p className='valid'>{error}</p>}
        <div className="input-container">
            <label htmlFor="height"> Enter Height in cms</label>
            <input type="text" id='height' value={height} className='bmi' placeholder='Enter Height' onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div className="input-container">
            <label htmlFor="weight"> Enter weight in kgs</label>
            <input type="text" id='weight' value={weight} className='bmi' placeholder='Enter weight' onChange={(e)=>
                setWeight(e.target.value)} />
        </div>
        <div className="btn-div">
            <button onClick={CalculateBmi}>Calculate Bmi</button>
            <button onClick={ClearBmi} id='clear-btn'>Clear</button>
           {bmi!== null &&( <div className='result'> <p>Your BMI is : {bmi}</p>
            <p>Status : {status}</p></div>)}

        </div>
    </div>
    </div>
    </>
  )
}

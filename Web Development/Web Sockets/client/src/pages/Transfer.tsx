import { useState } from "react"
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function TransferPage(){
    const [ amount, setAmount ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = function(){
        const amountToSend = {amount: amount};

        fetch('/app/api/deposit', {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(amountToSend)
        })
    }

    return (
        <div>
            <h4>Enter amount to transfer</h4>
            <input type="text" name="amount" id="" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            <button onClick={handleSubmit}>send</button>

            <div>
                <button onClick={()=> navigate('/')}>{<LuArrowLeft/>}back to Home</button>
            </div>
        </div>
    )
}
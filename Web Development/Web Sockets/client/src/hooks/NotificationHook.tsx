import { useEffect } from "react";

export default function useNotificationHook(setMessage: (message: string )=> void){
    useEffect(()=>{
        const notificationSocket = new WebSocket('ws://127.0.0.1:8000/ws/app/api/deposit_alert')

        notificationSocket.onmessage =  message => {
            const data: {data: string} = JSON.parse(message.data)
            setMessage(data.data)
        }
    }, [ ])
}
import { LuBell, LuSend, LuPlus } from "react-icons/lu"
import Toast from "../components/ui/Toast"
import { useNavigate } from "react-router-dom"

const HomePage = ({notification}: {notification: string}) => {
  const navigate = useNavigate()

  return (
    <div>
      <Toast icon={<LuBell size={16}/>} header={notification}/>
        <h1>hello world</h1>

        <div>
          <button onClick={()=> navigate("transfer")}>Transfer {<LuSend/>}</button>
          <button>Receive {<LuPlus/>}</button>
        </div>
    </div>
  )
}

export default HomePage

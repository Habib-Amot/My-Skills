import type { ReactNode } from "react"
import { LuX } from "react-icons/lu"

const Toast = ({icon, header}: {icon:ReactNode, header:string}) => {
  return (
    <div className='flex flex-col gap-2 bg-white w-80 max-w-100 h-auto px-5 py-3 rounded-sm'>
      <div className="toast-header flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-fit h-fit p-1 flex items-center justify-center rounded-full bg-black text-white">
            {icon}
          </div>
          <h3 className="font-semibold text-gray-800 uppercase text-xs">{header}</h3>
        </div>
        <LuX className="text-red-400 font-bold text-lg" size={20}/>
      </div>
      <div className="toast-body">
        <p className="text-sm">Habib Amoto Yakubu sent you $2000</p>
      </div>
    </div>
  )
}

export default Toast

// import { useState } from 'react'
import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import TransferPage from './pages/Transfer'
import useNotificationHook from './hooks/NotificationHook'
import HomePage from './pages/HomePage'


function App() {
  const [ notification, setNotification ] = useState('test')
  useNotificationHook(setNotification)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage notification={notification}/>}/>
        <Route path='transfer' element={<TransferPage/>}/>
      </Route>
    )
  )

  return <div className='bg-gray-100 py-2'>
    <RouterProvider router={router} />
  </div>
}

export default App

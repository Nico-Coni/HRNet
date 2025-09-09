import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Index } from './pages/Index.jsx'
import { EmployeeList } from './pages/EmployeeList.jsx'
import React from 'react'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: 'EmployeeList',
                element: <EmployeeList />,
            }
        ],
    }])

function App() {
    return <RouterProvider router={router} />
}

export default App
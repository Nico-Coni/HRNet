import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { PageError } from '../commun/PageError.jsx'
import { Index } from './pages/Index.jsx'
import { EmployeeList } from './pages/EmployeeList.jsx'
import React from 'react'

const router = createBrowserRouter([
    {
        path: '/',
        // errorElement: <PageError />,
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
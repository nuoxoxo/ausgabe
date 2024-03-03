// import { useState } from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';


function App() {

  // about react-router-dom
  // https://reactrouter.com/en/main/start/tutorial
  const routes: { path: string; element: JSX.Element }[] = []
  for (let i = 0; i < 1001; i++) {
    routes.push({path: '/ausgabe/' + i, element: <h1>{i}</h1>})
  }
  const router = createBrowserRouter([
    ... routes,
    // To fix : 404 on undefined routes
    {
      path: "/ausgabe/",
      element: <Dashboard />,
      loader: dashboardLoader,
      errorElement: <Error />,
    },
    {
      path: "/ausgabe/about",
      element: <h1>About</h1>,
    },
    {
      path: "/ausgabe/*",
      element: <Error />,
    },
  ]);

  return (
    <>
      <div className='App'>
        hello, world!
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App

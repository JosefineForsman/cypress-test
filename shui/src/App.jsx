import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Landning/>
  },
  {
    path: '/start',
    element: <Start/>
  },
  {
    path: '/message',
    element: <Message/>
  },
  {
    path: '/flow',
    element: <Flow/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router= { router }/>
    </>
  )
}

export default App

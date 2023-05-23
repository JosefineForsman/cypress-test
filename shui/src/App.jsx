import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Start from "./views/Start/Start";
import Message from "./views/Message/Message";
import Flow from "./views/Flow/Flow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/flow",
    element: <Flow />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

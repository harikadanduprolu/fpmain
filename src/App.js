import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Product from "./pages/Product";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <div className="App bg-light ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

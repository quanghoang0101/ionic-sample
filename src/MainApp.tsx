import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Started from "./features/started/Started"
import TodoList from "./features/todo/TodoList"

import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Started />,
  },
  {
    path: "/todos",
    element: <TodoList />,
  },
]);

const MainApp = () => {
  return (
    <RouterProvider router={router} />
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<Started />} />
    //     <Route path="/todos/" element={<TodoList />} />
    //   </Routes>
    // </HashRouter>
  )
}

export default MainApp
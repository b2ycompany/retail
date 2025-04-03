import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import { auth, db, storage } from "./fireBase/config"; // Importe os valores corretamente
import Context, { FirebaseContext, Post } from "./context/context";
// context for accessing the firebase , User details && post details

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseContext.Provider value={{ firebase: { auth, db, storage } }}>
    <Context>
      <Post>
        <RouterProvider router={router} />
      </Post>
    </Context>
  </FirebaseContext.Provider>
);
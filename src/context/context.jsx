import { createContext, useState } from "react";
import firebase from "./fireBase/config"; // Importe a instância do Firebase

// FireBase context for access the firebase config from anywher in the application
export const FirebaseContext = createContext(null);
FirebaseContext.displayName = "FireBaseContext";

// Auth context for accessing the user from anywhere
export const AuthContext = createContext(null);
AuthContext.displayName = "AuthContext";

/*
Post context for accessing the card which is clicked on home,
this can be done by passing the id also
*/
export const ProductContext = createContext(null);
ProductContext.displayName = "ProductContext";

// Follow this way to provide the context for child Components & wrap it wherever we need
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <FirebaseContext.Provider value={firebase}> {/* Forneça a instância do Firebase */}
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
};

export const Post = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null);
  return (
    <ProductContext.Provider value={{ productDetails, setProductDetails }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
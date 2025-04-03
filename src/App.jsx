import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/context";
import { FirebaseContext } from "./context/context";
import { Header, Footer } from "./components/index";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "./fireBase/config"; // Importe auth, db e storage

const App = () => {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
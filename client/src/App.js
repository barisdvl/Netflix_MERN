import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import AuthContextProvider, { AuthContext } from "./authContext/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Register />} />
            <Route path="/register" element={!user ? <Register /> : <Home />} />
            <Route path="/login" element={!user ? <Login /> : <Home />} />
            {user && (
              <>
                <Route path="/movies" element={<Home type="movies" />} />
                <Route path="/series" element={<Home type="series" />} />
                <Route path="/watch/:id" element={<Watch />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateCustomer from "./pages/CreateCustomer";
import AllCustomer from "./pages/AllCustomer";
import EditCustomer from "./pages/EditCustomer";

const App = () => {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateCustomer />} />
            <Route path="/mycustomers" element={<AllCustomer />} />
            <Route path="/edit/:id" element={<EditCustomer />} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;

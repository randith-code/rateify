import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layouts/Layout";

import Home from "./pages/Home";

const AppRouter = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRouter;

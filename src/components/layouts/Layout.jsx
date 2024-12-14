import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container className="">{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Hasil, NavbarComponent, ListCategory } from "./components/index";

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategory />
            <Col>
              <h4>Daftar Produk</h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;

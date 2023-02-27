import { Container, Row, Col,Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title pe-none">NONTON GRATIS</div>
            <div className="title pe-none">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
                <Button className="hasShadows" variant="light">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;

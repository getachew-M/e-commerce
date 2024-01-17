import { Col, Container, Row} from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footr>
      <Container>
        <Row>
            <Col py-3>
                <p>E-commerce App &copy;{currentYear}</p>
            </Col>
        </Row>
      </Container>
    </footr>
  )
}

export default Footer

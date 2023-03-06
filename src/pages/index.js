import { MyCard } from "@/Components/MyCard";
import { Jumbotron } from "@/Components/Jumbotron";
import { Topbar } from "@/Components/Topbar";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container">
      <Topbar />
      <Jumbotron />
      <Row>
        <Col lg={3}>
          <MyCard />
        </Col>
        <Col lg={3}>
          <MyCard />
        </Col>
        <Col lg={3}>
          <MyCard />
        </Col>
        <Col lg={3}>
          <MyCard />
        </Col>
      </Row>
    </div>
  );
}

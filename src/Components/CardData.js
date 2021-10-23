import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const link =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=tamil&key=AIzaSyBgjdWW4sideNciV15vjuE3ReSVN3U3qr4&maxResults=24";
function CardData() {
  const [details, setDetails] = useState([]);

  const youtubeData = () => {
    axios
      .get(`${link}`)
      .then((response) => {
        setDetails(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    youtubeData();
  }, []);

  return (
    <Container className="card-container">
      <Row>
        {details.map((e, i) => {
          return (
            <Col md={4} key={i} className="content-column">
              <Card className="mt-3 card-wrapper">
                <div className="card-head">
                  <CardImg
                    className="card-img"
                    src={e.snippet.thumbnails.medium.url}
                  />
                </div>
                <div className="card-foot">
                  <CardBody className="card-body">
                    <div className="channel-icon">
                      <img
                        src={e.snippet.thumbnails.default.url}
                        alt=""
                        className="icon-image"
                      ></img>
                    </div>
                    <div className="body-content">
                      <CardTitle className="card-title">
                        {e.snippet.title}
                      </CardTitle>
                      <CardSubtitle className="card-subtitle">
                        {e.snippet.channelTitle}
                      </CardSubtitle>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardData;

import React, { Component } from "react";
import {
  Card,
  Container,
  Row,
  Button,
  Accordion,
  Col,
  Form
} from "react-bootstrap";
import styled from "styled-components";
import baby from "../../assets/images/baby2.jpg";
import handy from "../../assets/images/handy3.jpg";
import bottle from "../../assets/images/bottle3.jpg";

const Styles = styled.div`
  h1{
    font-family: Comfortaa, Arial;
    margin-top: 25px
    margin-bottom: 25px
    text-align: center;
  }
  .radialBg{
    background-color: #003087;
    background-image: radial-gradient(circle farthest-side at center bottom, #3ed77c, #08412d 125%);
    margin-top: 0px;
  }
  .card-cust{
    background-color: rgb(250, 250, 250);
    margin-right: 20px
    margin-bottom: 20px
  }

  .btn-link{
    font-weight: 600;
    text-decoration-line: none;
    color: #3ed77c;

    &:hover {
      color: grey;
  }
}
.center{
  display: flex;
  justify-content: center;
}
.row{
  margin-right: 0px;
  margin-left: 0px;
}

.btn-primary{
  background-color: #3ed77c !important;
  border-style: none;
}

.card-header{
  background-color: white;
}

.card-body2{
  background-color: rgb(240,240,240);
}

`;

export const Home = () => {
  return (
    <Styles>
      <React.Fragment>
        <Row className="justify-content-center" style={{ paddingTop: 0 }}>
          <div>
            <Row className="justify-content-center">
              <h1>So funktioniert's</h1>
            </Row>

            <Row className="justify-content-center">
              <Card className={"card-cust"} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={baby} />
                <Card.Body>
                  <Card.Title>1) Kaufe die Artikel, die du liebst</Card.Title>
                  <Card.Text>
                    Je weniger Plastik diese im Verhältnis zu ihrem Inhalt
                    enthalten, desto mehr PlanetPoints erhälst du. <b>Bio</b>{" "}
                    und <b>Fairtrade</b> zählen extra! Tipp: Scanne den Barcode
                    eines Artikel vor dem Kauf mit unserer App, um sofort zu
                    erfahren, wie viele Punkte er dir bringt!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className={"card-cust"} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={handy} />
                <Card.Body>
                  <Card.Title>
                    2) Scanne deinen persönlichen Barcode an der Kasse...
                  </Card.Title>
                  <Card.Text>
                    ... und erhalte deine PlanetPoints. Tipp: Treue wird
                    belohnt. Dich erwartet eine Vielzahl an kleinen Belohnungen,
                    wenn du uns und unseren <b>PlanetPatrons</b> treu bleibst.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className={"card-cust"} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={bottle} />
                <Card.Body>
                  <Card.Title>
                    3) Bezahle mit deinen PlanetPoints oder spende sie, wenn du
                    magst
                  </Card.Title>
                  <Card.Text>
                    Du kannst mit deinen gesammelten PlanetPoints deine nächsten
                    Einkäufe bezahlen, oder sie an ausgewählte Umweltprojekte
                    spenden, und das dank unserer App innerhalb von wenigen
                    Sekunden.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </div>
        </Row>
        <Row
          style={{ backgroundColor: "rgb(250,250,250)" }}
          className="justify-content-center"
        >
          <h1>Unsere Vorteile</h1>
        </Row>
        <Row
          className="justify-content-center"
          style={{
            marginBottom: "50px",
            margin: 0,
            backgroundColor: "rgb(250,250,250)"
          }}
        >
          <Col md="6">
            <Accordion defaultActiveKey="1">
              <Card>
                <Card.Header className={"center"}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <h5>Weniger Plastik tut deiner Gesundheit gut</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="card-body2">
                    Plastik hat eine Vielzahl von gesundheitlichen
                    Nebenwirkungen auf den menschlichen Körper. Plastikpartikel
                    und zur Herstellung verwendete Chemikalien befinden sich in
                    unserer Atemluft und in unserem Trinkwasser. Die Folgen sind
                    Krankheiten wie Krebs, auch Fortpflanzungs- und
                    Entwicklungsstörungen können resultieren. Wusstest du, dass
                    für Frauen ein erhöhtes Risiko besteht? Im Blut von
                    schwangeren US-Amerikanerinnen wurden im Schnitt 56
                    verschiedene Industriechemikalien gefunden. Quelle:
                    Plastikatlas 2019
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className={"center"}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <h5>
                      Jeder deiner Einkäufe unterstützt fantastische
                      Umweltprojekte
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="card-body2">
                    Jeder Einkauf bei unseren PlanetPatrons bringt dir
                    PlanetPoints, mit diesen kannst du bezahlen oder sie per App
                    innerhalb von Sekunden an ausgewählte Projekte spenden.
                    Unser Versprechen: Auch wir spenden bei jeder Transaktion
                    einen kleinen Betrag an unsere Spendenpartner. So tust du
                    mit jedem Einkauf etwas Gutes.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className={"center"}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <h5>Unsere Umwelt dankt dir</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="card-body2">
                    Mikroplastik ist bereits heute an den abgelegensten Orten
                    der Welt vorzufinden und verbreitet sich immer weiter.
                    Plastik besteht meist aus fossilen Rohstoffen wie Erdöl oder
                    Gas (ca. 99%). Schätzungen ergeben, dass von den weltweit
                    mehr als 400 Millionen Tonnen Plastik, die jährlich
                    produziert werden, etwa ein Drittel in unterschiedlicher
                    Form in Böden und Binnengewässern landet. Darunter leidet
                    auch die Tierwelt. So wurde bei 95 Prozent der gestrandeten,
                    toten Eissturmvögel an der Nordsee Plastik im Magen
                    gefunden. Sie verhungern bei vollem Magen. Quelle:
                    Plastikatlas 2019{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className={"center"}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5>Mehr Datenschutz</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="card-body2">
                    Anders als Mitbewerber, werten wir deine Daten nicht zu
                    Marktforschungszwecken aus und verkaufen diese nicht an
                    Dritte. Diese Website sammelt übrigens keine Cookies.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
        {/*
        <Row className="justify-content-center">
          <h1>Jetzt für den Newsletter anmelden:</h1>
        </Row>
        <Row>
          <Col lg="3"></Col>
          <Col xs lg="3">
            <Form action="https://send.pageclip.co/I9arF21pWLc0OZJHbEh0a6h1OJRBcxc1" method="post">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control required type="email" name="email" placeholder="" />
                <Form.Text className="text-muted">
                  Wir teilen deine Email mit niemandem.
                </Form.Text>
                <Form.Label>Vorname*</Form.Label>
                <Form.Control required type="text" name="vorname" placeholder="" />
                <Form.Label>Nachname</Form.Label>
                <Form.Control type="text" name="nachname" placeholder="" />
              <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
                Anmelden
              </Button>
              <p>* Pflichtfeld</p>
              </Form.Group>
            </Form>
          </Col>
          <Col xs lg="3">
              <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B4-PNTBKejA/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version={12} style={{background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 2px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)'}}><div style={{padding: '16px'}}> <a href="https://www.instagram.com/p/B4-PNTBKejA/?utm_source=ig_embed&utm_campaign=loading" style={{background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%'}} target="_blank"> <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px'}} /> <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center'}}> <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px'}} /> <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px'}} /></div></div><div style={{padding: '19% 0'}} /> <div style={{display: 'block', height: '50px', margin: '0 auto 12px', width: '50px'}}><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" /></g></g></g></svg></div><div style={{paddingTop: '8px'}}> <div style={{color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px'}}> Sieh dir diesen Beitrag auf Instagram an</div></div><div style={{padding: '12.5% 0'}} /> <div style={{display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center'}}><div> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)'}} /> <div style={{backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px'}} /> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}} /></div><div style={{marginLeft: '8px'}}> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px'}} /> <div style={{width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)'}} /></div><div style={{marginLeft: 'auto'}}> <div style={{width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)'}} /> <div style={{backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)'}} /> <div style={{width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)'}} /></div></div></a> <p style={{margin: '8px 0 0 0', padding: '0 4px'}}> <a href="https://www.instagram.com/p/B4-PNTBKejA/?utm_source=ig_embed&utm_campaign=loading" style={{color: '#000', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none', wordWrap: 'break-word'}} target="_blank">💔Kein Tier möchte für deine Mahlzeit sterben! Es geht auch anders: www.Veganstart.de 🌱 #govegan #veggie #kuh #kalb #milch #loveallanimals #milk</a></p> <p style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Ein Beitrag geteilt von <a href="https://www.instagram.com/petadeutschland/?utm_source=ig_embed&utm_campaign=loading" style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px'}} target="_blank"> PETA Deutschland</a> (@petadeutschland) am <time style={{fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px'}} dateTime="2019-11-17T16:00:07+00:00">Nov 17, 2019 um 8:00 PST</time></p></div></blockquote>      
          </Col>
        </Row>
        */}
      </React.Fragment>
    </Styles>
  );
};

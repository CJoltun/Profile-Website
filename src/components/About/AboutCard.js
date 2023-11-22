import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nama saya <span className="purple">Shaun Patrick Hendra</span>. 
            Saya berusia <span className="purple">20</span> tahun.
            <br/>Saya <span className="purple">Cina</span>.
            Motto hidup saya adalah "<span className="purple">Hidup seperti Larry</span>".
            
            <br />
            
          <br /><h1 className="project-heading">
            <strong className="purple">Hobi: </strong>
          </h1>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mendengerkan lagu
            </li>
            <li className="about-activity">
              <ImPointRight /> Membaca buku
            </li>
            <li className="about-activity">
              <ImPointRight /> Nonton film
            </li>
            <li className="about-activity">
              <ImPointRight /> Main game
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

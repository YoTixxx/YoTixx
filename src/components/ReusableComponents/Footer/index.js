import "./Footer.scss";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

import twitter from "../../../images/twitter2.png";
import facebook from "../../../images/facebook3.png";
import instagram from "../../../images/instagram2.png";
import YoTixx from "../../../images/Yotix.png";

const Footer = () => {
  return (
    <section className="main">
      <footer className="footer">
        <div className="footer__top">
          <Container>
            <Row>
              <Column>
                <Heading>About Us</Heading>
                <FooterLink
                  href="https://react-portfolio-leeroy.herokuapp.com/"
                  target="_blank"
                >
                  Leeroy
                </FooterLink>
                <FooterLink
                  href="https://dghazi12.github.io/davidaghazi08.github.io/"
                  target="_blank"
                >
                  David
                </FooterLink>
                <FooterLink href="#">YoTixx</FooterLink>
              </Column>
              <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Tickets</FooterLink>
                <FooterLink href="#">Projects</FooterLink>
                <FooterLink href="#">Coding</FooterLink>
                <FooterLink href="#">Freelance</FooterLink>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">GitHub</FooterLink>
                <FooterLink
                  href="https://linkedin.com/in/leeroy-phili"
                  target="_blank"
                >
                  @Leeroy
                </FooterLink>
                <FooterLink
                  href="https://linkedin.com/in/davidaghazi"
                  target="_blank"
                >
                  @David
                </FooterLink>
                <FooterLink href="#">@YoTixx</FooterLink>
              </Column>
              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                  <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>Facebook</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>Instagram</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>Twitter</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>Youtube</span>
                  </i>
                </FooterLink>
              </Column>
            </Row>
          </Container>
        </div>
        <br />
        <div className="footer__bottom">
          <img src={YoTixx} className="footer__bottom__logo" />
          <p className="footer__bottom__terms">
          By continuing past this page, you agree to our
            <span className="footer__bottom__terms__agreement"> Terms of Use</span>
          </p>
          <p>© 2021 YoTixx. All rights reserved.</p>
          <div className="footer__bottom__images">
            <img
              src={facebook}
              alt="social media logo"
              className="footer-social-media"
            />
            <img
              src={instagram}
              alt="social media logo"
              className="footer-social-media"
            />
            <img
              src={twitter}
              alt="social media logo"
              className="footer-social-media"
            />
          </div>
        </div>
      </footer>
      <div className="footer__end"></div>
    </section>
  );
};

export default Footer;

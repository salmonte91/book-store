import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Box = styled.div`
    padding: 80px 60px;
    text-align: center;
    background: black;
    position: absolute;
    bottom: 0;
    min-height: 50px;
    width: 100%;
  `;

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: "500px";
    max-width: 1000px;
    margin: 0 autho;
  `;

  const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
  `;

  const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    // @media (max-width: 1000px) {
    //     grid-template-columns: repeat (auto-fill, minmax (200px, 1fr));
    // }
    //
  `;

  const FooterLink = styled.a`
    display: flex;
    color: #fff;
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: red;
      transition: 200ms ease-in;
    }
  `;

  const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
  `;

  return (
    <footer>
      <Box >
        <h1
          style={{ color: "orange", textAlign: "center", marginTop: "-50px" }}
        >
          Boom Bookstore
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink>
                Founded in 2023 by Steven Almonte, James Cero, Wolfe Edelman,
                Ben Yoon
              </FooterLink>
              <FooterLink>
                Located at 516 Main St, New York, NY 10001
              </FooterLink>
              <FooterLink>Open 7 days a week from 9am - 5pm</FooterLink>
            </Column>
            <Column>
              <Heading>Our Services</Heading>
              <FooterLink>Book for Sale</FooterLink>
              <FooterLink>Book Ratings</FooterLink>
              <FooterLink>Book Reviews</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;

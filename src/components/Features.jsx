import React from "react";
import { Stack, Container } from "@mui/material";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import pic3 from "../assets/images/delivery.jpg";

export default function Features() {
  return (
    <FeaturesWrapper>
      <div>
        <Container style={{ fontSize: "20px" }}>
          <h1>Features &</h1>
          <SpecialFont>
            <h1>Benefits</h1>
          </SpecialFont>
          <p style={{ fontSize: "16px", lineHeight: 1.5 }}>
            Your go-to for rapid delivery, ensuring your <br />
            satisfaction at the speed of light.
          </p>
        </Container>
        <Container>
          {/* {featuresData.map((data) => {
          console.log(data.icon);
          return (
            <div key={data.id}>
              {data.icon}
              {data.iconText}
            </div>
          );
        })} */}
          <IconWrapper>
            <AccessTimeIcon />
            <span>Get your delivery in 48 hours</span>
          </IconWrapper>
          <IconWrapper>
            <CurrencyExchangeIcon />
            <span>Cash on delivery available</span>
          </IconWrapper>
          <IconWrapper>
            <CalendarMonthIcon />
            <span>7-days easy return</span>
          </IconWrapper>
        </Container>
      </div>
      <ImageWrapper>
        <img src={pic3} alt="delivery-man" />
      </ImageWrapper>
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(1deg, #010142, #4f4fec);
  /* width: 100%; */
  height: auto;
  padding: 30px 30px;
  font-family: sans-serif;
  color: white;
  h1 {
    font-weight: 800;
    margin-top: 0;
    padding-top: 0;
  }

  img {
    width: 400px;
    border-radius: 50%;
    margin: 0;
  }
`;

const SpecialFont = styled.span`
  font-size: 20px;
  h1 {
    color: gold;
    font-family: sans-serif;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  outline: 5px solid white;
  width: 400px;
  border-radius: 900px;
`;

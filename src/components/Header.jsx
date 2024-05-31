import React from "react";
import NavBarr from "./NavBarr";
import NavList from "./NavList";
import { navLink } from "../constants/data";
import NavBarItems from "./NavBarItems";
import Logo from "./Logo";
import UserAction from "./UserAction";
import styled from "styled-components";
import Jumbotron from "./Jumbotron";
import { Stack } from "@mui/material";
import pic1 from "../assets/images/shopping_cart.png";
import pic2 from "../assets/images/cartoon-kid-wallmart.jpg";
import Features from "./Features";

export default function Header() {
  return (
    <HeaderWrapper>
      <NavBarr>
        <Logo />
        <NavList>
          {navLink.map((item) => {
            return (
              <NavBarItems key={item.id} href={item.href}>
                {item.navName}
              </NavBarItems>
            );
          })}
        </NavList>
        <UserAction />
      </NavBarr>
      <Jumbotron />

      <PicWrapper>
        <Stack direction="row" spacing={50} sx={{ width: "90%" }}>
          <Image src={pic1} alt="cart" />
          <Image src={pic2} alt="cartoon-kid" />
        </Stack>
      </PicWrapper>

      <Features />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  /* background-color: tomato; */
  max-width: 100%;
  height: 100vh;
`;

const PicWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
`;

const Image = styled.img`
  min-width: 20%;
  height: auto;
`;

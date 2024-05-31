import React from "react";
import styled from "styled-components";

export default function NavBarr({ children }) {
  return <NavBarContainer>{children}</NavBarContainer>;
}

const NavBarContainer = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  padding: 5px 0;
  min-width: 100%;
  margin: 0 auto;
`;

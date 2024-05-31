import React, { Children } from "react";
import styled from "styled-components";

export default function NavList({ children }) {
  return <NavContainer>{children}</NavContainer>;
}

const NavContainer = styled.ul`
  min-width: 50%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  list-style: none;
  background-color: #236fbb;
  color: white;
`;

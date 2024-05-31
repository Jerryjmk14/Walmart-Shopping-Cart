import React from "react";
import styled from "styled-components";

export default function NavBarItems({ href, children }) {
  return (
    <NavItem>
      <Navlink href={href}>{children}</Navlink>
    </NavItem>
  );
}

const NavItem = styled.li`
  display: inline;
  &:not(:first-of-type) {
    margin-left: 10%;
  }
`;

const Navlink = styled.a`
  text-decoration: none;
  color: inherit;
`;

import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoWrapper>
      <h2>WM</h2>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 20px;
  max-height: 20px;
  border: 2px solid blue;
  border-radius: 100%;
  padding: 20px;
  outline: 2px solid blue;
  margin-left: 40px;
  h2 {
    color: blue;
  }
`;

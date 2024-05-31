import React from "react";
import styled from "styled-components";

export default function ProButton({ children, variants, type }) {
  const sizes = {
    small: {
      borderRadius: "30px",
      color: "white",
      border: "none",
    },
    medium: {
      color: "blue",
      border: "2px solid blue",
    },
    large: {
      color: "white",
    },
  };

  const styles = sizes[type];

  let Component;

  if (variants === "fill") {
    Component = FillButton;
  } else {
    Component = OutLineButton;
  }

  return <Component style={styles}>{children}</Component>;
}

const BaseButton = styled.button`
  padding: 10px 25px;
  font-family: sans-serif;
  border-radius: 5px;
`;

const FillButton = styled(BaseButton)`
  background-color: blue;
`;
const OutLineButton = styled(BaseButton)`
  background-color: transparent;
`;

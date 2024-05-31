import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import { Stack, Box } from "@mui/material";
import ProButton from "./ProButton";

export default function UserAction() {
  return (
    <UsersWrapper>
      <Stack direction="row" spacing={2}>
        <SearchIcon />
        <ShoppingCartIcon />
        <ProButton variants="fill" type="small">
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LoginIcon sx={{ fontSize: "15px" }} />
            <span>Login</span>
          </Box>
        </ProButton>
      </Stack>
    </UsersWrapper>
  );
}

const UsersWrapper = styled.div`
  min-width: 15%;
`;

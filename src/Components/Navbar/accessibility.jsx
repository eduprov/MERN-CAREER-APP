import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AccessibilityContainer = styled.div`
  display: flex;
`;
const RegisterButton = styled.button`
  border: 0;
  width: 120px;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  background-color: #99d384;
  background-image: linear-gradient(to right, transparent 0%, #99d384 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #99d384;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  width: 120px;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  background-color: transparent;
  border: 1px solid #99d384;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  margin-left: 8%;

  &:hover {
    color: #fff;
    background-color: #99d384;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <Link to="/register">
        <RegisterButton>Register</RegisterButton>
      </Link>
      <Link to="/login">
        <LoginButton>Login</LoginButton>
      </Link>
    </AccessibilityContainer>
  );
}

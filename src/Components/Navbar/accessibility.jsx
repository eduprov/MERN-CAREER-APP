import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
`;
const RegisterButton = styled.button`
  border: 0;
  width:120px;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  background-color: #6aa4c4;
  background-image: linear-gradient(to right, transparent 0%, #f2b81a 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f2b81a;
  }

  &:not(:last-of-type) {
    margin-right: 6px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  width:120px;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  background-color: transparent;
  border:1px solid #6aa4c4;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
      color:#fff;
    background-color: #6aa4c4;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <RegisterButton>Register</RegisterButton>
      <LoginButton>Login</LoginButton>
    </AccessibilityContainer>
  );
}

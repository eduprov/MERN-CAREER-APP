import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

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

export function AccessibilityTwo(props) {
  const dispatch = useDispatch();

  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <AccessibilityContainer>
      <Link to="/register">
        <RegisterButton>Profile</RegisterButton>
      </Link>

        <LoginButton onClick={logoutHandler}>Logout</LoginButton>
 
    </AccessibilityContainer>
  );
}

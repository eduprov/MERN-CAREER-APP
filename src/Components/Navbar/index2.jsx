import React from "react";
import { NavLinks } from "./NavLinks";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Accessibility } from "./accessibility";
import { DeviceSize } from "../Responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { AccessibilityTwo } from "./accessibility2";
import { AccessibilityThree } from "./accessibility3";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function NavbarTwo(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const adminLogin = useSelector((state) => state.userLogin);
  const { adminInfo } = adminLogin;

  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
        <RightSection>
          {!isMobile && <AccessibilityThree />}
          {isMobile && <MobileNavLinks />}
        </RightSection>
    </NavBarContainer>
  );
}

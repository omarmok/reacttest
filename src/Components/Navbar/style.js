import styled from "styled-components";

export const StyledNavavbar = styled.div`
  background: #fff;
`;

export const NavbarUl = styled.ul``;

export const NavbarUlItems = styled.li``;
export const NavbarAnchor = styled.a`
  font-size: 14px;
  background: ${(props) => (props.active ? "#8BC34A" : " ")};
  border-radius: ${(props) => (props.active ? "5px" : " ")};
  font-weight: ${(props) => (props.active ? "600" : " ")};
  color: ${(props) => (props.active ? "#fff" : " #737171")};

  margin: 0 5px;
  &:hover {
    background: #8bc34a;
    color: #fff;
    border-radius: 5px;
  }
`;

export const Navbarbrandimg = styled.img`
  width: 50px;
  height: 50px;
`;

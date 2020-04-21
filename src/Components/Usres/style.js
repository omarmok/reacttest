import styled from "styled-components";

export const UsersContainer = styled.section`
  padding: 30px;
  margin-top: 30px;
  background: url("images/users_bg.jpg") #f5f5f5 no-repeat 10% 75% fixed;
`;

export const User = styled.div``;
export const Userbody = styled.div`
  height: 420px;
`;
export const UserName = styled.h4`
  color: red;
  font-size: 14px;
  font-weight: 600;
`;
export const UserImage = styled.img``;
export const UserTitle = styled.h5`
  font-weight: 600;
`;

export const UserDescription = styled.p`
  height: 34px;
  font-size: 12px;
  overflow: hidden;
`;

export const UserAnchor = styled.a`
  color: #fff;
  font-size: 12px;
  background: #ff5722;
  &:hover {
    color: #fff;
    background: #2196f3;
  }
`;

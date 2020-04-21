import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import {
  UsersContainer,
  //   User,
  Userbody,
  UserName,
  UserImage,
  UserTitle,
  UserDescription,
  UserAnchor,
} from "./style.js";
class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://api.npoint.io/0473f0b47d3df14c9665").then((res) => {
      this.setState({ users: res.data.users });
    });
  }

  render() {
    const { users } = this.state;

    const usercontainer = users.map((usersContent) => {
      return (
        <Col md={4} sm={12} key={usersContent.id}>
          <Userbody className="card">
            <UserImage
              className="card-img-top"
              src={usersContent.image}
              alt=""
            />
            <div className="card-body">
              <UserName className="card-title">{usersContent.name}</UserName>

              <UserTitle className="card-title">{usersContent.title}</UserTitle>
              <UserDescription className="card-text">
                {usersContent.description}
              </UserDescription>
              <UserAnchor href="{sliderimage.link}" className="btn ">
                التفاصيل
              </UserAnchor>
            </div>
          </Userbody>
        </Col>
      );
    });

    return (
      <UsersContainer id="users">
        <Container fluid>
          <Row className="row align-items-stretch">{usercontainer}</Row>
        </Container>
      </UsersContainer>
    );
  }
}

export default Users;

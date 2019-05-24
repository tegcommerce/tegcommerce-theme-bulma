import React from 'react';
import Logo from '../../assets/images/teg_logo_1.png';
import Search from "../search/search";

import { Navbar, Container, Control, Icon, Field } from "rbx";
import { FaShoppingCart, FaUserAlt, FaHeart } from 'react-icons/fa';

import "../../styles/header.scss";

const Header = () => (
    <Navbar className="is-spaced" fixed="top" color="white">
        <Container>
          <Navbar.Brand align="start">
            <Navbar.Item href="/">
              <img
                src={Logo}
                alt="tegcommerce"
                width="202"
                height="78"
              />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu align="end">
            <Navbar.Segment align="end">
              <Navbar.Item as="div">
                  <Search/>
              </Navbar.Item>
            </Navbar.Segment>
            <Navbar.Segment align="end">
              <Navbar.Item as="div">
                <Field kind="group" >
                  <Control className="iconSpaced" as="a" href="/login" className="userName">
                    <Icon size="medium" color="dark">
                      <FaUserAlt size="lg" />
                    </Icon>
                  </Control>
                  <Control className="iconSpaced" as="a">
                    <Icon size="medium" color="dark">
                      <FaShoppingCart size="lg" />
                    </Icon>
                  </Control>
                  <Control className="iconSpaced" as="a">
                    <Icon size="medium" color="dark">
                      <FaHeart size="lg" />
                    </Icon>
                  </Control>
                </Field>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Container>
    </Navbar>
);

export default Header;
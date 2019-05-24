import React, { Component } from 'react';
import { Footer, Column, Icon } from 'rbx';
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

class FooterF extends Component {
    render() {
        return (
            <Footer>
                <Column.Group size="one-third">
                    <Column size={3} textAlign="left">
                        <span><strong>tegcommerce</strong></span>
                        <br />
                        <span>Rua Prof. Alcantra, 919</span>
                        <br />
                        <span>04546-003 - São Paulo - SP</span>
                    </Column>
                    <Column size={6} textAlign="centered">
                        <span class="mt-3">&copy; Copyright 2019 - Lorem ipsum dolor sit amet.</span>
                    </Column>
                    <Column size={3} textAlign="right">
                        <Icon size="medium">
                            <FaFacebookSquare size="lg"/>
                        </Icon>
                        <Icon size="medium">
                            <FaTwitterSquare size="lg"/>
                        </Icon>
                        <Icon size="medium">
                            <FaGithubSquare size="lg"/>
                        </Icon>
                    </Column>
                </Column.Group>
            </Footer>
            
        )
    }
}

export default FooterF;
import React, { Link } from 'react';

import { Button, Box, Control, Field, Input, Icon, Column, Label} from "rbx";
import {FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';

import '../../styles/user.scss';

const User = () => (
    <Column className="user-app">
        <Box>
            <h2>Entre com sua conta</h2>
            <p>
                <span>Basta acessar com seu e-mail e senha cadastrados</span>
            </p>
            <br />
            <Field vertical>
                <Field.Label>
                    <Label alignText="left">E-mail:</Label>
                </Field.Label>
                <Field.Body>
                    <Control iconLeft iconRight>
                        <Input type="email" placeholder="Email" size="large" />
                        <Icon align="left">
                            <FaEnvelope />
                        </Icon>
                        <Icon align="right">
                        <FaCheck />
                        </Icon>
                    </Control>
                </Field.Body>
            </Field>
            <Field vertical>
                <Field.Label>
                    <Label>Senha:</Label>
                </Field.Label>
                <Field.Body>
                    <Control iconLeft>
                        <Input type="password" placeholder="Password" size="large" />
                        <Icon align="left">
                            <FaLock />
                        </Icon>
                    </Control>
                </Field.Body>
            </Field>
            <a>Esqueceu sua senha?</a>
            <br />
            <br />
            <Button fullwidth size="large" color="link">
                Login
            </Button>
        </Box>
        <div>
            <h6>
                <span>Não possui uma conta?</span>
            </h6>
            <a id="create-account-link" href="/user/register">
                <span>Criar conta</span>
            </a>
        </div>
    </Column>
);

export default User;
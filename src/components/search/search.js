import React, { Component } from 'react';
import { Field, Control, Input, Icon, Button } from 'rbx';
import { FaSearch } from 'react-icons/fa'

import "../../styles/search.scss";


class Search extends Component {
    render() {
        return (
            <Field.Body horizontal>
                <Field kind="addons" className="search">
                    <Control iconLeft>
                        <Input placeholder="O que você deseja encontrar?" size="medium" type="text" />
                        <Icon>
                            <FaSearch/>
                        </Icon>
                    </Control>
                    <Control>
                        <Button size="medium" color="link">
                            <b>Pesquisar</b>
                        </Button>
                    </Control>
                </Field>
            </Field.Body>
        )
    }
}

export default Search;
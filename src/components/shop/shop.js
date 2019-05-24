import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Column, Icon, Container, Image } from 'rbx';
import {Link} from "react-router-dom";

import "../../styles/shop.scss";

const Shop = (props) => (
    <Column size="one-fifth" id="shop">
        <Link key={props.id}>
            <Container>
                <Image.Container className="is-square">
                    <Image src={props.image_url} alt="new" />
                </Image.Container>
                <Container className="">
                    <h2 class="has-text-custom-grey">{props.name}</h2>
                </Container>
                <Icon size="medium" color="warning">
                    <FaStar/>
                </Icon>
                <span class="has-text-warning hast-text-weight-bold">{props.rate}</span>
                <h2 class="title has-text-weight-bold">R${props.price}</h2>
            </Container>
        </Link>
</Column>
);

export default Shop;
import React, { Component } from 'react';
import { Column } from "rbx";

import Shop from './shop';

class ShopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopitems: [
            /*{
                'id': 1,
                'name': 'Moletom Cartebin Vinho',
                'price': '48,95',
                'image_url': 'http://www.mirrorfashion.net/moletom_abercrombie_vinho.jpg',
                'rate': '4.8',
                'category': 'Moletom'
            },
            {
                'id': 2,
                'name': 'Camiseta Warriors',
                'price': '57,00',
                'image_url': 'http://www.mirrorfashion.net/foto_2.jpg',
                'rate': '5',
                'category': 'Camiseta'
            },
            {
                'id': 3,
                'name': 'Camiseta Abercrombie AF',
                'price': '68,00',
                'image_url': 'http://www.mirrorfashion.net/foto_3.jpg',
                'rate': '4.5',
                'category': 'Camiseta'
            },
            {
                'id': 4,
                'name': 'Camiseta BN',
                'price': '110,00',
                'image_url': 'http://www.mirrorfashion.net/foto_4.jpg',
                'rate': '3.8',
                'category': 'Camiseta'
            },
            {
                'id': 5,
                'name': 'Polo Total White',
                'price': '100,00',
                'image_url': 'http://www.mirrorfashion.net/foto_6.jpg',
                'rate': '4.6',
                'category': 'Polo'
            },
            {
                'id': 6,
                'name': 'Camiseta Warriors',
                'price': '57,00',
                'image_url': 'http://www.mirrorfashion.net/foto_2.jpg',
                'rate': '5',
                'category': 'Camiseta'
            },
            {
                'id': 7,
                'name': 'Camiseta Abercrombie AF',
                'price': '68,00',
                'image_url': 'http://www.mirrorfashion.net/foto_3.jpg',
                'rate': '4.5',
                'category': 'Camiseta'
            },
            {
                'id': 8,
                'name': 'Camiseta BN',
                'price': '110,00',
                'image_url': 'http://www.mirrorfashion.net/foto_4.jpg',
                'rate': '3.8',
                'category': 'Camiseta'
            },
            {
                'id': 9,
                'name': 'Polo Total White',
                'price': '100,00',
                'image_url': 'http://www.mirrorfashion.net/foto_6.jpg',
                'rate': '4.6',
                'category': 'Polo'
            }*/
        ]
        }
    } 
    render() {
        return (
            <div className={'restaurants-list'}>
                <h2 className={'title is-size-4'}>Destaques</h2>

                <Column.Group multiline gapSize={2}>
                {this.state.shopitems.map(shopitems => {
                        return <Shop {...shopitems} />
                    })}
                </Column.Group>
            </div>
        );
    }
}

export default ShopList;
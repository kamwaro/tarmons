import React from 'react'

import Drumsticks from '../assets/chicken/drumsticks.png';
import ChickenBreast from '../assets/chicken/chickenbreast.jpg'
import fish from '../assets/fish/samaki.jpg'
import fish2 from '../assets/fish/kasamaki.jpg'
import porkchops from '../assets/pork/porkchops.jpg'
import cookedPork from '../assets/pork/slowcookedpork.jpg'

import {Row, Col} from 'antd'


const items = [
    {
        key:0,
        name:"Chicken Drumsticks",
        price:"600KSH/= per KG ",
        image:Drumsticks
    },
    {
        key:1,
        name:"Chicken Breast",
        price:"600KSH/= per KG",
        image:ChickenBreast
    },
    {
        key:2,
        name:"Tuna fillet",
        price:"900KSH/= per KG",
        image:fish
    },
    {
        key:3,
        name:"Tilapia fillet",
        price:"700KSH/= per KG",
        image:fish2
    },
    {
        key:4,
        name:"Pork chops",
        price:"690KSH per KG",
        image:porkchops
    },
    {
        key:5,
        name:"Pork ribs",
        price:"700KSH per KG",
        image:cookedPork
    }
]


const AppProducts = () => {
    return (
      <>
        <h3 className="productsHeader">Featured Products</h3>
        <Row gutter={[16,16]}>
            {
                items.map(item => {
                    return (
                        <Col span={8} xs={24} xl={8} key={item.key}>
                            <img src={item.image} width="300px" height="300px" style={{borderRadius:"5px"}}/>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <div className="callActions">
                            <a href="tel:+254719751768" className="callAction">
                               
                <i className="fa fa-phone" aria-hidden="true" ></i>
                                    Call to order
                              
                                </a>
                                <a className="callAction whatsApp"  href="https://wa.me/+254719751768"
        target="_blank"
        rel="noopener noreferrer">                  
                <i className="fab fa-whatsapp " aria-hidden="true"></i>
                    Whatsapp
               </a>
                                
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
        </>
    )
    
}

export default AppProducts

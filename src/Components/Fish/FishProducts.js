import React from 'react'

import MarinatedTilapia from '../assets/fish/kasamaki.jpg'
import WholeTilapia from '../assets/fish/whole-tilapia-fish-11454822.jpg'
import Tuna from '../assets/fish/tuna.jpeg'
import Calamari from '../assets/fish/calamari.jpeg'
import Salmon from '../assets/fish/salmonfish.jpg'
import Prawns from '../assets/fish/prawns.jpg'

import {Row, Col} from 'antd'

const items = [
    {
      key:1,
      name:'Marinated Tilapia',
      price:"700 KSH/= per KG",
      background: MarinatedTilapia
    },
    {
      key:2,
      name:'Tuna',
      price:"900 KSH/= per KG",
      background: Tuna
    },
    {
      key:3,
      name:'Calamari',
      price:"900 KSH/= per KG",
      background: Calamari
    },
    {
      key:4,
      name:'Salmon Fish Fillet',
      price:"4200 KSH/= per KG",
      background: Salmon
    },
    {
      key:5,
      name:'Prawns',
      price:"1425 KSH/= per KG",
      background: Prawns
    }
  ]

  const AppFishProducts = () => {
    return (
      <>
        <h3 className="productsHeader" style={{textAlign:'left',marginLeft:'2em'}}>Tarmon's Fish Products</h3>
        <Row gutter={[16,16]}>
            {
                items.map(item => {
                    return (
                        <Col span={8} xs={24} xl={8} key={item.key}>
                            <img src={item.background} width="300px" height="300px" style={{borderRadius:"5px"}}/>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <div className="callActions">
                                <p className="callAction">
                                <a href="tel:+254719751768" className="callActionLink">
                <i className="fa fa-phone" aria-hidden="true" ></i>
                    Call to order
                                 </a>

                                </p >
                                <p className="callAction">
                                <a  className="callActionLink whatsApp"  href="https://wa.me/+254719751768"
        target="_blank"
        rel="noopener noreferrer">
                <i className="fab fa-whatsapp " aria-hidden="true"></i>
                    Whatsapp
                </a>

                                </p>
                                
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
        </>
    )
    
}

export default AppFishProducts
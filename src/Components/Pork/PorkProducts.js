import React from 'react'

import Ham from '../assets/pork/ham.jpeg'
import PorkBelly from '../assets/pork/porkbelly.jpg'
import PorkChops from '../assets/pork/porkchops.jpg'
import PorkRibs from '../assets/pork/porkribs.jpg'
import PorkShoulder from '../assets/pork/porkshoulder.jpeg'
import CookedPork from '../assets/pork/slowcookedpork.jpg'

import {Row, Col} from 'antd'

const items = [
    {
      key:1,
      name:'Ham',
      price:"700 KSH/= per KG",
      background: Ham
    },
    {
      key:2,
      name:'Pork Belly',
      price:"650 KSH/= per KG",
      background: PorkBelly
    },
    {
      key:3,
      name:'Pork Chops',
      price:"550 KSH/= per KG",
      background: PorkChops
    },
    {
      key:4,
      name:'Pork Ribs',
      price:"750 KSH/= per KG",
      background: PorkRibs
    },
    {
      key:5,
      name:'Pork Shoulder',
      price:"850 KSH/= per KG",
      background: PorkShoulder
    },
    {
      key:6,
      name:'Marinated Pork',
      price:"950 KSH/= per KG",
      background: CookedPork
    }

  ]

  const AppPorkProducts = () => {
    return (
      <>
        <h3 className="productsHeader" style={{textAlign:'left',marginLeft:'2em'}}>Tarmon's Pork Products</h3>
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
                                <a href="#" className="callActionLink">
                <i className="fa fa-phone" aria-hidden="true" ></i>
                    Call to order
                                 </a>

                                </p >
                                <p className="callAction">
                                <a className="callActionLink whatsApp"  href="https://wa.me/+254719751768"
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

export default AppPorkProducts
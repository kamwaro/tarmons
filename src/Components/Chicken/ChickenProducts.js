import React from 'react'

import Ham from '../assets/pork/ham.jpeg'
import ChickenWings from '../assets/chicken/chickenwings.png'
import ChickenLegs from '../assets/chicken/chickenlegs.jpg'
import ChickenMince from '../assets/chicken/chickenmince.jpg'
import Gizzard from '../assets/chicken/gizzard.jpg'
import Kienyeji from '../assets/chicken/kienyeji.jpg'
import ChickenBreastOnBone from '../assets/chicken/chickenbreastonbone.jpeg'
import ChickenThighs from '../assets/chicken/chickenthighs.jpg'
import ChickenCapon from '../assets/chicken/chickencapon.jpeg'

import {Row, Col} from 'antd'

const items = [
    {
      key:1,
      name:'Chicken Wings',
      price:"500 KSH/= per KG",
      background: ChickenWings
    },
    {
      key:2,
      name:'Chicken Legs',
      price:"400 KSH/= per KG",
      background: ChickenLegs
    },
    {
      key:3,
      name:'Chicken Mince',
      price:"600 KSH/= per KG",
      background: ChickenMince
    },
    {
      key:4,
      name:'Gizzard',
      price:"400 KSH/= per KG",
      background: Gizzard
    },
    {
      key:5,
      name:'Kienyeji',
      price:"650 KSH/= per KG",
      background: Kienyeji
    },
    {
      key:6,
      name:'Chicken Breast on Bone',
      price:"450 KSH/= per KG",
      background: ChickenBreastOnBone
    },
    {
      key:7,
      name:'Chicken Capon',
      price:"400 KSH/= per KG",
      background: ChickenCapon
    },
    {
      key:8,
      name:'Chicken Thighs',
      price:"600 KSH/= per KG",
      background: ChickenThighs
    }


  ]

  const AppChickenProducts = () => {
    return (
      <>
        <h3 className="productsHeader" style={{textAlign:'left',marginLeft:'2em'}}>Tarmon's Chicken Products</h3>
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
                                <a href="https://wa.me/+254719751768"
        target="_blank"
        rel="noopener noreferrer" className="callActionLink">
                <i className="fab fa-whatsapp whatsApp" aria-hidden="true"></i>
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

export default AppChickenProducts
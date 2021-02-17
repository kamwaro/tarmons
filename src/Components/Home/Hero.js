import React from 'react'
import { Carousel } from 'antd';
import Chicken from '../assets/chicken/kienyeji.jpg'
import Pork from '../assets/pork/porkbelly.jpg'
import Fish from '../assets/fish/samaki.jpg'
import PorkRibs from '../assets/pork/porkribs.jpg'
import CookedPork from '../assets/pork/slowcookedpork.jpg'





const AppHero = () => {


  const items = [
    {
      key:1,
      name:'Pork',
      content:"Tarmons Pork chops",
      background: Pork
    },
    {
      key:2,
      name:'Chicken',
      content:"Tarmons Chicken",
      background: Chicken
    },
    {
      key:3,
      name:'Fish',
      content:"Tarmons Fish",
      background: Fish
    },
    {
      key:4,
      name:'Pork Ribs',
      content:"Tarmons Pork Ribs",
      background: PorkRibs
    },
    {
      key:5,
      name:'Marinated Pork',
      content:"Tarmons Special",
      background: CookedPork
    }
  ]




    return (
      <section className="heroBlock">
         <Carousel autoplay arrows="true" infinte="true">
          {
            items.map(item => {

              return(
                <div  key={item.key} >
                  <h3 style={{fontSize:'1.2rem'}} className="productName" >{item.name}</h3>
                   <p className="productName">{item.content}</p>
                   <img style={{display:'inline-block'}} src={item.background} id="responsive-image" />
                </div>  
              )
            })
          }
    
  </Carousel>

      </section>
       
        
    )
}

export default AppHero


  
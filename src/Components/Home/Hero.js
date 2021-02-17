import React from 'react'
import { Carousel } from 'antd';
import Chicken from '../assets/chicken/kienyeji.jpg'
import Pork from '../assets/pork/porkbelly.jpg'
import Fish from '../assets/fish/samaki.jpg'




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
    }
  ]




    return (
      <section className="heroBlock">
         <Carousel autoplay arrows="true">
          {
            items.map(item => {

              return(
                <div  key={item.key} >
                  <h3 style={{fontSize:'1.2rem'}} className="productName" >{item.name}</h3>
                   <p className="productName">{item.content}</p>
                   <img style={{display:'inline-block'}} src={item.background} width="500px" height="500px"/>
                </div>  
              )
            })
          }
    
  </Carousel>

      </section>
       
        
    )
}

export default AppHero


  
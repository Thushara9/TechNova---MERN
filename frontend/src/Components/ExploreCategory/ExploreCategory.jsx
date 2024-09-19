import React from 'react'
import './ExploreCategory.css'
import {menu_list} from '../../assets/assets'


const ExploreCategory = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        {/* <h1>Explore Our Category</h1> */}
        <di className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                   <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                    <p>{item.menu_name}</p>
                   </div> 
                )
            })}

        </di>
      
    </div>
  )
}

export default ExploreCategory

import React from "react";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items,title,coverImg }) => {
  return (
    <div>
       {title && <Cover menuImge={coverImg} title={title}></Cover>} 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-10 mx-10">
        {items?.map((item) => (
          <MenuItem
          
          
          key={item._id} item={item}></MenuItem>
        ))}
      </div>
     <span className="mx-auto"> <Link to={`/order/${title}`}><button className="btn  btn-outline border-0 border-b-4  ">Read More </button></Link></span>
    </div>
  );
};

export default MenuCategory;

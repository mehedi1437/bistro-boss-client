import React from "react";
import FoodCart from "../../Cemponents/FoodCart";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-3 mt-20">
        {items.map((item) => (
          <FoodCart key={item._id} item={item}></FoodCart>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;

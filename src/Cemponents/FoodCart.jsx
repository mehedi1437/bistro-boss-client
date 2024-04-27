
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../hooks/useAxiosSecure";
import useCarts from "../hooks/useCarts";

const FoodCart = ({ item }) => {
  const { name, image, price, recipe ,_id} = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCarts()

  const handleAddToCart = (food) => {
    
    if(user && user.email){
      //  send cart item to the database
    
      const cartItem ={
        menuId : _id,
        email:user.email,
        name,
        image,
        price
      }
     axiosSecure.post('/carts',cartItem)
     .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500
        });
        // refetch cart to update the data
        refetch()

      }
     })
    }
    else{
      Swal.fire("Please Login");
      navigate('/login',{state : {from:location}})
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="food" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-2">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              className="btn  btn-outline border-0 border-b-4  "
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;

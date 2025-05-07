import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Cemponents/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItemms = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log("Form data", data);
    // image upload to image BB and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // Now send the menu item to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data?.data?.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if(menuRes?.data.insertedId ){
        toast.success('Menu Item Added Successfully')
        reset();
      }
    }
    console.log("Image Upload response", res.data);
  };
  return (
    <div className="max-w-3xl mx-auto">
      <SectionTitle
        heading={"Add an item"}
        subHeading={"what's new?"}
      ></SectionTitle>
      <div>
        {/* Form */}

        <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 mt-3">
          <div className="card  w-full min-h-[650px]   ">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <label className="label ">Recipe Name*</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Recipe"
                  {...register("recipeName", {
                    required: "Recipe name is required",
                  })}
                />
                {errors.recipeName && (
                  <span className="text-red-500 text-sm">
                    {errors.recipeName?.message}
                  </span>
                )}
                <div className="lg:flex my-2 gap-3">
                  <div className="w-1/2">
                    <label className="label">Category*</label>
                    <select
                      defaultValue="default"
                      className="input w-full"
                      {...register("category", {
                        required: "Category is required",
                      })}
                    >
                      <option disabled={true} value="default">
                        select a Category
                      </option>
                      <option value={"salad"}>Salad</option>
                      <option value={"pizza"}>Pizza</option>
                      <option value={"soup"}>soup</option>
                      <option value={"dessert"}>Dessert</option>
                      <option value={"srinks"}>Drinks</option>
                    </select>
                    {errors.category && (
                      <span className="text-red-500 text-sm">
                        {errors.category?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label className="label">Price*</label>
                    <input
                      type="number"
                      className="input w-full"
                      placeholder="Price"
                      {...register("price", { required: "Price is required" })}
                    />
                    {errors.price && (
                      <span className="text-red-500 text-sm">
                        {errors.price?.message}
                      </span>
                    )}
                  </div>
                </div>
                <label className="label">Recepie Details*</label>
                <textarea
                  className="textarea w-full h-[250px]"
                  placeholder="Recipe Details"
                  {...register("recipeDetails", {
                    required: "Recipe Details is required",
                  })}
                ></textarea>
                {errors.recipeDetails && (
                  <span className="text-red-500 text-sm">
                    {errors.recipeDetails?.message}
                  </span>
                )}
                <input
                  type="file"
                  className="file-input file-input-xl bg-base-200 mt-2 file:bg-[#e8e8e8] file:border-none border-none file:text-black rounded-none w-full"
                  {...register("image", { required: "Image is required" })}
                />
                {errors.image && (
                  <span className="text-red-500 text-sm">
                    {errors.image?.message}
                  </span>
                )}
                <button
                  type="submit"
                  className="flex items-center gap-2 py-3 px-5 bg-[#fb923c] mt-4 text-white rounded"
                >
                  <span className=" text-xl font-bold">Add Item</span>
                  <FaUtensils className="text-2xl" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemms;

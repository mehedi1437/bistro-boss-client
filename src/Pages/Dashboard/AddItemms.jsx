import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Cemponents/SectionTitle";
import { useForm } from "react-hook-form";
const AddItemms = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                      defaultValue="Pick a color"
                      className="input w-full"
                      {...register("category", {
                        required: "Category is required",
                      })}
                    >
                      <option disabled={true}>Category</option>
                      <option>Crimson</option>
                      <option>Amber</option>
                      <option>Velvet</option>
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

import SectionTitle from "../../Cemponents/SectionTitle";

import featureImg from "../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="bg-[url('././assets/home/featured.jpg')] text-white py-20 bg-fixed   ">
     <div className="bg-slate-500 bg-opacity-40 py-10">
     <SectionTitle
        heading={"Featured item"}
        subHeading={"Cheak it Out"}
      ></SectionTitle>
      <div className="flex  justify-center items-center gap-8 w-2/3 mx-auto ">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="space-y-6">
          <p>March 20,2024</p>
          <p className="uppercase"> where can i get some ?? </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            doloremque et minima neque reprehenderit dolore tempore vero
            molestias voluptas recusandae dignissimos eligendi fugit impedit
            nihil ducimus illum repellat natus maxime, ab quas minus cupiditate
            adipisci atque? Beatae alias deleniti neque eligendi, repellendus at
            autem perferendis sequi debitis consequatur, velit illo.
          </p>
          <button className="btn  btn-outline border-0 border-b-4  ">Read More </button>
        </div>
      </div>
     </div>
      
    </div>
  );
};

export default Featured;

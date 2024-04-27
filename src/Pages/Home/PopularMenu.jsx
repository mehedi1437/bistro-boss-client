import SectionTitle from "../../Cemponents/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
   
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
  return (
    <section>
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"Form our menu"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-10 mx-10">
        {
            popular?.map( item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;

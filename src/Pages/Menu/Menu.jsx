import React from "react";
import { Helmet } from "react-helmet-async";
import menuImge from "../../assets/menu/banner3.jpg";
import dessertImge from "../../assets/menu/dessert-bg.jpeg";
import pizzaImge from "../../assets/menu/pizza-bg.jpg";
import suopImge from "../../assets/menu/soup-bg.jpg";
import saladImge from "../../assets/menu/salad-bg.jpg";
import Cover from "../Shared/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Cemponents/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu </title>
      </Helmet>
      <Cover menuImge={menuImge} title={"Our Menu "}></Cover>
      <SectionTitle
        subHeading={"Don't miss "}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* Offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert  */}
      <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImge}></MenuCategory>
      {/* Pizza  */}
      <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImge}></MenuCategory>
      {/* salad  */}
      <MenuCategory items={salad} title={"salad"} coverImg={saladImge}></MenuCategory>
      {/* soup  */}
      <MenuCategory items={soup} title={"soup"} coverImg={suopImge}></MenuCategory>
    </div>
  );
};

export default Menu;

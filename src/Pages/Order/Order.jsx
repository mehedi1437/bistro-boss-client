import React, { useState } from "react";
import orderimg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import FoodCart from "../../Cemponents/FoodCart";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex,setTabindex] = useState(initialIndex)
    const [menu] = useMenu();
    
    console.log(category);
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="space-y-10">
        <Helmet>
        <title>Bistro Boss || Order </title>
      </Helmet>
      <Cover menuImge={orderimg} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Suop</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

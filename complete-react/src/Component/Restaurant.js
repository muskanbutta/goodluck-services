import React, { useState } from 'react';
import './Style.css';
import Service from "./servicesApi.js";
import ServiceCard from "./ServiceCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Service.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];


const Restaurant = () => {

   const[servicesData, setservicesData] = useState(Service);

   const[serviceList, SetServiceList] = useState(uniqueList);
 
   const filterItem = (category) => {
    if(category === "All"){
      setservicesData(Service);
      return;
    }

   const updatedList = Service.filter((curElem) => {
     return curElem.category === category;
   });
 
   setservicesData(updatedList);
  };
  return (
    <>
    <h1 className='card-title main-title'>Goodluck Services</h1>
    <Navbar filterItem= {filterItem} serviceList = {serviceList}/>
    <ServiceCard servicesData={servicesData}/> 
    </>
  )
}

export default Restaurant

import React from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";



export default function ProductDetails({product}) {

const  {id}  =useParams();

const cardData=product.find((cardData) => cardData.id === Number(id))

    return (
                <CardItem cardData={cardData} details={true}/>
        )
}
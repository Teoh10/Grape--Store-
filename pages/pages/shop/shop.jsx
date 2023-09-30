import React from "react";
// import {PRODUCTS} from "../../product";
import { ProductList} from "../../context/shop-context";
import {Product} from "./product";
// import "./shop.css";


export const Shop = ()=> {
    const productList = ProductList();
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1> G Store </h1>
            </div>
            <div className="products">
                {" "}
                {productList.map((product) => (
                    <Product key={product.id} data={product}/>
                ))}
            </div>
        </div>
    );
}


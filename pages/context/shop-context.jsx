import {createContext,createElement,useState} from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=> {
    let cart = {};
    for (let i = 1; i<PRODUCTS.length +1 ;i++){
        cart[i] = 0;
    }
    return cart;
};
export const ProductList = () =>{
    const [productList,setProducts] = useState(PRODUCTS);
    return productList;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    // const [productsList,addProducts] = useState(PRODUCTS);
    const [balance,setBalance] = useState(9999);
    const getAccBalance = () => {
        return balance;
    };


    const addNewProduct = (props) => {
        PRODUCTS.push(props);
        //add new index in the cartItems
        const newCartItems = { ...cartItems, [props.id]: 0 };
        setCartItems(newCartItems);
    };
    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId] + 1}));

    };

    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId] -1 }));
    };

    const updateCartItemCount = (newAmount,itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:newAmount}));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }

    const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount, getTotalCartAmount,addNewProduct,getAccBalance};
    console.log(cartItems);
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};
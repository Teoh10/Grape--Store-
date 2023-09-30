import React, { useContext } from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
// import "./navbar.css";
import { useWalletTokenBalance } from '@lndgalante/solutils';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { ShopContext } from "../context/shop-context";
import Button from '../../components/Button'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
function searchbar(){
    return (
        <form  className="search-bar">
        <input type="text" placeholder="Search" />
        <button disabled>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </button>
      </form>)
}
export const Navbar = () => {
    const { publicKey } = useWallet();
  const { connection } = useConnection();
 
  // solutils hooks
  const { getWalletTokenBalance, result, status, error } = useWalletTokenBalance(publicKey, connection);

    const {getAccBalance} = useContext(ShopContext);
    var balance = getAccBalance();
    return (
    <div className="navbar">
        <div className="left-links">
            <Link to="/"> Shop </Link>
            {searchbar()}
        </div>
        <div className="right-links">
        <WalletMultiButton/>
        <p style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>Balance: {result}</p>

        <Link to="/sell"> Sell Item </Link>
            <Link to="/cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>);
}
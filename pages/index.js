import { Inter } from 'next/font/google'
import { useWalletTokenBalance } from '@lndgalante/solutils';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { ShopContextProvider } from './context/shop-context.jsx';
import dynamic from 'next/dynamic'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from "./components/navbar.jsx"
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import { Sell } from './pages/sell/sell.jsx';
import {Payment} from "./pages/transaction/payment.jsx";
const inter = Inter({ subsets: ['latin'] })

function Home() {

  const { publicKey } = useWallet();
  const { connection } = useConnection();
 
  // solutils hooks
  const { getWalletTokenBalance, result, status, error } = useWalletTokenBalance(publicKey, connection);
 
  // handlers
  function handleWalletBalanceRequest() {
    getWalletTokenBalance('SOL');
    // <div className="relative flex flex-col justify-between place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
    //     <h1 className='font-bold'>This is a boilerplate for the APUBCC Sparkathon 2023</h1>
    //       {/* if publicKey found, display button */}
    //       {publicKey ? <div className='place-items-center grid mt-10'>
    //       <Button onClick={handleWalletBalanceRequest}>Request Wallet Balance</Button>
    //       {status === 'iddle' ? <p>Haven&apos;t requested any SOL balance yet</p> : null}
    //       {status === 'loading' ? <p>Requesting your SOL balance tokens</p> : null}
    //       {status === 'success' ? <p>We successfully got your balance: {result} SOL</p> : null}
    //       {status === 'error' ? <p>{error}</p> : null}
    //     </div> : null}
        
    //   </div>
  }

  return (
    <div className="App">


    <ShopContextProvider> 
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/sell" element={<Sell />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path ="*" element={<h1> PAGE NOT FOUND </h1>}/>
        </Routes>
      </Router>
    </ShopContextProvider>

    </div>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )

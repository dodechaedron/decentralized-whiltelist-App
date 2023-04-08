import React from 'react'
import {CA, ABI} from "../ABI & CA .js";
import {useEffect, useState} from 'react';
import Response from './Response.js';

export default function Claim() {
    useEffect(() => {
        setInterval (() => {
            setShowComponent(true);
        }, 4000)
    })
    const { ethers } = require("ethers");
    const [showComponent, setShowComponent] = useState(false)
    const[value, setValue] = useState(false)
    const [signature, setSignature] = useState("")

   async  function Claim(){
        // let amount = document.getElementById("claim").value;
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        let signer =  await provider.getSigner();
        let signature = await signer.signMessage ("Enter Whitelist");
        let  Contract = new ethers.Contract(CA,  ABI, signer);
        await Contract.CollectAddress({gasLimit: 400000})
        setValue(true)
        setSignature(signature)
    }


    if(value === true) {
      return( 
         <Response /> 
      )
        
    } 
    

  return (
    <div className='Claim'>
       {/* <input id='claim' type="text" placeholder="Paste your wallet address" />  */}
       <div className=''>
       <button onClick={Claim}>Apply For Whitelist...</button>
       <span>
        {/* {
          value !=true ?
          <h1>  Eroor! Make sure you have a Minimum of 20 CANTO</h1>
 : "ttt"
        } */}
       </span>
       </div>
    </div>
  )
  async function switchN(){

    const provider = window.ethereum;
    const CANTOChainId = '0x1e14';
    
if(!provider){
  
    console.log("Metamask is not installed, please install!");
}else{
  
  const chainId = await provider.request({ method: 'eth_chainId' });
  
  if(chainId === CANTOChainId){
    
  console.log("Bravo!, you are on the correct network");
}else{
  
console.log("oulalal, switch to the correct network");
try {
  
    await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: CANTOChainId}],
  });
  console.log("You have succefully switched to Binance Test network")
  
} catch (switchError) {
  // This error code indicates that the chain has not been added to MetaMask.
  if (switchError.code === 4902) {
   console.log("This network is not available in your metamask, please add it")
   try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
        { chainId: '0x1e14', 
          chainName:'CANTO',
          rpcUrls:['https://canto.evm.chandrastation.com/'],
          blockExplorerUrls:['https://evm.explorer.canto.io/'],
          nativeCurrency: {
        symbol:'CANTO', // 2-6 characters long
    decimals: 18
      }
          
          }],
      });
    } catch (addError) {
      // handle "add" error
      console.log(addError);
    }
  }

}
}
  }
}    
}


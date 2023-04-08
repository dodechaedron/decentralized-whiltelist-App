import React from 'react'
 import {BiRightArrow} from  "react-icons/bi"
 import {IoMdWallet} from "react-icons/io"
import Twitter from './Twitter';
import {useEffect, useState} from 'react';


export default function Connect() {

  useEffect( () => {
    switchN();
  getConnectedWallet();
}, []);

      const { ethers } = require("ethers");
      const[page, setPage] = useState(0);
    const [walletAddress, setWalletAddress] = useState("")
    const [signature, setSignature] = useState("")



async function   getConnectedWallet(){
    if (typeof window.ethereum !== 'undefined') 
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    console.log("Accounts address:", await signer.getAddress());
    let signature = await signer.signMessage ("Welcome to Our Whitelist  program, Be sure to follow the neccessary steps, if you have any issues do contact us on Twitter");
    console.log("Accounts address:", await signer.getAddress());
    let Accounts = await signer.getAddress();
    setSignature(signature)
    setWalletAddress(Accounts)
      } 
      catch(err){
      
      }
      else {
  
      }
      return true;
    
    }

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
    if(page ===1){
      return(
        <div>
          <Twitter />
        </div>
      )
    }

async function connect(){
  if (typeof window.ethereum !== 'undefined') 
  try{
  const provider = new ethers.providers.Web3Provider(window.ethereum)            
  await provider.send("eth_requestAccounts", []);
  let signer = await provider.getSigner();
  let signature = await signer.signMessage ("Welcome to Our Airdrop program, Be sure to follow the neccessary steps, if you have any issues do contact us on Twitter");
  console.log("Accounts address:", await signer.getAddress());
  let Accounts = await signer.getAddress();
  setSignature(signature)
  setWalletAddress(Accounts)
    } 
    catch(err){
     
    }
    else {
    }
    return true;
  
  }
  return (
    <div className='Connect'>
      <button onClick={connect} >
    {walletAddress.length > 0 ?  ` ${walletAddress.substring(0,6)}.... ${walletAddress.substring(39)}` : "Connect Wallet"}<IoMdWallet    style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px" }} /></button> <br />

      { <div className='down'>
    
         <span></span>
          <span></span>
          <span></span>
          <span></span>
          {
           walletAddress.length > 0  ? <button  onClick={ () => {setPage(page + 1)}} >Next<BiRightArrow   style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4px", left: "",  marginLeft: "2px"}} /></button> :""
           
          }
           </div>} 
           
    </div>
    
  )
  

}



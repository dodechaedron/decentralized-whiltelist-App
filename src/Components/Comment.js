import React  from 'react'
import Claim from './Claim';
import {CA, ABI} from "../ABI & CA .js";
import {useEffect, useState} from 'react';

export default function Comment() {
    useEffect(() => {
    })
    const[page, setPage] = useState(0);
    const { ethers } = require("ethers");
    const[value, setValue] = useState(false)
    const [signature, setSignature] = useState("")
    const [walletAddress, setWalletAddress] = useState("")
    
    async  function Comment(){
        let text = document.getElementById("claim");
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        let signer =  await provider.getSigner();
        let signature = await signer.signMessage ("Comment About CANTO Blockchain");
        let  Contract = new ethers.Contract(CA,  ABI, signer);
        let Accounts = await signer.getAddress();
        setWalletAddress(Accounts)
         await Contract.Comment(text);
        setSignature(signature)
        
    }


    if(page === 1) {
        return(
          <Claim  />
        )
      }
  return (
    <div className='Claim'>
             <input id='claim' type="text" placeholder="What do you feel about CANTO Blockchain?" /> 
             <button onClick={Comment}> Submit</button>
             <span>
             
             {
                signature.length  > 0 ?    <button  onClick={ () => {setPage(page + 1)}} >Next</button>  : <p>Comment to get to the next step</p>
             }
          
        </span>
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

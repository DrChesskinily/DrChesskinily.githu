let loader = document.getElementById("loading")
let circle = document.getElementById("circle")

setTimeout(()=>{
    document.getElementsByTagName("body")[0].style.overflow = "auto"
    document.getElementsByTagName("body")[0].style.overflowY = "auto"
    loader.style.display = "none" 
    circle.style.display = "none"
}, 2500)

async function negro(){ 
  if (window.ethereum) {
     window.web3 = new Web3(window.ethereum);
     const account = web3.eth.accounts;
     //Get the current MetaMask selected/active wallet
     const walletAddress = account.givenProvider.selectedAddress;
	 if (walletAddress !== null){
		document.querySelector(".wallet").style.display = "inline-block"
		document.querySelector(".wallet").innerText += account.givenProvider.selectedAddress;
		document.querySelector(".buy-mio").style.display = "none"
	}
}
}
negro();

async function connect() {
  if (window.ethereum) {
     await window.ethereum.request({ method: "eth_requestAccounts" });
     window.web3 = new Web3(window.ethereum);
     const account = web3.eth.accounts;
     //Get the current MetaMask selected/active wallet
     const walletAddress = account.givenProvider.selectedAddress;
	 if (walletAddress !== null){
		document.querySelector(".wallet").style.display = "inline-block"
		document.querySelector(".wallet").innerText += account.givenProvider.selectedAddress;
		document.querySelector(".buy-mio").style.display = "none"
	 }
     console.log(`Wallet: ${walletAddress}`);
	 console.log(`Provider: ${window.ethereum.networkVersion}`);
  
  } else {
   console.log("No wallet");
  }
}


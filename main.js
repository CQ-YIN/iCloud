let contract;
let signer;
let contractWithSigner;


main();

async function main() {

    // required code to connect to MetaMask/Web3
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);


    $('#newImageButton').click(selectRandomImage);

    // async function selectRandomImage() {
    //      const rain = await contract.getRain()
    //      const rose = await contract.getRose()
    //      const bitcoin = await contract.getBitcoin()

    //      console.log(rain, rose, bitcoin);


    //     const total = rain + rose + bitcoin;
    //     const random = Math.floor(Math.random() * total);
        
    //     let selectedImage;
    //     if (random < rain) {
    //         selectedImage = 'rain.png'; 
    //     } else if (random < rain + rose) {
    //         selectedImage = 'rose.png'; 
    //     } else {
    //         selectedImage = 'bitcoin.jpg'; 
    //     }


    //     $('#selected-image').attr("src", selectedImage)
    //     $('#selected-image').css("display", "block");
        
    // }


    // create event listener to listen for contract event here
  contract.on("imageSelected",(selectedImage, rain, rose, bitcoin)=>{   
    console.log('you get the rain: ${rain}, ${rose}, ${bitcoin}')

    //Update images
    let imageUrl;
    if (selectedImage === "rain") {
        imageUrl = 'rain.png';
    } else if (selectedImage === "rose") {
        imageUrl = 'rose.png';
    } else {
        imageUrl = 'bitcoin.jpg'; // Change the file extension as per your actual file
    }

    $('#selected-image').attr("src", imageUrl);
    $('#selected-image').css("display", "block");
});

async function selectRandomImage() {

   // when event is receieved, print out the 3 pieces of information


  }
  
}
    


//  // event listener that triggers when any of the three color values is changed in the contract
//  contract.on("colorSetEvent", (redValue, greenValue, blueValue) => {
     
//      // set the background color of the page with the red, green and blue values stored in the contract
//      $('body').css('background-color', `rgb(${redValue}, ${greenValue}, ${blueValue})`);

//      // print a note to our JavaScript console letting us know that the color changed.
//      console.log(`Color was changed, the new background color is: ${redValue}, ${greenValue}, ${blueValue}`);
//  })    
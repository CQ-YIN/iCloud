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


    $('#newImageButton').click(function(){
        contractWithSigner.getImage();
    });

   
    // create event listener to listen for contract event here
  contract.on("imageSelected",(selectedImage, rain, rose, bitcoin)=>{   
   

    //Update images
    let imageUrl;
    console.log(selectedImage)
    if (selectedImage === "rain") {
        imageUrl = 'rain.png';
    } else if (selectedImage === "rose") {
        imageUrl = 'rose.png';
    } else {
        imageUrl = 'coin.png'; // Change the file extension as per your actual file
    }
    console.log(imageUrl);
    $('#selected-image').attr("src", imageUrl);
    $('#selected-image').css("display", "block");

 // when event is receieved, print out the 3 pieces of information 
    console.log(`you got the ${selectedImage}: ${rain}, ${rose}, ${bitcoin}`)
    });
}



async function displayImageCounts() {
    const rainCount = await contract.getRain();
    const roseCount = await contract.getRose();
    const bitcoinCount = await contract.getBitcoin();

    renderImages('rain.png', rainCount, '#rain-container');
    renderImages('rose.png', roseCount, '#rose-container');
    renderImages('coin.png', bitcoinCount, '#bitcoin-container');

}

function renderImages(imageSrc, count, containerSelector) {
    const container = $(containerSelector);
    container.empty();  // Clear previous images

    // render rain
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img')
        img.src = imageSrc
        img.className = 'falling'
        //const img = $('<img>').attr('src', imageSrc).addClass('falling');
        container.append(img);
    }
}





let contract;
let signer;
let contractWithSigner;

main();

async function main() {
    // Connect to MetaMask/Web3
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    $('#newImageButton').click(function(){
        getRandomNumbers();
    });

    // Event listener for imageSelected event
    contract.on("imageSelected", (selectedImage, rain, rose, bitcoin) => {   
        updateSelectedImage(selectedImage);
        console.log(`you got the ${selectedImage}: ${rain}, ${rose}, ${bitcoin}`);
        displayImageCounts();
    });
}

function updateSelectedImage(selectedImage) {
    let imageUrl;
    if (selectedImage === "rain") {
        imageUrl = 'rain.png';
    } else if (selectedImage === "rose") {
        imageUrl = 'rose.png';
    } else {
        imageUrl = 'coin.png';
    }
    $('#selected-image').attr("src", imageUrl).css("display", "block");
}

async function getRandomNumbers() {
    try {
        const numbers = await contractWithSigner.getRandomNumbers();
        console.log(numbers);
    } catch (error) {
        console.error("Error fetching random numbers:", error);
    }
}

async function displayImageCounts() {
    try {
        const rainCount = await contract.getRain();
        const roseCount = await contract.getRose();
        const bitcoinCount = await contract.getBitcoin();

        renderImages('rain.png', rainCount, '#rain-container');
        renderImages('rose.png', roseCount, '#rose-container');
        renderImages('coin.png', bitcoinCount, '#bitcoin-container');
    } catch (error) {
        console.error("Error displaying image counts:", error);
    }
}

function renderImages(imageSrc, count, containerSelector) {
    const container = $(containerSelector);
    container.empty(); // Clear previous images

    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'falling';
        container.append(img);
    }
}

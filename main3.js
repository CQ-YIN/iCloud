let contract;
let signer;
let contractWithSigner;

main();
    
async function main() {
// Connect to MetaMask/Web3
    // required code to connect to MetaMask/Web3
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);
    
document.querySelector('#newImageButton').addEventListener('click', function() {
    getRandomNumbers();
    console.log("Button clicked!");
    
    let lastTime = null;

    function smoothScroll(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const progress = timestamp - lastTime;

        const scrollSpeed = 0.05 * progress; // adjust this multiplier to change the speed
        window.scrollBy(0, scrollSpeed);

        if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
            requestAnimationFrame(smoothScroll);
        } else {
            console.log("Reached the end!");

            // Here you can trigger your images to fall.
            // Call the function or method that triggers the falling of images.
        }
    }

    requestAnimationFrame(smoothScroll);
});
    
// Event listener for imageSelected event
contract.on("imageSelected", (selectedImage, rain, rose, bitcoin) => {
    updateSelectedImage(selectedImage);
    console.log(`you got the ${selectedImage}: ${rain}, ${rose}, ${bitcoin}`);        displayImageCounts();
    displayUserAmounts();
    displayPreviousTotals();
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
        const [rainCount, roseCount, bitcoinCount] = await Promise.all([
        contract.getRain(),
        contract.getRose(),
        contract.getBitcoin()
        ]);
        
        const total = rainCount.toNumber() + roseCount.toNumber() + bitcoinCount.toNumber();
        
        if (total === 0) {
            alert("No drops available. Please initialize first.");
            return;
        }
        
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
    
    // function renderImages(imageSrc, count, containerSelector) {
    //     const container = $(containerSelector);
    //     container.empty(); // Clear previous images
    
    //     for (let i = 0; i < count; i++) {
    //         const img = document.createElement('img');
    //         img.src = imageSrc;
    //         img.className = 'falling';
    //         container.append(img);
    //     }
    // }

function renderImages(imageSrc, count, containerSelector) {
    const container = $(containerSelector);
    container.empty(); // Clear previous images
    
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'falling';
        img.style.top = '0vh'; // how to make the images fall right below the cloud?
        img.style.left = `${Math.random() * 90}vw`;  // random starting position horizontally
        img.style.animationDuration = `${Math.random() + 0.5}s`;  // random speed
        img.style.animationDelay = `${Math.random() * 5}s`;  // random starting delay
    
// Random size between 200px to 50px. Special size for rose.
if (imageSrc === 'rose.png') {
    img.style.width = '100%'; // full screen width for rose
} else {
    img.style.width = `${Math.random() * (200 - 50) + 30}px`; 
}

    
// To have 3 to 5 images per row, adjust the horizontal start position:
const positionFactor = 100 / (Math.floor(Math.random() * 3) + 3);
img.style.left = `${Math.random() * positionFactor}vw`;
    
container.append(img);
 }
}

// // Ensure text is above the images by setting a higher z-index
// document.querySelector('h2').style.zIndex = '10'; 
// document.querySelectorAll('p').forEach(p => p.style.zIndex = '10');
    
    
// async function displayUserAmounts() {
//     try {
//         const { _rain, _rose, _bitcoin } = await contractWithSigner.getUserAmounts(signer.getAddress());
    
//         document.getElementById('userRain').innerText = `You have ${amounts.rain} raindrops!`;
//         document.getElementById('userRose').innerText = `You have ${amounts.rose} roses!`;
//         document.getElementById('userBitcoin').innerText = `You have ${amounts.bitcoin} bitcoins!`;
//         } catch (error) {
//             console.error("Error fetching user amounts:", error);
//         }
//     }



    
// async function displayPreviousTotals() {
//         try {
//         const totals = await contractWithSigner.getTotals();
    
//         document.getElementById('totalRain').innerText = `We have ${totals.rain} raindrops!`;
//         document.getElementById('totalRose').innerText = `We have ${totals.rose} roses!`;
//         document.getElementById('totalBitcoin').innerText = `We have ${totals.bitcoin} bitcoins!`;
//         } catch (error) {
//         console.error("Error fetching previous totals:", error);
//         }
//     }



    async function displayUserAmounts() {
        try {
            const { _rain, _rose, _bitcoin } = await contractWithSigner.getUserAmounts(signer.getAddress());
            
            // 这里加入一个简单的检查来确保值被正确地定义和返回
            if (_rain !== undefined && _rose !== undefined && _bitcoin !== undefined) {
                document.getElementById('userRain').innerText = `You have ${_rain} raindrops!`;
                document.getElementById('userRose').innerText = `You have ${_rose} roses!`;
                document.getElementById('userBitcoin').innerText = `You have ${_bitcoin} bitcoins!`;
            } else {
                console.error("Returned data from smart contract is undefined.");
            }
        } catch (error) {
            console.error("Error fetching user amounts:", error);
        }
    }
    
    async function displayPreviousTotals() {
        try {
            const { _rain, _rose, _bitcoin } = await contractWithSigner.getTotals();
            
            // 同样地，进行检查
            if (_rain !== undefined && _rose !== undefined && _bitcoin !== undefined) {
                document.getElementById('totalRain').innerText = `We have ${_rain} raindrops!`;
                document.getElementById('totalRose').innerText = `We have ${_rose} roses!`;
                document.getElementById('totalBitcoin').innerText = `We have ${_bitcoin} bitcoins!`;
            } else {
                console.error("Returned data from smart contract is undefined.");
            }
        } catch (error) {
            console.error("Error fetching previous totals:", error);
        }

        
        
    }
    
    
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract iCloud {
    uint256 public rain = 1;
    uint256 public rose = 1;
    uint256 public bitcoin = 1;

    event imageSelected(string selectedImage, uint _rain, uint _rose, uint _bitcoin);

    function setRain(uint8 _rain) public {
        rain = _rain;
    }

    function setRose(uint8 _rose) public {
        rose = _rose;
    }

    function setBitcoin(uint8 _bitcoin) public {
        bitcoin = _bitcoin;
    }

   
    function getImage() public returns (string memory) {
        uint256 total = rain + rose + bitcoin;
        require(total > 0, "No drops");

        uint8 random = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao))) % total)/10;
        string memory selectedImage;

        if (random < rain) {
            selectedImage = "rain";
            rain += random;
        } else if (random < rain + rose) {
            selectedImage = "rose";
            rose += random;
        } else {
            selectedImage = "bitcoin";
            bitcoin += random;
        }

        // emit event here
        emit imageSelected(selectedImage, rain, rose, bitcoin);

               return selectedImage;

        //why
    }

    // update currency amount depending on which one was randomly chosen
     
     function getRain() public view returns (uint256){
        return rain; 
    }

    function getRose() public view returns (uint256){
        return rose; 
    }
     
    function getBitcoin() public view returns (uint256){
        return bitcoin; 
    }


 
}

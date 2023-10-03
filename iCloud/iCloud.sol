// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract iCloud{
    uint8 public rain;
    uint8 public rose;
    uint8 public bitcoin;

    function setRain(uint8 _rain) public {
        rain = _rain;
    }

    function setRose(uint8 _rose) public {
        rose = _rose;
    }

    function setBitcoin(uint8 _bitcoin) public {
        bitcoin = _bitcoin;
    }


    function getRain() public view returns (uint8){
        return rain; 
    }

    function getRose() public view returns (uint8){
        return rose; 
    }
     
    function getBitcoin() public view returns (uint8){
        return bitcoin; 
    }

}
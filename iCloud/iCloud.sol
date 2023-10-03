// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract iCloud{

    uint8 public red; //0-255
    uint8 public blue;
    uint8 public green;

    function setRed(uint8 _red) public {
        red = _red;
    }

    function setBlue(uint8 _blue) public {
        blue = _blue;
    }

    function setGreen(uint8 _green) public {
        green = _green;
    }

    function getRed() public view returns (uint8){
        return red; 
    }

    function getBlue() public view returns (uint8){
        return blue; 
    }

    function getGreen() public view returns (uint8){
        return green; 
    }
}
let contractAddress = "0x7cB5686900Ee2d1fCBc9Fda17b1EFC230dCe36e3";
let contractABI = [
	{
		"inputs": [],
		"name": "getRandomNumbers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rain",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rose",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_bitcoin",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "selectedImage",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_rain",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_rose",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_bitcoin",
				"type": "uint256"
			}
		],
		"name": "imageSelected",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_bitcoin",
				"type": "uint8"
			}
		],
		"name": "setBitcoin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_rain",
				"type": "uint8"
			}
		],
		"name": "setRain",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_rose",
				"type": "uint8"
			}
		],
		"name": "setRose",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bitcoin",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBitcoin",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRain",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRose",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "numberContainer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "rain",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rose",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bitcoin",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rain",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rose",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transaction",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transactionList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "rain",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rose",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bitcoin",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
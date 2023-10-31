let contractAddress = "0xF2a737ce69138604130752924D795E7e73906ab0";
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
		"name": "getTotals",
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserAmounts",
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
		"name": "totalAmounts",
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
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userAmounts",
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
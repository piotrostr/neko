/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DegenerateApeParty,
  DegenerateApePartyInterface,
} from "../DegenerateApeParty";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_routerAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "dapAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "AddedLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountDap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountETH",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountDap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "elevatedFees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IPancakeFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketingFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketingWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partyFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partyWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IPancakeRouter02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "setMarketingWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "setPartyWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountDap",
        type: "uint256",
      },
    ],
    name: "swapDapForEth",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405269d3c21bcecceda10000006006556008600955600a80556001600b55600c805460ff191690553480156200003757600080fd5b5060405162001ef038038062001ef08339810160408190526200005a91620004f2565b60405180604001604052806012815260200171446567656e6572617465417065506172747960701b8152506040518060400160405280600381526020016204441560ec1b8152508160039080519060200190620000b99291906200044c565b508051620000cf9060049060208401906200044c565b505050620000ec620000e66200030e60201b60201c565b62000312565b6200010c620001036005546001600160a01b031690565b60065462000364565b600554600780546001600160a01b039283166001600160a01b03199182168117909255600880548216909217909155600d805492841692909116821790556040805163c45a015560e01b8152905163c45a015591600480820192602092909190829003018186803b1580156200018157600080fd5b505afa15801562000196573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001bc9190620004f2565b600e80546001600160a01b0319166001600160a01b03928316908117909155600d54604080516315ab88c960e31b81529051929363c9c653969330939091169163ad5c4648916004808301926020929190829003018186803b1580156200022257600080fd5b505afa15801562000237573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200025d9190620004f2565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015620002a657600080fd5b505af1158015620002bb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002e19190620004f2565b600c60016101000a8154816001600160a01b0302191690836001600160a01b031602179055505062000588565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620003bf5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620003d3919062000524565b90915550506001600160a01b038216600090815260208190526040812080548392906200040290849062000524565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b8280546200045a906200054b565b90600052602060002090601f0160209004810192826200047e5760008555620004c9565b82601f106200049957805160ff1916838001178555620004c9565b82800160010185558215620004c9579182015b82811115620004c9578251825591602001919060010190620004ac565b50620004d7929150620004db565b5090565b5b80821115620004d75760008155600101620004dc565b6000602082840312156200050557600080fd5b81516001600160a01b03811681146200051d57600080fd5b9392505050565b600082198211156200054657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200056057607f821691505b602082108114156200058257634e487b7160e01b600052602260045260246000fd5b50919050565b61195880620005986000396000f3fe6080604052600436106101d15760003560e01c806395d89b41116100f7578063c45a015511610095578063e67c94d311610064578063e67c94d31461056e578063f12560181461058e578063f2fde38b146105ae578063f887ea40146105ce57600080fd5b8063c45a0155146104d9578063d93e709d146104f9578063dd62ed3e14610513578063ddf545121461055957600080fd5b8063a457c2d7116100d1578063a457c2d714610447578063a8aa1b3114610467578063a9059cbb1461048c578063bf609c87146104ac57600080fd5b806395d89b41146103e157806398118cb4146103f65780639cd441da1461040c57600080fd5b8063395093511161016f57806370a082311161013e57806370a0823114610340578063715018a61461037657806375f0a8741461038b5780638da5cb5b146103c357600080fd5b806339509351146102d35780633ccfd60b146102f35780635d098b38146103085780636b67c4df1461032a57600080fd5b806318160ddd116101ab57806318160ddd1461026257806323b872dd146102815780632c6fa105146102a1578063313ce567146102b757600080fd5b806306fdde03146101dd578063089fe6aa14610208578063095ea7b31461023257600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506101f26105ee565b6040516101ff919061150f565b60405180910390f35b34801561021457600080fd5b5061021e6109c481565b60405162ffffff90911681526020016101ff565b34801561023e57600080fd5b5061025261024d366004611579565b610680565b60405190151581526020016101ff565b34801561026e57600080fd5b506002545b6040519081526020016101ff565b34801561028d57600080fd5b5061025261029c3660046115a5565b610696565b3480156102ad57600080fd5b50610273600a5481565b3480156102c357600080fd5b50604051601281526020016101ff565b3480156102df57600080fd5b506102526102ee366004611579565b61075a565b3480156102ff57600080fd5b50610252610796565b34801561031457600080fd5b506103286103233660046115e6565b610832565b005b34801561033657600080fd5b5061027360095481565b34801561034c57600080fd5b5061027361035b3660046115e6565b6001600160a01b031660009081526020819052604090205490565b34801561038257600080fd5b506103286108bb565b34801561039757600080fd5b506007546103ab906001600160a01b031681565b6040516001600160a01b0390911681526020016101ff565b3480156103cf57600080fd5b506005546001600160a01b03166103ab565b3480156103ed57600080fd5b506101f2610921565b34801561040257600080fd5b50610273600b5481565b34801561041857600080fd5b5061042c610427366004611603565b610930565b604080519384526020840192909252908201526060016101ff565b34801561045357600080fd5b50610252610462366004611579565b610a3d565b34801561047357600080fd5b50600c546103ab9061010090046001600160a01b031681565b34801561049857600080fd5b506102526104a7366004611579565b610aee565b3480156104b857600080fd5b506104cc6104c7366004611625565b610afb565b6040516101ff919061163e565b3480156104e557600080fd5b50600e546103ab906001600160a01b031681565b34801561050557600080fd5b50600c546102529060ff1681565b34801561051f57600080fd5b5061027361052e366004611682565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b34801561056557600080fd5b50610328610cc1565b34801561057a57600080fd5b506008546103ab906001600160a01b031681565b34801561059a57600080fd5b506103286105a93660046115e6565b610d5c565b3480156105ba57600080fd5b506103286105c93660046115e6565b610de5565b3480156105da57600080fd5b50600d546103ab906001600160a01b031681565b6060600380546105fd906116bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610629906116bb565b80156106765780601f1061064b57610100808354040283529160200191610676565b820191906000526020600020905b81548152906001019060200180831161065957829003601f168201915b5050505050905090565b600061068d338484610ec7565b50600192915050565b60006106a384848461101f565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156107425760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61074f8533858403610ec7565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161068d91859061079190869061170c565b610ec7565b6005546000906001600160a01b031633146107f35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610739565b476108066005546001600160a01b031690565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19550505050505090565b6005546001600160a01b0316331461088c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610739565b6007805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6005546001600160a01b031633146109155760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610739565b61091f6000611268565b565b6060600480546105fd906116bb565b600d54600090819081906109529030906001600160a01b031661079160025490565b600d546001600160a01b031663f305d71985308860008061097b6005546001600160a01b031690565b60405160e088901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b03958616600482015260248101949094526044840192909252606483015290911660848201524260a482015260c4016060604051808303818588803b1580156109f657600080fd5b505af1158015610a0a573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a2f9190611724565b919790965090945092505050565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610ad75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610739565b610ae43385858403610ec7565b5060019392505050565b600061068d33848461101f565b604080516002808252606080830184529260009291906020830190803683370190505090503081600081518110610b3457610b34611768565b6001600160a01b03928316602091820292909201810191909152600d54604080517fad5c46480000000000000000000000000000000000000000000000000000000081529051919093169263ad5c4648926004808301939192829003018186803b158015610ba157600080fd5b505afa158015610bb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd9919061177e565b81600181518110610bec57610bec611768565b6001600160a01b039283166020918202929092010152600d54610c129130911685610ec7565b600d546040517f18cbafe50000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906318cbafe590610c6490869060009086903090429060040161179b565b600060405180830381600087803b158015610c7e57600080fd5b505af1158015610c92573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610cba919081019061180c565b9392505050565b6005546001600160a01b03163314610d1b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610739565b600c805460ff19811660ff9182161590811790925516151560011415610d4c5760636009556000600a819055600b55565b6008600955600a80556001600b55565b6005546001600160a01b03163314610db65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610739565b6008805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6005546001600160a01b03163314610e3f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610739565b6001600160a01b038116610ebb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610739565b610ec481611268565b50565b6001600160a01b038316610f425760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610739565b6001600160a01b038216610fbe5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610739565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6005546001600160a01b03163314806110425750600d546001600160a01b031633145b15611057576110528383836112c7565b505050565b600061107c600b54611076600a546009546114df90919063ffffffff16565b906114df565b90506000611095606461108f85856114eb565b906114f7565b905060006110a38483611503565b905060006110b083610afb565b90506000816000815181106110c7576110c7611768565b602002602001015190506000826001815181106110e6576110e6611768565b6020026020010151905061110d611106838761150390919063ffffffff16565b85906114df565b9350600061112a8761108f600954856114eb90919063ffffffff16565b905060006111478861108f600a54866114eb90919063ffffffff16565b905060006111648961108f600b54876114eb90919063ffffffff16565b905060006111738b60646114f7565b6007546040519192506001600160a01b03169085156108fc029086906000818181858888f193505050501580156111ae573d6000803e3d6000fd5b50600a54156111f3576008546040516001600160a01b039091169084156108fc029085906000818181858888f193505050501580156111f1573d6000803e3d6000fd5b505b600b541561124e576112058183610930565b505060408051838152602081018590527fe74b04c1435e286c6b8eba73f0f16a0a2fcc9d21d879598ecacf17db8c49770192500160405180910390a161124b8882611503565b97505b6112598d8d8a6112c7565b50505050505050505050505050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0383166113435760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610739565b6001600160a01b0382166113bf5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610739565b6001600160a01b0383166000908152602081905260409020548181101561144e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610739565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061148590849061170c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114d191815260200190565b60405180910390a350505050565b6000610cba828461170c565b6000610cba82846118ca565b6000610cba82846118e9565b6000610cba828461190b565b600060208083528351808285015260005b8181101561153c57858101830151858201604001528201611520565b8181111561154e576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610ec457600080fd5b6000806040838503121561158c57600080fd5b823561159781611564565b946020939093013593505050565b6000806000606084860312156115ba57600080fd5b83356115c581611564565b925060208401356115d581611564565b929592945050506040919091013590565b6000602082840312156115f857600080fd5b8135610cba81611564565b6000806040838503121561161657600080fd5b50508035926020909101359150565b60006020828403121561163757600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156116765783518352928401929184019160010161165a565b50909695505050505050565b6000806040838503121561169557600080fd5b82356116a081611564565b915060208301356116b081611564565b809150509250929050565b600181811c908216806116cf57607f821691505b602082108114156116f057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561171f5761171f6116f6565b500190565b60008060006060848603121561173957600080fd5b8351925060208401519150604084015190509250925092565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60006020828403121561179057600080fd5b8151610cba81611564565b600060a082018783526020878185015260a0604085015281875180845260c086019150828901935060005b818110156117eb5784516001600160a01b0316835293830193918301916001016117c6565b50506001600160a01b03969096166060850152505050608001529392505050565b6000602080838503121561181f57600080fd5b825167ffffffffffffffff8082111561183757600080fd5b818501915085601f83011261184b57600080fd5b81518181111561185d5761185d611752565b8060051b604051601f19603f8301168101818110858211171561188257611882611752565b6040529182528482019250838101850191888311156118a057600080fd5b938501935b828510156118be578451845293850193928501926118a5565b98975050505050505050565b60008160001904831182151516156118e4576118e46116f6565b500290565b60008261190657634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561191d5761191d6116f6565b50039056fea2646970667358221220be91286f081eb7bd3c2917a7d5fe7485bd1af6cda033ebb5852227d4e681283564736f6c63430008090033";

type DegenerateApePartyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DegenerateApePartyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DegenerateApeParty__factory extends ContractFactory {
  constructor(...args: DegenerateApePartyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "DegenerateApeParty";
  }

  deploy(
    _routerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DegenerateApeParty> {
    return super.deploy(
      _routerAddress,
      overrides || {}
    ) as Promise<DegenerateApeParty>;
  }
  getDeployTransaction(
    _routerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_routerAddress, overrides || {});
  }
  attach(address: string): DegenerateApeParty {
    return super.attach(address) as DegenerateApeParty;
  }
  connect(signer: Signer): DegenerateApeParty__factory {
    return super.connect(signer) as DegenerateApeParty__factory;
  }
  static readonly contractName: "DegenerateApeParty";
  public readonly contractName: "DegenerateApeParty";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DegenerateApePartyInterface {
    return new utils.Interface(_abi) as DegenerateApePartyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DegenerateApeParty {
    return new Contract(address, _abi, signerOrProvider) as DegenerateApeParty;
  }
}
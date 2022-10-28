// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721A, Ownable {
    string public uriPrefix = '';
    string public uriSuffix = '.json';
    uint256 public max_supply = 10000;
    uint256 public amountMintPerAccount = 10;
    
    event MintSuccessful(address user);

    constructor() ERC721A("FREAKY RABBIT", "FR") { }

    function mint(uint256 _quantity) external payable {
        require(msg.value >= getPrice(), "Not enough ETH sent; check price!");
        require(balanceOf(msg.sender) + _quantity <= amountMintPerAccount, 'Each address may only mint x NFTs!');

        _mint(msg.sender, _quantity);
        
        emit MintSuccessful(msg.sender);
    }

    function getPrice() view public returns(uint) {
        if (msg.sender != owner()) {
            return 0.03 ether;
        }

        return 0 ether; // No minting price for owner
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, Strings.toString(_tokenId), uriSuffix))
            : '';
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmcmNkAfGTLcnnQh61DNDvxVfhNdo5f5zK1gFXeEvCnE1B/";
    }
    
    function baseTokenURI() public pure returns (string memory) {
        return _baseURI();
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmSEpHurXTj4g8DKMYNhhGqnDf93yGLpibcY62AxgtEDJn/";
    }

    function setAmountMintPerAccount(uint _amountMintPerAccount) public onlyOwner {
        amountMintPerAccount = _amountMintPerAccount;
    }
}
const Neko = artifacts.require('Neko')

const { assert } = require('chai')
const { BN, expectRevert } = require('@openzeppelin/test-helpers')

contract('Neko', async (accounts) => {

  let neko
  
  beforeEach(async () => {
    neko = await Neko.deployed()
  })

  it('should be able to withdraw eth in the contract', async function() {
    await web3.eth.sendTransaction({
      from: accounts[1], 
      to: neko.address, 
      value: web3.utils.toWei('1', 'ether')
    })
    const balance0 = new BN(await web3.eth.getBalance(await neko.owner()))
    await neko.withdraw({ from: await neko.owner() })
    const balance1 = new BN(await web3.eth.getBalance(await neko.owner()))
    // for some reason there are no gas fees on ganache,
    // but withdrawing works that is what counts
    assert.equal(
      balance1.sub(balance0).toString(), 
      web3.utils.toWei('1', 'ether')
    )
  })
})

const Neko = artifacts.require('Neko')

const { assert } = require('chai')
const { expectRevert } = require('@openzeppelin/test-helpers')

contract('Neko', async (accounts) => {

  let neko

  beforeEach(async () => {
    neko = await Neko.deployed()
  })

  it('sets the marketing wallet address', async () => {
    const oldAddress = await neko.marketingWallet()
    assert.isFalse(accounts[2] == oldAddress)
    await neko.setMarketingWallet(accounts[2])
    const newAddress = await neko.marketingWallet()
    assert.equal(newAddress, accounts[2])
  })

  it('only owner can set the marketing wallet', async () => {
    assert.isFalse(accounts[2] == await neko.owner())
    await expectRevert(
      neko.setMarketingWallet(
        accounts[2], 
        { from: accounts[2] }
      ),
      'Ownable: caller is not the owner'
    )
  })
})
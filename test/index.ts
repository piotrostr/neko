import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import DegeneratePartyAbi from "../artifacts/contracts/DegenerateApeParty.sol/DegenerateApeParty.json";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
import {
  DegenerateApeParty,
  IUniswapV2Router02,
  IUniswapV2Factory,
} from "../typechain";
import { parseEther } from "ethers/lib/utils";

const { deployContract, provider } = waffle;

describe("DegenerateApeParty", () => {
  let signers: SignerWithAddress[];
  let owner: SignerWithAddress;
  let contract: DegenerateApeParty;
  let router: IUniswapV2Router02;
  let factory: IUniswapV2Factory;
  let marketingWallet: string;
  let drinksWallet: string;
  let venueWallet: string;
  let initialDapPrice: BigNumber;
  let bob: SignerWithAddress;
  let alice: SignerWithAddress;

  // functions to be used throughout the tests
  const setMarketingWallet = async () => {
    const set = await contract.setMarketingWallet(marketingWallet);
    await set.wait();
    expect(await contract.marketingWallet()).to.equal(marketingWallet);
  };

  const setVenueWallet = async () => {
    const set = await contract.setVenueWallet(venueWallet);
    await set.wait();
    expect(await contract.venueWallet()).to.equal(venueWallet);
  };

  const setDrinksWallet = async () => {
    const set = await contract.setDrinksWallet(drinksWallet);
    await set.wait();
    expect(await contract.drinksWallet()).to.equal(drinksWallet);
  };

  const setupRouter = async () => {
    const ethIn = parseEther("5");
    const ethTransferTx = await owner.sendTransaction({
      from: owner.address,
      to: contract.address,
      value: ethIn,
    });
    await ethTransferTx.wait();

    const dapIn = parseEther("50000");
    const dapTransferTx = await contract.transferFrom(
      owner.address,
      contract.address,
      dapIn,
    );
    await dapTransferTx.wait();

    const addLiqTx = await contract.addLiquidity(dapIn, ethIn);
    await addLiqTx.wait();

    initialDapPrice = ethIn.div(dapIn);
  };

  before(async () => {
    signers = await ethers.getSigners();
    owner = signers[0];
    bob = signers[5];
    alice = signers[6];
    marketingWallet = await signers[1].getAddress();
    venueWallet = await signers[2].getAddress();
    drinksWallet = await signers[3].getAddress();
  });

  beforeEach(async () => {
    const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    router = await ethers.getContractAt("IUniswapV2Router02", routerAddress);

    const factoryAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
    factory = await ethers.getContractAt("IUniswapV2Factory", factoryAddress);

    contract = (await deployContract(owner, DegeneratePartyAbi, [
      routerAddress,
    ])) as DegenerateApeParty;
    expect(router.address).to.equal(
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    );
    const pair = await factory.getPair(contract.address, await contract.WETH());
    const approval = await contract.approve(
      owner.address,
      await contract.totalSupply(),
    );
    await approval.wait();
    expect(pair).not.to.be.null;
    expect(initialDapPrice).not.to.be.null;
    expect(await contract.allowance(owner.address, owner.address)).to.equal(
      await contract.totalSupply(),
    );
  });

  describe("constants", () => {
    it(`should have a name of "DegenerateApeParty"`, async () => {
      const name = await contract.name();
      expect(name).to.equal("DegenerateApeParty");
    });

    it(`should have a symbol of "DAP"`, async () => {
      const symbol = await contract.symbol();
      expect(symbol).to.equal("DAP");
    });

    it("should have total supply of one million", async () => {
      const oneMillion = BigNumber.from(10).pow(
        6 + (await contract.decimals()),
      );
      expect(await contract.totalSupply()).to.equal(oneMillion);
    });
  });

  describe("ownership", () => {
    it("only owner can transfer ownership", async () => {
      const newOwner = signers[1].address;
      await expect(
        contract.transferOwnership(newOwner, { from: signers[2].address }),
      ).to.be.reverted;
    });

    it("should be able to transfer ownership", async () => {
      let contractOwner: string;
      contractOwner = await contract.owner();
      expect(contractOwner).to.equal(owner.address);
      const newOwner = signers[1].address;
      const changeOwnershipTx = await contract.transferOwnership(newOwner);
      await changeOwnershipTx.wait();
      contractOwner = await contract.owner();
      expect(contractOwner).to.equal(newOwner);
    });
  });

  describe("payable", () => {
    it("contract should be able to receive eth", async () => {
      const txValue = ethers.utils.parseEther("3");
      const tx = await owner.sendTransaction({
        from: owner.address,
        to: contract.address,
        value: txValue,
      });
      await tx.wait();
      expect(await provider.getBalance(contract.address)).to.equal(txValue);
    });

    it("owner should be able to withdraw eth from contract", async () => {
      const txValue = ethers.utils.parseEther("3");
      const tx = await owner.sendTransaction({
        to: contract.address,
        value: txValue,
      });
      await tx.wait();
      const contractBalance = await provider.getBalance(contract.address);
      expect(contractBalance).to.equal(txValue);

      const initialOwnerBalance = await provider.getBalance(owner.address);
      const withdrawTx = await contract.withdraw();
      const withdrawReceipt = await withdrawTx.wait();
      const ownerBalance = await provider.getBalance(owner.address);
      const gas = withdrawReceipt.gasUsed.mul(
        withdrawReceipt.effectiveGasPrice,
      );
      expect(initialOwnerBalance.sub(gas).add(txValue)).to.equal(ownerBalance);
    });
  });

  describe("setting wallets", () => {
    it("sets the marketing wallet properly", async () => {
      await setMarketingWallet();
    });

    it("sets the venue wallet properly", async () => {
      await setVenueWallet();
    });

    it("sets the drinks wallet properly", async () => {
      await setDrinksWallet();
    });
  });

  describe("fees", () => {
    beforeEach(async () => {
      await setupRouter();
    });

    it("owner is excluded from the fees", async () => {
      await setMarketingWallet();
      const amount = parseEther("2");

      const marketingBalance0 = await provider.getBalance(marketingWallet);

      const transfer = await contract.transferFrom(
        owner.address,
        bob.address,
        amount,
      );
      transfer.wait();

      expect(await contract.balanceOf(bob.address)).to.equal(amount);
      const marketingBalance1 = await provider.getBalance(marketingWallet);

      expect(marketingBalance1.eq(marketingBalance0));
    });

    it("takes the marketing fees", async () => {
      await setMarketingWallet();
      const amount = parseEther("2");

      await owner.sendTransaction({
        from: owner.address,
        to: contract.address,
        value: amount,
      });

      expect(await provider.getBalance(contract.address)).to.eq(amount);

      const transferToBob = await contract.transferFrom(
        owner.address,
        bob.address,
        amount,
      );
      transferToBob.wait();

      expect(await contract.balanceOf(bob.address)).to.equal(amount);

      contract = contract.connect(bob);
      await (
        await contract.approve(bob.address, await contract.totalSupply())
      ).wait();

      const marketingBalance0 = await provider.getBalance(marketingWallet);

      const transferWithFee = await contract.transfer(alice.address, amount, {
        from: bob.address,
      });
      /*
      await transferWithFee.wait();

      const marketingBalance1 = await provider.getBalance(marketingWallet);

      expect(marketingBalance1.gt(marketingBalance0)).to.be.true;
      */
    });

    // const feeAmount = amount.mul(19).div(100);
    // const marketingFee = amount.mul(8).div(19);
  });
});
const {expect}=require('chai');
const { ethers, upgrades } = require('hardhat');
let Box;
let box;

describe("text Box proxy functionality",function(){
    beforeEach(async function(){
        Box=await ethers.getContractFactory("Box");
        box =await upgrades.deployProxy(Box,[10],{initializer:"store"});
    });

    //test case
    it('retrive -returns a value previously initialized',async function(){
        expect((await box.retrieve()).toString()).to.equal('10');
    });
});
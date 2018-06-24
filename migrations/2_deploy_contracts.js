var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
var Organization = artifacts.require("./Organization.sol");
var UserProfile = artifacts.require("./UserProfile.sol");
var Authentication = artifacts.require("./Authentication.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Authentication);
  deployer.deploy(Authentication);
  deployer.link(Killable, UserProfile);
  deployer.deploy(UserProfile);
  deployer.link(Killable, Organization);
  deployer.deploy(Organization);
};

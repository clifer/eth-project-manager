# Authenticate, Manage Profile, Organziations and Projects, Solidity, React, Redux and Authentication

Using Solidity, Webpack and React, this DAPP builds on Truffle's react-auth box. A great starting point for building your own project management system.

## Installation

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Clone the repository.
    ```javascript
    git clone https://github.com/clifer/eth-project-manager.git
    ```

3. Install the node modules
    ```javascript
    node install
    ```

4. Run the development console.
    ```javascript
    truffle develop
    ```

5. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

6. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```

7. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

8. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

9. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## TODO

* Add page to update Orgs
* Add Project contract and supporting pages
* Add Orgs and Projects to Dashboard
* Create Token

## FAQ

* __How do I use this with the EthereumJS TestRPC?__

    It's as easy as modifying the config file! [Check out the Truffle documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 34 of `src/util/web3/getWeb3.js`.

* __Why is there both a truffle.js file and a truffle-config.js file?__

    `truffle-config.js` is a copy of `truffle.js` for compatibility with Windows development environments. Feel free to it if it's irrelevant to your platform.

* __Where is my production build?__

    The production build will be in the build_webpack folder. This is because Truffle outputs contract compilations to the build folder.

* __Where can I find more documentation about Truffle?__

    This DAPP uses [Truffle](http://truffleframework.com/) and a React Authentication setup created with [react-auth](https://truffleframework.com/boxes/react-auth). This would be a great place to start!

import OrganizationContract from '../../../../build/contracts/Organization.json'
import store from '../../../store'

const contract = require('truffle-contract')

export const ORG_CREATED = 'ORG_CREATED'
function orgCreated(name, address1, address2, city, state, country, phone, email) {
  return {
    type: ORG_CREATED,
    payload: name, address1, address2, city, state, country, phone, email
  }
}

export function createOrg(name, address1, address2, city, state, country, phone, email) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the org object.
      const organization = contract(OrganizationContract)
      organization.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on OrgCreate.
      var organizationInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        organization.deployed().then(function(instance) {
          organizationInstance = instance
          // Attempt to create org.
          organizationInstance.createOrg(name, address1, address2, city, state, country, phone, email, {from: coinbase})
          .then(function(result) {
            // If no error, create org.
            console.log('YYYYY')
            dispatch(orgCreated({"name": name,
                                 "address1": address1,
                                 "address2": address2,
                                 "city": city,
                                 "state": state,
                                 "country": country,
                                 "phone": phone,
                                 "email": email
                                 }))
            console.log('ZZZZZ')
            organizationInstance.getUserOrgs.call()
            .then(function(result) {
                console.log(result)

            return alert('Org created!')
            })
          })
          .catch(function(result) {
            // If error...
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}

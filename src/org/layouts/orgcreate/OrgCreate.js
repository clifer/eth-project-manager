import React, { Component } from 'react'
import OrgCreateFormContainer from '../../ui/orgcreateform/OrgCreateFormContainer'

class OrgCreate extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Create Org</h1>
            <p>Enter your org details here.</p>
            <OrgCreateFormContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default OrgCreate

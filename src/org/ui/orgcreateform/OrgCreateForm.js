import React, { Component } from 'react'


class OrgCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      address1: this.props.address1,
      address2: this.props.address2,
      city: this.props.city,
      state: this.props.state,
      country: this.props.country,
      phone: this.props.phone,
      email: this.props.email
    }
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.name)
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault()

    // if (this.state.username.length 2)
    // {
    //   return alert('Please fill in your username.')
    // }

    this.props.onOrgCreateFormSubmit(this.state.name, this.state.address1, this.state.address2, this.state.city, this.state.state, this.state.country, this.state.phone, this.state.email)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input id="name" name="name" type="text" value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder="Org Name" />
          <input id="address1" name="address1" type="text" value={this.state.address1} onChange={this.onInputChange.bind(this)} placeholder="Address1" />
          <input id="address2" name="address2" type="text" value={this.state.address2} onChange={this.onInputChange.bind(this)} placeholder="Address2" />
          <input id="city" name="city" type="text" value={this.state.city} onChange={this.onInputChange.bind(this)} placeholder="City" />
          <input id="state" name="state" type="text" value={this.state.state} onChange={this.onInputChange.bind(this)} placeholder="State" />
          <input id="country" name="country" type="text" value={this.state.country} onChange={this.onInputChange.bind(this)} placeholder="Country" />
          <input id="phone" name="phone" type="text" value={this.state.phone} onChange={this.onInputChange.bind(this)} placeholder="Phone #" />
          <input id="email" name="email" type="text" value={this.state.email} onChange={this.onInputChange.bind(this)} placeholder="Email Address" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Create</button>
        </fieldset>
      </form>
    )
  }
}

export default OrgCreateForm

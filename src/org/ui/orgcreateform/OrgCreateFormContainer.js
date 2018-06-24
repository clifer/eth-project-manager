import { connect } from 'react-redux'
import OrgCreateForm from './OrgCreateForm'
import { createOrg } from './OrgCreateFormActions'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.org.name,
    address1: state.org.address1,
    address2: state.org.address2,
    city: state.org.city,
    state: state.org.state,
    country: state.org.country,
    phone: state.org.phone,
    email: state.org.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOrgCreateFormSubmit: (name, address1, address2,  city, state, country, phone, email) => {
      event.preventDefault();

      dispatch(createOrg(name, address1, address2,  city, state, country, phone, email))
    }
  }
}

const OrgCreateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgCreateForm)

export default OrgCreateFormContainer

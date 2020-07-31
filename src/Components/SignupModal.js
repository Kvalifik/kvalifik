import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Background = styled.div`
  background: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5000;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  background: #252525;
  max-width: 1120px;
  width: 100%;
  margin: ${props => props.theme.spacing(0, 1.5)};
  padding: ${props => props.theme.spacing(6)};
  position: relative;
  @media ${props => props.theme.media.sm} {
    padding: ${props => props.theme.spacing(5, 3)};
  }
`

const Heading = styled.h1`
  margin: 0;
  color: white;
  line-height: 50px;
  margin-bottom: ${props => props.theme.spacing(6)};
  @media ${props => props.theme.media.sm} {
    font-size: 17px;
  }
`
const StatusMessage = styled.p`
  color: white;
  font-size: 20px;
  margin-top: ${props => props.theme.spacing(3.5)};
  margin-bottom: ${props => props.theme.spacing(5.5)};
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1020px;
  & > input {

    max-width: 500px;
    width: 100%;

    &:first-of-type {
      margin-right: ${props => props.theme.spacing(2.5)};
    }
  }
  
`
const Label = styled.label`
  color: ${props => props.theme.palette.primary.D};
  font-size: 17px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing(1.5)};
  text-transform: uppercase;
`

const Input = styled.input`
  max-width: 1020px;
  width: 100%;
  padding: ${props => props.theme.spacing(3, 2)};
  margin-bottom: ${props => props.theme.spacing(3.75)};
  
  background: #515151;

  color: white;  
  &:placeholder {
    color: #A8A8A8;
  }
  &:focus {
    outline: none;
  }
  border: none;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing(2.5)};
`
const SignupButton = styled.input`
  background: ${props => props.theme.palette.primary.D};
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing(3, 3)};
  border: none;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`
const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  font-size: 20px;
  position: absolute;
  top: 20px;
  @media ${props => props.theme.media.sm} {
    top: 40px;
  }
  
  right: 20px;
  padding: ${props => props.theme.spacing(1.5)};
  background: none;
  border: none;
  color: white;
  box-sizing: content-box;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

class SignupModal extends React.Component {
  constructor (props) {
    super(props)
    this.callToAction = this.props.callToAction
    this.successMessage = this.props.successMessage
    this.errorMessage = this.props.errorMessage
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleNewsletterSignup = this.handleNewsletterSignup.bind(this)
    this.state = {
      formSubmitted: false,
      statusMessage: '',
      firstName: '',
      lastName: '',
      email: this.props.email,
      company: ''
    }
  }

  handleButtonClick () {
    this.props.hideModal()

    // Revert to sign up form
    this.setState({
      formSubmitted: false
    })
  }

  handleNewsletterSignup (e) {
    e.preventDefault()
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const email = this.state.email
    const company = this.state.company

    addToMailchimp(email, {
      FNAME: firstName,
      LNAME: lastName,
      COMPANY: company
    })
      .then(data => {
        if (data.result === 'success') {
          this.setState({
            formSubmitted: true,
            statusMessage: this.successMessage
          })
        } else {
          this.setState({
            formSubmitted: true,
            statusMessage: this.errorMessage !== '' ? this.errorMessage : data.msg
          })
        }
      })
  }

  render () {
    return (
      <Background>
        <Modal>
          <Heading>{this.callToAction}</Heading>
          {this.state.formSubmitted ? (
            <StatusMessage>{this.state.statusMessage}</StatusMessage>
          )
            : (
              <form onSubmit={(e) => this.handleNewsletterSignup(e)} action="#" method="POST">
                <InputGroup>
                  <Label htmlFor="newsletter_email">Email *</Label>
                  <Input
                    id="newsletter_email"
                    name="email"
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    value={this.state.email}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="newsletter_firstName">Name *</Label>
                  <Row>
                    <Input
                      id="newsletter_firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      onChange={(e) => this.setState({ firstName: e.target.value })}
                      value={this.state.firstName}
                      required
                    />
                    <Input
                      id="newsletter_lastname"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      onChange={(e) => this.setState({ lastName: e.target.value })}
                      value={this.state.lastName}
                      required
                    />
                  </Row>
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="newsletter_company">company</Label>
                  <Input
                    id="newsletter_company"
                    name="company"
                    type="text"
                    onChange={(e) => this.setState({ company: e.target.value })}
                    value={this.state.company}
                  />
                </InputGroup>
                <ButtonWrapper>
                  <SignupButton type="submit" value="Sign up" />
                </ButtonWrapper>
              </form>
            )
          }

          <CloseButton onClick={() => this.handleButtonClick()}>╳</CloseButton>

        </Modal>
      </Background>
    )
  }
}

SignupModal.propTypes = {
  hideModal: PropTypes.func,
  callToAction: PropTypes.string,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  email: PropTypes.string
}

export default SignupModal

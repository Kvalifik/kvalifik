import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Svg from 'react-inlinesvg'
import MailChimpGDPR from '../graphics/mailchimp-gdpr.svg'

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
  max-width: 960px;
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
      margin-right: ${props => props.theme.spacing(5)};
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
  margin-bottom: ${props => props.theme.spacing(3.75)};
  height: 100%;
  min-height: 55px;
  padding: ${props => props.theme.spacing(2,2)};
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

const PrivacyPolicy = styled.div`
  display: flex;
  flex-direction: row;
`;

const CheckboxContainer = styled.div`
  margin-top: 5px;
  margin-right: ${props => props.theme.spacing(2)};
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.checked 
    ? "#515151"
    : "#515151"
  };
  cursor: pointer;
  ${({ checked }) => checked && `
    &::after {
      content: '✔';
      display: flex;
      height: 20px;
      width: 20px;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #49EAAC;
    }
  `}
`;
const CheckboxMessage = styled.div`
  & > * {
    color: white;
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: ${props => props.theme.spacing(2.5)};
`
const SignupButton = styled.input`
  background: ${props => props.consented 
    ? props.theme.palette.primary.D
    : "#515151"
  };
  color: ${props => props.consented
    ? "black"
    : "#A8A8A8"
  };

  width: 100%;
  padding: ${props => props.theme.spacing(1.5, 4)};
  border: none;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: ${props => props.consented 
    ? "pointer"
    : "disabled"
  };
  max-width: 200px;
  min-height: 55px;
  &:focus {
    outline: none;
  }


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

const MailChimpDisclaimer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${props => props.theme.spacing(3)};
  & > svg {
    width: 96px;
    margin-right: ${props => props.theme.spacing(2)};
  }
`;
const DisclaimerText = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: white;
`;

class SignupModal extends React.Component {
  constructor (props) {
    super(props)
    this.callToAction = this.props.callToAction
    this.successMessage = this.props.successMessage
    this.checkboxMessage = this.props.checkboxMessage
    this.errorMessage = this.props.errorMessage
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleNewsletterSignup = this.handleNewsletterSignup.bind(this)
    this.state = {
      formSubmitted: false,
      statusMessage: '',
      firstName: '',
      lastName: '',
      email: this.props.email,
      consented: false,
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
              <form action="#" method="POST">
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

                <PrivacyPolicy>
                  <CheckboxContainer>
                    <Checkbox 
                      checked={this.state.consented}
                      onClick={() => this.setState({consented: !this.state.consented})} 
                    />
                  </CheckboxContainer>
                  <CheckboxMessage dangerouslySetInnerHTML={{__html: this.checkboxMessage}} />
                </PrivacyPolicy>

                <ButtonWrapper>
                  <SignupButton consented={this.state.consented} type="submit" value="Sign up" onSubmit={(e) => this.handleNewsletterSignup(e)}/>
                </ButtonWrapper>
                <MailChimpDisclaimer>
                  <Svg src={MailChimpGDPR} />
                  <DisclaimerText>
                    <span>We use Mailchimp as our marketing platform. By clicking below to subscribe, 
                      you acknowledge that your information will be transferred to Mailchimp for processing. </span>
                    <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a> 
                    </DisclaimerText>
                </MailChimpDisclaimer>
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
  checkboxMessage: PropTypes.string,
  email: PropTypes.string
}

export default SignupModal

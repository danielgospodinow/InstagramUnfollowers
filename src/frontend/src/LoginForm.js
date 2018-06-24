import React from 'react'
import { Form, Button, Message, Segment, Grid, Image, Transition } from 'semantic-ui-react'

class LoginForm extends React.Component
{
  constructor()
  {
    super()

    this.state = {
      loading: false,
      error: false,
      errorMessage: "",

      username: "",
      password: "",

      visible: true
    }
  }

  onLoginClicked()
  {
    this.setState({ loading: true, error: false, visible: false });

    //0.0.0.0:5000
    //instaunfollowers.ddns.net:5000
    fetch('http://0.0.0.0:5000/?username=' + this.state.username + '&password=' + this.state.password, {
      //method: 'POST',
      //mode: 'cors',
      /*
        body: JSON.stringify({
        username: "kur",
        password: "putaranka",
      })
      */
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ error: false, loading: false })
      this.props.logSuccessful(response)
    })
    .catch(er => {
      this.setState({ loading: false, error: true, errorMessage: er.toString() })
    });
  }

  onFormChange (event, data) 
  {
    this.setState({ [event.target.name]: [event.target.value] })
  }

  render() {
    return (
      <div className='login-form'>
      
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>

        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 350 }}>

            <Transition visible={this.state.visible} animation='fade down' duration={500}>
              <Image src='frontLogo.png' size='tiny' centered style={{marginBottom:"10%"}} />
            </Transition>

            <Form loading={this.state.loading} error={this.state.error} onSubmit={this.onLoginClicked.bind(this)}>
              <Segment>
                
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  name="username" 
                  value={this.state.username}
                  onChange={this.onFormChange.bind(this)}
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password"
                  value={this.state.password} 
                  onChange={this.onFormChange.bind(this)}
                />
    
                <Button color='black' fluid size='large' type='submit'>Login</Button>
    
                <Message
                    error
                    header={this.state.errorMessage}
                />

              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm
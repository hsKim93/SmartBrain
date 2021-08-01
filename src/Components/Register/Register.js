import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    };


    render() {
        return (
            <article className="br3 bw1 ba dark-gray b--black-10 mv4  mw6 shadow-3 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="register"
                            className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6"
                                    htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    onChange={this.onNameChange}
                                    type="name"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6"
                                    htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    onChange={this.onEmailChange}
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6"
                                    htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                    onChange={this.onPasswordChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib"
                                type="submit"
                                value="Register"
                                onClick={this.onSubmitSignin}
                            />
                        </div>
                    </div>
                </main>
            </article >
        );
    }
}
export default Register;
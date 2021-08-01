import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    };

    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onSubmitSignin();
        }
    };

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    };

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    };

    onSubmitSignin = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    this.props.loadUser(data);
                    this.props.onRouteChange('home');
                }
            })
    };

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 bw1 ba dark-gray b--black-10 mv4  mw6 shadow-3 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up"
                            className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6"
                                    htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    onKeyPress={this.onKeyPress}
                                    onChange={this.onEmailChange}
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6"
                                    htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    onKeyPress={this.onKeyPress}
                                    onChange={this.onPasswordChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <div className="">
                            <input className="b ph4 pv2 input-reset ba b--black bg-transparent pointer f6 dib"
                                type="submit"
                                value="Sign in"
                                onClick={this.onSubmitSignin}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p
                                onClick={() => onRouteChange('register')}
                                className="f6 link dim black db pointer"
                            >
                                Register
                            </p>
                            {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                        </div>
                    </div>
                </main>
            </article >
        );
    };
}
export default Signin;
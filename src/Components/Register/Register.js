import React from 'react';

const Register = ({ onRouteChange }) => {
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
                                type="name"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6"
                                htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                                type="email"
                                name="email-address"
                                id="email-address"
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6"
                                htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
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
                            onClick={() => onRouteChange('signin')}
                        />
                    </div>
                </div>
            </main>
        </article >
    );
}
export default Register;
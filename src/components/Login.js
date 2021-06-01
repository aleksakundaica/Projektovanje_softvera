
import React, { useState } from 'react';
import '../css/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //koristeci firebase metodu
    //signInWithEmailAndPassword
    //korisnik prosledjuje potrebne parametre
    //za ulogovanje na aplikaciju
    //auth varijabila drzi korisnikov ID
    //preko kojeg se moze utrvridti da li
    //korisnik sa prosledjenim informacijama
    //deo baze podataka
    //u slucaju da jeste, stranica se automatski
    //prebacuje na pocetnu stranu preko history.push('/')
    // u slucaju da nije, uhvatice error i ispisati ga u konzolu 
    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                //prebacuje na pocetnu stranicu preko history-a
                if (auth) {
                    history.push('/');
                }
            }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signInButton" onClick={signIn} type="submit">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create Amazon accont</button>
            </div>
        </div>
    )
}

export default Login

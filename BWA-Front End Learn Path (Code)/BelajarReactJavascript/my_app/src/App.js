import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const userLogged = "Adi Nugraha Putra"
    const userLoggedJSX = <strong> Kamu Belajar React Javascript! </strong>

    let a = 0
    let b = 1

    return ( 
        <div className = "Parentbox" >
            {/* <h1>Belajar React Javascript!</h1>
            <p>Meningkatkan keahlian Design dan Coding</p>
            <h2>Yuk Ikutan!</h2>
            {userLogged}
            {userLoggedJSX}
            {a+b / 100} */}
            <div class="Foto">
                <img src="pic08.jpg"></img>
            </div>
            <div class="Deskripsi">

            </div>
        </div>
    );
}

export default App;
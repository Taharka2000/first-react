import React from 'react';
import "./Formulaire.css"
export default function Formulaire(){
    return(
        <>
    <div class="container">
        <h1>Contactez-nous</h1>
        <form action="#" method="post">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required/>

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" placeholder="Entrez votre email" required/>

            <label for="message">Message :</label>
            <textarea id="message" name="message" placeholder="Écrivez votre message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    </div>
        </>
    )
}
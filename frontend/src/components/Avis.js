import React from "react";
import Avis_laissé from './Avis_laissé.js';

export default class Avis extends React.Component{

    render(){

        return(
            <main>
                <Avis_laissé />
                <h3>Voir plus d'avis</h3>
                <h2>Laisser un avis</h2>
                <input type="text" placeholder="Tapez votre avis ici"/>
                <input type="submit">Valider</input>
            </main>
        )
    }
}
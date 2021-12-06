import React from "react";

export default class Avis_laissé extends React.Component{


    render(){

        return(
            <main>
                <h1>Avis</h1>
                <h2>Avis laissés</h2>
                <article class="container_avis">
                    <img class="photo_avis_laissé" src="" alt=""/>
                    <article class="container_avis_nom_prenom">
                        <h2>Nom</h2>
                        <h2>Prenom</h2>
                    </article>
                    <img class="note_avis_laissé" src="" alt=""/>
                </article>
                
            </main>
        )
    }
}
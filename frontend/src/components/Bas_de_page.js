import React from "react";

export default class Bas_de_page extends React.Component{


    render(){

        return(
            <main class="contact"> 
                <h1 class="bas_de_page_text">Nous contacter</h1>
                <h2 class="bas_de_page_text">télephone</h2>
                <h2 class="bas_de_page_text">mail</h2>
                <article class="reseaux_sociaux bas_de_page_text">
                    <a href="#" class="instagram_boutton"><img class="instagram_logo reseaux_sociaux_boutton" src="logo_instagram.png" alt=""/></a>
                    <a href="#" class="facebook_boutton"><img class="facebook_logo reseaux_sociaux_boutton" src="logo_facebook.png" alt=""/></a>
                    <a href="#" class="linkedin_boutton"><img class="linkedin_logo reseaux_sociaux_boutton" src="logo_linkedin.png" alt=""/></a>
                </article>
            </main>
        )
    }
}
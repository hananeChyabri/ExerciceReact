
import { nanoid } from 'nanoid';
import { useState } from 'react';
import './formContact.css'

function formContact() {
    const [isHover, setIsHover] = useState(false);

    //toutes les informations des inputs du formulaire
    const [formValues, setFormValues] = useState({
        id: nanoid(), // Utilisation de nanoid pour générer un identifiant unique par object
        prenom: '',
        nomFamille: '',
        email: '',
        message: '',
        accepte: false
    });

    const handleChanges = (event) => {
        const { name, type, value, checked } = event.target;

        setFormValues((prevValues) => ({ ...prevValues, [name]: type === 'checkbox' ? checked : value }))
    }


    const HandleStyleHover = () => {
     setIsHover(true);

    }

    const HandleStyleInHover = () => {
        console.log("allleee le css");
        setIsHover(false);
   
       }

    

    // Fonction qui va se déclencher au clic du bouton submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }


    return (
        <>
            <h1>Formulaire de contact</h1>
            <section>
                <form onSubmit={handleSubmit}>
                   
                        <div><label htmlFor="prenom" >Indiquez votre Prénom </label>
                        
                       <input type="text" name="prenom" id="prenom"  onMouseEnter={HandleStyleHover} onMouseLeave={HandleStyleInHover} style={{ border: isHover ? '2px solid red' : '1px solid black' }} value={formValues.prenom} onChange={handleChanges} /></div>
             

                    <div>
                        <label htmlFor="nomFamille">Indiquez votre Nom de Famille </label>
                        <input type="text" name="nomFamille" id="nomFamille" value={formValues.nomFamille} onChange={handleChanges} />
                    </div>

                    <div>
                        <label htmlFor="email">Indiquez votre email </label>
                        <input type="email" name="email" id="email" value={formValues.email} onChange={handleChanges} />
                    </div>

                    <div>
                        <label htmlFor="message">Indiquez votre message </label>
                        <textarea name="message" id="message" value={formValues.message} onChange={handleChanges} />
                    </div>



                    <div> <label htmlFor="accepte">Acceptez vous les condition ? </label>
                        <input type="checkbox" name="accepte" id="accepte" checked={formValues.accepte} onChange={handleChanges} /></div>



                    <button type="submit">Envoyer</button>
                </form>
            </section>
        </>
    )
}

export default formContact
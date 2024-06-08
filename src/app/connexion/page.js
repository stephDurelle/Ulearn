'use client'
import React from 'react'
import Styles from './connexion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fagoogle } from '@fortawesome/free-solid-svg-icons';
import Connexion from './connexion';
const connexion = () => {
{/** Formulaire Email et mot de passe */}

 
  return (
   
   <div className={Styles.container} >
        <div className={Styles.connexion}>
          {/**Message panier */}
        <p className={Styles.phrase}> Connecter vous à votre compte Ulearn </p>
        
        {/** tables avec icones */}
        <div className={Styles.Tables}>
        <table>
          <tbody>
          <tr>
            <td>
              
               <button className={Styles.Google}> <img src='https://img.icons8.com/?size=100&id=17949&format=png&color=000000' alt='Icone Google' width={40} height={30}/> Continuer avec Google </button> </td>
          </tr>
          </tbody>
        </table>

        <table>
          <tr>
           <tbody>
           <td> <button className={Styles.Google}> 
          <img src='https://img.icons8.com/?size=100&id=118497&format=png&color=000000' alt='Icone Facebook' width={40} height={30}/>
           Continuer avec Facebook </button> </td>
           </tbody>
          </tr>
        </table>

        <table>
          <tr>
           <tbody>
           <td> <button className={Styles.Google}> 
           <img src='https://img.icons8.com/?size=100&id=30840&format=png&color=000000' alt='Icone Apple' width={40} height={30}/>
           Continuer avec Apple </button> </td>
           </tbody>
          </tr>
        </table> 

        {/** tables Email et mot de passe */}
      
        <table >
        <tr>
          <tbody>
            <td>
            <input
        type='text'
        placeholder='Email'
        required
        className={Styles.Email}/>
       
            </td>
          </tbody>
        </tr>
        </table>

        <table >
        <tr>
          <tbody>
            <td>
            <input
        type='text'
        placeholder='mot de passe'
        required
        className={Styles.Email}/>
       
            </td>
          </tbody>
        </tr>
        </table>

        {/** Bouton connection */}

        <table>
          <tr>
           <tbody>
           <td> <button className={Styles.Connect}> 
            Se connecter </button> </td>
           </tbody>
          </tr>
        </table> 
        {/** Ne pas oublier: Je dois faire une page de reinitialisation */}
<p className={Styles.PasswordForget}> ou <a href='/formulairePasswordF'> Mot de passe oublié</a> </p>
    
    <p className={Styles.PasswordForget}>
      Vous n&apos;avez pas de compte? <a href='/inscription'>
        Inscrivez-vous!
      </a>
    </p>
    
      </div>
       

        </div>
        
    </div>
  )
}

export default connexion
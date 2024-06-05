'use client'
import React from 'react'
import Styles from './connexion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fagoogle } from '@fortawesome/free-solid-svg-icons';
const connexion = () => {
  return (
    <div className={Styles.container} >
        <div className={Styles.connexion}>
        <p className={Styles.phrase}> Connecter vous à votre compte Ulearn </p>
        
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
        </div>

        </div>
        
    </div>
  )
}

export default connexion
'use client'
import React from 'react'
import Styles from './panier.module.css'
const Page_Panier = () => {
  return (
    <div className={Styles.Container}>

<div className={Styles.Panier}>
<h1> Panier </h1>
</div>
{/** ici mon span  */}
<div className={Styles.Empty}>
  <div className={Styles.EmptyContainer}>
    <img src="./Logo/Ulearn2.png" alt="Panier vide" className={Styles.EmptyImage} />
    <p className={Styles.EmptyMessage}>Votre panier est vide. Continuez vos achats et trouvez un cours !</p>
  <a href='/'>   <button className={Styles.HomeButton} >Continuer vos Achats</button> </a>
  </div>
</div>



    </div>
  )
}

export default Page_Panier
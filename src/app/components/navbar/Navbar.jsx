'use client'
import React, { Fragment, useState } from 'react'
import Styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




const Navbar = ( ) => {

    {/** Barre de recherche */}
    const [searchTerm, setSearchTerm]= useState('');
{/* gerer ma saisie dans l'input */}
const handleInputChange= (event) =>{
    setSearchTerm(event.target.value);
   
};
 {/* soumission du formmulaire*/}
 const handleFormSubmit= (event)=>{
    event.preventDefault( );
    console.log('Recherche pour :', searchTerm);
 };
{/** --------------------------- */}

{/** panier */}

{/** --------------------------- */}

  return (
   <Fragment>
{/* Barre de navigation */}
     <div className={Styles.BarreForme}>

        <div className={Styles.Image} > <img src="./Logo/Ulearn.png" alt='Logo Ulearn'/> </div>
        <div> Categorie </div>
        {/* ma barre de recherche*/}
        <div>
<form onSubmit={handleFormSubmit} className={Styles.searchForm}>
<div className={Styles.searchBar}>

 {/* Input de ma barre de recherche*/}
<input
type="text"
placeholder='Rechercher...'
value={searchTerm}
onChange={handleInputChange}
className={Styles.searchInput}
/>
     {/* ici mon icone*/}
<span className={Styles.searchIcon}>
<button type='submit' className={Styles.searchButton}>
<FontAwesomeIcon icon={faMagnifyingGlass} />
</button>
</span>
</div>

</form>        
        </div>
        {/* --------------------------------------------------------------- */}
 
 {/*  */}
        <div className={Styles.panier} > 
        <a href='/panier'>
        <FontAwesomeIcon icon={faCartShopping} /> 
        </a>
         
        </div>

        {/* --------------------------------------------------------------- */}

        <div className={Styles.Lien}> 

        <div className={Styles.lien1}>
      <a href='/connexion'>
      <button className={Styles.Login} > Se Connecter </button>
      </a>
        </div>
        
        <div className={Styles.lien1}>
       <a href='/inscription'> 
       <button className={Styles.Logup} > S inscrire </button>
       </a>
        </div>
        
         </div>
    </div>

   </Fragment>
  )
}

export default Navbar
'use client'
import React, { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Styles from './links.module.css'


{/* ma table de liens */}

const tab=[
    {
        title: 'Se connecter',
        path:'/'
    },
    {
        title: " S'inscrire ",
        path: '/'
    }
]



const Links = () => {

const pathname = usePathname();

  return (
    <Fragment>
        <div className={Styles.Container}>
            {tab.map((element, index)=>(
            
              <Link className={`${element.path === pathname ? 'active' : ' '}`}
              key={index}
              href= {element.path}>

                {element.title}
              </Link>
            )
        
        )} 
        </div>
    </Fragment>
  )
}

export default Links
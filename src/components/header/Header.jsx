import React from 'react'
import {Logo,Container,Logoutbtn} from './index'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authstatus=useSelector(state=>state.auth.isAuthenticating)
  const navigate=useNavigate()

  const navitems=[
    {
      name:'home',
      sluge:"/",
      active:true
    },
    {
      name:'sinup',
      sluge:'/signup',
      active:!authstatus
      
    },
    {
      name:'login',
      sluge:'/login',
      active:!authstatus
    },
    {
      name:'All posts',
      sluge:'/all-posts',
    },
    {
      name:'all post',
      sluge:'/all-post',
      active:authstatus
    }
  ]

  return (
    <header>
      <container>

      <nav>
        <div>
          <Link>
            <Logo/>
          </Link>
          <ul>
            {navitems.map((item)=>
              item.active ?( 
                <li key={item.name} >
                  <button onClick={()=>navigate(item.sluge)}>
                    {item.name}
                  </button>
                </li>
              ):null
            )}
            {authstatus&&(
              <li>
                <Logoutbtn/>
              </li>
            
            )}

          </ul>
        </div>
      </nav>

      </container>
    </header>
  )
}

export default Header

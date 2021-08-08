import React, {Component} from 'react';
import {MenuItems} from './MenuItems'
import './NavBar.css'
import {Button} from './Button'


class NavBar extends Component {


    render(){
        return (
            <nav className="NavBarItems">

                <h1 className="navbar-logo">Jenifer Ruff <i className="fas fa-book"></i></h1>


                <ul className='nav-menu'>

                    {MenuItems.map((item, index) => {
                        return (
                        <li key={index}><a className={item.cName} href={item.url}>

                            {item.title}
                            </a></li>)
                    })}
                    
                </ul>
                <Button>Buy</Button>

            </nav>
        )
    }
}

export default NavBar
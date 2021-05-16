//creating the navigation bar

import {Link} from 'react-router-dom'; //the link component which helps us link a  component to another
import classes from './MainNavigation.module.css';
function MainNavigation(){
    return <header className = {classes.header}>
        <div className = {classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'>All Meetups</Link>
                </li>

                <li>
                    <Link to = '/new-meetup'>New Meetup</Link>
                </li>

                <li>
                    <Link to = '/favorities-page'>Favorities</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;
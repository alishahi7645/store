import { Button, Card } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import useStyle from '../../styles/menuStyles';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Themecontext } from '../../contex/theme/theme';
import { Brightness4, Brightness7 } from '@material-ui/icons';
function Menuitem(props) {
    const themecontext = useContext(Themecontext);
    const { ChangeTheme } = themecontext;
    console.log(ChangeTheme);
    const classes = useStyle();
    const [menustate, setmenustate] = useState(false);
    const myfunc = () => {
        setmenustate(!menustate)
    }
    return (
        <div className={classes.menuitem}>
            <ul className={classes.ul}>
                <Link to="/home" className={classes.items} onClick={myfunc}> صفحه اصلی</Link>
                <Link to="/mobile" className={classes.items} onClick={myfunc}> موبایل </Link>
                <Link to="/laptop" className={classes.items} onClick={myfunc}> لپ تاپ </Link>
                <Link to="/tablet" className={classes.items} onClick={myfunc}> تبلت </Link>
            </ul>
            <div className={classes.login}>
                <Brightness4 style={{cursor:'pointer'}} onClick={()=> ChangeTheme()}/>
                <Link to="/login" style={{ textDecoration: 'none' }}><Button color='secondary'>ورود | خروج <ExitToAppIcon /></Button></Link>
            </div>
        </div>
    )
}

export default Menuitem

import { AppBar, IconButton, InputBase, Toolbar, Typography, Badge, CardActionArea, CardMedia, CardContent, Card, CardActions, Button, Modal, Container } from '@material-ui/core'
import { Search, Cancel } from '@material-ui/icons'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import React, { useContext, useState } from 'react'
import useStyle from '../../styles/NavbarStyle';
import { MenuItem } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { Link } from 'react-router-dom';
import { Badgetcontext } from '../../contex/badget/badget';

function Navbar() {
    const badgetcontext = useContext(Badgetcontext);
    const{badget,badgetplus} = badgetcontext;

    const classes = useStyle();
    const [store, setstore] = useState(1);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        <>

            <div className={classes.navbar }>
                <AppBar className={classes.navbar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.title} variant='h5' >فروشگاه علی</Typography>

                        <div className={classes.search}>
                            <Search className={classes.iconsearch} />
                            <InputBase placeholder='جستجو کنید...' variant='outlined' className={classes.InputBase} />

                        </div>

                        <div className={classes.store}>
                            <Badge badgeContent={badget} color='primary' className={classes.badge} >
                                <LocalGroceryStoreIcon onClick={handleOpen} />
                            </Badge>
                        </div>
                    </Toolbar>
                </AppBar>
                {/* <div className={classes.menuitem}>
                    <ul>
                        <Link to="/home">صفحه اصلی</Link>
                    </ul>
                </div> */}
            </div>

            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <div className={classes.paper}>
                    <div>
                        hello
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default Navbar

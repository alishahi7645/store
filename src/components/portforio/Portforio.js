import React, { useContext,useState } from 'react'
import useStyle from '../../styles/portstyle';
import logo from '../img/digikala.jpg';
import Logo1 from '../img/digikala3.jpg'
import Logo2 from '../img/digikala2.jpg'
import Logo3 from '../img/digikala1.jpg'
import { Button, Typography } from '@material-ui/core';
import laptop from '../img/laptop.jpg';
import banner from '../img/digikala5.jpg';
import mobile from '../img/mobile.jpg'
import { Badgetcontext } from '../../contex/badget/badget';
function Portforio(props) {
    const classes = useStyle();
    const badgetcontext = useContext(Badgetcontext);
    const {setbadget,badget} = badgetcontext;
    const[event,setevent]=useState();
    const badgetplus=(e)=>{
        setbadget(badget +1);
        console.log(e.target.valu);
    }
    console.log(event);
    return (
        <>
            <div className={classes.Portforio}>
                <div className={classes.items}>
                    <div className={classes.img1}>
                        <img src={logo} className={classes.img1} />
                    </div>
                    <div className={classes.imgitems}>
                        <div className={classes.img2}>
                            <img src={Logo3} className={classes.img2} />
                        </div>
                        <div className={classes.img3}>
                            <img src={Logo3} className={classes.img3} />
                        </div>
                        <div className={classes.img4}>
                            <img src={Logo3} className={classes.img4} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bestsellerlaptop}>
                <div className={classes.bestlaptop} >
                    <div className={classes.text}>
                        <Typography variant="h5" color="initial" className={classes.typografy}>پرفروش های لپ تاپ</Typography>
                        <Button color='secondary'>مشاهده همه </Button>
                    </div>
                    <div className={classes.buylaptop}>
                        <div className={classes.itemss}>
                            <img src={laptop} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">لپ تاپ ایسوس مدل akiry5565</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button} onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button >
                            </div>
                        </div>
                        <div className={classes.itemss}>
                            <img src={laptop} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">لپ تاپ ایسوس مدل akiry5565</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button} onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button>
                            </div>
                        </div>
                        <div className={classes.itemss}>
                            <img src={laptop} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">لپ تاپ ایسوس مدل akiry5565</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button} onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button>
                            </div>
                        </div>
                        <div className={classes.itemss}>
                            <img src={laptop} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">لپ تاپ ایسوس مدل akiry5565</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button} onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.banner}>
                <img className={classes.bannerimg} src={banner} />
            </div>

            <div className={classes.bestsellermobile}>
                <div className={classes.bestmobile} >
                    <div className={classes.text}>
                        <Typography variant="h5" color="initial" className={classes.typografy}>پرفروش های  موبایل</Typography>
                        <Button color='secondary'>مشاهده همه </Button>
                    </div>
                    <div className={classes.buymobile}>
                        <div className={classes.itemssmobile}>
                            <img src={mobile} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">گوشی سامسونگ مدل (A50)</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button}onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button >
                            </div>
                        </div>
                        <div className={classes.itemssmobile}>
                            <img src={mobile} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">گوشی سامسونگ مدل (A50)</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button}onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button >
                            </div>
                        </div>
                        <div className={classes.itemssmobile}>
                            <img src={mobile} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">گوشی سامسونگ مدل (A50)</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button}onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button >
                            </div>
                        </div>
                        <div className={classes.itemssmobile}>
                            <img src={mobile} className={classes.imglaptop} />
                            <div className={classes.textbuylaptop}>
                                <Typography variant="h6" color="initial">گوشی سامسونگ مدل (A50)</Typography>
                                <Typography variant="caption" color="initial">8000000 میلیون تومان</Typography>
                                <Button variant="outlined" className={classes.button}onClick={badgetplus}>
                                    اضافه به سبد خرید
                                </Button >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portforio;

import React from 'react'
import useStyle from '../../styles/footerstyle';
import { AppBar, Typography, Button } from '@material-ui/core';
import { InstagramIcon, TelegramIcon, FacebookIcon, LinkedInIcon, Instagram, Telegram, Facebook, LinkedIn } from '@material-ui/icons';
function Footer() {
    const classes = useStyle();
    return (

        <div className={classes.footer}>

            <div className={classes.footerdesc}>
                <div className={classes.footerdescitems}>
                    <div className={classes.footeritems}>
                        <ul className={classes.footerul}>
                            <Typography variant="h6" color="initial " className={classes.ulh6}>قوانین و مقررات</Typography>
                            <a href='/' className={classes.ula}>مجوز و گواهینامه ها</a>
                            <a href='/' className={classes.ula}>قوانین گارانتی </a>
                            <a href='/' className={classes.ula}>استخدام </a>
                            <a href='/' className={classes.ula}>خصوصی</a>
                            <a href='/' className={classes.ula}>تبلیغات</a>
                        </ul>
                    </div>
                    <div className={classes.footeritems}>
                        <ul className={classes.footerul}>
                            <Typography variant="h6" color="initial " className={classes.ulh6}> لیست مطالب مفید </Typography>
                            <a href='/' className={classes.ula}>بهترین های تکنولورژی</a>
                            <a href='/' className={classes.ula}>لیست قیمت گوشی </a>
                            <a href='/' className={classes.ula}>لیست قیمت لپتاپ </a>
                            <a href='/' className={classes.ula}>ساعت هوشمند</a>

                        </ul>
                    </div>
                    <div className={classes.footeritems}>
                        <ul className={classes.footerul}>
                            <Typography variant="h6" color="initial " className={classes.ulh6}>خدمات مشتریان </Typography>
                            <a href='/' className={classes.ula}>نحوه ازسال کالا</a>
                            <a href='/' className={classes.ula}>تضمین کیفیت کالا</a>
                            <a href='/' className={classes.ula}>مشاوره رایگان </a>
                            <a href='/' className={classes.ula}>کد های تخفیف</a>
                            <a href='/' className={classes.ula}>پشتیبانی</a>
                        </ul>
                    </div>
                </div>
                <div className={classes.footercontact}>
                    <div className={classes.footerdesccontact}>
                        <Typography variant="h5" color="#fff" className={classes.ula}>راه های ارتباطی</Typography>
                        <div className={classes.social}>
                            <a className={classes.socialitems}><Instagram /></a>
                            <a className={classes.socialitems}><Telegram /></a>
                            <a className={classes.socialitems}><Facebook /></a>
                            <a className={classes.socialitems}><LinkedIn /></a>
                        </div>
                        <div className={classes.khabarname}>
                            <input type='email' placeholder='ایمیل...' className={classes.khabarinp} />
                            <Button variant="contained" color="secondary" >
                                اشتراک
                            </Button>
                        </div>
                    </div>
                    <div className={classes.proposal}>
                        <p>ارسال پیشنهادات</p>
                        <input type='text' placeholder='اینجا بنویسید ...' className={classes.proposalinp} />
                        <div className={classes.proposalsend}>
                            نام کاربری:<input type='text' className={classes.proposalsendinp} />
                            <Button variant="contained" color="secondary">
                                ارسال
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;

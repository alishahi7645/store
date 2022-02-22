import { makeStyles } from "@material-ui/core"

export default makeStyles(theme =>({

    footer:{
        width: '100%',
       
        display: 'flex',
        zIndex:'1000',
        boxSizing:'border-box',
        flexShrink:'0',
        flexDirection:'column',
        backgroundColor:'#ED4151',
        position:'relative',
        bottom:'-8px',
        left:'-8px',
        right:'3px',
        
        
    },
    footerdesc:{
        width:'95%',
        height:'100%',
        
        margin:'auto'
    },
    footerdescitems:{
        width:'100%',
        height:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            margin:'auto'
        }
    },
    footeritems:{
        width:'33%',
        height:'100%',
        
        marginTop:'15px',
        display:'flex',
        flexDirection:'column',
        alignItems:'start',
        [theme.breakpoints.down('sm')]:{
            width:'50%',
            marginTop:'30px',
            width:'70%'
        }
    },
    footerul:{
        display:'flex',
        
        flexDirection:'column'
    },
    ulh6:{
        fontSize:'28px',
        marginBottom:'20px',
        color:'white'
    },
    ula:{
        textDecoration:'none',
        fontSize:'19px',
        color:'#fff'
    },
    footercontact:{
        display:'flex',
        justifyContent:'space-evenly',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            margin:'auto',
            
        }
    },
    socialitems:{
        color:'#fff',
        cursor:'pointer',
        marginLeft:'5px',
        fontSize:'25px',
        
    },
    khabarname:{
        width:'300px',
        height:'45px',
        backgroundColor:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:'9px',
        marginTop:'22px',
        [theme.breakpoints.down('sm')]:{
            margin:'auto',
        }
    },
    khabarinp:{
        marginRight:'10px',
        border:'none',
        outLine:'none'
    },
    footerdesccontact:{
        width:'100%',
        height:'40%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        [theme.breakpoints.down('sm')]:{
            
            margin:'auto',
            marginTop:'15px',
            textAlign:'center'
        }
 
    },
    social:{
        marginTop:'15px'
    },
    proposal:{
        width:'470px',
        border:'2px solid #fff',
        borderRadius:'5px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column',
        [theme.breakpoints.down('sm')]:{
            width:'370px',
            margin:'auto',
            marginTop:'15px',
            marginBottom:'10px'
        }
    },
    proposalinp:{
        width:'80%',
        height:'70px',
        border:'1px solid #fff',
        borderRadius:'8px'
    },
    proposalsend:{
        marginTop:'15px',
        display:'flex',
        justifyContent:'space-between'
    },
    proposalsendinp:{
        heigtht:'10px'
    },

}))
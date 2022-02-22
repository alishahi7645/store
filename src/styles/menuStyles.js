import { makeStyles } from "@material-ui/core";
export default makeStyles(theme =>({
    menuitem:{
        
        width:'100%',
        margin:'auto',
        marginTop:'65px',
        height:'35px',
        boxShadow: ' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'

    },
    items:{
        marginLeft:'10px',
        textDecoration:'none',

    },
    login:{
        display:'flex',
        alignItems:'center'
    }
}))
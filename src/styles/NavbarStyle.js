import { makeStyles } from "@material-ui/core";
import { alpha } from "@material-ui/core";
export default makeStyles(theme =>({
    navbar:{
        flexGrow:1,
        backgroundColor:'#ED4151'
    },
    toolbar:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-Between'
    },
    search:{
        width:'40%',
        backgroundColor:alpha(theme.palette.common.white, 0.15),
        display:'flex',
        alignItems:'center',
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.white, 0.25)
        },
        
    },
    InputBase:{
        width:'60%'
    },
    iconsearch:{
        cursor:'pointer'
    },
    feed:{
        width:'350px',
        height:'400px',
        
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    item:{
        width:'90%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    paper:{
        width:'50%',
        height:'60%',
        border:'1px solid black',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#fff',
        position:'absolute',
        top:'20%',
        right:'25%'
    },


}))
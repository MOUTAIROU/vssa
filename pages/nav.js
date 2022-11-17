import React ,{useState,useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import { makeStyles } from "@material-ui/core/styles";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'
import CustomizedAccordions from './accordion'

const useStyle = makeStyles(theme => ({
 title:{
   textAlign: 'center',
   fontSize: '4em',
   textTransform: 'uppercase',
   transform: 'perspective(500px) translateZ(50px)',
   fontWeight:'bold'
 },
 navBarContact:{
  
    backgroundColor: '#000000',
    color: '#A5A5A5',
    height: '50px',

 },
 navBarMenu:{
  color: '#A5A5A5',
  height: '90px',
  backgroundColor: '#fff'
 },
 backgroundImageBox:{
  background: 'url(home.jpg)',
 'background-repeat': 'no-repeat',
  overflow: 'hidden',
  height: '190px',
  'background-position': 'center',
  'background-size': 'cover',
  display: 'flex',
  'justify-content': 'flex-start',
  'align-items': 'center',
  color: '#fff',
 },
 backgroundImageBoxTypo:{
   fontSize:"30px",
   
 },
 ourService:{
  height: '380px'
 },
 ourserviceContainer:{
  height: '340px',
  backgroundColor: '#FFFFFF',
  marginTop: '-73px',
  zIndex: 1000,
  filter: 'drop-shadow(4px 13px 23px rgba(165, 165, 165, 1))',
  background: 'url(service.png)',
  'background-repeat': 'no-repeat',
   overflow: 'hidden',
   'background-position': 'center',
   'background-size': 'cover',
 },
 centPerCent:{
  height: '100%'
 },
 centPerCentDisplay:{
  display: 'flex',
  'align-items': 'center',
  height: '100%'
 },
 iconSocialMedia: {
  'background-color': '#5e5e5e',
  height: '100%',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center'
 },
 listMenuNavBar: {
    'height': '100%',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-right': '1px solid'
 },
 listMenuNavBarLogo: {
  display: 'flex',
  'justify-content': 'flex-start',
  'align-items': 'center',
  height:"100%",
  width:'100%',
  '& img':{
    'height': '75px',
    'width': '75px'
   } 
 },
 navbarMobileTextLeft:{
  'text-align': 'right',
  'padding-right':' 10px'
 },
 navbarMobileBoxheader_first:{
 },
 navbarMobileBoxheader:{
  'margin': '10px 0px',
   'font-size': '16px'
 },
 navbarMobileMenuIcon:{
   'text-align':'center'
 },
 navbarMobileTextLoco:{
  'text-align':'center',
  '& img':{
    'height': '50px',
    'width': '50px'
   }
 },
 navbarMobileSociaMediaColor:{
  color: '#A5A5A5',
  height: '50px',
  backgroundColor: '#000'
 }
 
 
  
})
)

export default function Index() {
  const classes = useStyle()

  const [scrollPosition, setScrollPosition] = useState(0);
  const [devicelayout, setDevicelayout] = useState('')
  const [_devicelayout, set_Devicelayout] = useState('')
  const handleScroll = () => {
    const position = window.pageYOffset;

   
    setScrollPosition(position);

    

    if(position > 200) {
      
      setDevicelayout('devicelayout_2')

      set_Devicelayout('_devicelayout')
    }else{
      setDevicelayout('')
      set_Devicelayout('')
    }  
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [amimationShow, setAmimationShow] = useState('_amimationMenuHide')

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const _diplayAnimation = () => {
       
    
    if(amimationShow == 'amimationMenuShow'){
      setAmimationShow('_amimationMenuHide')
    }

    if(amimationShow == '_amimationMenuHide'){
      setAmimationShow('amimationMenuShow')
    }

    
  }
  return (
    <div className={`${_devicelayout} navbar-content`}>
      <nav className={`${classes.navBar} ${devicelayout} devicelayout`}>
               
               <Box className={classes.navBarContact}>
                 <Container maxWidth='lg' className={classes.centPerCent}>
                     <Grid container  className={classes.centPerCent}>
               
                             <Grid  xs={3}  className={classes.centPerCent}>
                               <Grid container className={classes.centPerCentDisplay}>
                                   
                                    <Grid xs={2}><PhoneIcon/></Grid>
                                    <Grid xs={10}>xxxxx@gmail.com</Grid>
                               </Grid>
                             </Grid>
           
                             <Grid  xs={3}  className={classes.centPerCent}>
                               <Grid container className={classes.centPerCentDisplay}>
                                   
                                    <Grid xs={2}><EmailIcon/></Grid>
                                    <Grid xs={10}>6363782937893</Grid>
                               </Grid>
                             </Grid>
           
                             
                             <Grid item xs={6}>
                               
                               <Grid container className={classes.centPerCentDisplay}>
           
                                    <Grid xs={10}></Grid>
                                    <Grid xs={2} className={classes.iconSocialMedia}>
                                       <InstagramIcon sx={{ fontSize: 30 }}/>
                                       <FacebookIcon sx={{ fontSize: 30 }}/>
                                    </Grid>
                                    
                               </Grid>
                             </Grid>
                             
           
                     </Grid>
                  </Container>
               </Box>
               <Box className={classes.navBarMenu}>
                  <Container maxWidth='lg' className={classes.centPerCent}>
                     <Grid container className={classes.centPerCent}>
           
                         <Grid item xs={6} className={classes.centPerCent}>
                            <Box className={classes.listMenuNavBarLogo}>
                               <img src={'./logo.png'}/>
                            </Box>
                         </Grid>
           
                         <Grid item xs={6}>
                               
                                    
                                     <div className = "menu-area">
           
                                        <ul>
                                           <li> <Link href='/'>  Home </Link></li>
                                           
                                           <li>Our Service
                                                 <ul className='dropdown'>
                                                     <li>Student Visa
           
                                                           <ul className='dropdownChild'>
                                                                 <li>   <Link href={{ pathname: '/study', query: { country: 'usa' } }}>  Study in USA </Link>  </li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'uk' } }}> Study in UK</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'canada' } }}> Study in Canada</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'australia' } }}> Study in Australia</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'poland' } }}> Study in Poland</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'malaysia' } }}> Study in Malaysia</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'germany' } }}> Study in Germany</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'france' } }}> Study in France</Link></li>
           
                                                           </ul>
                                                     </li>
                                                     <li>   <Link href= '/visitor-visa-dependent-visa'>  Visitor Visa </Link> </li>
                                                     <li >  <Link href = '/dependent-visa'>  Dependent Visa </Link> </li>
                                                     <li>  <Link href = '/immigration'>  Immigration </Link>  </li>
                                                     <li> <Link href = '/ielts-training'>  IELTS Training </Link> </li>
                                                 </ul>
                                           </li>
                                           
                                           <li> <Link href = '/about-us'> About Us </Link> </li>
                                           <li>Visa Stamp
                                                <ul className='dropdown'>
                                                     <li>  <Link href = '/'> Recent Visa Stamp</Link> </li>
                                                 </ul> 
                                           </li>
                                           <li>  <Link href = '/contact'> Contact </Link> </li>
                                        </ul>
                                        
                                     </div>
                               
                               
           
                                       
                         </Grid>
           
           
                     </Grid>
                     </Container>
               </Box>
            
         </nav>
           
      <nav className= {`deviceresponsive ${devicelayout}`}>
        
        <Grid container className={classes.centPerCentDisplay}>
            <Grid xs={6}>
              
                <Box className={classes.navbarMobileBoxheader_first}>
              
                  <div className='resp-nav-item'>
                  <EmailIcon sx={{ fontSize: 15 }}/>
                  <div className='resp-nav-item-test'> xxxxx@gmail.com</div>
                  </div>
                </Box>
        

            </Grid>
            <Grid xs={6}>

                <Box className={classes.navbarMobileBoxheader}>
                
                      <div className='resp-nav-item'>
                        <PhoneIcon sx={{ fontSize: 15 }}/>
                        <div className='resp-nav-item-test'> 6363782937893</div>
                      </div>
                </Box>

            </Grid>
        </Grid>
        <Box className={classes.navbarMobileBoxheader}>
            <Grid container 
             className={`${classes.centPerCentDisplay} ${classes.navbarMobileSociaMediaColor}`}>
    
                <Grid xs={6}  className={classes.navbarMobileTextLeft}><InstagramIcon sx={{ fontSize: 30 }}/></Grid>
                <Grid xs = {6}><FacebookIcon sx={{ fontSize: 30 }} /></Grid>
                
            </Grid>
        </Box>

        <Box className={classes.navbarMobileBoxheader}>
            <Grid container className={classes.centPerCentDisplay}>
    
                <Grid xs={6}   className={classes.navbarMobileTextLoco}>
                     <img src={'./logo.png'}/>
                </Grid>
                <Grid xs = {6} className={classes.navbarMobileMenuIcon}>
                  {
                     amimationShow == "_amimationMenuHide" ? <MenuIcon  sx={{ fontSize: 30 }} onClick={() => _diplayAnimation()} />
                     : <CancelIcon  sx={{ color: 'red',fontSize: 30 }}   onClick={() => _diplayAnimation()} />
                     
                  }
                  </Grid>
                
            </Grid>
        </Box>
    
          <div className = {`${amimationShow} menu-list`}>
            
              <div className = {`${amimationShow} menu-content`}>
                <CustomizedAccordions/>
              </div>
                

          </div>

      </nav>
    </div>
  );
}

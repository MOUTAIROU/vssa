import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { makeStyles } from "@material-ui/core/styles";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

 

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
  height: '85vh',
  'background-position': 'center',
  'background-size': 'cover',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  color: '#fff',
 },
 backgroundImageBoxTypo:{
   fontSize:"40px"
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
  width:'100%' 
 },
 
 ourserviceContainerText: {
  height: '75px',
  'text-align': 'center',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'margin-top': '25px'
  
 },
 ourserviceContainerItem:{
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  
 },
 ourserviceContainerItemImage:{
    '& img':{
      height: '150px',
      width: '150px'
    }
  
 },
 ourserviceContainerItemDesText:{
   fontSize:"25px"
 },
 customerReview:{
  height: 'auto',
  'margin-top': '50px',
  'margin-bottom': '50px'
 },
 customerReviewItem:{
  'padding': '11px',
  'text-align': 'center'
 },
 customerReviewItemTypo:{
  'margin-bottom':'15px'
 },
 chooseYourDreamBox:{
  background: 'url(footer.png)',
  'background-repeat': 'no-repeat',
  overflow: 'hidden',
  'background-position': 'center',
  'background-size': 'cover',
  color: '#fff',
 },
 chooseYourDreamBoxTitle:{
  width: '100%',
 'text-align': 'center',
 'margin-bottom': '75px',
 'margin-top': '75px'
 },
 chooseYourDreamBoxTitleTitle:{
  'font-size': '29px',
   color: '#000'
 },
 contryListe: {
  height: '300px',
  'margin-bottom': '50px'
 },
 contryListeBox:{
  width: '100%',
  'background-color': '#fff',
  'height': '100%',
  filter: 'drop-shadow(4px 13px 23px rgba(165, 165, 165, 1))',
  padding:'30px'
 },
 contryListeBoxItem:{
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'margin-bottom': '30px',
  "& img":{  
      width: '120px',
      height: '86px'
  }
 },

 footer: {
  margin: '92px 0px',
 },
 footerBoxGridTitle : {
  'font-size': '25px',
  color: '#e30505',
  'font-weight': 'bold'
 },
 footerBoxGridListText: {
  'padding': '16px 0px',
  'color': '#000',
  'font-size': '17px',
  
 },
 footerBoxGridListTextAdress: {
  'padding': '16px 0px',
  'color': '#000',
  'font-size': '15px'
 },
 footerBox:{
  'margin-bottom': '20px'
 }
  
})
)

export default function Index() {
  const classes = useStyle()
  return (
      <div className = 'wrapper'>

          <nav className={classes.navBar}>
               
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
                               <Box className={classes.listMenuNavBarLogo}>toto</Box>
                            </Grid>

                            <Grid item xs={6}>
                                  <Grid container className={classes.centPerCent}>

                                        <Grid item xs={2} className={classes.listMenuNavBar}></Grid>

                                        <Grid item xs={2} className={classes.listMenuNavBar}>
                                          Home
                                        </Grid>
                                        <Grid item xs={2} className={classes.listMenuNavBar}>
                                          Our services
                                        </Grid>
                                        <Grid item xs={2} className={classes.listMenuNavBar}>
                                          About Us
                                        </Grid>
                                        <Grid item xs={2} className={classes.listMenuNavBar}>
                                          Visa stamp
                                        </Grid>
                                        <Grid item xs={2} className={classes.listMenuNavBar}>
                                          Contact us
                                        </Grid>

                                  </Grid>
                            </Grid>


                        </Grid>
                        </Container>
                  </Box>
               
          </nav>

          <Box>
             <Box className = {classes.backgroundImageBox}>
                 <Box className = {classes.backgroundImageBoxTypo}> VOYAGER DANS VOTRE PAYS DE REVE</Box>
             </Box>
          </Box>
          
          <Box className={classes.ourService}>
            <Container maxWidth="lg">
             <Box className={classes.ourserviceContainer}>
                 <Box className={classes.ourserviceContainerText}>
                   <Typography className={classes.ourserviceContainerItemDesText}> OUR SERVICES </Typography>
                 </Box>
                 <Box >
                    <Grid container>
 
                      <Grid item xs={3} className={classes.ourserviceContainerItem}>
                          <Box className={classes.ourserviceContainerItemImage}>
                             <img src={'./student.png'}/>
                           </Box>
                           <Box className={classes.ourserviceContainerItemDes}>
                            <Typography> OUR SERVICES </Typography>
                           </Box>
                      </Grid>

                      <Grid item xs={3} className={classes.ourserviceContainerItem}>
                          <Box className={classes.ourserviceContainerItemImage}>
                             <img src={'./migration.png'}/>
                           </Box>
                           <Box className={classes.ourserviceContainerItemDes}>
                            <Typography > OUR SERVICES </Typography>
                           </Box>
                      </Grid>

                      <Grid item xs={3} className={classes.ourserviceContainerItem}>
                          <Box className={classes.ourserviceContainerItemImage}>
                             <img src={'./tourist.png'}/>
                           </Box>
                           <Box className={classes.ourserviceContainerItemDes}>
                            <Typography> OUR SERVICES </Typography>
                           </Box>
                      </Grid>

                      <Grid item xs={3} className={classes.ourserviceContainerItem}>
                          <Box className={classes.ourserviceContainerItemImage}>
                             <img src={'./work.png'}/>
                           </Box>
                           <Box className={classes.ourserviceContainerItemDes}>
                            <Typography> OUR SERVICES </Typography>
                           </Box>
                      </Grid>
                       
                      
                       

                    </Grid>
                 </Box>
             </Box>
            </Container>
          </Box>

          <Box className={classes.customerReview}>
               <Container maxWidth='lg' className={classes.centPerCent}>

               <Box className={classes.ourserviceContainerText}>
                   <Typography className={classes.ourserviceContainerItemDesText}> OUR SERVICES </Typography>
                 </Box>
                   
                    <Grid container  className={classes.centPerCent}>

                      <Grid item xs={4} className={classes.customerReviewItem}>
                          <Box className={classes.customerReviewItemTypo}>

                            <Typography> "
                                        Cyprum itidem insulam
                            " </Typography>

                           </Box>
                           <Box className={classes.customerReviewItemDes}>
                            <Typography> "
                                        Cyprum itidem insulam procul a continenti
                                        discretam et portuosam inter municipia
                                        crebra urbes duae faciunt claram
                                        Salamis et Paphus
                            " </Typography>
                           </Box>
                      </Grid>

                      <Grid item xs={4} className={classes.customerReviewItem}>
                          <Box className={classes.customerReviewItemTypo}>

                            <Typography> "
                                        Cyprum itidem insulam
                            " </Typography>

                           </Box>
                           <Box className={classes.customerReviewItemDes}>
                            <Typography> "
                                        Cyprum itidem insulam procul a continenti
                                        discretam et portuosam inter municipia
                                        crebra urbes duae faciunt claram
                                        Salamis et Paphus
                            " </Typography>
                           </Box>
                      </Grid>

                      <Grid item xs={4} className={classes.customerReviewItem}>
                          <Box className={classes.customerReviewItemTypo}>

                            <Typography> "
                                        Cyprum itidem insulam
                            " </Typography>

                           </Box>
                           <Box className={classes.customerReviewItemDes}>
                            <Typography> "
                                        Cyprum itidem insulam procul a continenti
                                        discretam et portuosam inter municipia
                                        crebra urbes duae faciunt claram
                                        Salamis et Paphus
                            " </Typography>
                           </Box>
                      </Grid>

                      

                    </Grid>

               </Container>
          </Box>

          <Box className={classes.chooseYourDreamBox}>

             <Box className={classes.chooseYourDreamBoxTitle}>
                <Typography className={classes.chooseYourDreamBoxTitleTitle}>Choose your Dream Destination</Typography>
             </Box>

             <Box className={classes.contryListe}>

                <Container className={classes.centPerCentDisplay}>
                    <Box className={classes.contryListeBox}>
                      
                    <Grid container>
                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./can.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./alm.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./aus.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./bel.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./esp.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./fr.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./bra.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./lon.png'}/>
                         </Box>
                       </Grid>

                       <Grid xs={2} className={classes.contryListeBoxItem}>
                         <Box className={classes.contryListeBoxImage}>
                           <img src={'./usa.png'}/>
                         </Box>
                       </Grid>

                       
                       
                    </Grid>

                    </Box>
                </Container>

             </Box>

             <Box className={classes.footer}>
               <Container >
                    <Box className={classes.footerBox}>
                          <Grid container>
                              <Grid xs={4} className={classes.footerBoxGrid}>
                                <Box className={classes.footerBoxGridTitle}> YOU ARE VISITOR EMAIL</Box>
                              </Grid>
                              <Grid xs={4} className={classes.footerBoxGrid}>
                              <Box className={classes.footerBoxGridTitle}> OUR REVIEWS</Box>
                                <Box className={classes.footerBoxGridListText}>Student Visa</Box>
                                <Box  className={classes.footerBoxGridListText}>Visitor Visa</Box>
                                <Box  className={classes.footerBoxGridListText}>Dependent Visa</Box>
                                <Box  className={classes.footerBoxGridListText}>Immigration</Box>
                                <Box  className={classes.footerBoxGridListText}>IELTS Training</Box>
                              </Grid>
                              <Grid xs={4} className={classes.footerBoxGrid}>
                              <Box className={classes.footerBoxGridTitle}> Reach Us</Box>
                              <Box  className={classes.footerBoxGridListTextAdress}> 
                                G-1, Anjali Tower, Opp. Rameshwar
                                Temple, Hospital Road Bhuj - Kutch,
                                Gujarat, India Pin : 370001 
                                </Box>
                                <Box  className={classes.footerBoxGridListTextAdress}>Call us for more information +91 8000189900</Box>
                              </Grid>
                          </Grid>
                    </Box>
                
                    <Copyright/>
               </Container>
          </Box>


          </Box>

          

      </div>
  );
}

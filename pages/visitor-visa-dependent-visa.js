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
import Button from '@material-ui/core/Button'
import Nav from './nav'

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
  'height': '100%',
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
  'font-weight': 'bold',
  [theme.breakpoints.down('md')]: {
    'font-size': '20px',
  },
  [theme.breakpoints.down('sm')]: {
    'font-size': '20px',
  }
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
  'margin-bottom': '20px',
  [theme.breakpoints.down('md')]: {
    'text-align': 'center',
  },
  [theme.breakpoints.down('sm')]: {
    'text-align': 'center',
  }
 },
 descriptionService:{
  margin: '50px 0',
  color:'#000'
 },
 descriptionServiceP1:{
  'margin-bottom': '40px',
  'text-align': 'justify',
  'text-justify': 'inter-word'
 },
 descriptionServiceP2:{
  'padding': 'justify',
  'text-justify': 'inter-word'
 },
 Inquiry:{
  'margin-top': '90px',
  'height': 'auto',
  'text-align': 'center',
  'background-color': '#cacaca',
  'padding': '21px',
  'color': 'black'
},
InquiryText:{
  'margin-bottom': '14px',
  'font-size': '19px',
  [theme.breakpoints.down('md')]: {
    'font-size': '15px',
  },
  [theme.breakpoints.down('sm')]: {
    'font-size': '12px',
  }
},
InquiryButtn:{
  'background-color': '#e30505',
  'color': '#fff',
  'padding': '11px 34px',
},
desContent:{
  color: '#000',
  'margin-top': '100px',
 },
 desContentGridBoxTitle: {
  'font-size': '40px'
 },
 desContentGridBoxUl:{
   '& li':{
    'margin-bottom': '11px',
    'font-size': '17px'
   }
 },
 
 

  
})
)

export default function Index() {
  const classes = useStyle()
  return (
      <div className = 'wrapper'>

          <Nav/>

          <Box>
             <Box className = {classes.backgroundImageBox}>
                 <Container>
                  <Box className = {classes.backgroundImageBoxTypo}> Immigration </Box>
                 </Container>
             </Box>
          </Box>

          

          
          
          
          

          <Box className={classes.chooseYourDreamBox}>

              <Box className={classes.descriptionService}>
                  <Container>
                      <Box>
                        <Typography className={classes.descriptionServiceP1}>
                        Visitor Visa is for people who want to visit any country for a short time to meet their family members, friends or for tourism.We provide all required services for your international visit.We assist you for your Hotel bookings and Travel Insurance also.We provide all required services for your international visit.                        </Typography>
                        
                      </Box>
                  </Container>
              </Box>

              <Box className={classes.desContent}>
                  
                   <Container>
                            <Grid container  className = {classes.desContentGrid}>
                              <Grid xs = {6} className = {classes.desContentGridBox}>
                                  <Box className = {classes.desContentGridBoxTitle}>Why Shree Sai Immigration</Box>
                                  <Box className = {classes.desContentGridBoxUi}>
                                      <ul className = {classes.desContentGridBoxUl}>

                                      <li>16 Years Experience In Business</li>
                                      <li>High Visa Success Ratio</li>
                                      <li>Welcome Rejected Cases</li>
                                      <li>Expert and Experienced Consultants</li>
                                      <li>Arrange accommodation, air ticket and travel insurance</li>

                                        
                                        
                                      </ul>
                                  </Box>
                           </Grid>
                              </Grid>
                          

                   </Container>
              </Box>

              <Box className={classes.descriptionService}>
                  <Container>
                      <Box>
                        <Typography className={classes.descriptionServiceP1}>
                        So Hurry, get your Visitor visa process start & approach Shree Sai Immigration to seek necessary guidance and advice.                         </Typography>
                        
                      </Box>
                  </Container>
              </Box>

              <Box >

                  <Container className = {classes.Inquiry}>
                      <Box className = {classes.InquiryText}> To resolve all issues pertaining to documentation in order to process the student visa 
                          it would be better to approach Shree Sai Immigration to seek necessary guidan and advice.
                        </Box>
                        <Button className = {classes.InquiryButtn}>Inquiry</Button>
                  </Container>
              </Box>

             

              <Box className={classes.footer}>
               <Container >
                    <Box className={classes.footerBox}>
                          <Grid container>
                              <Grid  xs={12} lg={4} className={classes.footerBoxGrid}>
                                <Box className={classes.footerBoxGridTitle}> YOU ARE VISITOR EMAIL</Box>
                              </Grid>
                              <Grid xs={12} lg={4} className={classes.footerBoxGrid}>
                              <Box className={classes.footerBoxGridTitle}> OUR REVIEWS</Box>
                                <Box className={classes.footerBoxGridListText}>Student Visa</Box>
                                <Box  className={classes.footerBoxGridListText}>Visitor Visa</Box>
                                <Box  className={classes.footerBoxGridListText}>Dependent Visa</Box>
                                <Box  className={classes.footerBoxGridListText}>Immigration</Box>
                                <Box  className={classes.footerBoxGridListText}>IELTS Training</Box>
                              </Grid>
                              <Grid xs={12} lg={4} className={classes.footerBoxGrid}>
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

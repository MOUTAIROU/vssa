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
  'text-justify': 'inter-word',
 },
 descriptionServiceP2:{
  'padding': 'justify',
  'text-justify': 'inter-word',
  'margin-bottom': '20px',
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
  linkStyle:{
    '& a':{
     'text-decoration': 'none',
     'color': '#000',
    }
  }

  
})
)

export default function Index() {
  const classes = useStyle()
  return (
      <div className = {`wrapper ${classes.linkStyle}`}>

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
                          British Council Authorised Exam Registration Centre to Register IELTS Test. We Are Providing IELTS Coaching Through Trained Staff with Latest Unlimited Practice Material Which is Provided to us by British Council of India.                        </Typography>
                        <Typography className={classes.descriptionServiceP2}>
                         What is IELTS ?
                        </Typography>
                        <Typography className={classes.descriptionServiceP2}>
                        IELTS, the International English Language Testing System, is designed to assess the language ability of candidates who need to study or work where English is used as the language of communication. It covers the four language skills – listening, reading, writing and speaking.
                        </Typography>
                        <Typography className={classes.descriptionServiceP2}>
                        ELTS has two modules:<b>General Training and Academic</b> . The General Training module is usually taken by people who want to emigrate, and the Academic module is taken by people who want to study abroad. It is essential that you check with the receiving country or institution to find out which module you need to take. It is your responsibility to choose the right module.            
                        </Typography>

                        <Typography className={classes.descriptionServiceP2}>
                         <b>Purpose of IELTS</b>
                         </Typography>
                        <Typography className={classes.descriptionServiceP2}>
                          Candidates are tested in listening, reading, writing and speaking. All candidates take the same Listening and Speaking Modules. There is a choice between Academic and General Training in the Reading and Writing Modules.
                        </Typography>

                        <Typography className={classes.descriptionServiceP2}>
                         <b>IELTS Exam format</b>
                         </Typography>
                        <Typography className={classes.descriptionServiceP2}>
                         The total test time, excluding the speaking test, is two hours and 45 minutes. Your speaking test may be on the same day as the other parts, or on a different day.
                        </Typography>

                        <Typography className={classes.descriptionServiceP2}>
                         <b>Where Can I Do The Test?</b>
                         </Typography>
                        <Typography className={classes.descriptionServiceP2}>
                         Test Score
                        </Typography>

                        <Typography className={classes.descriptionServiceP2}>
                         Band scores are recorded on a Test Report Form, showing overall ability as well as performance in listening, reading, writing and speaking from 1 to 9. The tests are designed to cover the full range of ability from non-user to expert user.
                         </Typography>
                        <Typography className={classes.descriptionServiceP2}>
                           <b>WHO Recognize IELTS?</b>
                         </Typography>

                         <Typography className={classes.descriptionServiceP2}>
                           <b> 
                              IELTS is recognized for course admission by universities in many countries, including Australia, New Zealand, Canada, USA and the UK.
                          </b>
                         </Typography>




                      </Box>
                  </Container>
              </Box>

              <Box >

                  <Container className = {classes.Inquiry}>
                      <Box className = {classes.InquiryText}> To resolve all issues pertaining to documentation in order to process the student visa 
                          it would be better to approach Shree Sai Immigration to seek necessary guidan and advice.
                        </Box>
                        <Link href='/contact' >
                          
                          <Button className = {classes.InquiryButtn}>Inquiry</Button>
                        </Link>
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

import React ,{useState,useEffect,useRef} from 'react';
import Link from 'next/link'



export default function CustomizedAccordions() {

    const accordionItemHeaders = useRef(null)
    const [activeP1, setActiveP1] = useState('')
    const [activeP2, setActiveP2] = useState('')
    const [activeP3, setActiveP3] = useState('')
    const [activeP4, setActiveP4] = useState('')
    const [activeP5, setActiveP5] = useState('')
    

    useEffect(() => {
        
        
    },[])
  
    const _activeDiv = (panel) => {

        

      if(panel == 'panel_1'){
          if(activeP1 == "active"){
            setActiveP1('')
          }else{
            setActiveP1('active')
          }
        
        
      }
      if(panel == 'panel_2'){
        if(activeP2 == "active"){
            setActiveP2('')
          }else{
            setActiveP2('active')
          }
      }

      if(panel == 'panel_3'){
        if(activeP3 == "active"){
            setActiveP3('')
          }else{
            setActiveP3('active')
          }
      }

      if(panel == 'panel_4'){
        if(activeP4 == "active"){
            setActiveP4('')
          }else{
            setActiveP4('active')
          }
      }

      if(panel == 'panel_5'){
        if(activeP5 == "active"){
            setActiveP5('')
          }else{
            setActiveP5('active')
          }
      }

    }
 
  return (
    <div>

        <div 
          className='accordion'
          >
            
            <div 
            className='accordion-item'
            >
              <div 
               className= {` accordion-item-header ${activeP1}`} 
               onClick={() => _activeDiv('panel_1')}>
                 Home
              </div>

              <div className='accordion-item-body'>
                 
                  <div className='accordion-item-body-content'>
                            
              </div>
              </div>
            </div>

            <div 
              className='accordion-item'
              onClick={() => _activeDiv('panel_2')}>
              <div className= {` accordion-item-header ${activeP2}`}>
                Our Service
              </div>

              <div className='accordion-item-body'>
                 
                  <div className='accordion-item-body-content'>
                       <div  className='accordion accordion-item-text'>Student Visa
                                                        <ul className=''>
                                                                 <li>   <Link href={{ pathname: '/study', query: { country: 'usa' } }}>  Study in USA </Link>  </li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'uk' } }}> Study in UK</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'canada' } }}> Study in Canada</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'australia' } }}> Study in Australia</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'poland' } }}> Study in Poland</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'malaysia' } }}> Study in Malaysia</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'germany' } }}> Study in Germany</Link></li>
                                                                 <li> <Link href={{ pathname: '/study', query: { country: 'france' } }}> Study in France</Link></li>
           
                                                           </ul>
                       
                       </div>
                       <div  className='accordion accordion-item-text'> <Link href= '/visitor-visa-dependent-visa'>Visitor Visa</Link></div>
                       <div  className='accordion accordion-item-text'> <Link href = '/dependent-visa'>Dependent Visa</Link></div>
                       <div  className='accordion accordion-item-text'> <Link href = '/immigration'>Immigration</Link></div>
                       <div  className='accordion accordion-item-text'> <Link href = '/ielts-training'>IELTS Training</Link></div>
                  </div>
              </div>
            </div>

            <div 
              className='accordion-item'
              onClick={() => _activeDiv('panel_3')}>
              <div className= {` accordion-item-header ${activeP3}`}>
                About Us
              </div>

              <div className='accordion-item-body'>
                 
                  <div className='accordion-item-body-content'>
                  Fuerit toto in consulatu sine provincia, cui fuerit, antequam designatus est, decreta provincia. Sortietur an non? Nam et non sortiri absurdum est, et, quod sortitus sis, non habere. Proficiscetur paludatus? Quo? Quo pervenire ante certam diem non licebit. ianuario, Februario, provinciam non habebit; Kalendis ei denique Martiis nascetur repente provincia.                  </div>
              </div>
            </div>
            
            <div 
              className='accordion-item'
              onClick={() => _activeDiv('panel_4')}>
              <div className= {` accordion-item-header ${activeP4}`}>
               Visa Stamp
              </div>

              <div className='accordion-item-body'>
                 
                  <div className='accordion-item-body-content'>
                    <div className='accordion'>Recent Visa Stamp</div> 
                  </div>
              </div>
            </div>

            <div 
              className='accordion-item'
              onClick={() => _activeDiv('panel_5')}>
              <div className= {` accordion-item-header ${activeP5}`}>
                Contact
              </div>

              <div className='accordion-item-body'>
                 
                  <div className='accordion-item-body-content'>
                  Fuerit toto in consulatu sine provincia, cui fuerit, antequam designatus est, decreta provincia. Sortietur an non? Nam et non sortiri absurdum est, et, quod sortitus sis, non habere. Proficiscetur paludatus? Quo? Quo pervenire ante certam diem non licebit. ianuario, Februario, provinciam non habebit; Kalendis ei denique Martiis nascetur repente provincia.                  </div>
              </div>
            </div>
        </div>


    </div>
  );
}

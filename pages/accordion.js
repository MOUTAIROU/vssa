import React ,{useState,useEffect,useRef} from 'react';




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
                       <div  className='accordion'>Study in USA</div>
                       <div  className='accordion'>Study in UK</div>
                       <div  className='accordion'>Study in Canada</div>
                       <div  className='accordion'>Study in Australia</div>
                       <div  className='accordion'>Study in Malaysia</div>
                       <div  className='accordion'>Study in Germany</div>
                       <div  className='accordion'>Study in France</div>
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

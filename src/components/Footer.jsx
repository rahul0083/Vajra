import React from 'react'

function Footer() {
  return (
    <div className='footer'>
     <div className='vajra_footer'>
      <div>
       <img style={{height:"50px"}} src="https://medpick.in/wp-content/uploads/2020/03/Vajra-logo.png" alt="" />
       </div>
      <div style={{marginLeft:"50px"}}> © 2020 VIZI, All Rights Reserved  </div>  
        </div>
        <div className='terms'>
         <a href="https://vizi.medikabazaar.com/tc.jsp">Terms & Conditions |</a>
         <a href="https://vizi.medikabazaar.com/faq.jsp">FAQs</a>
        </div>
    </div>
  )
}

export default Footer

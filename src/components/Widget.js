import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
export default function Widget() {
  return (
    <div className='widget'>
      
     
      <div className='widget_body'>
      <div className='widget_top'>
          <div className="widget__header">
            <h4>LinkedIn News</h4>
            <InfoIcon />
          </div>
          <ul className="widget__options">
            <li>
                <h4>Startup brace for SVB impact</h4>
                <p>1d ago * 2535 readers</p>
            </li>
            <li>
                <h4>Lenskart bucks funding trend</h4>
                <p>1d ago * 3564 readers</p>
            </li>
            <li>
                <h4>Microsoft is bringing AI to office.</h4>
                <p>2d ago * 6575 readers</p>
            </li>
            <li>
                <h4>Aviation giants bet big on India</h4>
                <p>2d ago * 5373readers</p>
            </li>
            <li>
                <h4>$54B lifeline for credit suisse</h4>
                <p>3d ago * 3263 readers</p>
            </li>
          </ul>
   </div>
   </div>
   <div className="widget_bottom">
    <div className="widget__header">
        <h4>Today top courses</h4>
        <InfoIcon />
    </div>
    <div className="widget__body">
        <ul className="widget__options">
        <li>
                <h4>. Goal Setting: Objectives and Key Results (OKRs) with Jessie Withers</h4>
                <p>1d ago * 4336 readers</p>
            </li>
            <li>
                <h4> Interpersonal Communication with Dorie Clark</h4>
                <p>2d ago * 3423 readers</p>
            </li>
        </ul>
    </div>
   </div>
   </div>
    
  )
}

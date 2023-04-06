import logo from './org.png';
import pp from './pp.jpg';
import bushsr from './bushsr.jpg';
import bushjr from './bushjr.jpeg';
import './tutor.css';

function tutor() {
  return (
   <div className='App'>
      <div className='kotak_tutor'>
        <img src={logo}></img>
        <div className='kotak_ctutor'>
        <p style={{fontFamily:'Arial', fontSize:'80px', fontWeight:'bold', letterSpacing:'12px', textAlign:'center',}}>Temukan Tutor</p>
        <p style={{fontFamily:'Arial', fontSize:'25px', textAlign:'justify', marginTop:'-80px'}}> Jika kamu ingin berdiskusi dan membutuhkan bantuan, para tutor siap membantumu dan belajar bersama.</p>
        </div>
      </div>
      <div className='kotak_ppp'>
        <div className='kotak_pp'>
          <img src={bushsr} className='gbr_pp'></img>
          <p style={{fontWeight:'bold'}}>George Bush</p>
          <p>georgebush@gov.us</p>
          <p>top secret</p>
        </div>
        <div className='kotak_pp'>
          <img src={bushjr} className='gbr_pp'></img>
          <p style={{fontWeight:'bold'}}>George Washington Bush</p>
          <p>georgewashintonbush@gov.us</p>
          <p>top secret</p>
        </div>
        <div className='kotak_pp'>
          <img src={pp} className='gbr_pp'></img>
        </div>
        <div className='kotak_pp'>
          <img src={pp} className='gbr_pp'></img>
        </div>
        <div className='kotak_pp'>
  <img src={pp} className='gbr_pp'></img>
</div>
<div className='kotak_pp'>
  <img src={pp} className='gbr_pp'></img>
</div>
<div className='kotak_pp'>
  <img src={pp} className='gbr_pp'></img>
</div>
<div className='kotak_pp'>
  <img src={pp} className='gbr_pp'></img>
</div> 
 <div></div>       
<div className='kotak_pp'>
  <img src={pp} className='gbr_pp'></img>
</div>
<div className='kotak_pp'>
  <img src={pp} className='gbr_pp'></img>
</div>  
      <div></div>  
      </div>
   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  );
}

export default tutor;

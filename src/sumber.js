import './sumber.css';
import logo from './org.png';
function sumber(){
    return(
        <>
        <img src={'https://www.kawanmenulis.com/img/simon-berger.6cb73d07.png'} style={{width:'100%'}} />
        
        <div className='kotak-pertama'>
            <div style={{width:'20%'}}>
            <img src={logo}/>
            </div>
            <div style={{display:'flex', flexWarp:'warp', width:'80%'}}>
                <div style={{ display:'flex', alignItem:'center'}}>
                    <div>
                    <h1 style={{fontSize:'90px',}}>Sumber Belajar</h1>
                    <p style={{textAlign:'justify'}}>Temukan beragam berbagai panduan menulis dan beragam konten, informasi, dan ide untuk menghasilkan karya tulis.</p>
                    </div>
                </div>
            </div>
        </div>
        <div style={{display:'flex' , width:'70%', margin:'auto'}}>
            <div style={{display:'flex', alignItem:'center'}}>
                <div>
                <img src={'https://kantorbahasagorontalo.kemdikbud.go.id/wp-content/uploads/2020/02/KBBI.png'} style={{width:'100px'}} />
            <p className='ket'>kbbi online</p>
            </div>
            </div>
            <div>
            <img src={'https://admin.kawanmenulis.com/img/Lektur-ID2.png'} style={{display:'block', width:'150px'}} />
            <p className='ket'>leture.id</p>
            </div>
            <div>
            <img src={'https://admin.kawanmenulis.com/img/sinonim-kata.png'} style={{width:'150px'}} />
            <p className='ket'>sinonim kata</p>
            </div>
            <div>
            <img src={'https://admin.kawanmenulis.com/img/tesaurus-tematis.png'} style={{width:'150px'}} />
            <p className='ket'>tesaurus-tematis</p>
            </div>
            <div>
            <img src={'https://admin.kawanmenulis.com/img/puebi.png'} style={{width:'150px'}} />
            <p className='ket'>puebi</p>
            </div>
        </div>
      </>
    );
}

export default sumber;

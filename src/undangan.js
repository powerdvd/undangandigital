import './undangan.css';
import utama from './img/utama.jpg';
export default function undangan(){
	const lebarLayar = window.innerWidth;
	const tinggiLayar = window.innerHeight;
	
	return(
	
		<>
		<p>{lebarLayar}</p>
		<p>{tinggiLayar}</p>
       <div className='kotak_belakang'>
			<div className='cover'>
				
				<nav>
					<a href={'#'}>Profil</a>
					<a href={'#'}>Galeries</a>
					<p className='inisial_pasangan'>S R</p>
						
					<a href={'#'}>Location</a>
					<a href={'#'}>Wishes</a>
				</nav>
				<div className='inisial_pasangan_hp'>
					<p className='inisial_pasangan'>S R</p>
				</div>
				<div className='nama_pasangan_waktu'>

					<p className='nama_pasangan'>Steve & Regina</p>
					<div className='waktu'>
						<div>
							<p>Remaining days</p>	
							<p>7 Days 07:07:07</p>
						</div>
						<div className='pemisah' />
						<div>
							<p>Wedding Date</p>
							<p>15.11.22</p>
						</div>
					</div>
				</div>
				<div className='img_utama'>
					<img src={utama} />
				</div>
			</div>
            
		</div>
		</>
	)       
}

//export default undangan;

import './pakmo.css';
import pp from './pp.jpg';
function pakmo(){
    return(
        <>
        <div className='kotak1'>
            <nav>
                <div>
                    <img src={pp} />
                </div>
                <div className='nav_btn'>
                    <button className='btn daftar'>Daftar</button>
                    <button className='btn masuk'>Masuk</button>
                </div>
            </nav>
                
            <div className='kotak2'>
                <div className='kotak_pilih_layanan'>
                    <p style={{fontWeight:'bold'}}>Pilih Layanan Permohonan</p>
                    <div className='kotak_menu_pilihan'>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/f63fe08f188175a7.png' />
                            <p>E-KTP</p>
                        </div>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/f63fe08f188175a7.png' />
                            <p>Kartu Keluarga</p>
                        </div>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/f63fe08f188175a7.png' />
                            <p>Akta Kelahiran</p>
                        </div>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/0aab2cada16a6b46.png' />
                            <p>Akta Kematian</p>
                        </div>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/f63fe08f188175a7.png' />
                            <p>Surat Pindah</p>
                        </div>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/cbfe15b55ce26ea5.png' />
                            <p>Akta Perkawinan</p>
                        </div>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/f63fe08f188175a7.png' />
                            <p>Akta Perceraian</p>
                        </div>
                        <div>
                            <img src='https://pakmo.mojokertokota.go.id/api/files/f63fe08f188175a7.png' />
                            <p>KIA</p>
                        </div>
                        
                    </div>
                </div>
                
                <div className='kotak_teks_keunggulan_layanan'>
                    <p>Keunggulan Layanan</p>
                    <p>Administrasi Kependudukan dan Pencatatan Sipil</p>
                </div>
                
                <div className='kotak_teks_pengajuan_dan_semua'>
                    <div>
                        <p style={{fontWeight:'bold'}}>Pengajuan Dari Jarak Jauh</p>
                        <p>Pemohon sekarang bisa mengajukan permohonan data dari jarak jauh</p>
                   
                    </div>
                    <div>
                        <p style={{fontWeight:'bold'}}>Semua dalam satu genggaman</p>
                        <p>Membantu pengurusan administrasi pencatatan sipil dalam satu aplikasi dengan mudah</p>
                    </div>
                </div>
                
                <div className='kotak_teks_skala_kami'>
                    <div>
                        <p>Skala Kami Bersama</p>
                        <p>Penduduk <span>Kota Mojokerto</span></p>
                    </div>
                </div>
                
                <div className='kotak_data'>
                    {/*<div className='kotak_data_jml_pemohon_user'>*/}
                        <div className='kotak_data_para_pemohon'>
                            <div className='data_para_pemohon'>
                                <p>0</p>
                                <img src={pp} />
                            </div>
                            <div>
                                <p>Jumlah Pemohon</p>
                            </div>
                        </div>
                        <div className='kotak_data_para_pemohon'>
                            <div className='data_para_pemohon'>
                                <p>67</p>
                                <img src={pp} />
                            </div>
                            <div>
                                <p>Jumlah User</p>
                            </div>
                        </div>
                        <div></div>
                        <div className='kotak_data_para_pemohon'>
                            <div className='data_para_pemohon'>
                                <p>0</p>
                                <img src={pp} />
                            </div>
                            <div>
                                <p>Jumlah Pemohon</p>
                            </div>
                        </div>
                    {/*</div>*/}
                    
                </div>
            </div>
                
            <div className='kotak_maju_melangkah'>
                <img src={'https://pakmo.mojokertokota.go.id/img/image-1.81e7b0fc.png'} />
                <div className='kotak_teks_maju_melangkah'>
                    <p>Maju</p>
                    <p>Melangkah</p>
                    <p>Ayo</p>
                    <p>Berbenah</p>
                </div>
            </div>
            
            <div className='kotak2'>
                <div className='img_walikota'>
                    <img src={'https://pakmo.mojokertokota.go.id/img/people.410d6d2b.png'} />
                </div>
                <div className='kotak_teks_terwujud_dan_nama_walikota'>
                    <div className='kotak_teks_terwujud'>
                        <p>“Terwujudnya Kota Mojokerto yang Berdaya Saing, Mandiri, Demokratis, Adil Makmur, Sejahtera, dan Bermartabat”</p>
                    </div>
                    <div className='kotak_teks_terwujud'>
    <p>“Terwujudnya Kota Mojokerto yang Berdaya Saing, Mandiri, Demokratis, Adil Makmur, Sejahtera, dan Bermartabat”</p>
</div>
                </div>
            </div>
        </div>
        
        
        </>
    );
}

export default pakmo;

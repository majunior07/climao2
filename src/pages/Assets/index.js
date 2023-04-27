import React from 'react';
import { Link } from 'react-router-dom';
import {FaMicrosoft, FaQuestionCircle, FaAngleRight, FaExpandAlt, FaUmbrella, FaSearch, FaTemperatureLow, FaTemperatureHigh, FaPercent } from 'react-icons/fa'
import { WiDaySunny } from 'react-icons/wi'
import { IoMdHome, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SlLocationPin, SlDrop } from 'react-icons/sl';
import { TiThermometer } from 'react-icons/ti';
import { SiAdobecreativecloud } from 'react-icons/si';
import { BsCloudLightning , BsCloudRain, BsCloudy, BsWind } from'react-icons/bs';
import { TbWindsock } from 'react-icons/tb';
import Home from '../Home';
import styles from './Assets.module.css';


export default function Assets(){
    return(
        
        <div> 
            <header className='header'>
              <ul className='menu1'>
                <li><a href=''><FaMicrosoft size={18}></FaMicrosoft></a></li>
                <li><a href="">previsao_tempo</a></li>
                <li><IoIosArrowForward></IoIosArrowForward></li>
                <li><span>Web</span></li>
              </ul>
              <ul className='menu2'>
                <li> <select name='select'>
                 <option value="Pdrão">Padrão</option>
                  <option value="25%">25%</option>
                  <option value="50%">50%</option>
                  <option value="75%">75%</option>
                  <option value="100%">100%</option>
                  <option value="150%">150%</option>
                  <option value="200%">200%</option>
                  </select>  
                </li>
                <li>
                  <a href=""><FaExpandAlt size={17}></FaExpandAlt></a>
                </li>
                <li>
                  <a href=""><FaQuestionCircle size={17}></FaQuestionCircle></a>
                </li>
                <li>
                  <a href="">Fazer logon</a>
                </li>
              </ul>
            </header>
            
            <div className={styles.containerAs}>
                <div className={styles.esquerdaAs}>
                    <div className={styles.esquerdaAs1}>
                        <di>
                            <h1>Assets</h1>
                        </di>
                        <div>
                            <FaSearch size={18}></FaSearch>
                            <h1>Busca</h1>
                        </div>
                        
                    </div>
                    <div className={styles.esquerdaAs2}>
                    
                        <BsCloudy color='#2BCBBA' size={50}></BsCloudy>
                        <WiDaySunny color='#2BCBBA' size={70}></WiDaySunny>
                        <BsCloudLightning color='#2BCBBA' size={48}></BsCloudLightning>
                        <BsCloudRain color='#2BCBBA' size={48}></BsCloudRain>
                        <SlLocationPin color='#2BCBBA' size={30}></SlLocationPin>
                        <SlDrop size={20} color='#2BCBBA'></SlDrop>
                        <FaPercent size={20} color='#2BCBBA'></FaPercent>
                        <BsWind size={30} color='#2BCBBA'></BsWind>
                        <TbWindsock size={30} color='#2BCBBA'></TbWindsock>
                        <FaTemperatureLow color='#2BCBBA' size={25}></FaTemperatureLow>
                        <TiThermometer color='#2BCBBA' size={35} ></TiThermometer>
                        <FaTemperatureHigh color='#2BCBBA' size={25}></FaTemperatureHigh>

                    </div>
                    </div>
                    <div className={styles.direitaAs}>
                    <div className={styles.direitaAs1}>
                        <FaUmbrella size={25}></FaUmbrella>
                        <span>CLIMÃO.COM</span>
                    </div>
                    <div className={styles.direitaAs2}>

                        <BsCloudy color='#FFF' size={50}></BsCloudy>
                        <WiDaySunny color='#FFF' size={70}></WiDaySunny>
                        <BsCloudLightning color='#FFF' size={48}></BsCloudLightning>
                        <BsCloudRain color='#FFF' size={48}></BsCloudRain>
                        <SlLocationPin color='#FFF' size={30}></SlLocationPin>
                        <SlDrop size={20} color='#FFF'></SlDrop>
                        <FaPercent size={20} color='#FFF'></FaPercent>
                        <BsWind size={30} color='#FFF'></BsWind>
                        <TbWindsock size={30} color='#FFF'></TbWindsock>
                        <FaTemperatureLow color='#FFF' size={25}></FaTemperatureLow>
                        <TiThermometer color='#FFF' size={35} ></TiThermometer>
                        <FaTemperatureHigh color='#FFF' size={25}></FaTemperatureHigh>

                    </div>
                </div>

            </div>


            <div className={styles.footer}>
              <ul>
                <li>
                  <a href=''>
                    <IoMdHome size={20}></IoMdHome>
                  </a>
                </li>
                <li>
                  <a href=''>
                  <IoIosArrowBack size={20}></IoIosArrowBack>
                  </a>
                </li>
                <li>
                  <span>2 de 2</span>
                </li>
                <li>
                  <Link to={`/src/pages/Home/index.js`}><IoIosArrowForward size={20}></IoIosArrowForward></Link>
                </li>
              </ul>
            </div>  


        </div>  


    );
}
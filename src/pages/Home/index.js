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
import Assets from '../Assets';


export default function Home(){
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
            
            <div className='container'>
              <div className='climao'>
                  <ul>
                    <li>
                      <FaUmbrella size={25}></FaUmbrella>
                    </li>
                    <li>
                      <span>CLIMÃO.COM</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <input  className='input' placeholder='Buscar cidade'></input>                                  
                    </li>
                    <li>
                      <FaSearch size={18}></FaSearch>
                    </li>
                  </ul>
              </div>
              <div className='central'>
                <div className='esquerda'>
                  <div className='esquerdaCima'>
                    <div className='campinas'>                      
                        <div className='campinas2'>
                          <SlLocationPin color='#2BCBBA' size={30}></SlLocationPin>
                          <div className='campinas3'>
                            <strong><span>Campinas</span></strong>
                            <p>Quin, 10 de outubro de 2019</p>
                          </div>                     
                        </div>  
                      </div>
                    <div className='minMax'>
                      <div className='minimo'>
                        <FaTemperatureLow color='#2BCBBA' size={25}></FaTemperatureLow>
                        <div className='minimo2'>
                        <strong><span>Min.</span></strong>
                        </div>                        
                        <span>15°</span>
                      </div>
                      <div className='maximo'>
                        <FaTemperatureHigh color='#2BCBBA' size={25}></FaTemperatureHigh>
                        <div className='maximo2'>
                          <strong><span>Max.</span></strong>
                        </div>                       
                        <span>26°</span>
                      </div>
                    </div>
                  </div>
                  <div className='esquerdaMeio'>
                    <div className='esquerdaMeioEsquerda'>
                        <div className='termo'>
                          <div className='termo2'>
                           <TiThermometer color='#2BCBBA' size={35} ></TiThermometer>
                          </div>
                          <div>
                            <span>23°</span>
                          </div>                     
                        </div>
                        <div className='sensacao'>
                          <p>Sensação térmica 22°</p>  
                        </div>                 
                      </div>
                    <div className='nublado'>
                      <BsCloudy color='#2BCBBA' size={180}></BsCloudy>
                      <strong><p>Nublado</p></strong>
                    </div>
                  </div>
                  <div className='esquerdaBaixo'>
                    <div className='umidade'>
                      <div className='umidade2'>
                          <div className='umidade3'>
                            <SlDrop size={20} color='#2BCBBA'></SlDrop>
                            <FaPercent size={20} color='#2BCBBA'></FaPercent>
                          </div>       
                          <div className='umidade4'>
                            <p>Umidade</p>                        
                          </div> 
                      </div>     
                      <div className='umidade5'>
                        <strong><p>66%</p></strong>
                      </div>         
                    </div>
                    <div className='velocidade'>
                      <div className='velocidade2'>
                        <BsWind size={30} color='#2BCBBA'></BsWind>
                        <p>Velocidade do vento</p>
                      </div>
                      <div className='velocidade3'>
                        <strong><p>23km/h</p></strong>
                      </div>
                    </div>
                    <div className='direcao'>
                    <div className='direcao1'>
                        <TbWindsock size={30} color='#2BCBBA'></TbWindsock>
                        <p>Direção do vento</p>
                    </div>
                      <div className='direcao2'>
                        <strong><p>ND</p></strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='direita'>
                  <div className='divBlue'>
                    <div className='blueEsquerda'>
                      <p>Sexta</p>
                      <p>11/10/2019</p>
                    </div >
                    <div className='blueMeio'>
                      <WiDaySunny size={70}></WiDaySunny>
                      <span>Ensolarado</span>
                    </div>
                    <div className='blueDireita'>
                      <div className='blueDireitaCima'>
                        <FaTemperatureLow size={25}></FaTemperatureLow>
                        <span>Min.</span>
                        <span>15°</span>
                      </div>
                      <div className='blueDireitaBaixo'>
                        <FaTemperatureHigh size={25}></FaTemperatureHigh>
                        <span>Max.</span>
                        <span>25°</span>
                      </div>
                    </div>
                  </div>
                  <div className='divOrange'>
                  <div className='orangeEsquerda'>
                      <p>Sábado</p>
                      <p>12/10/2019</p>
                    </div >
                    <div className='orangeMeio'>
                      <WiDaySunny size={70}></WiDaySunny>
                      <span>Ensolarado</span>
                    </div>
                    <div className='orangeDireita'>
                    <div className='orangeDireitaCima'>
                        <FaTemperatureLow size={25}></FaTemperatureLow>
                        <span>Min.</span>
                        <span>18°</span>
                      </div>
                      <div className='orangeDireitaBaixo'>
                        <FaTemperatureHigh size={25}></FaTemperatureHigh>
                        <span>Max.</span>
                        <span>31°</span>
                      </div>
                    </div>
                  </div>
                  <div className='divGreen'>
                  <div className='greenEsquerda'>
                      <p>Domingo</p>
                      <p>13/10/2019</p>
                    </div >
                    <div className='greenMeio'>
                      <BsCloudLightning size={48}></BsCloudLightning>
                      <span>Tempestade</span>
                    </div>
                    <div className='greenDireita'>
                    <div className='greenDireitaCima'>
                        <FaTemperatureLow size={25}></FaTemperatureLow>
                        <span>Min.</span>
                        <span>13°</span>
                      </div>
                      <div className='greenDireitaBaixo'>
                        <FaTemperatureHigh size={25}></FaTemperatureHigh>
                        <span>Max.</span>
                        <span>23°</span>
                      </div>
                    </div>
                  </div>
                  <div className='divPurple'>
                  <div className='purpleEsquerda'>
                      <p>Segunda</p>
                      <p>14/10/2019</p>
                    </div >
                    <div className='purpleMeio'>
                      <BsCloudRain size={48}></BsCloudRain>
                      <span>Chuvoso</span>
                    </div>
                    <div className='purpleDireita'>
                    <div className='purpleDireitaCima'>
                        <FaTemperatureLow size={25}></FaTemperatureLow>
                        <span>Min.</span>
                        <span>15°</span>
                      </div>
                      <div className='purpleDireitaBaixo'>
                        <FaTemperatureHigh size={25}></FaTemperatureHigh>
                        <span>Max.</span>
                        <span>24°</span>
                      </div>
                    </div>
                  </div>
                  <div className='divRed'> 
                  <div className='redEsquerda'>
                      <p>Terça</p>
                      <p>15/10/2019</p>
                    </div >
                    <div className='redMeio'>
                      <BsCloudy size={50}></BsCloudy>
                      <span>Nublado</span>
                    </div>
                    <div className='redDireita'>
                    <div className='redDireitaCima'>
                        <FaTemperatureLow size={25}></FaTemperatureLow>
                        <span>Min.</span>
                        <span>15°</span>
                      </div>
                      <div className='redDireitaBaixo'>
                        <FaTemperatureHigh size={25}></FaTemperatureHigh>
                        <span>Max.</span>
                        <span>24°</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>      
            </div>

            <div className='footer'>
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
                  <span>1 de 2</span>
                </li>
                <li>
                  <Link to={`/Assets/`}><IoIosArrowForward size={20}></IoIosArrowForward></Link>
                </li>
              </ul>
            </div>  


        </div>  

    );
}
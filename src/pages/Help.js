import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';
import searchNum from '../imgs/num-search.png';
import searchRow from '../imgs/row-search.png';
import searchDate from '../imgs/date-search.png';
import settingsHelp from '../imgs/settings-help.png';
import unitToggle from '../imgs/toggle-help.png';
import {Helmet} from "react-helmet";

class Help extends Component {

      render() {
        return(
            <>

                <Helmet>
                    <title>Help</title>
                </Helmet>

                <Header />
                <Sidenav pageSettings={false} />
                <div id='content'>
                  <h1>Instructions</h1>
                  <h3>how to search</h3>
                  <ul>
                    <li>
                      You can search by element name, symbol, atomic number, category, property, or discovery date.
                    </li>
                    <figure>
                      <img src={searchDate} className='illustration' alt='everything after 1910 is a lie' />
                      <figcaption>
                        Searching by discovery date
                      </figcaption>
                    </figure>
                    <li>
                      When you start typing, everything will be dimmed. Don't panic. This is normal. 
                      Only elements that match your query will show up.
                    </li>
                    <li>
                      Searching is not case sensitive. 
                      You can mix-and-match capital and lower case letters as much as you want.
                    </li>
                    <li>
                      To search by <strong>symbol</strong>, enter one or two letters. 
                      So 'hy' returns nothing because it's not a real chemical symbol.
                    </li>
                    <li>
                      To search by <strong>name</strong>, start typing the element name you're after. 
                      You can't search by more than one name at a time "carbon" will work but "carbon and oxygen" 
                      won't.
                    </li>
                    <li>
                      Searching by <strong>atomic number</strong> is simple. Just type "24". 
                    </li>
                    <figure>
                      <img src={searchNum} className='illustration' alt='where is 24??' />
                      <figcaption>
                        Searching by atomic number
                      </figcaption>
                    </figure>
                    <li>
                      To search by <strong>category</strong> or <strong>property</strong>, just type the 
                      category or property.
                      To see all the radioactive elements, search "radioactive". 
                      To see the halogens, type "halogen" or "halogens". 
                      Alternatively, you can search "group 17", "grp17". 
                      In a similar vein "row 3" or "period 3" also works.
                    </li>
                    <figure>
                      <img src={searchRow} className='illustration' alt='show me the row' />
                      <figcaption>
                        Searching by row
                      </figcaption>
                    </figure>
                  </ul>

                  <h2 className='centre-text'>other features</h2>

                  <p className='centre-text'> 
                    It is possible to change both the language and temperatre units of this application from the settings.
                  </p>
                  
                  <figure>
                      <img src={settingsHelp} className='illustration' alt='where to find settings' />
                      <figcaption>
                        The settings button is on the top-right of the homepage
                      </figcaption>
                    </figure>

                  <figure>
                    <img src={unitToggle} className="illustration" alt="toggle units" />
                    <figcaption>
                      Unit options are limited to celsius, kelvin, and fahrenheit.<br/>
                      Language options are limited to English and Maori.
                    </figcaption>
                  </figure>

                  <p className='centre-text'> 
                    Please note that English is the primary language for this project and support for Maori is limited. 
                    As far as I can tell, no one has made a full Maori-language translation of the periodic table before so I had to make a lot of this up.
                    If anything looks wrong, please contact me.
                  </p>
        
                </div>
            </>
        );
      }
}

export default Help;
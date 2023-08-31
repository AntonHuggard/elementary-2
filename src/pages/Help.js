import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';
import unitToggle from '../imgs/toggle-units.png';

class Help extends Component {

      render() {
        return(
            <>
                <Header />
                <Sidenav pageSettings={false} />
                <div id='content'>
                  <h1>Instructions</h1>
                  <h3>how to search</h3>
                  <ul>
                    <li>
                      You can search by element name, symbol, atomic number, category, property, or discovery date.
                      </li>
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
                      Searching by <strong>atomic number</strong> is simple. Just type "104". 
                    </li>
                    <li>
                      To search by <strong>category</strong> or <strong>property</strong>, just type the 
                      category or property.
                      To see all the radioactive elements, search "radioactive". 
                      To see the halogens, type "halogen" or "halogens". 
                      Alternatively, you can search "group 17", "grp17". 
                      In a similar vein "row 3" or "period 3" also works.
                    </li>
                  </ul>

                  <h3>other features</h3>
                  <ul>
                      <li>you can control the sliders by using the arrow keys</li>
                      {/* <li>you can go between element modals using the arrow keys</li> */}
                      {/* <li>you can close the element modal by pressing the esc key</li> */}
                      <li>clicking the celsius button changes the temperature units</li>
                  </ul>
                  <figure>
                      <img src={unitToggle} className="illustration" alt="toggle units" />
                      <figcaption>
                        options are limited to celsius, kelvin, and fahrenheit.
                      </figcaption>
                    </figure>
        
                </div>
            </>
        );
      }
}

export default Help;
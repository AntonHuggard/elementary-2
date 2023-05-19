import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';

class About extends Component {

      render() {
        return(
            <>
                <Header />
                <Sidenav />
                
                <div id='content'>
                  <h1>About</h1>
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
        
                  <h3>why does this exist?</h3>
                  <p>
                      When I was studying chemistry at university, I wasted a huge amount of time manually
                      searching through the periodic table. 
                      It was a constant annoyance that something like this did not already exist.
                      With training in both chemistry and computer science, by the time I finished uni I
                      had the necessary skill set to build this. 
                      Then, due to the Covid-19 lockdowns, I also had the <em>time</em> to build this. 
                      <br/>
                      <br/>
                      I'd like to acknowledge the help I had from my friend Ben along the way.
                      Without his help, this project may not have been finished. 
                      <br/>
                      {/* The quiz was initially developed as a set of cards produced by <a href='http://piperpat.com'>PIPERS</a>.
                      The original plan was for these cards to be sent to high schools.
                      But, because the internet exists, all the questions and images were translated into webpages.
                      The quiz is now infintely scalable.  */}
                  </p>
                  <h3>credits</h3>
                  <p>
                      Creator & developer: <a href='antonhuggard.com'>Anton Huggard</a><br/>
                      Consultant: <a href='https://github.com/Benjamin-Piper'>Benjamin Piper</a><br/>
                  </p>
                </div>
            </>
        );
      }
}

export default About;
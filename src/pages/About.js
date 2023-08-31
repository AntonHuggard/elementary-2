import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';
import prehistoric from '../imgs/prehistoric.png';
import mediaeval from '../imgs/mediaeval.png';

class About extends Component {

      render() {
        return(
            <>
                <Header pageSettings={false} />
                <Sidenav />
                
                <div id='content'>
                  <h1>About</h1>
                  <hr />
                  <h3>why does this exist?</h3>
                  <p>
                      Because I wanted to see if I could do it.
                      <br/>
                      <br/>
                      Also, because it <em>should</em>.
                      <br/>
                      <br/>
                      When I was studying chemistry at university, I wasted a huge amount of 
                      time <em>manually</em> searching through the periodic table. 
                      It was very annoying that this website did not exist back then.
                      <br/>
                      <br/>
                    </p>
                    <hr />
                    <h3>history</h3>
                    <p>
                      This project started on Notepad on a computer at bFM (the Auckland University 
                      student radio station).
                      I was manning the reception desk at the time and didn't have enough work to do so
                      created a nondescript file called <em>d.html</em>. 
                      I then slowly started chiselling away at the project in between responding
                      to emails and uploading podcasts.
                    </p>
                    <figure>
                      <img src={prehistoric} className="illustration" alt="first iteration of this project" />
                      <figcaption>
                        This project circa Feb 2020 (before search was implemented).
                      </figcaption>
                    </figure>
                    <p>
                      Then along came Mr Covid and his 6 weeks of lockdown.
                      <br/>
                      <br/>
                      Then my friend Ben became a coach for the project. 
                      He was able to point out the many, many stupid mistakes I was making and
                      encouraged me to follow normal web development standards 
                      (such as using CSS instead of abusing the newline tag).
                    </p>
                    <figure>
                      <img src={mediaeval} className="illustration" alt="second iteration" />
                      <figcaption>
                        A primitive version of the search feature was implemented.
                      </figcaption>
                    </figure>

                      {/* The quiz was initially developed as a set of cards produced by <a href='http://piperpat.com'>PIPERS</a>.
                      The original plan was for these cards to be sent to high schools.
                      But, because the internet exists, all the questions and images were translated into webpages.
                      The quiz is now infintely scalable.  */}
                  <hr />
                  <h3>credits</h3>
                  <p>
                      Creator & developer: <a href='https://antonhuggard.com'>Anton Huggard</a><br/>
                      Consultant: <a href='https://github.com/Benjamin-Piper'>Benjamin Piper</a><br/>
                  </p>
                </div>
            </>
        );
      }
}

export default About;
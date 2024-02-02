import React, { Component } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/SideNav';
import prehistoric from '../imgs/prehistoric.png';
import mediaeval from '../imgs/mediaeval-2.png';
import idea from '../imgs/website-idea.png';
import firstVersion from '../imgs/version-1.png';
import {Helmet} from "react-helmet";

class About extends Component {

      render() {
        return(
            <>
                <Helmet>
                    <title>About</title>
                </Helmet>
                
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
                    <h3>History</h3>
                    <p>
                      I had the idea for this project during a Computer Science lecture around September 2019. 
                      After exams, I considered attempting to make 31 websites in 31 days. 
                      I only got as far as writing down 31 ideas -- one of these was an "interactive periodic table".
                      This is the earliest evidence I can find of the project. 
                    </p>
                    <figure>
                      <img src={idea} className="illustration" alt="first evidence of the idea" />
                      <figcaption>
                        My notebook, November 2019.
                      </figcaption>
                    </figure>
                    <p>
                      Development started in Notepad on a computer at bFM (the Auckland University student radio station).
                      I was manning the reception desk at the time and didn't have enough work to do so
                      created an inconspicuous file called <em>d.html</em>. 
                      I was slowly chiselling away at this in between responding to emails and publishing podcasts.
                    </p>
                    <figure>
                      <img src={prehistoric} className="illustration" alt="first iteration of this project" />
                      <figcaption>
                        This project c. February 2020 (before search was implemented).
                      </figcaption>
                    </figure>
                    <p>
                      I was at the bFM reception desk (March 2020) when, during one of the hourly news bulletins, they announced that the government was closing the border due to Covid-19.
                      <br/>
                      <br/>
                      On my last day before lockdown, I copied the d.html file onto a flash drive.
                      I was lucky enough to receive the wage subsidy, so could treat this project as my full-time job.
                      During this period, I made rapid progress and my friend Benjamin became a coach/consultant. 
                      He was able to point out the many, many stupid mistakes I was making and encouraged me to follow normal web development practices.
                    </p>
                    <figure>
                      <img src={mediaeval} className="illustration" alt="second iteration" />
                      <figcaption>
                        Clickable elements, 23 April 2020
                      </figcaption>
                    </figure>

                      {/* The quiz was initially developed as a set of cards produced by <a href='http://piperpat.com'>PIPERS</a>.
                      The original plan was for these cards to be sent to high schools.
                      But, because the internet exists, all the questions and images were translated into webpages.
                      The quiz is now infintely scalable.  */}

                    <p>
                      By the end of 2020, the project had been completed.
                    </p>
                    <figure>
                      <img src={firstVersion} className="illustration" alt="completed first version" />
                      <figcaption>
                        The completed first version of the project, December 2020.
                      </figcaption>
                    </figure>
                    <p>
                      Then, in July 2022, I decided to rebuild the project using a new framework -- ReactJS. 
                      This is what you are now looking at.
                    </p>
                    <p>
                      On 14 June 2023, I started working on a M<span dangerouslySetInnerHTML={{ __html:'&amacr;' }}></span>ori-language translation. 
                      This was finished a day later.
                    </p>
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
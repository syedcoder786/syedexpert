import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class About extends Component {

  render() {

    return (
      // <div>
      // <header>
      //   <div class="container">
      //     <div id="branding">
      //       <h1><span class="highlight">Syed</span> Expert</h1>
      //     </div>
      //     <nav>
      //       <ul>
      //         <li><a href="/">Home</a></li>
      //         <li class="current"><a href="vedios">Vedios</a></li>
      //       </ul>
      //     </nav>
      //   </div>
      // </header>
  
    //   {/* <section id="newsletter">
    //     <div class="container">
    //       <h1>Subscribe To Our Newsletter</h1>
    //       <form>
    //         <input type="email" placeholder="Enter Email...">
    //         <button type="submit" class="button_1">Subscribe</button>
    //       </form>
    //     </div>
    // </section> */}
    <div>
  
      <section id="main">
        <div class="container">
          <article id="main-col">
            <h1 class="page-title" style={{color:'white'}}>About Us</h1>
            <p style={{color:'white'}}>
              We sell 8 ball pool account at very affordable prices. 100% trusted selling. Get Email/Password directly after payment. Enjoy 8 ball pool. Take part in our contest and get a chance to win free 8 ball pool accounts. <br/>Like, Share And <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCVbNRi-OF3T1gYDE6ciPdUg" >Subscribe Now</a> for latest updates.
            </p><br/>
            {/* <p class="dark">
  Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor, vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor lorem sapien, in aliquet sapien convallis et. Donec nec mauris nulla. Curabitur cursus semper odio, et hendrerit ante. Nunc at cursus ante. Maecenas gravida ligula ut efficitur suscipit. Nulla id turpis varius, pretium nunc sed, fermentum sem. Sed lacinia nunc non interdum pellentesque.
            </p> */}
            <ReactPlayer style={{maxWidth:'100%'}} url = "https://www.youtube.com/watch?v=rJsSG5dC7sw" controls = {true} playing = {true}/><br/><hr/><br/>
            <ReactPlayer style={{maxWidth:'100%'}} url = "https://www.youtube.com/watch?v=P6A2tNF7DQ0" controls = {true} /><br/>

          </article>
  
          <aside id="sidebar">
            <div class="dark">
              <h3 style={{color:'#98AFC7', fontSize:'20px'}}>EXPERT KI CHOICE</h3>
              <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCVbNRi-OF3T1gYDE6ciPdUg" style={{color:'#E5E4E2', fontSize:'20px'}}>Subscribe Now</a><br/><br/>Subscribe Our Channel go get latest updates about 8 ball pool account prices. (Whatsapp Only) Mob- <b>+91-8595675141</b></p>
            </div>
          </aside>
        </div>
      </section>
    </div>
    )
    
}
}


export default About;

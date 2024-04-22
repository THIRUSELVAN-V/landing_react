import React from 'react'
import p1 from './bg-1.png'
import p2 from './ooty.jpeg'
import p3 from './madurai.jpeg'
import p4 from './kdaikanal.jpeg'
import p5 from './kanyakumari.jpeg'
import p6 from './Mahabalipuram.jpeg'
import p7 from './courtallam.jpg'
import p8 from './pic1.png'
import p9 from './beach2.avif'
function Land() {
  return (
    <div>
        <body>
    <img src={p1} alt="beaches" class="img"/>
    
    <nav>
        
        <ul class="navi">
            <li class="logo"><b>Tamil Payanam.com</b></li>
            <li class="nav">HOME</li>
            <li class="nav">OFFERS</li>
            <li class="nav">SERVICES</li>
            <li class="nav">CONTACTS</li>
            <li class="nav">HELP</li>
        </ul>
        
    </nav>
    <h2 class="travel">Travel</h2>
    <pre class="para" >Embark  on a journey  of a lifetime  and explore the TamilNadu's <br />
         most breathtaking destinations with our expert travel advice. <br />
         From exotic beaches to cultural wonders, we've got  you  covered <br />
         with  our   comprehensive travel  guides  and  insider  tips.</pre>
    
         
         <button class="but">Read More</button><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h2 class="stjr">Start Your Journey</h2>
        <h3 class="mspt"><i>The most searched places in TamilNadu</i></h3>
        
        <div class="line">
            <img src={p2} alt=""/>
            <img src={p3} alt=""/>
            <img src={p4} alt=""/><br/>
            
        </div>
        <div class="t1">
            <p>Ooty</p>
            <p>Madurai Meenakshi Amman</p>
            <p>Kodaikanal</p>
        </div>
        <div class="line2">
            <img src={p5} alt=""/>
            <img src={p6} alt=""/>
            <img src={p7} alt=""/>
        </div>
        <div class="t2">
            <p>Kanyakumari</p>
            <p>Mahabalipuram</p>
            <p>WaterFalls,courtallam</p>
        </div>
        <div class="">
            <h1 class="wc">Why Choose Us</h1>
            <h3 class="wc">The gladdest moment in human life, is a departure into unknown lands.</h3>
        </div>
        <div class="pt">
            <pre class="p1">   Passionate Travel
            <p class="pa">Fuel your passion for adventure 
and discover new horizons</p></pre>
            <img class="ig2" src={p8} alt=""/>
        </div>
        <div class="pt">
            <img class="ig" src={p9} alt=""/>
            <pre class="p1">   Beautiful Places
            <p class="pa">Uncover the world's most 
breathtakingly beautiful places</p>
            </pre>
        </div>
        <footer class="foot">
            <h1>Tamil Payanam.com</h1><br/><br/>
            <h3>Travel makes one modest. You see what a tiny place you occupy in the world.</h3>
        </footer>
        
</body>
    </div>
  )
}

export default Land
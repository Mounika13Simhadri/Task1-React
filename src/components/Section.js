import React from 'react'

export default function Section() {
  return (
    <div className="section1">
        <div className="section-box-1">
            <div>
                <img src="images/image-web-3-desktop.jpg" alt="Image1" width="650" height="300"/>
            </div>
            <div className="section-box-3">
                <div>
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus suscipit corporis dolorem unde earum exercitationem molestiae minus, praesentium harum.</p>
                    <input className="button" type="submit" name="submit" value="Read More"/>
                </div>
            </div>
        </div>
       
        <div className="section-box-2">
            <div className="container">
                <h1>New</h1>
                <h5>Hydrogen vs Electric Cars</h5>
                <p>will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr/>
            <div className="container">
                <h5>The Downsides of AI Artistry</h5>
                <p>What are the possible adverse effects of one-demand AI image generation?</p>
            </div>
            <hr/>
            <div className="container">
                <h5>Is VC Funding Drying Up?</h5>
                <p>Private funding by VC firms is down 50% YOY.We take a look at what that means.</p>
            </div>
        </div>
    </div>
  )
}

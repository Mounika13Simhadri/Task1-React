import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="main-footer">
            <div className="box-1">
                <div>
                    <img src="images/image-retro-pcs.jpg" alt="Image2" height="150"/>
                </div>
    
                <div className="dl">
                     <h2>01</h2>
                    <h4>Reviving Retro PCs</h4>
                    <p><small>What happens when old PCs are given modern upgrades?</small></p>
                </div>
            </div>
            <div className="box-2">
                <div>
                     <img src="images/image-top-laptops.jpg" alt="Image3" height="150"/>
                </div>

                <div className="dl">
                    <h2>02</h2>
                    <h4>Top 10 Laptops of 2022</h4>
                     <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="box-3">
                <div className>
                    <img src="images/image-gaming-growth.jpg" alt="Image4" height="150"/>
                </div>
                <div classname="dl">
                    <h2>03</h2>
                    <h4>The Growth of Gaming</h4>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>

        </footer>
      
    </div>
  )
}

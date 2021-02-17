import React from 'react'
import { Link } from 'react-router-dom'

function FooterLinks() {
    return (
        <div className='footer_links'>
            <div className='container'>
                <div className="row">
                    <div className="links_container col-6 col-md-3">
                        <h6>Get to Know Us</h6>
                        <ul className='links'>
                            <li><Link>about us</Link></li>
                            <li><Link>careers</Link></li>
                            <li><Link>press releases</Link></li>
                            <li><Link>amazon cares</Link></li>
                            <li><Link>gift a smile</Link></li>
                        </ul>
                    </div>
                    <div className="links_container col-6 col-md-3">
                        <h6>Connect with Us</h6>
                        <ul className='links'>
                            <li><Link>about us</Link></li>
                            <li><Link>careers</Link></li>
                            <li><Link>press releases</Link></li>
                            <li><Link>amazon cares</Link></li>
                            <li><Link>gift a smile</Link></li>
                        </ul>
                    </div>
                    <div className="links_container col-6 col-md-3">
                        <h6>Make Money With Us</h6>
                        <ul className='links'>
                            <li><Link>about us</Link></li>
                            <li><Link>careers</Link></li>
                            <li><Link>press releases</Link></li>
                            <li><Link>amazon cares</Link></li>
                            <li><Link>gift a smile</Link></li>
                        </ul>
                    </div>
                    <div className="links_container col-6 col-md-3">
                        <h6>Let us Help You</h6>
                        <ul className='links'>
                            <li><Link>about us</Link></li>
                            <li><Link>careers</Link></li>
                            <li><Link>press releases</Link></li>
                            <li><Link>amazon cares</Link></li>
                            <li><Link>gift a smile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default FooterLinks

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'

function Trust() {
    return (
        <div>
            <div className='trust'>
                <div className='trustgrid' style={{ margin: 'auto 0px !important' }}>
                    <div className='videogrid'>
                        <div className='locate'>
                            <div className='mapdiv'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56066.95051313153!2d76.97843414469673!3d28.56422475037019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1628837487986!5m2!1sen!2sin"
                            width="100%" height="300"  allowfullscreen="" loading="lazy"></iframe>



                            </div>
                        </div>
                    </div>
                    <div className='trusttextgrid' md='6'><br />

                        <h2 style={{ fontSize: "28px" }}>WHY TRUST US</h2>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                            <FontAwesomeIcon icon={faUserGraduate} style={{ color: 'white', fontSize: '4.4rem', paddingLeft: '20px', marginBottom: '20px' }} />
                            <br />
                            <h4 style={{ fontSize: "20px" }}> High standards in value education</h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                            <FontAwesomeIcon icon={faUserShield} style={{ color: 'white', fontSize: '4.2rem', paddingLeft: '20px', marginBottom: '20px' }} />
                            <br />
                            <h4 style={{ marginLeft: '9px', fontSize: "20px" }}> Safety and Discipline</h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                            <FontAwesomeIcon icon={faBookReader} style={{ color: 'white', fontSize: '4.4rem', paddingLeft: '20px', marginBottom: '20px' }} />
                            <br />
                            <h4 style={{ fontSize: "20px" }}> Highest standards of academic and sporting excellence</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust




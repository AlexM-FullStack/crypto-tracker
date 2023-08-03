import './About.css'
import aboutImage from '../images/about.jpg'

const About = () => {
  return (

    <>

        <div className="about-container">
            <div className='about-intro'>
                <div className="about-left">
                    <h2>Welcome to CryptoTracker</h2>
                    <p> At CryptoTracker, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.</p> 

                    <p>Today, CryptoTracker is a leading blockchain ecosystem, with a product suite that includes the largest digital asset exchange. Our mission is to be the infrastructure provider for crypto in tomorrow’s world.</p> 
                </div>

                <div className="about-right">
                    <img src={aboutImage} alt="team" />
                </div>    
            </div>
        </div>
    </>
  )
}

export default About
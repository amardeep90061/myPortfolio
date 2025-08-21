import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Amardeep Prajapati,</span> Full Stack Developer based in India.</h1>
      <p>I am a full stack developer from India with 2+ years of experience working with Happiest Mind Technologies Limited.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <a href="src/assets/Amardeep_Prajapati_SDE.pdf" download><div className='hero-resume'>My resume</div></a>
      </div>
      
    </div>
  )
}

export default Hero

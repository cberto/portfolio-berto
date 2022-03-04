import React from 'react'
import './about.css'
import ME from '../../assets/jp.jpg'
import { GiBlackBook } from 'react-icons/gi';
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiBlackBook className='about__icon' />
              <h5>Experience</h5>
              <small> 2 years</small>
            </article>
            <article className='about__card'>
              <GiBlackBook className='about__icon' />
              <h5>Experience</h5>
              <small> 2 years</small>
            </article>
            <article className='about__card'>
              <GiBlackBook className='about__icon' />
              <h5>Experience</h5>
              <small> 2 years</small>
            </article>
          </div>
          <p>
            A passionate Full Stack Developer.
            I am creative and with a lot of initiative. I am eager to learn and continue to develop both personally and professionally. Focused on innovation and development of new technologies. Able to take responsibility for the challenges and goals that the organization poses me. Adaptability to frequent change of tasks or decisions taken by my work group.  Fun fact I love to read, learn new technologies and play sports. I practice Judo and Kendo
          </p>

          <a href="#contact" class="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About
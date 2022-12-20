import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src="https://lh3.googleusercontent.com/-BnyqWKl_S_e005GHPv9hW_tBMnZ3T83jRhvhtKJkZ37w1pRNgwAioRZH9fHV0FHBkZA9GJmTalOZActn6UX1upsmtqqBMwxaw-fgCEQxfzHQqkFfjd9INzQy53f6vDkbnTEJ1EKceoU9LbiYX5xsDRJrWdJIBlMejT7HFeTQwBjssBpMzVAnsN0vn2zYmDR5IdPtJ4yP4NWM8FV8t76ru_NGEwO47idhkowD4jI8V7R6uglf1YCqEgzPoaTOLWBn4B-V4dZsWD1XQ7U_FmtU1mdj0K_ZVCPKWA4uV3qW39CgNv4vvLqf3dSr1zpS4ZCoJkOdf84scEAPry5toDZGWGVJhMyPJMDjUFGjRrXXjeVdb9N_8Y81N2cnrxof-iXCsFKE63Bs2q35KbFFab0jHd4RctCatMI5WBzPYVHF7M99pILpxVIZ7aHYKXED3mWL_S99-PGlRdaNduc2ZpMWMfiNURd2WtkyP8AoId4iUyKxfTPYuEI0GqvSe0yEvVYnv_HzDZCFUE5VvZN4DTqtC8LljxFuLC6Idz3dQecepHe8a1IDaBR0jUpuOD1mnuhdVr_tK9uTWh908znRPTQ01V11-fAJXnnJYzxE9rBH1odiyWfGH8nBpQAMHIOb0JZ8ZAwl44UcnYFTc_tngRLtj4thFFWZdECmXH1vY3hVjU3jJDxE5ndlnwsdMPaVmnDGrE2nVB3_j_KHSrKidBg5PlhAJIWjDegKoQZ_cHjSNKCvqRuBEaSLR1IrzuSMgnN-r2mpWK-TDm7_wN2B3HzJ_b7_qvESkPuFuFhCHJRRnLU9Ff8CFsc6xfj2MrQPWsBGUIaCA7kfIN3LcH1Z9x7S9Zt1Gg4ePepqkbhfUQYt-SmwbBOcbbzXg36gp5wi9I4DRqoNvB87JVtIhbjTwxv9E-B-WGkBpFBS-RzALdjtg0vOcwSyOqgh3wvhjvTXQu84eG3OlWNqLFyMQrmpcryBM2120HKD8HrHg97wlNmSyYdRV8XQi_LmKe3qA=s955-no?authuser=1" alt="my_pic" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experiance</h5>
              <small>1+ year</small>
            </article>
            <article className="about-card">
              <VscFolderActive className='about-icon'/>
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, illum! Similique rerum iure optio iste a totam distinctio maiores dicta sapiente sequi dolores praesentium in ex, laboriosam ea excepturi animi, reprehenderit quidem molestias, nihil odit velit modi! Harum, repudiandae aliquid eaque illum natus, id doloribus debitis omnis officia tempora dolore.</p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

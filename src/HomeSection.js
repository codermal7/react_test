import React from 'react';

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="andI blink">
          Learn <span id="job-title">DSA</span>
        </h1>
        <h3>
          The Epic Handbook for Dominating <span>SDE</span> Interviews like a
          Pro
        </h3>
        {/* <p style="text-align: justify;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, non
                qui? Aliquam, amet beatae nulla ab vitae quisquam dolor voluptatibus qui ea at minima? Minima et odit
                incidunt atque excepturi.</p> */}
        <div className="social-media">
          <a href="https://www.instagram.com/not_ur_anuj/" target="_blank">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://github.com/codermal7" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anuj-kumar-pandey-6151a81b5/"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://leetcode.com/codermal7/" target="_blank">
            <i className="bx bx-code"></i>
          </a>
        </div>
        {/* <a href="https://drive.google.com/uc?export=download&id=1laaNkSdXJ1FSGDsqiNI9kciVR8fgf9ie" className="btn" id="trthis">Try
                this <i className='bx bx-terminal' id="termm"></i></a> */}

        <button
          className="dashbtn"
          style={{ backgroundColor: 'rgb(255, 123, 0)', border: '2px solid rgb(255, 123, 0)' }}
        >
          View Courses
        </button>

        <button className="dashbtn">
          Watch Video<i className="bx bx-terminal" id="termm"></i>
        </button>
      </div>
      <div className="home-img">
        {/* <img src="images/desk4__1_-removebg-preview (1).png" alt=""> */}
        <img src="assets/images/babbar bhaiya home image.png" alt="" />
      </div>
    </section>
  );
};

export default HomeSection;

import React from "react";

export default function Projects() {
  return (
    <section id="projects" class="container">
      <h2>Past Projects</h2>
                  <div class="card bottomspace">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="images/woodpine.jpg" alt="An image of Woodpine Webpage index page." class="img-fluid"/>
                      <a href="http://college.aseparatesociety.com/html/woodpine/index.html" alt="woodpine webpage index">
                        <div class="mask"></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Woodpine Storyline</h5>
                      <p class="card-text">This is a sample of a complete webpage design centered around an author's story.  Includes a sample character gallery, location pages, info page, and location pages. The page is made with Bootstrap, and CSS/HTML</p>
                      <a href="http://college.aseparatesociety.com/html/woodpine/index.html" class="btn btn-primary">View The Page</a>
                    </div>
                  </div>
                  <hr />

                  <div class="card bottomspace">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="images/pleasureisland.jpg" alt="an image of the index of the Pleasure Island webpage"class="img-fluid"/>
                      <a href="http://college.aseparatesociety.com/html/pleasureisland/index.html" alt="Pleasure Island webpage index">
                        <div class="mask" ></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Pleasure Island</h5>
                      <p class="card-text">This is a redesign of the Pleasure Island webpage</p>
                      <a href="http://college.aseparatesociety.com/html/pleasureisland/index.html" class="btn btn-primary">My Redesign</a>
                      <a href="https://www.pleasureislandnc.org" class="btn btn-primary">Original Site</a>
                    </div>
                  </div>
                  <hr />

                  <div class="card bottomspace">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="images/viciouscycles.jpg"  alt="an image of the index of the Vicious Cycles webpage" class="img-fluid"/>
                      <a href="http://college.aseparatesociety.com/html/viciouscycles/index.html" alt="ViciousCycles webpage index">
                        <div class="mask"></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Vicious Cycles Website</h5>
                      <p class="card-text">Design for a fictious company named Vicious Cycles.  This website is designed using CSS/HTML. This site features full responsiveness, with multiple viewport break sizes, a detailed navigation bar, and responsive images.</p>
                      <a href="http://college.aseparatesociety.com/html/viciouscycles/index.html" target="_blank" class="btn btn-primary">View The Page</a>
                    </div>
                  </div>
    </section>
  );
}
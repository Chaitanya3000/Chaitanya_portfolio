import "./Home.css";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

function Home() {
  const containerRef = useRef();

  useEffect(() => {
    const currentContainer = containerRef.current;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); // Set aspect ratio as 1, will update later
    camera.position.z = 13;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    );
    currentContainer.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load 3D model
    const loader = new GLTFLoader();
    let space_man;
    loader.load(
      "/images/3december_2021_day_18_astronaut.glb",
      function (gltf) {
        space_man = gltf.scene;
        scene.add(space_man);
      },
      undefined,
      function (error) {
        console.error("Error loading the 3D model", error);
      }
    );

    // Resize handling
    const handleResize = () => {
      const { clientWidth, clientHeight } = currentContainer;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (space_man) {
        space_man.rotation.y += 0.01; // Rotate model
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      currentContainer.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill_card");

    skillCards.forEach(($card) => {
      if (!$card) return; // Prevent accessing null elements

      let bounds;

      const rotateToMouse = (e) => {
        if (!bounds) return;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        if ($card && $card.style) {
          $card.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
              ${center.y / 100},
              ${-center.x / 100},
              0,
              ${Math.log(distance) * 2}deg
            )
          `;

          const glowElement = $card.querySelector(".glow");
          if (glowElement && glowElement.style) {
            glowElement.style.backgroundImage = `
              radial-gradient(
                circle at
                ${center.x * 2 + bounds.width / 2}px
                ${center.y * 2 + bounds.height / 2}px,
                #ffffff55,
                #0000000f
              )
            `;
          }
        }
      };

      $card.addEventListener("mouseenter", () => {
        bounds = $card.getBoundingClientRect();
        document.addEventListener("mousemove", rotateToMouse);
      });

      $card.addEventListener("mouseleave", () => {
        document.removeEventListener("mousemove", rotateToMouse);
        if ($card && $card.style) {
          $card.style.transform = "";
        }
        const glowElement = $card.querySelector(".glow");
        if (glowElement && glowElement.style) {
          glowElement.style.background = "";
        }
      });
    });
  }, []);

  return (
    <>
      {/* Navigation bar */}
      <div className="nav_bar">
        <h1>G. Chaitanya</h1>
        <img src="\images\Pink Typography Initial GC Logo (2).png" alt="" />
      </div>

      {/* Main Hero Section */}
      <div className="hero_container">
        <div className="hero_text">
          <h2>
            Hi, Wecome to my <span class="highlight">PORTFOLIO</span> I am
          </h2>
          <h1>G.Chaitanya</h1>
          <p>
            In the boundless expanse of the software galaxy, I’m on a mission to
            explore, innovate, and push the boundaries. Every challenge is a
            stepping stone, every setback a course correction, leading me closer
            to groundbreaking solutions.
          </p>
        </div>
        <div ref={containerRef} className="canvas_container"></div>
        <div className="star_container">
          <div className="bubbles">
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 13 }}></span>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="skills">
        <h1>TECHNICAL SKILLS</h1>
        <h4>For all my certificates check the below github repository</h4>
        <a href="https://github.com/Chaitanya3000/Certificates.git">
          Certificates Github Link
        </a>
        <div className="skills_container">
          <div className="skill_card">
            <h1>Frontend Developer</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Angular</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skill_card">
            <h1>Backend Developer</h1>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill_card">
            <h1>Python Developer</h1>
            <ul>
              <li>Python</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Flask</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Non-technical Skill Section */}
      <div className="Non_skills">
        <h1>SOFT SKILLS</h1>
        <img src="/images/3d-casual-life-rocket.png" alt="" />
        <div className="softSkills_container">
          <div className="softSkills_card">
            <h3>Leadership Skills</h3>
            <h4>– The Commander's Helm</h4>
            <p>
              In the vast expanse of the unknown, leadership is the algorithm
              that keeps the crew in sync. As the Class Representative (CR)
              during my B.Tech days, I implemented an efficient leadership
              protocol to coordinate projects like a master control node in a
              distributed system. By delegating tasks, resolving conflicts, and
              ensuring smooth team communication, I optimized our group's
              performance, much like a load balancer ensures equal distribution
              of tasks across servers.
            </p>
          </div>
          <div className="softSkills_card">
            <h3>Decision Making</h3>
            <h4>– Mission Control Precision</h4>
            <p>
              In the dynamic environment of group projects, timely decisions are
              as crucial as a real-time system processing data on the fly. As a
              team leader, I had to act like a real-time operating system,
              ensuring quick, informed decisions under pressure. Whether it was
              prioritizing tasks, resolving bottlenecks, or handling unforeseen
              challenges, I executed decisions with precision, keeping the
              mission on course,
            </p>
          </div>
          <div className="softSkills_card">
            <h3>Critical Thinking</h3>
            <h4>– Navigating the Cosmic Maze</h4>
            <p>
              In the digital universe, critical thinking is like running a
              recursive search algorithm through a complex dataset. When
              tackling group projects or competition challenges, I broke down
              problems into smaller sub-problems, analyzing each like a
              divide-and-conquer strategy. Just as a well-designed algorithm
              finds the optimal path in a maze of data, I applied logic and
              creativity to discover innovative solutions, ensuring we reached
              our objectives efficiently.
            </p>
          </div>
          <div className="softSkills_card">
            <h3>Communication</h3>
            <h4>– Interstellar Signals</h4>
            <p>
              Effective communication is the key to transmitting data across
              systems, whether in deep space or a project team. Like a
              well-implemented data transmission protocol, I ensured that all
              information – from project status to team concerns – was clearly
              encoded, packaged, and delivered without loss or distortion. My
              role involved decoding complex ideas and presenting them in a way
              everyone could understand, similar to how a compression algorithm
              reduces data without losing meaning.
            </p>
          </div>
        </div>
      </div>

      {/* projects section */}
      <div className="projects">
        <h1>PROJECTS</h1>
        <div className="projects_container">
          <div className="project_card">
            <img src="\images\Screenshot 2024-10-02 200815.png" alt="" />
            <div className="content">
              <h3>Community Service Project</h3>
              <h4> - Angular, Nodejs, Expressjs, Oracle, SQL</h4>
              <div className="links">
                <a href="https://github.com/Chaitanya3000/CSP_Frontend.git">Github Link for frontend </a>
                <a href="https://github.com/Chaitanya3000/CSP_Backend.git">Github Link for backend</a>
              </div>
              <p>
                For my project on Anganwadi Ration Statistics, I developed a
                user-friendly frontend using Angular to display real-time data
                and trends. The backend, powered by Node.js, Express.js, and
                Oracle Database, ensures secure, efficient data management for
                tracking and analyzing ration distributions across various
                Anganwadi centers.
              </p>
            </div>
          </div>
          <div className="project_card">
            <img src="/images/image.png" alt="" />
            <div className="content">
              <h3>Candle Online Store Product Landing Page</h3>
              <h4> - Reactjs, HTML, CSS, JavaScript</h4>
              <a href="https://github.com/Chaitanya3000/productLandingPage.git">Github code Link</a>
              <p>
                For my E-commerce Candle Platform project, I built a dynamic and
                responsive frontend using React.js. React’s component-based
                architecture enabled efficient product rendering, while state
                management ensured a seamless shopping experience.
              </p>
            </div>
          </div>
        </div>
        <h1>More Projects Comming Soon . . .</h1>
      </div>

      {/* Footer and contacts section */}
      <div className="footer">
        <div className="footer_img_container">
          <img src="\images\Untitled design (1).png" alt="" />
          <h1>Gurazala Chaitanya Nanda Mohan</h1>
        </div>
        <div className="socials_container">
          <h3>Contacts</h3>
          <ul>
            <li>
              <span>Email: </span>
              <a href="mailto:http://gurazalachaitanya@gmail.com">
                gurazalachaitanya@gmail.com
              </a>
            </li>
            <li>
              <span>PhoneNO: </span>
              <span>8008720148</span>
            </li>
            <li className="socials">
              <a href="https://github.com/Chaitanya3000">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/in/chaitanya3000">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="https://leetcode.com/u/Chaitanyanandamohan/">
                <ion-icon name="code-outline"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;

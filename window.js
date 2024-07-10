const nodeList = Array.from(document.querySelectorAll(".line"));
const menu =  document.getElementById("menu");
const layout = document.querySelector(".layout");
const slide = document.querySelector(".slide");
const main = document.querySelector(".main-container")

menu.addEventListener('click', () => {
    layout.classList.toggle("slider");
    slide.classList.toggle("slider");
    nodeList[0].classList.toggle("first-child");
    nodeList[1].classList.toggle("second-child");
    nodeList[2].classList.toggle("third-child");
});

document.querySelector(".layout").onclick = () => {
    layout.classList.remove("slider");
    slide.classList.remove("slider");
    nodeList[0].classList.remove("first-child");
    nodeList[1].classList.remove("second-child");
    nodeList[2].classList.remove("third-child");
}
const arrayChecked =  new Array(6).fill(true);
const arrowPointer = document.querySelector(".info-detail");
const listInfo = document.querySelectorAll(".list-info");
const infoDetails = document.querySelector(".info-detail")
listInfo.forEach(info => {
    info.addEventListener('click', () => {
        if (info.value === 1 && arrayChecked[0]){
            arrayChecked.fill(true);
            arrayChecked[0] = false;
            infoDetails.innerHTML = 
            `
            <div id="education" class="section-slide">
                        <ul class="ul-father">
                            <li class="li-father"><strong>Bachelor of Science in Computer Science</strong>
                                <ul class="ul-child">
                                    <li class="li-child"><h4>TechVille University of Technology</h4></li>
                                    <li class="li-child"><h4>Year of Graduation:</h4> 2015</li>
                                    <li class="li-child"><h4>GPA:</h4> 3.8/4.0</li>
                                    <li class="li-child"><h4>Extracurricular Activities:</h4> Member of the Programming Club, Volunteer teacher for programming classes for children.</li>
                                </ul>
                            </li>
                            <li class="li-father"><strong>Master of Science in Computer Science</strong>
                                <ul class="ul-child">
                                    <li class="li-child"><h4>Apex Institute of Technology and Science</h4></li>
                                    <li class="li-child"><h4>Year of Graduation:</h4> 2018</li>
                                    <li class="li-child"><h4>GPA:</h4> 4.0/4.0</li>
                                    <li class="li-child"><h4>Thesis:</h4> "Development of an Automated Machine Learning System for Detecting and Preventing Cyber Attacks"</li>
                                    <li class="li-child"><h4>Extracurricular Activities:</h4> Head of the Information Security Research Group, Speaker at international cybersecurity conferences.</li>
                                </ul>
                            </li>
                            <li class="li-father"><strong>Certified Information Systems Security Professional (CISSP)</strong>
                                <ul class="ul-child">
                                    <li class="li-child"><h4>(ISC)² - International Information System Security Certification Consortium</h4></li>
                                    <li class="li-child"><h4>Year of Completion:</h4> 2019</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            `
        }
        else if (info.value === 2 && arrayChecked[1]){
            arrayChecked.fill(true);
            arrayChecked[1] = false;
            infoDetails.innerHTML = 
            `
            <div id="skills" class="section-slide">
                        <ul class="ul-father">
                            <li class="li-father"><strong>Frontend Development</strong>
                                <ul class="ul-child">
                                    <li class="li-child"><h4>HTML5:</h4> Proficient in building web structures and content, adhering to standards and best practices.</li>
                                    <li class="li-child"><h4>CSS3 & Preprocessors (SASS/LESS):</h4> Extensive experience in creating appealing user interfaces, using Flexbox and Grid
                                    Layout, and proficient in SASS and LESS for writing organized and maintainable CSS.</li>
                                    <li class="li-child"><h4>JavaScript (ES6+):</h4> Strong skills in modern JavaScript programming, utilizing ES6+ features such as let/const, arrow
                                    functions, promises, async/await, modules, etc.</li>
                                    <li class="li-child"><h4>React.js:</h4> Proficient in building single-page applications (SPA) with React, using hooks, context API, and Redux for
                                    state management.</li>
                                    <li class="li-child"><h4>Vue.js:</h4> Experienced in developing applications with Vue, using Vuex for state management and Vue Router for navigation.</li>
                                    <li class="li-child"><h4>TypeScript:</h4> Utilizes TypeScript to write safe and maintainable code, reducing runtime errors.</li>
                                </ul>
                            </li>
                            <li class="li-father"><strong>Backend Development</strong>
                                <ul class="ul-child">
                                    <li class="li-child">
                                        <h4>Node.js & Express.js:</h4>
                                         Skilled in building robust server-side applications with Node.js and Express, experienced with
                                        RESTful APIs, middleware, and session management.
                                    </li>
                                    <li class="li-child">
                                        <h4>Python & Django/Flask:</h4>
                                         Experienced in developing web applications with Python, using Django and Flask for projects
                                        ranging from small to large.
                                    </li>
                                    <li class="li-child">
                                        <h4>Java & Spring Boot:</h4>
                                         Utilizes Spring Boot to develop microservices, experienced with Spring Security and JPA/Hibernate.
                                    </li>
                                    <li class="li-child">
                                        <h4>Database Management</h4>
                                        <ul class="under-ul-child">
                                            <li class="under-li-child">
                                                <h4>SQL:</h4>
                                                 Proficient in designing and managing relational databases, using MySQL, PostgreSQL.
                                            </li>
                                            <li class="under-li-child">
                                                <h4>NoSQL:</h4>
                                                 Experienced with NoSQL databases such as MongoDB, Redis.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="li-father"><strong>DevOps & Tools</strong>
                                <ul class="ul-child">
                                    <li class="li-child">
                                        <h4>Version Control:</h4>
                                         Proficient with Git, using GitHub/GitLab for source code management and CI/CD.
                                    </li>
                                    <li class="li-child">
                                        <h4>Containerization:</h4>
                                         Experienced with Docker and Kubernetes for development and deployment of applications.
                                    </li>
                                    <li class="li-child">
                                        <h4>CI/CD Pipelines:</h4>
                                         Setting up and maintaining CI/CD pipelines using Jenkins, GitLab CI/CD, Travis CI.
                                    </li>
                                    <li class="li-child">
                                        <h4>Cloud Platforms:</h4>
                                         Deploying and managing applications on cloud platforms such as AWS, Azure, Google Cloud.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            `;
        }
        else if (info.value === 3 && arrayChecked[2]){
            arrayChecked.fill(true);
            arrayChecked[2] = false;
            infoDetails.innerHTML = 
            `
            <div id="experience" class="section-slide">
                        <ul class="ul-father">
                            <li class="li-father"><strong>Senior Web Developer at TechInnovate Solutions</strong>
                                <ul class="ul-child">
                                    <li class="li-child">
                                        <h4>Duration:</h4>
                                         January 2024 - Present
                                    </li>
                                    <li class="li-child">
                                        <h4>Responsibilities:</h4>
                                        <ul class="under-ul-child">
                                            <li class="under-li-child">
                                                Leading the frontend and backend development teams to build scalable and high-performance web applications.
                                            </li>
                                            <li class="under-li-child">
                                                Architecting and implementing complex features using React.js, Node.js, and MongoDB.
                                            </li>
                                            <li class="under-li-child">
                                                Mentoring junior developers and conducting code reviews to maintain high code quality.
                                            </li>
                                            <li class="under-li-child">
                                                Collaborating with product managers and designers to refine user experience and product functionality.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="li-father"><strong>Web Developer at CodeCrafters Inc</strong>
                                <ul class="ul-child">
                                    <li class="li-child">
                                        <h4>Duration:</h4>
                                         June 2021 - December 2023
                                    </li>
                                    <li class="li-child">
                                        <h4>Responsibilities:</h4>
                                        <ul class="under-ul-child">
                                            <li class="under-li-child">
                                                Developed and maintained responsive websites and web applications using HTML, CSS, JavaScript, and Vue.js.
                                            </li>
                                            <li class="under-li-child">
                                                Implemented RESTful APIs with Node.js and Express.js, integrating third-party services and databases.
                                            </li>
                                            <li class="under-li-child">
                                                Optimized application performance, improving load times and user experience.
                                            </li>
                                            <li class="under-li-child">
                                                Participated in agile development processes, contributing to sprint planning, stand-ups, and retrospectives.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="li-father"><strong>Junior Web Developer at WebMinds Solutions</strong>
                                <ul class="ul-child">
                                    <li class="li-child">
                                        <h4>Duration:</h4>
                                         July 2020 - May 2021
                                    </li>
                                    <li class="li-child">
                                        <h4>Responsibilities</h4>
                                        <ul class="under-ul-child">
                                            <li class="under-li-child">
                                                Assisted in the development of client websites and web applications using PHP, JavaScript, and MySQL.
                                            </li>
                                            <li class="under-li-child">
                                                Worked closely with senior developers to troubleshoot and debug code.
                                            </li>
                                            <li class="under-li-child">
                                                Contributed to the design and implementation of frontend components using jQuery and Bootstrap.
                                            </li>
                                            <li class="under-li-child">
                                                Conducted testing and quality assurance to ensure cross-browser compatibility and responsiveness.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            `;
        }
        else if (info.value === 4 && arrayChecked[3]){
            arrayChecked.fill(true);
            arrayChecked[3] = false;
            infoDetails.innerHTML = 
            `
            <div id="current_work" class="section-slide">
                        <ul class="ul-father">
                            <li class="li-father"><strong>Current Work</strong>
                                <ul class="ul-child">
                                    <li class="li-child">
                                        <h4>Role:</h4>
                                        Senior Web Developer
                                    </li>
                                    <li class="li-child">
                                        <h4>Company:</h4>
                                        TechInnovate Solutions
                                    </li>
                                    <li class="li-child">
                                        <h4>Key Projects:</h4>
                                        <ul class="under-ul-child">
                                            <li class="under-li-child">
                                                <h4>Project Alpha:</h4>
                                                 Developed a scalable e-commerce platform with React.js, Redux, and Node.js, enhancing user engagement by
                                                30%.
                                            </li>
                                            <li class="under-li-child">
                                                <h4>Project Beta:</h4>
                                                 Built a real-time data visualization dashboard using D3.js and WebSocket, improving data insights for
                                                clients.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            `;
        }
        else if (info.value === 5 && arrayChecked[4]){
            arrayChecked.fill(true);
            arrayChecked[4] = false;
            infoDetails.innerHTML = 
            `
            <div id="mindset" class="section-slide">
                <ul class="ul-father">
                    <li class="li-father">
                        <strong>Development Philosophy:</strong>
                        "Code with purpose, build with passion. Technology is not just a tool; it’s a way to solve real-world problems and
                        create value."
                    </li>
                    <li class="li-father">
                        <strong>Vision:</strong>
                        To be at the forefront of web development innovation, constantly learning, experimenting, and pushing the boundaries of
                        what's possible in technology.
                    </li>
                </ul>
            </div>
            `
        }
        else if (info.value === 6 && arrayChecked[5]){
            arrayChecked.fill(true);
            arrayChecked[5] = false;
            infoDetails.innerHTML =
            `
            <div id="my_courses" class="section-slide">
                        <ul class="ul-father">
                            <li class="li-father">
                                <strong>Advanced JavaScript Concepts:</strong>
                                Developed a comprehensive online course covering ES6+, asynchronous programming, and functional programming paradigms.
                            </li>
                            <li class="li-father">
                                <strong>Modern Web Development with React.js:</strong>
                                Created a course series that delves into React fundamentals, hooks, context API, and advanced patterns for scalable
                                applications.
                            </li>
                            <li class="li-father">
                                <strong>Node.js and Express.js Bootcamp:</strong>
                                Designed a hands-on course focusing on building RESTful APIs, middleware, and integrating with databases like MongoDB
                                and PostgreSQL.
                            </li>
                            <li class="li-father">
                                <strong>Full-Stack Development with Vue.js and Firebase:</strong>
                                Developed a curriculum teaching full-stack development, covering Vue.js for frontend, Firebase for backend services, and
                                deployment strategies.
                            </li>
                        </ul>
                    </div>
            `
        }
    })
});








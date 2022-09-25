const project = [
  {
    projectTitle: 'Post-COVID',
    projectDiscription: 'Post COVID is a simple app that shows real time statistical data about the COVID-19 pandemic. It is built with Vanilla JavaScript. The data is provided by Mathdroid and is updated every 10 minutes.',
    techTools: {
      html: 'HTML',
      bootstrap: 'SCSS',
      ruby: 'JavaScript',
    },
    projectImage: './assets/Capture.png',
    projectLink: 'https://post-covid.netlify.app/',
    projectSource: 'https://github.com/shuja-shah/POST-COVID',
  },
  {
    projectTitle: 'Math Magician',
    projectDiscription: 'Math Magician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations, Read a random math-related quote.',
    techTools: {
      html: 'React',
      bootstrap: 'SCSS',
      ruby: 'Redux',
    },
    projectImage: './assets/math.png',
    projectLink: 'https://magicmath.netlify.app/',
    projectSource: 'https://github.com/shuja-shah/Math-Magician',
  },
  {
    projectTitle: 'Book Store CMS',
    projectDiscription: 'Book Store CMS is a web application that allows users to add and remove books from a list. It is built with React and Redux.',

    techTools: {
      html: 'Redux-Thunk',
      bootstrap: 'React',
      ruby: 'Less',
    },
    projectImage: './assets/bookstore.png',
    projectLink: 'https://bookcms.netlify.app/',
    projectSource: 'https://github.com/shuja-shah/Bookstore-CMS',
  },
  {
    projectTitle: 'Classical Fest',
    projectDiscription: 'Classical Fest is a website for classical music lovers. It is a Single Page App (SPA) that allows users to: View all concerts, View the concerts of a specific musician, Like a concert, Comment on a concert, and see the item details on the comments pop-up.',

    techTools: {
      html: 'HTML',
      bootstrap: 'CSS',
      ruby: 'Javascript',
    },
    projectImage: './assets/homepage.png',
    projectLink: 'https://fest-classical.netlify.app/',
    projectSource: 'https://github.com/shuja-shah/Classical-Fest',
  },
];

const button = document.querySelectorAll('.btn-primary');
const projectDiv = document.createElement('div');
projectDiv.className = 'project-div';
const divtemplate = document.getElementById('template');
const body = document.querySelector('body');
const headerTop = document.querySelector('header');
const socialIcon = document.getElementsByClassName('social-icon-li')[0];
const bluryBlur = document.querySelector('.intro');
function initialize(project) {
  window.scrollTo(0, 0);
  body.style.overflowY = 'hidden';
  headerTop.style.filter = 'blur(3px)';
  socialIcon.style.filter = 'blur(3px)';
  divtemplate.style.display = 'block';
  bluryBlur.style.filter = 'blur(3px)';
  const template = `
  <div class="project-text-div">
    <div class='title-container'>
      <h3>${project.projectTitle}</h3>
      <span class="popup-close-btn" id="popup-close-btn">&times;</span>
    </div>

      <ul class ='myBck'>
      <li>${project.techTools.html}</li>
      <li>${project.techTools.bootstrap}</li>
      <li>${project.techTools.ruby}</li>
      </ul> 
    
    <div class="project-image-div">
      <img src="${project.projectImage}" alt="${project.projectTitle}">
      
      <div class="popup-description-container">
          <p class="description" id="description">${project.projectDiscription}</p>
            <div class="popup-button">
              <a href="${project.projectLink}" class="popup-btn submit-button" id="btn-live">See Live <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a>
              <a href="${project.projectSource}" class="popup-btn submit-button" id="btn-source">See Sources <span><i class="popup-btn-icon fa-brands fa-github"></i></span></a>
            </div>
      </div>
    </div>
    </div>   
    `;
  divtemplate.innerHTML = template;
  const closeBtn = document.getElementById('popup-close-btn');
  closeBtn.addEventListener('click', () => {
    divtemplate.style.display = 'none';
    body.style.overflowY = 'visible';
    headerTop.style.filter = 'blur(0)';
    socialIcon.style.filter = 'blur(0)';
    bluryBlur.style.filter = 'blur(0)';
  });
}

button.forEach((btn) => {
  btn.addEventListener('click', (identity) => {
    const btnTity = identity.target.dataset.id;
    initialize(project[btnTity]);
  });
});

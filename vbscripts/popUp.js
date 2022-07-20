const project = [
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has'
      + 'been the industrys standard',
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/pro3.png',
  },
  {
    projectTitle: 'Data Dashboard Healthcare',
    projectDiscription:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has'
      + 'been the industrys standard',
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/pro4.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has'
      + 'been the industrys standard',
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro5.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has'
      + 'been the industrys standard',
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro3.png',
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has'
      + 'been the industrys standard',
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro4.png',
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has'
      + 'been the industrys standard',
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro5.png',
  },
];

const button = document.querySelectorAll('.btn-primary');
const load = document.querySelector('Load');

const projectDiv = document.createElement('div');
projectDiv.className = 'project-div';
const divtemplate = document.getElementById('template');
const closeBtn = document.getElementById('popup-close-btn');

function initialize(project) {
  window.scrollTo(0, 0);
  divtemplate.style.display = 'flex';
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
    
    </div>
          <div class="popup-description-container">
             <p class="description" id="description">${project.projectDiscription}</p>
               <div class="popup-button">
                  <a href="#" class="popup-btn submit-button" id="btn-live">See Live</a>
                  <a href="#" class="popup-btn submit-button" id="btn-source">See Sources</a>
                </div>
                </div>

          </div> 
    `;

  divtemplate.innerHTML = template;
}

button.forEach((btn) => {
  btn.addEventListener('click', (identity) => {
    const btnTity = identity.target.dataset.id;
    initialize(project[btnTity]);
  });
});

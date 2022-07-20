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

function initialize(project) {
 
  let template = `
    <div class="project-text-div">
    <h3>${project.projectTitle}</h3>
    <ul>
    <li>${project.projectDiscription}</li>
    <li>${project.techTools.html}</li>
    <li>${project.techTools.bootstrap}</li>
    <li>${project.techTools.ruby}</li>
    </ul> 
    </div>  
    <div class="project-image-div">
    <img src="${project.projectImage}" alt="${project.projectTitle}">
    </div>`
        
  ;
  divtemplate.innerHTML = template;
  console.log(template);git 
  console.log(divtemplate);
}

button.forEach((btn) => {
  btn.addEventListener('click', (identity) => {
    const btnTity = identity.target.dataset.id;
    initialize(project[btnTity]);
    // console.log(project[btnTity]);
  });
});
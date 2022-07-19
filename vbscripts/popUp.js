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
    projectImage: 'pro3.png',
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
    projectImage: 'pro4.png',
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
    projectImage: 'pro5.png',
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
    projectImage: 'pro3.png',
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
    projectImage: 'pro4.png',
  },
];

const button = document.querySelectorAll('.btn-primary');
const load = document.querySelector('Load');
function initialize(project) {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project-div';
  project.forEach((project) => {
    projectDiv.innerHTML = `
        <div class="project-image-div">
        <img src="${project.projectImage}" alt="${project.projectTitle}">
        </div>
        <div class="project-text-div">
        <h3>${project.projectTitle}</h3>
        <p>${project.projectDiscription}</p>
        <p>${project.techTools.html}</p>
        <p>${project.techTools.bootstrap}</p>
        <p>${project.techTools.ruby}</p>
        </div>`;
  });

  load.appendChild(projectDiv);
}

button.forEach((btn) => {
  btn.addEventListener('click', (identity) => {
    const btnTity = identity.dataset.id;
    // initialize(project[btnTity]);
    console.log(project[btnTity]);
  });
});
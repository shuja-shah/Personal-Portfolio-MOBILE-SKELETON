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
    projectTitle: 'Data Dashboard Healthcare',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/pro4.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro5.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro3.png',
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro4.png',
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'ruby',
    },
    projectImage: 'assets/pro5.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/pro3.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/snap.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/pro5.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/snap.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/pro4.png',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: 'assets/snap.png',
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

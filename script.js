const hummenu = document.getElementById('menu');
const logo = document.getElementById('logo');
const menuCo = document.getElementById('mobilemenu');
const closeMenu = document.getElementById('closebtn');
const bodyCo = document.getElementById('bodyCo');
const porBtn = document.getElementById('porbtn');
const aboBtn = document.getElementById('abobtn');
const forBtn = document.getElementById('forbtn');
const nav = document.getElementById('nav-id');

hummenu.addEventListener('click', () => {
  menuCo.style.display = 'flex';
  hummenu.style.display = 'none';
  logo.style.display = 'none';
  bodyCo.style.position = 'sticky';
  bodyCo.style.overflow = 'hidden';
  nav.style.width = '100%';
});

closeMenu.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

porBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

aboBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

forBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

/* Works Session */

const worksCardArr = [
  {
    Id: 1,
    Svg: [
      './img/vehicle-reservation-system_CM.png',
      './img/vehicle-reservation-system_CD.png',
    ],
    Img: [
      './img/vehicle-reservation-system_PM.png',
      './img/vehicle-reservation-system_PD.png',
    ],
    Headding: 'Vehicle Reservation System',
    Live: 'https://vehicle-reservation-system.netlify.app/',
    Source: 'https://github.com/Abdelaziz-Mahdi/Full_Stack_Capstone_Front_End',
    Languages: ['Ruby on rails', 'Tailwind', 'PostgreSQL', 'React'],
    Paragraph:
      'The project is based on an app to book an appointment to try a motorcycle. and follow the given design of the website but with personalized content for making a car reservation app',
  },
  {
    Id: 2,
    Svg: ['./img/space_CM.png', './img/space_CD.png'],
    Img: ['./img/space_PM.png', './img/space_PD.png'],
    Headding: 'Space Travelers Hub',
    Live: 'https://space-travelers-hub-1nvy.onrender.com/',
    Source: 'https://github.com/Abdelaziz-Mahdi/Space-Travelers-Hub',
    Languages: ['React', 'Redux', 'JavaScript', 'Bootstrap'],
    Paragraph:
      'Our platform enables users to reserve rockets and join missions easily. They can manage reservations and join missions conveniently through their sections, with the flexibility to cancel or leave as needed. A seamless experience for space enthusiasts and explorers.',
  },
  {
    Id: 3,
    Svg: ['./img/math_CM.png', './img/math_CD.png'],
    Img: ['./img/math_PM.png', './img/math_PD.png'],
    Headding: 'Math Magicians',
    Live: 'https://math-magicians-5wnx.onrender.com/',
    Source: 'https://github.com/Abdelaziz-Mahdi/Math-Magicians',
    Languages: ['React', 'JavaScript', 'HTML', 'CSS'],
    Paragraph:
      'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that consume quote api and allows users to: Make simple calculations. Read a random math-related quote.',
  },
  {
    Id: 4,
    Svg: ['./img/Tidy_CM.png', './img/Tidy_CD.png'],
    Img: ['./img/Tidy_PM.png', './img/Tidy_PD.png'],
    Headding: 'Tidy Budget App',
    Live: 'https://tidybudget-zfwz.onrender.com/',
    Source: 'https://github.com/Abdelaziz-Mahdi/tidy-budget',
    Languages: ['Ruby on rails', 'Bootstrap', 'PostgreSQL', 'RSpec'],
    Paragraph:
      'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
  },
  {
    Id: 5,
    Svg: ['./img/GS_CM.png', './img/GS_CD.png'],
    Img: ['./img/GS_PM.png', './img/GS_PD.png'],
    Headding: 'Global Summit',
    Live: 'https://abdelaziz-mahdi.github.io/GS-Bootstrap/',
    Source: 'https://github.com/Abdelaziz-Mahdi/GS-Bootstrap',
    Languages: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    Paragraph:
      'Global Summit is a website displays information about a global conference, It follow rsponsive design, and the section "Featured speakers" created dynamically in JavaScript, developed using JS & Bootstrap.',
  },
  {
    Id: 6,
    Svg: ['./img/pokedex_CM.png', './img/pokedex_CD.png'],
    Img: ['./img/pokedex_PM.png', './img/pokedex_PD.png'],
    Headding: 'Pokedex',
    Live: 'https://abdelaziz-mahdi.github.io/Pokemon-Capstone/dist/',
    Source: 'https://github.com/Abdelaziz-Mahdi/Pokemon-Capstone',
    Languages: ['JS6', 'API', 'Jest', 'Webpack'],
    Paragraph:
      'Pokedex is a JavaScript single-page Application, Built using ES6 features and Webpack bundler, notably modules, and consumes the PokeAPI using JavaScript async/await.',
  },
];

const cardGenrator = () => {
  const workSection = document.getElementById('works-section');
  workSection.innerHTML += `
  <header class='title'>
        <h2 class='Neutrals'>My Recent Works</h2>
  </header>
  <ul id='cards'>`;
  const cardsList = document.getElementById('cards');
  worksCardArr.forEach((card) => {
    const workCard = document.createElement('li');
    workCard.classList.add('card-con', 'border');
    workCard.innerHTML += `
    <img    class='d-mob border'    src=${card.Svg[0]}    alt='project picture'  />  
    <img    class='d-desk border'    src=${card.Svg[1]}    alt='project picture'  />
  <ul class='card-data place-over border'>
    <li>
      <h4 class='dgreenB'>
      ${card.Headding}
      </h4>
    </li>
    <li>
      <ul class='language-list'>
        <li class='language grayBG dgreenB'>${card.Languages[0]}</li>
        <li class='language grayBG dgreenB'>${card.Languages[1]}</li>
        <li class='language grayBG dgreenB'>${card.Languages[2]}</li>
        <li class='language grayBG dgreenB'>${card.Languages[3]}</li>
      </ul>
    </li>
    <li class='card-action'>
      <button
        class='see-project open-pop-btn white greenBG'
        aria-label='action-btn'
        href='#dialog-container'
        type='button'
      >
        See Project
      </button>
    </li>
  </ul>
  <dialog id='dialog-container${card.Id}' class='dialog-container animate__zoomIn animate__animated'>
      <div class='dialog-card flex'>
        <div id='dialog-btn-ctr' class='dialog-btn-ctr relative'>
        <img    class='d-mob'    src=${card.Img[0]}    alt='project picture'  />  
        <img    class='d-desk'    src=${card.Img[1]}    alt='project picture'  />
          <button
            id='closeDialoge'
            class='absolute btn-noBg'
            type='button'
            title='closing button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              fill='white'
              class='bi bi-x dialog-flex'
              viewBox='0 0 16 16'
            >
              <path
                d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
              />
            </svg>
          </button>
        </div>
        <div class='dialog-card-data'>
          <div class='flex-row'>
            <h5 class='dgreenB'>${card.Headding}</h5>
            <ul class='pop-btn dsp-d'>
              <li>
                <a
                  class='see-project white greenBG dialog-flex'
                  aria-label='action-btn'
                  target="_blank"
                  href='${card.Live}'
                >
                  <span>See Live</span>
      
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  class='see-project white greenBG dialog-flex'
                  aria-label='action-btn'
                  target="_blank"
                  href='${card.Source}'
                >
                  See Source
                  <i
                    ><svg
                      width='18'
                      height='20'
                      viewBox='0 0 18 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_34_3031)'>
                        <path
                          d='M17.9991 7.46114C17.9991 6.32124 17.6331 5.25043 16.9344 4.31779C17.2006 3.41969 17.2671 2.27979 17.2006 0.967185C17.1673 0.414508 16.7348 0 16.2024 0C15.903 0 13.3743 0.0345423 11.9104 1.38169C10.6461 1.1399 9.3152 1.1399 8.0176 1.38169C6.58692 0.0345423 4.05826 0 3.72555 0C3.1932 0 2.76067 0.414508 2.7274 0.967185C2.62758 2.27979 2.7274 3.41969 2.99357 4.31779C2.29486 5.28497 1.92887 6.35579 1.92887 7.46114C1.92887 9.8791 3.72555 12.0553 6.45383 13.0915C6.35401 13.2988 6.28747 13.5406 6.22093 13.7824C3.32629 13.4715 1.96215 10.7427 1.8956 10.639C1.6627 10.1209 1.06381 9.91364 0.564734 10.19C0.0656586 10.4318 -0.133972 11.0535 0.132202 11.5717C0.198745 11.7444 2.02869 15.4404 6.05457 15.8549V18.9637C6.05457 19.5509 6.4871 20 7.05272 20H12.8753C13.4409 20 13.8734 19.5509 13.8734 18.9637V14.8532C13.8734 14.2314 13.7403 13.6442 13.5074 13.1261C16.2024 12.0553 17.9991 9.91364 17.9991 7.46114Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_34_3031'>
                          <rect width='18' height='20' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <ul class='language-list'>
            <li class='language grayBG dgreenB'>${card.Languages[0]}</li>
            <li class='language grayBG dgreenB'>${card.Languages[1]}</li>
            <li class='language grayBG dgreenB'>${card.Languages[2]}</li>
            <li class='language grayBG dgreenB'>${card.Languages[3]}</li>
          </ul>
          <p>
          ${card.Paragraph}
          </p>
          <ul class='pop-btn d-mob'>
            <li>
              <a
                class='see-project white greenBG dialog-flex'
                aria-label='action-btn'
                target="_blank"
                href='${card.Live}'
              >
                <span>See Live</span>
      
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                class='see-project white greenBG dialog-flex'
                aria-label='action-btn'
                target="_blank"
                href='${card.Source}'
              >
                See Source
                <i
                  ><svg
                    width='18'
                    height='20'
                    viewBox='0 0 18 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_34_3031)'>
                      <path
                        d='M17.9991 7.46114C17.9991 6.32124 17.6331 5.25043 16.9344 4.31779C17.2006 3.41969 17.2671 2.27979 17.2006 0.967185C17.1673 0.414508 16.7348 0 16.2024 0C15.903 0 13.3743 0.0345423 11.9104 1.38169C10.6461 1.1399 9.3152 1.1399 8.0176 1.38169C6.58692 0.0345423 4.05826 0 3.72555 0C3.1932 0 2.76067 0.414508 2.7274 0.967185C2.62758 2.27979 2.7274 3.41969 2.99357 4.31779C2.29486 5.28497 1.92887 6.35579 1.92887 7.46114C1.92887 9.8791 3.72555 12.0553 6.45383 13.0915C6.35401 13.2988 6.28747 13.5406 6.22093 13.7824C3.32629 13.4715 1.96215 10.7427 1.8956 10.639C1.6627 10.1209 1.06381 9.91364 0.564734 10.19C0.0656586 10.4318 -0.133972 11.0535 0.132202 11.5717C0.198745 11.7444 2.02869 15.4404 6.05457 15.8549V18.9637C6.05457 19.5509 6.4871 20 7.05272 20H12.8753C13.4409 20 13.8734 19.5509 13.8734 18.9637V14.8532C13.8734 14.2314 13.7403 13.6442 13.5074 13.1261C16.2024 12.0553 17.9991 9.91364 17.9991 7.46114Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_34_3031'>
                        <rect width='18' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </dialog>`;
    cardsList.appendChild(workCard);
  });
};

/* Detail Popup Window */
const popGenrato = () => {
  const opnPopBtn = document.querySelectorAll('.open-pop-btn');
  const closeButton = document.querySelectorAll('#closeDialoge');
  opnPopBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const dialogContainer = document.getElementById(
        `dialog-container${index + 1}`,
      );
      document.body.classList.add('no-scroll');
      dialogContainer.showModal();
    });
  });
  closeButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const dialogContainer = document.getElementById(
        `dialog-container${index + 1}`,
      );
      dialogContainer.close();
      document.body.classList.remove('no-scroll');
    });
  });
};

window.onload = () => {
  cardGenrator();
  popGenrato();
};

/* validate contact form */

const form = document.getElementById('form');

function validateEmail(emailField) {
  const reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!reg.test(emailField)) {
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  const emailVa = document.getElementById('email').value;
  const showMessage = document.getElementById('showMessage');
  if (!validateEmail(emailVa)) {
    event.preventDefault();
    showMessage.innerHTML = 'Email should be in small letters! ';
  } else {
    showMessage.innerHTML = 'Submmeted Succesfully';
  }
});

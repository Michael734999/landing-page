// Constructing global vars

const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

const listName = [];
const sectionID = [];

let landingContainer = document.querySelectorAll('.landing__container');

const listContainers = [...landingContainer];

console.log(listContainers);



for (let section of sections) {
    let names = section.querySelectorAll('h2')[0].textContent;

    listName.push(names);

    sectionID.push(section.id);
}

// console.log(listName);
// console.log(sectionID);

// Function to build nav

function nav() {
    for (let x = 1; x <= sectionID.length; x++) {
        const li = document.createElement("li");
        li.classList = "list";
        li.id = `${sectionID[x - 1]}Navbar`;
        navList.appendChild(li);

        li.innerHTML = `<a class="anchor">${listName[x - 1]}</a>`;

        li.addEventListener('click', function(event) {
            event.preventDefault();
            sections[x - 1].scrollIntoView({ behavior: "smooth" });
        });
    };
};


// Function for determining viewport

function scroll(event) {
    const position = event.getBoundingClientRect();
    const wh = window.innerHeight;
    const ww = window.innerWidth;
    return (
        // position.top >= 0 &&
        // position.left >= 0 &&
        // position.right <= (ww || document.documentElement.clientWidth) &&
        // position.bottom <= (wh || document.documentElement.clientHeight)
        position.top < (window.innerHeight / 4) * 2 &&
        position.bottom >= (window.innerHeight / 4) * 2
    );
};

// Function for isActive added to sections

function active() {
    for (let list of listContainers) {
        let toggle = list.parentElement.id;
        let navList = document.getElementById(`${toggle}Navbar`)
        window.addEventListener('scroll', () => {
            if (scroll(list)) {
                list.classList.add('isActive');
                navList.classList.add('active');
            } else {
                list.classList.remove('isActive');
                navList.classList.remove('active');
            }
        });
    };
};

// Add toTop button
const toTop = document.getElementById("toTopBtn");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("on");
    } else {
        toTop.classList.remove("on");
    }
});

// Add hamburger menu
const hamBtn = document.getElementById("hamBtn");
const navBr = document.getElementById("navbar__menu");


hamBtn.addEventListener('click', () => {
    if (hamBtn.className === 'hamBtn closed') {
        hamBtn.classList.remove('closed');
        hamBtn.classList.add('open');

        navBr.style.display = "flex";
    } else if (hamBtn.className === 'hamBtn open') {
        hamBtn.classList.remove('open');
        hamBtn.classList.add('closed');

        navBr.style.display = "none";
    }
});

// Running my functions

nav();
active();
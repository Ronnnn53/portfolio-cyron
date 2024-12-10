const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    })

})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.onclick = function(){
    document.body.classList.toggle("white-theme");
    if(document.body.classList.contains("white-theme")){
        toggleSwitch.src = "img/moon.png.png";
    }else{
        toggleSwitch.src = "img/sun.png.png";
    }
}

var toggle = document.getElementById("toggle");

toggle.onclick = function(){
    document.body.classList.toggle("white-theme");
    if(document.body.classList.contains("white-theme")){
        toggleSwitch.src = "img/moon.png.png";
    }else{
        toggleSwitch.src = "img/sun.png.png";
    }
}


let menuList = document.getElementById("menuList")
 menuList.style.maxHeight = "0px";

    function toggleMenu(){
        if(menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "400px";
        }else{
            menuList.style.maxHeight = "0px";
        }
    }



/*
let menuIcon = document.querySelector('#menu-icon');
let navbar = documen.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
*/



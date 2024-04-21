const projects = document.querySelector("#projects")
const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const icon = document.querySelector("#icon")

// PROJECT HOVER
projects.addEventListener("mouseover", projectChange)
projects.addEventListener("mouseout", projectReturn)

about.addEventListener("mouseover", projectChange)
about.addEventListener("mouseout", projectReturn)

contact.addEventListener("mouseover", projectChange)
contact.addEventListener("mouseout", projectReturn)

function projectChange() {
    icon.src = "/images/smile.gif"
}

function projectReturn(){
    icon.src = "/images/normal.gif"
}



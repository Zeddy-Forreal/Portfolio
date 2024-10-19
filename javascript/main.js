nav_buttons = document.querySelectorAll(".main_nav nav button");
links = document.querySelectorAll(".link");
sections = document.querySelectorAll("main > section");
inputs = document.querySelectorAll(".inp");
big_image = document.querySelector(".two");
mode = document.querySelector(".dark");
let main_container = document.querySelector(".main_container")
timeout_arr = []
let scrolls = document.querySelectorAll(".scrol")
let scroller = document.querySelector(".main_container")
let projects = [
    ["Password Generator","001", "HTML CSS JS", true],
    ["To Do list","002", "HTML CSS JS", true]

]
upload()

nav_buttons.forEach((but,ind)=>{
    but.onclick = ()=>{
        if(but.classList.contains("active")){
            null
        }else{
            timeout_arr.forEach((kid)=>{
                clearTimeout(kid)
            })
            timeout_arr.length = 0;

            let sec = sections[ind]
            disableAll(sections,sec)

            
            if(sec.classList.contains("active")){


            
            
            disableAll(nav_buttons, but)
            disableAll(document.querySelectorAll(".sec_section > section"))
            

            document.querySelectorAll(".sec_section header span").forEach((span)=>{
                if(span.parentElement.parentElement.classList.contains("active")){
                    null
                }else{
                    span.classList.remove("active")
                }
            })

            if (sec.classList.contains("sec_section")){

                [...sec.firstElementChild.children].forEach((child,num)=>{

                    let dog = setTimeout(()=>{
                        child.classList.add("active")
                    },(num+1)*100)
                    
                    timeout_arr.push(dog)
                })

                if(sec.classList.contains("skills")){
                    
                    document.querySelectorAll(".progress").forEach((span)=>{
                        span.style.width = `${span.parentElement.parentElement.getAttribute("data-prog")}`
                    })
                    document.querySelectorAll(".num").forEach((span)=>{
                        span.innerHTML = span.parentElement.parentElement.getAttribute("data-prog");
                    })
                }
            }else{

                    document.querySelector(".home .two img").classList.add("active")

            }
            }
        }
    }
})

inputs.forEach((inp)=>{
    inp.onfocus = ()=>{
        disableAll(document.querySelectorAll(".di"), inp.parentElement)
    }
    inp.onblur = ()=>{
        disableAll(document.querySelectorAll(".di"))
    }
})



links.forEach((link)=>{
    link.onmouseenter =()=>{
        link.previousElementSibling.classList.add("hovered")
        link.nextElementSibling.classList.add("hovered")
    }
    link.onmouseleave =()=>{
        link.previousElementSibling.classList.remove("hovered")
        link.nextElementSibling.classList.remove("hovered")
    }
})


function disableAll(arr,ele){
    arr.forEach((elem)=>{
        elem.classList.remove("active")
    })
    if(ele){
        ele.classList.add("active")
    }
}


mode.onclick = ()=>{

    if(mode.classList.contains("dark")){
        document.documentElement.style.setProperty('--background', '#1d1c18');
        document.documentElement.style.setProperty('--background2', '#2f2f22');
        document.documentElement.style.setProperty('--background3', '#24221c');
        document.documentElement.style.setProperty('--text', '#ffffff');
        document.documentElement.style.setProperty('--text2', '#ffd7a3');
        document.documentElement.style.setProperty('--main_color', '#ee9600');
        document.documentElement.style.setProperty('--tryout', '#ffffbe');
        mode.classList.remove("dark")
        mode.classList.add("light")
    }else{
        document.documentElement.style.setProperty('--background', '#1c181d');
        document.documentElement.style.setProperty('--background2', '#25222f');
        document.documentElement.style.setProperty('--background3', '#221c24');
        document.documentElement.style.setProperty('--text', '#ffffff');
        document.documentElement.style.setProperty('--text2', '#e3a3ff');
        document.documentElement.style.setProperty('--main_color', '#ad6bff');
        document.documentElement.style.setProperty('--tryout', '#e4c5ff');
        mode.classList.remove("light")
        mode.classList.add("dark")
    }
}
scrolls.forEach((but)=>{
    but.onclick = ()=>{
        if(but.classList.contains("right")){
            scroller.scrollBy(1,0)
        }else{
            scroller.scrollBy(-1,0)
        }
    }
})


function upload(){
    for(let i = 0; i < Math.ceil(projects.length/3); i++){
        let container = document.createElement("section");
        container.className = "container"
    
        main_container.appendChild(container)
    }
    
    upload2()
}


function upload2(){
    let pros = document.querySelectorAll(".container")
    let ind = 0;
    for(let i = 0; i < projects.length ; i++){
        let proj = document.createElement("div");
        proj.className = "project"
        if (projects[i][3] === true){
            proj.classList.add("resp")
        }
        let con = document.createElement("div")
        con.className = "pic";

        let span = document.createElement("span")
        span.className = "background"
        let lin = document.createElement("a")
        lin.className = "git"
        lin.textContent = "Visit"

        lin.setAttribute("href", `https://zeddy-foreal.github.io/${projects[i][1]}/`)
        span.style.backgroundImage = `url(images/${projects[i][1]}.png)`

        con.appendChild(span)
        con.appendChild(lin)
        proj.appendChild(con)

        let title = document.createElement("div")
        title.className = "title"

        let p1 = document.createElement("p")
        p1.textContent = projects[i][0]

        let p2 = document.createElement("p")
        p2.className = "langs"
        p2.textContent = projects[i][2]

        title.appendChild(p1)
        title.appendChild(p2)

        proj.appendChild(title)
        
        pros[Math.floor(i/3)].appendChild(proj)
    }
}

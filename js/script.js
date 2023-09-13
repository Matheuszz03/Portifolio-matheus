// ================== typing animations ================
var typed = new Typed(".typing", {
    strings: [" ","Desenvolvedor Web"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: false
})


// ================== Aside ================
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll("section");
    for(let i=0; i<totalNavList; i++) {
        const a = navList[i].querySelector('a')
        a.addEventListener("click", function() {

            removeBackSection()

            for(let j=0; j<totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j)
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this)
            if(window.innerWidth < 1200) {
                asideSectionTogglerBtn()
            }
        })
    }

    function showSection(element) {
        for(i = 0; i<allSection.length; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1]
        document.querySelector("#" + target).classList.add("active")
    }
    
    function removeBackSection() {
        for(let i=0; i<allSection.length; i++) {
            allSection[i].classList.remove("back-section")
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section")
    }

    function updateNav(element) {
        for(let i=0; i<totalNavList; i++) {
            navList[1].querySelector("a").classList.remove("active")
            const target = element.getAttribute("href").split("#")[1]
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[1].querySelector("a").classList.add("active")
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function () {
        const sectionIndex = this.getAttribute("data-section-index")
        
        showSection(this)
        updateNav(this)
        removeBackSection()
        addBackSection(sectionIndex)
    })
    const navTogglerBtn = document.querySelector(".nav-toggler")
        aside = document.querySelector("aside")
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn()
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open")
            navTogglerBtn.classList.toggle("open")
            for(let i=0; i<allSection.length; i++) {
                allSection[i].classList.toggle("open")
            }
        }



        // Email JS

function SendEmail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_7hajjb7", "template_7a02hyc", params).then(function (res) {
        alert("Sucess! " + res.status);
    })
}
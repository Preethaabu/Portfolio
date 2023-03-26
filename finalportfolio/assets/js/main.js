/*============= Show Sidebar =================*/

/*========== Sidebar Show ==============*/
/* Validate if constant exists */

/*======= Sidebar Hidden =======*/
/* Validate if constants exists */

/*=====================Skills Tab=================*/
const tabs = document.querySelectorAll('[data-target'),
      tabContent = document.querySelectorAll('[data-content')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
      })

      /*=============== Input Animation ===============*/
      
      const inputs = document.querySelectorAll(".input");

      function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
      }

      function blurFunc() {
        let parent=this.parentNode;
        if(this.value == "") {
            parent.classList.remove("focus");

        }
      }
    

      inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
      })

      /*=================== Scroll Sectiond Active Link ==================*/
      //get all sections that have an id defined
      const sections =document.querySelectorAll("section[id]");

      //add an event litsener litsening for scroll
      window.addEventListener("scroll", navHighlighter);

      function navHighlighter()
      {
        //get current scroll position
        let scrollY = window.pageYOffset;
        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
          /* - I f our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation
          link,else remove it
          -To know which link needs an active class, we use sectionId variable we are getting while looping through section as an selector */
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
          {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
          }
          else
          {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
          }
        })
      }
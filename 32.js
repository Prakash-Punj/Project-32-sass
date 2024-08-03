const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');

btn.addEventListener('click', ()=> {
    btn.classList.toggle('active');

    if(btn.classList.contains('active')){
        ul.style.display = 'block';
    }else{
        ul.style.display = 'none';
    }
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        ul.style.display = 'none';
        btn.classList.remove('active');
    })
});



        // --- image slide ----


        const slides = document.querySelectorAll('.slide-6-1');
        let counter = 0;
        
        const total = slides.length;
        const pager = document.querySelectorAll('.pager-btn');

        function update(){
            slides.forEach((slide, index) => {
                if(index === counter){
                    slide.style.transform = `translateX(0)`;
                }else{
                    slide.style.transform = `translateX(100%)`;
                }
                 
            });

            pager.forEach((btn, index) => {
                if (index === counter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            // console.log("no."+ counter);
            counter = (counter + 1) % total ;
        }

        function go(i) {
            if (i < 0 || i >= slides.length || i === counter) return;

            slides[counter].classList.remove("active");
            slides[i].classList.add("active");

            pager[counter].classList.remove("active");
            pager[i].classList.add("active");

            counter = i;
        }

        slides.forEach((e) => {
            e.addEventListener("mouseenter", () => {
            clearInterval(slideId);
        });
            e.addEventListener("mouseleave", () =>{
                slideId = setInterval(update, 1000);
            });
    });

        slideId = setInterval(update, 2000);
const links = document.querySelectorAll('.prof_time')
const work = document.querySelector('.work_content')
const play = document.querySelector('.play_content')
const study = document.querySelector('.study_content')
const exercise = document.querySelector('.exercise_content')
const social = document.querySelector('.social_content')
const selfCare = document.querySelector('.sc_content')

links.forEach(link => {
    link.addEventListener('click', ()=>{
        const openItem = document.querySelector('.active')
        if(openItem && openItem!== link){
            addActive(openItem)
        }
        addActive(link)
        switch(link.innerHTML){
            case "Weekly":
                work.children[0].innerText = '32hrs';
                work.children[1].children[0].innerHTML = '36hrs'

                play.children[0].innerText = '10hrs';
                play.children[1].children[0].innerHTML = '8hrs'

                study.children[0].innerText = '4hrs';
                study.children[1].children[0].innerHTML = '7hrs'

                exercise.children[0].innerText = '4hrs';
                exercise.children[1].children[0].innerHTML = '5hrs'

                social.children[0].innerText = '5hrs';
                social.children[1].children[0].innerHTML = '10hrs'

                selfCare.children[0].innerText = '2hrs';
                selfCare.children[1].children[0].innerHTML = '2hr'

                break;
            case "Monthly":
                work.children[0].innerText = '103hrs';
                work.children[1].children[0].innerHTML = '128hrs'

                play.children[0].innerText = '23hrs';
                play.children[1].children[0].innerHTML = '29hrs'

                study.children[0].innerText = '13hrs';
                study.children[1].children[0].innerHTML = '19hrs'

                exercise.children[0].innerText = '11hrs';
                exercise.children[1].children[0].innerHTML = '18hrs'

                social.children[0].innerText = '21hrs';
                social.children[1].children[0].innerHTML = '23hrs'

                selfCare.children[0].innerText = '7hrs';
                selfCare.children[1].children[0].innerHTML = '11hr'
                
                break;
            default: 
                work.children[0].innerText = '5hrs';
                work.children[1].children[0].innerHTML = '7hrs'

                play.children[0].innerText = '1hrs';
                play.children[1].children[0].innerHTML = '2hrs'

                study.children[0].innerText = '0hrs';
                study.children[1].children[0].innerHTML = '1hr'

                exercise.children[0].innerText = '1hr';
                exercise.children[1].children[0].innerHTML = '1hr'

                social.children[0].innerText = '1hr';
                social.children[1].children[0].innerHTML = '3hrs'

                selfCare.children[0].innerText = '0hrs';
                selfCare.children[1].children[0].innerHTML = '1hr'

        }

    })
})

const addActive = (select)=>{
    if(select.classList.contains('active')){
        select.classList.remove('active')
    }else{
        select.classList.add('active')
    }
}

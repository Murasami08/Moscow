let professions = document.querySelectorAll(".profession")
let professionTexts = document.querySelectorAll(".profession-text")
let skills = document.querySelectorAll(".skill")
let skillsTexts = document.querySelectorAll(".skill-text")
let profession_1 = document.querySelectorAll(".profession_1-path")
let profession_2 = document.querySelectorAll(".profession_2-path")
let profession_3 = document.querySelectorAll(".profession_3-path")
let profession_4 = document.querySelectorAll(".profession_4-path")
let profession_5 = document.querySelectorAll(".profession_5-path")
let profession_6 = document.querySelectorAll(".profession_6-path")
let profession_7 = document.querySelectorAll(".profession_7-path")
let profession_8 = document.querySelectorAll(".profession_8-path")
let skill_1 = document.querySelectorAll(".skill_1-path")
let skill_2 = document.querySelectorAll(".skill_2-path")
let skill_3 = document.querySelectorAll(".skill_3-path")
let skill_4 = document.querySelectorAll(".skill_4-path")
let skill_5 = document.querySelectorAll(".skill_5-path")
let skill_6 = document.querySelectorAll(".skill_6-path")
let skill_7 = document.querySelectorAll(".skill_7-path")
let skill_8 = document.querySelectorAll(".skill_8-path")
let skill_9 = document.querySelectorAll(".skill_9-path")
let skill_10 = document.querySelectorAll(".skill_10-path")
let skill_11 = document.querySelectorAll(".skill_11-path")
let skill_12 = document.querySelectorAll(".skill_12-path")
let skill_13 = document.querySelectorAll(".skill_13-path")
let skill_14 = document.querySelectorAll(".skill_14-path")
let skill_15 = document.querySelectorAll(".skill_15-path")
let skill_16 = document.querySelectorAll(".skill_16-path")
let skill_17 = document.querySelectorAll(".skill_17-path")
let skill_18 = document.querySelectorAll(".skill_18-path")
let professionSvgs = document.querySelectorAll(".profession-svg")
let skillSvgs = document.querySelectorAll(".skill-svg")

function deleteProfession(){
    professions.forEach(profession => {
        profession.classList.remove("active")     
    });
}

function deleteProfessionTexts(){
    professionTexts.forEach(professionText => {
        professionText.classList.remove("active")     
    });
}

function deleteSkills(){
    skills.forEach(skill => {
        skill.classList.remove("active")     
    });
}

function deleteSkillsTexts(){
    skillsTexts.forEach(skillsText => {
        skillsText.classList.remove("active")     
    });
}

function deleteMega(arr){
    arr.forEach(elem => {
        elem.classList.remove("mega-active")
    }); 
}

function deleteAll(){
    deleteProfession()
    deleteProfessionTexts()
    deleteSkills()
    deleteSkillsTexts()
    deleteMega(skills)
    deleteMega(professions)
    deleteAnimationBtn(professionSvgs)
    deleteAnimationBtn(skillSvgs)
    deleteAnimation(profession_1)
    deleteAnimation(profession_2)
    deleteAnimation(profession_3)
    deleteAnimation(profession_4)
    deleteAnimation(profession_5)
    deleteAnimation(profession_6)
    deleteAnimation(profession_7)
    deleteAnimation(profession_8)
    deleteAnimation(skill_1)
    deleteAnimation(skill_2)
    deleteAnimation(skill_3)
    deleteAnimation(skill_4)
    deleteAnimation(skill_5)
    deleteAnimation(skill_6)
    deleteAnimation(skill_7)
    deleteAnimation(skill_8)
    deleteAnimation(skill_9)
    deleteAnimation(skill_10)
    deleteAnimation(skill_11)
    deleteAnimation(skill_12)
    deleteAnimation(skill_13)
    deleteAnimation(skill_14)
    deleteAnimation(skill_15)
    deleteAnimation(skill_16)
    deleteAnimation(skill_17)
    deleteAnimation(skill_18)
}

function animation(arr){
    arr.forEach(element => {
        element.classList.add("active")
    });
}

function deleteAnimation(arr){
    arr.forEach(element => {
        element.classList.remove("active")
    });
}

function deleteAnimationBtn(arr){
    arr.forEach(elem =>{
        elem.classList.remove("active")
    })
}

professions.forEach(profession => {
   
    switch (profession.className){
        case "profession profession_1":
     
            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_1)
                professionSvgs[0].classList.add("active")
                profession.classList.toggle("active")
                professionTexts[0].classList.toggle("active")

                skills[0].classList.toggle("active")
                skills[1].classList.toggle("active")
                skills[2].classList.toggle("active")
                skills[17].classList.toggle("active")
                skills[16].classList.toggle("active")
                skills[15].classList.toggle("active")
             
                skillsTexts[0].classList.toggle("active")
                skillsTexts[1].classList.toggle("active")
                skillsTexts[2].classList.toggle("active")
                skillsTexts[17].classList.toggle("active")
                skillsTexts[16].classList.toggle("active")
                skillsTexts[15].classList.toggle("active")

                
            });
            break;
        case "profession profession_2":

            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_2)
                professionSvgs[1].classList.add("active")
                profession.classList.toggle("active")    
                professionTexts[1].classList.toggle("active")

                
                skills[2].classList.toggle("active")
                skills[0].classList.toggle("active")
                skills[16].classList.toggle("active")
                skills[12].classList.toggle("active")
                skills[10].classList.toggle("active")
                skills[15].classList.toggle("active")
                skills[17].classList.toggle("active")
                skills[13].classList.toggle("active")

                
                skillsTexts[2].classList.toggle("active")
                skillsTexts[0].classList.toggle("active")
                skillsTexts[16].classList.toggle("active")
                skillsTexts[12].classList.toggle("active")
                skillsTexts[10].classList.toggle("active")
                skillsTexts[15].classList.toggle("active")
                skillsTexts[17].classList.toggle("active")
                skillsTexts[13].classList.toggle("active")
               
                
            });
            break;
        case "profession profession_3":
            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_3)
                professionSvgs[2].classList.add("active")
                profession.classList.toggle("active")
                professionTexts[2].classList.toggle("active")
                
                skills[4].classList.toggle("active")
                skills[6].classList.toggle("active")
                skills[3].classList.toggle("active")
                skills[5].classList.toggle("active")
               
                
            });
            break;
        case "profession profession_4":
            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_4)
                professionSvgs[3].classList.add("active")
                profession.classList.toggle("active")     
                professionTexts[3].classList.toggle("active")
                
                skills[2].classList.toggle("active")
                skills[14].classList.toggle("active")
                skills[13].classList.toggle("active")
                skills[12].classList.toggle("active")
                skills[10].classList.toggle("active")
                skills[17].classList.toggle("active")
                skills[15].classList.toggle("active")
                skills[3].classList.toggle("active")
                skills[4].classList.toggle("active")
                skills[6].classList.toggle("active")
                
            });
            break;
        case "profession profession_5":
            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_5)
                professionSvgs[4].classList.add("active")
                profession.classList.toggle("active")
                professionTexts[4].classList.toggle("active")
                
                skills[2].classList.toggle("active")
                skills[0].classList.toggle("active")
                skills[16].classList.toggle("active")
                skills[11].classList.toggle("active")
               
            });
            break;
        case "profession profession_6":
            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_6)
                professionSvgs[5].classList.add("active")
                profession.classList.toggle("active")
                professionTexts[5].classList.toggle("active")
                
                skills[16].classList.toggle("active")
                skills[15].classList.toggle("active")
                skills[0].classList.toggle("active")
                skills[17].classList.toggle("active")
                skills[10].classList.toggle("active")
                skills[12].classList.toggle("active")
                skills[9].classList.toggle("active")
                skills[7].classList.toggle("active")
                skills[8].classList.toggle("active")
                skills[5].classList.toggle("active")
               
            });
            break;
        case "profession profession_7":
            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_7)
                professionSvgs[6].classList.add("active")
                profession.classList.toggle("active")
                professionTexts[6].classList.toggle("active")
                
                skills[14].classList.toggle("active")
                skills[15].classList.toggle("active")
               
            });
            break;
        case "profession profession_8":
            profession.addEventListener("click", ()=>{
                deleteAll()
                animation(profession_8)
                professionSvgs[7].classList.add("active")
                profession.classList.toggle("active")
                professionTexts[7].classList.toggle("active")
                
                skills[14].classList.toggle("active")
                skills[15].classList.toggle("active")
                skills[10].classList.toggle("active")
                skills[12].classList.toggle("active")
                skills[13].classList.toggle("active")
                skills[17].classList.toggle("active")
                skills[6].classList.toggle("active")
                skills[3].classList.toggle("active")
                skills[4].classList.toggle("active")
               
            });   
            break;    
    }
});

skills.forEach(skill => {
   
    switch (skill.className){
        case "skill skill_1":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_1)
                skillSvgs[0].classList.add("active")
                skill.classList.toggle("mega-active")               

                professions[0].classList.toggle("mega-active")
                professions[1].classList.toggle("mega-active")
                professions[4].classList.toggle("mega-active")
                professions[5].classList.toggle("mega-active")
            });
            break;
        case "skill skill_2":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_2)
                skillSvgs[1].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[0].classList.toggle("mega-active")
            });
            break;          
        case "skill skill_3":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_3)
                skillSvgs[2].classList.add("active")
                skill.classList.toggle("mega-active")
            
                professions[0].classList.toggle("mega-active")
                professions[1].classList.toggle("mega-active")
                professions[4].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
            });
            break;
        case "skill skill_4":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_4)
                skillSvgs[3].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[2].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break;
        case "skill skill_5":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_5)
                skillSvgs[4].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[2].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break;
        case "skill skill_6":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_6)
                skillSvgs[5].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[2].classList.toggle("mega-active")
                professions[5].classList.toggle("mega-active")
            });
            break;
        case "skill skill_7":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_7)
                skillSvgs[6].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[2].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break;
        case "skill skill_8":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_8)
                skillSvgs[7].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[5].classList.toggle("mega-active")
            });
            break;  
        case "skill skill_9":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_9)
                skillSvgs[8].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[5].classList.toggle("mega-active")
            });
            break;
        case "skill skill_10":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_10)
                skillSvgs[9].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[5].classList.toggle("mega-active")
            });
            break;    
        case "skill skill_11":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_11)
                skillSvgs[10].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[1].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
                professions[5].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break;
        case "skill skill_12":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_12)
                skillSvgs[11].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[4].classList.toggle("mega-active")
            });
            break;
        case "skill skill_13":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_13)
                skillSvgs[12].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[1].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
                professions[5].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break;
        case "skill skill_14":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_14)
                skillSvgs[13].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[1].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break;
        case "skill skill_15":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_15)
                skillSvgs[14].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[7].classList.toggle("mega-active")
                professions[6].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
            });
            break;
        case "skill skill_16":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_16)
                skillSvgs[15].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[0].classList.toggle("mega-active")
                professions[1].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
                professions[5].classList.toggle("mega-active")
                professions[6].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break; 
         case "skill skill_17":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_17)
                skillSvgs[16].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[0].classList.toggle("mega-active")
                professions[1].classList.toggle("mega-active")
                professions[4].classList.toggle("mega-active")
                professions[5].classList.toggle("mega-active")
            });
            break;
        case "skill skill_18":
            skill.addEventListener("click", ()=>{
                deleteAll()
                animation(skill_18)
                skillSvgs[17].classList.add("active")
                skill.classList.toggle("mega-active")

                professions[0].classList.toggle("mega-active")
                professions[1].classList.toggle("mega-active")
                professions[3].classList.toggle("mega-active")
                professions[5].classList.toggle("mega-active")
                professions[7].classList.toggle("mega-active")
            });
            break;
    }
});

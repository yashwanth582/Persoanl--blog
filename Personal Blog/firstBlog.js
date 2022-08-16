var navMenuAnchorTags = document.querySelectorAll('.nav-menu a')
console.log(navMenuAnchorTags)

for(var i=0;i<navMenuAnchorTags.length;i++){
        navMenuAnchorTags[i].addEventListener('click',function(event){
                event.preventDefault();
                var targetSectionId = this.textContent.trim().toLowerCase();
                var targetSection = document.getElementById(targetSectionId)
                console.log(targetSection)
                // var targetSectionCoordinates = targetSection.getBoundingClientRect()
                 var interval = setInterval(function(){
                     var targetSectionCoordinates = targetSection.getBoundingClientRect()
                     if(targetSectionCoordinates.top <= 0){
                        clearInterval(interval)
                        clearTimeout
                     }
                     window.scrollBy(0, 5000);
                 },500);
         });
}


 var progressBars = document.querySelectorAll('.skill-progress > div')
 var skillsContainer = document.getElementById('skills-container')
//  window.addEventListener('load', intializeBars)
window.addEventListener('scroll', checkScroll)
 var animationDone = false
  
 function initializeBars(){
        for(let bar of progressBars){
                
                bar.style.width = 0 +'%'
        }
 }
 initializeBars();
 function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width')
        let currenWidth = 0;
        let interval  = setInterval(function(){
                if(currenWidth> targetWidth){
                        clearInterval(interval)
                        return
                }
                currenWidth++;
                bar.style.width = currenWidth + '%'

        }, 5)
    }    
 }
 function checkScroll(){
        var coordinates = skillsContainer.getBoundingClientRect()
        if(!animationDone && coordinates.top < window.innerHeight){
                animationDone = true;
                fillBars()
                console.log("skills section visible")
        }
        else if(coordinates.top > window.innerHeight){
               animationDone = false;
               initializeBars();
                
        }
 }
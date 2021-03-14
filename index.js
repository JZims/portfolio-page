//const h2 = document.createElement('h2');
//Creates a variable named h2 which holds an h2 element
//h2.textContent = "This content added by JavaScript";
//Populates the text of our h2 element
//must be called in the dom by:
//document.querySelector('ul').appendChild(h2);

let titleSwap = document.querySelector('.project-tile');


titleSwap.addEventListener('mouseover', function(e) {
    var eventObj = false;
        if (eventObj === false){
            document.querySelector('.project-title').className='.project-title-swap';
        
        } else {
        eventObj = true;
        document.querySelector('.project-title-swap').className='.project-title';
        }

            
});





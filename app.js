const hClose = document.querySelector('.htmlClose');
const cClose = document.querySelector('.cssClose');
const jClose = document.querySelector('.jsClose');
const close = document.querySelector('.close');
const navBar = document.querySelector('.navBar');
const open = document.querySelector('.open');

const btns = document.getElementsByClassName('btn');
const content = document.getElementsByClassName('content');



for(let i = 0; i < btns.length; i++){

    btns[i].addEventListener('click', function(e){
        e.preventDefault();

        for(let i = 0; i < content.length; i++){
            content[i].style.display = 'none';
        }

        const id = btns[i].id;
        if(content[i].classList.contains(id)){
            content[i].style.display = 'block';
         }else{
            content[i].style.display = 'none';
         }
    });

}


hClose.addEventListener('click', function(e){
    e.preventDefault();
    e.currentTarget.parentElement.style.display = 'none';
});

cClose.addEventListener('click', function(e){
    e.preventDefault();
    e.currentTarget.parentElement.style.display = 'none';
});
jClose.addEventListener('click', function(e){
    e.preventDefault();
    e.currentTarget.parentElement.style.display = 'none';
});


open.addEventListener('click', function(e){
    e.preventDefault();
    navBar.style.width = '200px'; 
})
close.addEventListener('click', function(e){
    e.preventDefault();
        navBar.style.width = '0px';
});


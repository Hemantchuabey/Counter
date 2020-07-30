let value = 0;
const counter = document.querySelector('.counter');
const btns =document.querySelectorAll('.btn')
const decrease= document.querySelector('.decrease');
const reset= document.querySelector('.reset');
const increase= document.querySelector('.increase');


btns.forEach( function (btn){
btn.addEventListener('click' , function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains ('decrease')){
        value--;
    }
    else if(styles.contains ('increase')){
        value++;
    }
    else{
        value = 0 ;
    }
if(value>0){
    counter.style.color = 'green'
}
else if(value<0){
    counter.style.color = 'red'
}
else{
    counter.style.color = 'black'
}
    counter.textContent = value
});

});

// decrease.addEventListener('click' , function(){
    
//     value = value - 1;
//     counter.innerHTML = value ;
    
    
// });

// reset.addEventListener('click' , function(){
    
//     counter.textContent = value - value
// });

// increase.addEventListener('click' , function(){
//     value = value + 1;
//     counter.innerHTML = value 

// });
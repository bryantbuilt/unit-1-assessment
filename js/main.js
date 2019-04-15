let currentCount = document.getElementById('count');
let counter = document.getElementById('counter');
let $add = document.getElementById('add-box');
let $sub = document.getElementById('sub-box');


$add.addEventListener('click', function(){
    currentCount.innerText = parseInt(currentCount.innerText) + parseInt(counter.value); 
});

$sub.addEventListener('click', function(){
    currentCount.innerText = parseInt(currentCount.innerText) - parseInt(counter.value); 
});

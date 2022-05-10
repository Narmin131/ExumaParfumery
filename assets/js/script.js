const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const title = document.querySelector('.title');
const para = document.querySelector('.para');
const img = document.querySelector('.left-img');

const first = () =>{
    img.src = 'assets/img/sec1.webp';
    title.innerHTML = 'Exuma World';
    para.innerHTML='Oftentimes it appears to us that the particular scent of a given moment cannot be grasped, captured and cherished. The Exuma World fragrance collection is an attempt to capture the imperceptible, to embody the elusive, to enliven the ethereal.We have undertaken an olfactory interpretation of the atmospheric and elemental phenomena. We hope to unravel before you a fantastic world of notes and chords that convey the ephemeral shape of all of the natures scents.'
}

const second = () =>{
    img.src = 'assets/img/sec2.webp';
    title.innerHTML = 'Exuma Prive';
    para.innerHTML='The aromas, tastes and emotions that accompany us throughout our lives and travels, create unforgettable, unique impressions and visions deep within us. We tried to captivate all of life’s beauty and encapsulate it in perfume filled bottles.The selection of 8 exclusive scents tells the stories of ripe, sun kissed Sicilian oranges, mystical Indian hideaways and the welcoming warmth and serenity of unspoilt Australian beaches. Exuma Parfum will take you on an enchanting journey around the world, hoping for you to add your own chapter to the story.'
}
const third = () =>{ 
    img.src = 'assets/img/sec3.webp';
    title.innerHTML = 'Exuma Parfum';
    para.innerHTML='The aromas, tastes and emotions that accompany us throughout our lives and travels, create unforgettable, unique impressions and visions deep within us. We tried to captivate all of life’s beauty and encapsulate it in perfume filled bottles.The selection of 8 exclusive scents tells the stories of ripe, sun kissed Sicilian oranges, mystical Indian hideaways and the welcoming warmth and serenity of unspoilt Australian beaches. Exuma Parfum will take you on an enchanting journey around the world, hoping for you to add your own chapter to the story.'
}


one.addEventListener('click',first);
two.addEventListener('click',second);
three.addEventListener('click',third);




$('.buton').click(function(){
    $('.right-menu').addClass('transform');
    $('body').addClass('hide');
})

$('.close').click(function(){
    $('.right-menu').removeClass('transform');
    $('body').removeClass('hide');
})
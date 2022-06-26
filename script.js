const openPopUp = document.getElementById('contact-title');
const closePopUp = document.querySelector('.btn');
const popUp = document.querySelector('.modal');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});
closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
} );


$('.photos img').click(function() {
    let src = $(this).attr('src');
    $('.img-modal').attr('src',src);
    $('.modal-space').fadeIn();    
  });
  $('.close__btn').click(function() {
    $('.modal-space').fadeOut();
  });
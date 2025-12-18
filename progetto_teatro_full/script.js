
document.addEventListener('DOMContentLoaded', function(){
  const hamb = document.querySelector('#hamb');
  const mobile = document.querySelector('#mobileMenu');
  if(hamb && mobile){
    hamb.addEventListener('click', () => {
      mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
    });
  }
  // add fade-up to visible cards
  const els = document.querySelectorAll('.fade-up');
  els.forEach((el, i) => {
    el.style.animationDelay = (i * 80) + 'ms';
  });
});

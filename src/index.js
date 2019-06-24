import style from "./_scss/main.scss";
import 'intersection-observer'
const images = document.querySelectorAll('[data-src]');
const config  = {
  root:null,
  rootMargin : '0px 0px 0px 0px',
  threshold:1

}
let observer = new IntersectionObserver(function(entries, self){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      console.log(entry.target);
      loadImage(entry.target);
      self.unobserve(entry.target);
    }
  })
}, config);

for(var i =0; i< images.length; i++){
  observer.observe(images[i])
}
// images.forEach(function(image){
//   observer.observe(image)
// });


function loadImage(img){
  const src = img.getAttribute('data-src');
  if(!src){
    return;
  }img.src = src;
}
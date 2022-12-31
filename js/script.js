let navLink = document.querySelector("ul.lista-link")

links = ["Store","Mac","iPad","iPhone","Watch","AirPods","TV&Casa","Solo con Apple","Accessori","Supporto"]

for(i=0; i<links.length; i++){
  let element = `<ul class="lista-link">
 <li><a href="#">${links[i]}</a></li></ul>`;
  navLink.innerHTML += element;
}
// elements
var elements_to_watch = document.querySelectorAll('.watch');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.6 } );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});
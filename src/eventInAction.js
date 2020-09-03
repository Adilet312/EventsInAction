import './css/styles.css';
import {pictures} from './pictures.js';

document.querySelector('.grid').addEventListener('click',function(event){
 let img = event.target;
 let max = document.querySelectorAll('img').length;
 if(img.tagName ==="IMG"){
   if(max > 1){
     img.parentNode.removeChild(img);
   }
 }

},false)

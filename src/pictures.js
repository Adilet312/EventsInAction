import picture_one from './images/1tn.jpg';
import picture_two from './images/2tn.jpg';
import picture_three from './images/3tn.jpg';
import picture_four from './images/4tn.jpg';
import picture_five from './images/5tn.jpg';

export function generateImages(){
  let ul = document.querySelector('.grid').children;
  for(let idx = 0; idx < ul.length; idx++){
    let img = document.createElement('img');
    img.style.position = "absolute";
    img.style.zIndex = "1";
    let pictures = [`${picture_one}`,`${picture_two}`,`${picture_three}`,`${picture_four}`,`${picture_five}`]
    let index = Math.floor(Math.random()*pictures.length);
    img.src = pictures[index];
    ul[idx].appendChild(img);
  }
}
generateImages();

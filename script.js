const body =document.querySelector('body');

const btn = document.querySelectorAll('.btn');

btn.forEach((buttons)=>{
    buttons.addEventListener('click',function(e){
      if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'green') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'purple') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
      }


    })
})
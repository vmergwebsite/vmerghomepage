function seriesIncrement(number, upto){ 
  const upperLimit = upto - 1;
  if(number === upperLimit){
    return 0;
  } else {
    return number + 1;
  }
}

window.addEventListener('load', (event) => {
  const targetDate = new Date('11/20/2021');
  const day = document.querySelector('.day .value');
  const hour = document.querySelector('.hours .value');
  const min = document.querySelector('.minutes .value');
  const seconds = document.querySelector('.seconds .value');
  const rotate_image = document.querySelector('.bkg img');
  const dots = document.querySelector('#dot-anim');

  let dotVal = 0;
  const dotHash = {
    '0':'dot-0',
    '1':'dot-1',
    '2':'dot-2',
    '3':'dot-3'
  }

  setInterval(() => {
    dotVal = seriesIncrement(dotVal, 4);
    dots.classList = dotHash[dotVal]
  }, 800)


  const now = new Date();
  const diff = targetDate - now;
  const diffDate = new Date(diff);
  day.textContent = diffDate.getDate();
  hour.textContent = diffDate.getHours();
  min.textContent = diffDate.getMinutes();
  seconds.textContent = diffDate.getSeconds();
  let rotate = 0;
  setInterval(() => {
    rotate_image.style.transform = `rotate(${rotate}deg)`
    rotate += 1;
  }, 40)
  setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;
    const diffDate = new Date(diff);
    day.textContent = diffDate.getDate();
    hour.textContent = diffDate.getHours();
    min.textContent = diffDate.getMinutes();
    seconds.textContent = diffDate.getSeconds();
  }, 1000);
});
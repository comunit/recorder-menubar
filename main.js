var li = document.querySelectorAll("li");

li.forEach(li => {
  li.addEventListener('mouseover', () => {
    if (!li.classList.contains('selected')) {
     li.style.background = 'rgba(0, 0, 0, 0.2)';
     li.style.paddingTop = '18px';
    }
  });
});

li.forEach(li => {
  li.addEventListener('mouseleave', () => {
    if (!li.classList.contains('selected')) {
     li.style.background = '';
     li.style.paddingTop = '';
    }
  });
});

li.forEach(li => {
  li.addEventListener('click', () => {
      removeClass();
      li.classList.add("selected");
      li.style.background = '';
      li.style.paddingTop = '';
  });
});

function removeClass () {
  li.forEach(li => {
    li.classList.remove("selected");
  })
}



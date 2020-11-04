//DOM elemetns
const pills = document.querySelectorAll('.pill');
const active = document.querySelector('.active');
const dataTargets = document.querySelectorAll('[data-target]');

console.log(dataTargets);

function changeActive(e) {
  const target = e.target;
  pills.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
  target.classList.add('active');

  showTargetData(target);
}

function showTargetData(defaultArg = active) {
  const getDataSet = defaultArg.getAttribute('data-set');

  //hide all elements
  dataTargets.forEach((item) => {
    item.style.display = 'none';
  });

  //show only active class element
  dataTargets.forEach((item) => {
    const attr = item.getAttribute('data-target');
    if (attr === getDataSet) {
      item.style.display = 'block';
    }
  });
  console.log(getDataSet);
}

showTargetData();

pills.forEach((item) => {
  item.addEventListener('click', changeActive);
});

//end project

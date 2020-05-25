
// For the toggleable tab
const tabs = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tab');

tabs.forEach((tab, index) => tab.addEventListener('click', () => {
  //reset non active class state everytime a tab is clicked
  tabs.forEach((tab, index) => {
    tab.classList.remove('active');
    tabContents[index].classList.remove('show');
  });
  //now add active class to currently clicked tab
  tab.classList.add('active');
  tabContents[index].classList.add('show');
}) );

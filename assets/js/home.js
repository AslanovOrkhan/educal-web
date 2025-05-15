"use strict"

let lastScrollTop = 20,
  header = document.querySelector("header");
let clickToTop_btn = document.querySelector('.clickToTop_btn');
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add("sticky");
    clickToTop_btn.classList.add("fade");
  } else {
    header.classList.remove("sticky");
    clickToTop_btn.classList.remove("fade");
  }
})

let filterMenu = document.querySelector('.course_categoties_filter_menu');
let cards = document.querySelectorAll('.course_card');
filterMenu.onclick = (selectedItem) => {
  if (selectedItem.target.classList.contains('filter_item')) {
    filterMenu.querySelector('.active').classList.remove('active');
    selectedItem.target.classList.add('active');
    let filterItem = selectedItem.target.getAttribute('data-filter');

    cards.forEach((card) => {
      const filterClass = []
      const cardItem = card.classList;
      cardItem.forEach(value => { filterClass.push(value) })
      const filterCardCategory = filterClass[filterClass.indexOf(filterItem)]
      if ((filterItem == "all") || (filterItem == filterCardCategory)) {
        cardItem.remove('hide');
        cardItem.add('shown');
      } else {
        cardItem.add('hide');
        cardItem.remove('shown')
      }
    })
  }
}


const eventItem = document.querySelectorAll('.event_item');
      eventItem.forEach(item => {
        item.onmouseover = (ele)=> {
          if(ele.target.classList.contains("event_item")) {
            const row = item.parentNode.parentNode;
            row.querySelector('.fill').classList.remove("fill")
            ele.target.classList.add("fill")
          }
        }
      })


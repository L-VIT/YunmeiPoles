const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

        renderBullet: function (index, className) {
            const dotsArr = ['загрузка в контейнер', 'фундаменты большие', 'загрузка в вагон ', 'упаковка опор ', 'образец опоры ', 'большая секция', 'Загрузка в автотранспорт ', 'Упаковка для болтов', 'Фабрика', 'Погрузка в контейнер', 'Сборка образца 500 кВ опоры ', 'Упаковка'];
          return '<span class="' + className + '">' + dotsArr[index] + "</span>";
        },
      },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    spaceBetween: 30,
    speed: 1000,
  });
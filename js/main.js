$(document).ready(() => {
  let amountTourPlus = $('.tourAmountPlus');
  let amountTourMinus = $('.tourAmountMinus');
  let inputTourAmount = $('.tourAmount');
  let CCount = $('.header-cart-count');
  const wineArr = [
    {
      name: '«reina» Cuvee Prestige',
      shortName: 'Reina Cuvee',
      wineType: 'Сухое, красное',
      alcohol: 'Алк.15%',
      wineCost: 40,
      count: 1,
      image: 'img/cart-mini-images/cart-item1.png',
    },
    {
      name: 'Bordon, Bodegas Franco-Espanolas',
      shortName: 'Bodegas Franco',
      wineType: 'Сухое, красное',
      alcohol: 'Алк.14%',
      wineCost: 40,
      count: 1,
      image: 'img/cart-mini-images/cart-item2.png',
    },
    {
      name: 'Baron de Rivero, Syrah',
      shortName: 'Baron de Rivero',
      wineType: 'Сухое, синее',
      alcohol: 'Алк.13.5%',
      wineCost: 57,
      count: 1,
      image: 'img/cart-mini-images/cart-item3.png',
    },
    {
      name: 'Concerto di Fonterutoli, Mazzei',
      shortName: 'Concerto',
      wineType: 'Сухое, красное',
      alcohol: 'Алк.14%',
      wineCost: 114,
      count: 1,
      image: 'img/cart-mini-images/cart-item4.png',
    },
    {
      name: 'Philip, Mazzei, Toscana IGT',
      shortName: 'Philip Mazzei',
      wineType: 'Сухое, красное',
      alcohol: 'Алк.12.5%',
      wineCost: 79,
      count: 1,
      image: 'img/cart-mini-images/cart-item5.png',
    },
    {
      name: 'Barolo, Bava',
      shortName: 'Barolo, Bava',
      wineType: 'Сухое, красное',
      alcohol: 'Алк.13%',
      wineCost: 75,
      count: 1,
      image: 'img/cart-mini-images/cart-item6.png',
    },

    // White wine
    {
      name: 'Frascati Superiore, Poggio le Volpi',
      shortName: 'Frascati Superiore',
      wineType: 'Сухое белое ',
      alcohol: 'Алк.13%',
      wineCost: 73,
      count: 1,
      image: 'img/cart-mini-images/cart-item7.png',
    },
    {
      name: 'Prestige, Vermentino di Toscana',
      shortName: 'Vermentino',
      wineType: 'Сухое белое ',
      alcohol: 'Алк.11%',
      wineCost: 24,
      count: 1,
      image: 'img/cart-mini-images/cart-item8.png',
    },
    {
      name: 'Chardo, Toscana IGT',
      shortName: 'Toscana IGT',
      wineType: 'Сухое белое ',
      alcohol: 'Алк.14%',
      wineCost: 45,
      count: 1,
      image: 'img/cart-mini-images/cart-item9.png',
    },
    {
      name: 'Golden Spiral "Ice"',
      shortName: 'Toscana IGT',
      wineType: 'Сухое белое ',
      alcohol: 'Алк.14%',
      wineCost: 44,
      count: 1,
      image: 'img/cart-mini-images/cart-item10.png',
    },
    {
      name: 'Mayoral "Verdejo"',
      shortName: 'Mayoral "Verdejo"',
      wineType: 'Сухое белое',
      alcohol: 'Алк.14%',
      wineCost: 53,
      count: 1,
      image: 'img/cart-mini-images/cart-item11.png',
    },
    {
      name: 'Gewurztraminer, St. Gabriel',
      shortName: 'Gewurztraminer"',
      wineType: 'Сухое белое',
      alcohol: 'Алк.14%',
      wineCost: 112,
      count: 1,
      image: 'img/cart-mini-images/cart-item12.png',
    },
    // Rose Wine
    {
      name: 'Cassilero del Diablo',
      shortName: 'Cassilero',
      wineType: 'Сухое розовое',
      alcohol: 'Алк.14%',
      wineCost: 40,
      count: 1,
      image: 'img/cart-mini-images/cart-item13.png',
    },
    {
      name: 'Barton & Guestier Rose d Anjou Passeport',
      shortName: 'Passeport',
      wineType: 'Сухое розовое',
      alcohol: 'Алк.14%',
      wineCost: 27,
      count: 1,
      image: 'img/cart-mini-images/cart-item14.png',
    },
    {
      name: 'Moon Twist "Sauvignon Blanc Blush',
      shortName: 'Moon Twist',
      wineType: 'Сухое розовое',
      alcohol: 'Алк.14%',
      wineCost: 40,
      count: 1,
      image: 'img/cart-mini-images/cart-item15.png',
    },
    {
      name: 'Altitud 1100',
      shortName: 'Altitud 1100',
      wineType: 'Сухое розовое',
      alcohol: 'Алк.12%',
      wineCost: 42,
      count: 1,
      image: 'img/cart-mini-images/cart-item7.png',
    },
    {
      name: 'Mateus Rose',
      shortName: 'Mateus',
      wineType: 'Сухое розовое',
      alcohol: 'Алк.13.5%',
      wineCost: 40,
      count: 1,
      image: 'img/cart-mini-images/cart-item1.png',
    },
  ];

  // переключение категорий
  $('.category-item').click((e) => {
    let currentElement = $(e.target);
    $('.products-container').hide();
    let id = currentElement.data('id');
    $('#' + id).show();
    $('.category-item').removeClass('active');
    currentElement.addClass('active')

    $('#' + id + ' .wine-list-items').slick('refresh');

    let orderButton = $('.btn-color');
    orderButton.click((e) => {
      let currentInput = $($(e.target).parent().children('.wine-list-order-count').children('.inputAmount'));
      let needInput = parseInt(currentInput.val())
      let targetProduction = $(e.target).data('id');
      // let prodId = targetProduction.data('id');
      localStorage.setItem(wineArr[targetProduction], wineArr[targetProduction].count)
      if (localStorage.getItem(wineArr[targetProduction].shortName)) { // проверка условия, есть ли уже в localstorage товар
        let cartCurrentData = localStorage.getItem(wineArr[targetProduction].shortName)
        let parsedData = JSON.parse(cartCurrentData)
        let doneData = parseInt(parsedData) + needInput;
        localStorage.setItem(wineArr[targetProduction].shortName, doneData)
        console.log(doneData)
        renderOtherItems();
        cleanObject();
        calcSumCart();
      } else { // добавления вина
        localStorage.setItem(wineArr[targetProduction].shortName, wineArr[targetProduction].count);
        cleanObject();
        drawCart();
      }
    });

    amountPlus.click((e) => {
      let clickedElem = $(e.target);
      let id = clickedElem.data('id');
      wineArr[id].count++;
      clickedElem.prev('input').val(wineArr[id].count);
      console.log(wineArr[id].count);
    });

    amountMinus.click((e) => {
      let clickedElem = $(e.target)
      let id = clickedElem.data('id');
      if (wineArr[id].count > 1) {
        wineArr[id].count--;
      }
      clickedElem.next('input').val(wineArr[id].count);
      console.log(wineArr[id].count);
    })
  });



  // Карусель оффера
  $('#all-wine-container .wine-list-items').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  $('#red-wine-container .wine-list-items').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  $('#white-wine-container .wine-list-items').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  $('#rose-wine-container .wine-list-items').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  // Карусель дегустаций
  $('.degustation-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  // карусель блога
  $('.winery-blog-wrap').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      }
    ]
    

  });
  $('.winery-blog-wrap').slick('refresh');
  $('.winery-blog-wrap').slick('refresh');

  // Функция блокирования скролла при открытом поп апе
  let body = $('body');
  function openPopUp() {
    body.css('overflow', 'hidden');
  };

  // Функция разблокировки скролла при поп апе
  function closePopUp() {
    body.css('overflow', 'auto');
  };

  // POP UP's
  const popUp = $('#pops')
  $('.degustation-about > button.tour-button').click(() => {
    $(".pop-up").addClass('pop-up-active');
    openPopUp();
  });

  $('#close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".pop-up").removeClass('pop-up-active');
      closePopUp();
    };
  });

  $('.btn-play').click(() => {
    $(".video-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".video-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  // gallery 
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image'
  });

  $('#start-gallery').click(() => {
    $(".gallery-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".gallery-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  // cart
  let cartCount = $('.header-cart-count');
  $('.header-cart').click(() => {
    $(".cart-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".cart-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".order-thanks-popup").removeClass('pop-up-active')
      closePopUp();
    }
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".tour-thanks-popup").removeClass('pop-up-active')
      closePopUp();
    }
  });

  // Burger Menu

$('.burger-menu').click(() => {
  $(".burger-header-menu").css('display', 'flex');
  openPopUp();
});

$('.burger-close, .burger-header-menu > a').click((e) => {
    $(".burger-header-menu").css('display', 'none');
    closePopUp();
});


  // Articles
  $('.read-more-f').click(() => {
    $(".first-articles-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".first-articles-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  $('.read-more-s').click(() => {
    $(".second-articles-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".second-articles-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  $('.read-more-t').click(() => {
    $(".third-articles-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".third-articles-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  $('.read-more-fo').click(() => {
    $(".fourth-articles-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".fourth-articles-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  $('.read-more-fi').click(() => {
    $(".fifth-articles-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".fifth-articles-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  $('.read-more-six').click(() => {
    $(".fifth-articles-popup").addClass('pop-up-active');
    openPopUp();
  });

  $('#cancel-close, .pops').click((e) => {
    if ($(e.target).hasClass('pops') || e.target.id === 'cancel-close') {
      $(".fifth-articles-popup").removeClass('pop-up-active');
      closePopUp();
    }
  });

  // Инкримент в контейнерах заказа вина
  let amountPlus = $('.amountPlus');
  let amountMinus = $('.amountMinus');
  let inputAmount = $('.inputAmount');

  amountPlus.click((e) => {
    let clickedElem = $(e.target);
    let id = clickedElem.data('id');
    wineArr[id].count++;
    clickedElem.prev('input').val(wineArr[id].count);
    console.log(wineArr[id].count);
  });
  amountMinus.click((e) => {
    let clickedElem = $(e.target)
    let id = clickedElem.data('id');
    if (wineArr[id].count > 1) {
      wineArr[id].count--;
    }
    clickedElem.next('input').val(wineArr[id].count);
    console.log(wineArr[id].count);
  });

  // инкримент кол-ва тура
  amountTourPlus.click((e) => {
    let clickedTourElem = $(e.target)
    let currentAmountInInput = parseInt(clickedTourElem.prev('input').val());
    clickedTourElem.prev('input').val(
      currentAmountInInput += 1
    );
  });

  amountTourMinus.click((e) => {
    let clickedTourElem = $(e.target)
    let currentAmountInInput = parseInt(clickedTourElem.next('input').val());
    if (clickedTourElem.next('input').val() > 1)
      clickedTourElem.next('input').val(
        currentAmountInInput -= 1
      )
  });

  // Функция отрисовки корзины (полный размер)
  function cleanObject() {
    localStorage.removeItem('[object Object]');
  }; // удаление пустого Object из localstorage

  // Иконка с кол-вом товара
  (function renderCartCount() {
    CCount.html(localStorage.length);
  })();

  function renderCartC() {
    CCount.html(localStorage.length);
  }

  // Рендер страницы при загрузки страницы 
  let cartVisible = $('.cart-order-items');
  let productBlock = $('.product-i');

  // Получение всех товаров из localStorage
  let orderArray = [];
  let cartNodeList = [];
  function drawCart() {
    $('.product-i').remove();
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let values = localStorage.getItem(localStorage.key(i));
      let productBlock = cartVisible.append('<div class = "product-i"><div class = "cart-item-image"><img src="" alt="wineImage"></div><div class = "cart-item-text"><div class = "cart-item-text-tittle cat"></div><div class = "cart-item-text-desc"></div><div class = "cart-item-text-des"></div></div><div class = "wine-list-order-count cartList"><span class="cartItemAmountMinus cartMinus">-</span><input class="cartItemAmount cartNum" type="text" value="1"><span class="cartItemAmountPlus cartPlus">+</span></div><div class = "cart-price order-price">€40</div><?xml version="1.0" ?><svg class="remove-item-bg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg></div></div> ');
      orderArray.push(key);
      let productTittle = $('.cat');
      productTittle.html(key);
      productTittle.removeClass("cat")
    }
    renderOtherItems();
    amountItteration();
    removeCartItem();
    renderCartC(); // функция рендера кол-ва товаров в миниатюре корзины
    cartSum();
    calcSumCart();
  }
  drawCart();

  // Поиск элемента в массиве и отрисовка дополнительных характеристик
  function renderOtherItems() {
    let nameVar = [];
    const names = wineArr.map(el => el.shortName);

    let wineText = $('.cart-item-text-desc');
    let productTittle = $('.cart-item-text-tittle');
    let wineCost = $();
    for (let i = 0; i < productTittle.length; i++) {
      nameVar.push(productTittle[i]);
    }
    for (let i = 0; i < nameVar.length; i++) {
      let nx = $(nameVar[i]);
      nameVar.forEach(element => {
        nx.addClass('.x');
        let wineNameSearch = nx.html();
        let wineIndex = names.indexOf(wineNameSearch);
        let wineChar = nx.next();
        let wineAlcohol = nx.next().next();
        let wineImg = wineAlcohol.parent().prev().children();
        let wineCountCart = nx.parent().next().children('.cartNum');
        wineCountCart.attr('value', localStorage.getItem(wineNameSearch))
        wineChar.html(wineArr[wineIndex].wineType);
        wineAlcohol.html(wineArr[wineIndex].alcohol);
        wineImg.attr('src', wineArr[wineIndex].image);
        nx.removeClass('.x')
      });
    }
  }

  renderOtherItems();

  //   // Запись товаров в localStorage
  let orderButton = $('.btn-color');
  orderButton.click((e) => {
    let currentInput = $($(e.target).parent().children('.wine-list-order-count').children('.inputAmount'));
    let needInput = parseInt(currentInput.val())
    let targetProduction = $(e.target).data('id');
    // let prodId = targetProduction.data('id');
    localStorage.setItem(wineArr[targetProduction], wineArr[targetProduction].count)
    if (localStorage.getItem(wineArr[targetProduction].shortName)) { // проверка условия, есть ли уже в localstorage товар
      let cartCurrentData = localStorage.getItem(wineArr[targetProduction].shortName)
      let parsedData = JSON.parse(cartCurrentData)
      let doneData = parseInt(parsedData) + needInput;
      localStorage.setItem(wineArr[targetProduction].shortName, doneData)
      console.log(doneData)
      renderOtherItems();
      cleanObject();
      calcSumCart();
    } else { // добавления вина
      localStorage.setItem(wineArr[targetProduction].shortName, wineArr[targetProduction].count);
      cleanObject();
      drawCart();
    }
  });

  function cartSum() {
    let cartSumNumber = $('.cart-count-number.cart-attr');
    cartSumNumber.html(localStorage.length);
  }
  cartSum();

  // Подсчет суммы товаров в корзине
  function calcSumCart() {
    let productTittle = $('.cart-item-text-tittle');
    let wineSearch = [];
    let finalAmount = [];
    const names = wineArr.map(el => el.shortName);
    for (let i = 0; i < productTittle.length; i++) {
      wineSearch.push(productTittle[i]);
    }
    for (let i = 0; i < wineSearch.length; i++) {
      let nx = $(wineSearch[i]);
      let prodAmount = nx.parent().next().children('.cartNum');
      let nxt = nx.html();
      let index = names.indexOf(nxt);
      let winePrice = wineArr[index].wineCost;
      let cost = winePrice * prodAmount.val();
      finalAmount.push(cost)
    }
    let cartPrice = $('.summary-price-number');
    var sum = 0;
    for (var i = 0; i < finalAmount.length; i++) {
      sum += finalAmount[i];
    }
    sum += '€'
    cartPrice.html(sum)
  }

  calcSumCart();

  // Итерация товаров в корзине 
  function amountItteration() {
    let plusButton = $('.cartPlus');
    plusButton.click((e) => {
      let targ = $(e.target);
      let winename = targ.parent().prev().children('.cart-item-text-tittle').html();
      let wineCount = JSON.parse(localStorage.getItem(winename));
      wineCount++;
      localStorage.setItem(winename, wineCount);
      console.log(wineCount)
      renderOtherItems();
      calcSumCart();
    });

    let minusButton = $('.cartMinus');
    minusButton.click((e) => {
      let targ = $(e.target);
      let winename = targ.parent().parent().children('.cart-item-text').children('.cart-item-text-tittle').html();
      let lscount = JSON.parse(localStorage.getItem(winename))
      if (targ.next().val() > 1) {
        lscount -= 1;
        localStorage.setItem(winename, lscount)
        console.log(localStorage)
      } else {
        event.preventDefault;
      }
      renderOtherItems();
      calcSumCart();
    });
  }

  // удаление товара из Localstorage и блока из видимой части корзины
  function removeCartItem() {
    let removeProd = $('.remove-item-bg');
    removeProd.click((e) => {
      let d = $(e.target);
      console.log(d)
      let winename = d.prev().prev().prev().children('.cart-item-text-tittle').html();
      localStorage.removeItem(winename);
      console.log(winename)
      drawCart();
    })
  }

  removeCartItem();

  // Phone mask in input Phone
  jQuery(function ($) {
    $("#phone").mask("+38 (999) 999-9999");
  });
  // Cart Validation and cart ajax
  let cartButton = $('#order_button');
  cartButton.click(() => {

    let name = $('#name');
    let phone = $('#phone');
    let email = $('#email');

    $('.input-error').hide();
    name.css('border-color', 'transparent');
    phone.css('border-color', 'transparent');
    email.css('border-color', 'transparent');

    let hasError = false;

    if (!name.val()) {
      name.next('.input-error').show();
      name.css('border-color', 'red');
      hasError = true;
    }
    if (!phone.val()) {
      phone.next('.input-error').show();
      phone.css('border-color', 'red');
      hasError = true;
    }
    if (!email.val()) {
      email.next('.input-error').show();
      email.css('border-color', 'red');
      hasError = true;
    }

    let orderArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      let count = JSON.parse(localStorage.getItem(key))
      let item = { name: key, count: count };
    }

    // Cart Ajax 
    if (!hasError) {
      $.ajax({
        method: "POST",
        url: "../mail.php",
        data: { name: name.val(), phone: phone.val(), email: email.val(), order: orderArray }
      })
        .done(function (response) {
          $('.order-thanks-popup').css('display', 'flex')

        })
        .fail(function (response) {
          $('.order-thanks-popup').addClass('pop-up-active')
          $('.cart-popup').removeClass('pop-up-active')
        })
    };
  });

  // Ajax for tour
  $('.tour-button').click((e) => {

    let targ = $(e.target);

    let tour_cost = $.trim(targ.prev().children('.degustation-cost').children('.degustation-cost-text').html());
    let finalTourPrice = parseInt(tour_cost.slice(1))

    let tourName = $.trim(targ.prev().prev().prev().html());
    let tourCount = targ.prev().children('.degustation-duration').children('.degustation-duration-text').children('.wine-list-order-count').children('.tourAmount').val()
    let summaryPrice = finalTourPrice * tourCount;

    let tour_object = { name: tourName, count: tourCount, price: finalTourPrice, summaryPrice: summaryPrice };

    // Tour Validation and Ajax
    $('.tour-order').click(() => {

      $('.tour-error-input').hide();
      let tour_name = $('#tour-name');
      let tour_date = $('#tour-date');
      let tour_email = $('#tour-email');
      let tour_time = null;

      tour_name.css('border-color', 'transparent');
      tour_date.css('border-color', 'transparent');
      tour_email.css('border-color', 'transparent');


      let radio_f = $('#tour-time1');
      let radio_r = $('#tour-time2');



      let tour_hasError = false;

      if (!tour_name.val()) {
        tour_name.css('border-color', 'red');
        tour_name.next('.tour-error-input').show();
        tour_hasError = true;
      };
      if (!tour_date.val()) {
        tour_date.css('border-color', 'red');
        tour_date.next('.tour-error-input').show();
        tour_hasError = true;
      };
      if (!tour_email.val()) {
        tour_email.css('border-color', 'red');
        tour_email.next('.tour-error-input').show()
        tour_hasError = true;
      };
      if (radio_f.prop('checked')) {
        tour_time = 10;
      } else {
        tour_time = 16;
      };


      // tour Ajax 
      if (!tour_hasError) {
        $.ajax({
          method: "POST",
          url: "../tour-mail.php",
          data: { name: tour_name.val(), date: tour_date.val(), time: tour_time, email: tour_email.val(), order: tour_object }
        })
          .done(function (response) {
            $('.tour-thanks-popup').css('display', 'flex')

          })
          .fail(function (response) {
            $('.tour-thanks-popup').addClass('pop-up-active')
            $('.order-pop-up-tour').removeClass('pop-up-active')
          })
      };

    });
  });


  // Subscribe form validation
  $('.subscribe-button').click(() => {
    let sub_email = $('#subInput');
    $('.error-input').hide();
    sub_email.css('border-color', 'rgb(207, 170, 127)');

    if (!sub_email.val()) {
      sub_email.css('border-color', 'red');
      $('.error-input').show()
    }
  });

  $('#deg1').click(() => {
    $('.degustation-carousel').slick('slickGoTo', 0);
  });
  $('#deg2').click(() => {
    $('.degustation-carousel').slick('slickGoTo', 1);
  });
  $('#deg3').click(() => {
    $('.degustation-carousel').slick('slickGoTo', 2);
  });
  
});








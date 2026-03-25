const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay')
  const cartBtn = document.getElementById('cart-button')

  const openModel = () => {
    modal.classList.add('open')
  }

  const closeModel = () => {
    modal.classList.remove('open')
  }

  cartBtn.addEventListener('click', () => {
    openModel()
  })

  modal.addEventListener('click', (e) => {
    if(
      e.target.classList.contains('cart-modal__overlay') ||
      e.target.closest('.cart-modal__header--close')
    ) {
      closeModel()
    }
  })
}

const restsFunc = () => {
  const container = document.getElementById('rests-container')
  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Pizza',
      image: 'c1.jpg'
    },
    {
      id: 1,
      title: 'Тануки ',
      time: 40,
      rating: 4.9,
      price: 800,
      type: 'Coffee',
      image: 'c2.jpg'
    },
    {
      id: 2,
      title: 'FoodBand ',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Pizza',
      image: 'c3.jpg'
    },
    {
      id: 3,
      title: 'Жадина-пицца ',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Pizza',
      image: 'c3.jpg'
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Pizza',
      image: 'c4.jpg'
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Pizza',
      image: 'c5.jpg'
    },
  ]

  const loading = () => {
    container.innerHTML ='<p style="width:100%; text-align:center;">Loading</p>'
  }

  const renderRests = (array) => {
    container.innerHTML = ''
    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
        <a href="goods.html?id=${card.id}" class="products-card">
              <div class="products-card__image">
                <img src="./img/${card.image}" alt="${card.image}">
              </div>
              <div class="products-card__description">
                <div class="products-card__description--row">
                  <h4 class="products-card__description--title">
                    ${card.title}
                  </h4>
                  <div class="products-card__description--badge">
                    ${card.time} мин
                  </div>
                </div>
                <div class="products-card__description--row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="./img/star.svg" alt="star">
                      ${card.rating}
                    </div>
                    <div class="products-card__description-info--price">
                      От ${card.price} ₽
                    </div>
                    <div class="products-card__description-info--group">
                      ${card.type}
                    </div>
                  </div>
                </div>
              </div>
            </a>
        `)
    })
  }

if(container){
    loading()
  setTimeout(() => {
    renderRests(restArray)
  }, 1000)
}
}

restsFunc()
modalFunc()

import Component from '../../common/component.js'

export default class PhoneViewer extends Component {
  constructor({ element }) {
    super({ element });

      this._element.addEventListener("click", e =>
          this._buttonsClick(e)
      );
      this._element.addEventListener("click", e =>
          this._showGallery(e)
      );
    // this._render();
  }

  showPhone(phone) {
    this._phone = phone;
    this._render();

    super.show();

  }

    _buttonsClick(e) {
        let phoneBack = e.target.closest('[data-element="phone-back"]');
        let addBasket = e.target.closest('[data-element="add-basket"]');
        let removeButton = e.target.closest('[data-element="remove-button"]');


        if (phoneBack) {
            document.querySelector('[data-component="phone-viewer"]').classList.add('js-hidden');
            document.querySelector('[data-component="phone-catalog"]').classList.remove('js-hidden');
        }
        if (addBasket) {
          let cart = document.querySelector('#basket');
          let newLi = document.createElement('li');
          newLi.classList.add('product-list');
          newLi.innerHTML = `${this._phone.name} <button data-element="remove-button">x</button>`;
          cart.appendChild(newLi);

            newLi.onclick = function() {
                if (removeButton);
                cart.removeChild(newLi);
            }

        }

    }


    _showGallery(e) {
    let imgGallery = e.target.closest('[data-element="img-gallery"]');
            if (imgGallery) {
                let imgGalleryBig = document.querySelector('[data-element="img-gallery-big"]');
                imgGalleryBig.src = imgGallery.src;
            }
    }

  _render() {
    this._element.innerHTML = `
     <img class="phone" data-element="img-gallery-big" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

    <button data-element="phone-back">Back</button>
    <button data-element="add-basket">Add to basket</button>


    <h1>${this._phone.name}</h1>

    <p>${this._phone.description}</p>

    <ul class="phone-thumbs">
      <li>
        <img data-element="img-gallery" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      </li>
      <li>
        <img data-element="img-gallery" src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
      </li>
      <li>
        <img data-element="img-gallery" src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
      </li>
      <li>
        <img data-element="img-gallery" src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
      </li>
      <li>
        <img data-element="img-gallery" src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
      </li>
      <li>
        <img data-element="img-gallery" src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
      </li>
    </ul>
    `;
  }
}

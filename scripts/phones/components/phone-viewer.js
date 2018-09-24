import Component from '../../common/component.js'

export default class PhoneViewer extends Component {
  constructor({ element }) {
    super({ element });

    // this._render();


  }

  showPhone(phone) {
    this._phone = phone;
    this._render();

    super.show();
    this._element.addEventListener("click", event =>
          this._buttonsClick(event)
      );
  }

    _buttonsClick(event) {
        let phoneBack = event.target.closest('[data-element="phone-back"]');
        let addBasket = event.target.closest('[data-element="add-basket"]');
        if (phoneBack) {
            document.querySelector('[data-component="phone-viewer"]').classList.add('js-hidden');
            document.querySelector('[data-component="phone-catalog"]').classList.remove('js-hidden');
        }
        if (addBasket) {
            alert("Товар добавлен в корзину");
        }
    }

  _render() {
    this._element.innerHTML = `
     <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

    <button data-element="phone-back">Back</button>
    <button data-element="add-basket">Add to basket</button>


    <h1>${this._phone.name}</h1>

    <p>${this._phone.description}</p>

    <ul class="phone-thumbs">
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
      </li>
    </ul>
    `;
  }
}

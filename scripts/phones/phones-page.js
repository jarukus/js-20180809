import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';

import PhoneService from './services/phone-service.js';

export default class PhonesPage {
  constructor({element}) {
    this._element = element;

    this._render();

    this._initViewer();


    this._catalog = new PhoneCatalog({
      element: document.querySelector('[data-component="phone-catalog"]'),
      phones: PhoneService.getPhones(),
      onPhoneSelected: (phoneId) => {
        let phone = PhoneService.getPhone(phoneId);

        this._catalog.hide();
        this._viewer.showPhone(phone);
      }
    })
  }


  _initViewer() {
    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="phone-viewer"]')
    })
  }

  _render() {
    this._element.innerHTML = `
    <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
            <section>
                <p>
                    Search:
                    <input>
                </p>

                <p>
                    Sort by:
                    <select>
                        <option value="name">Alphabetical</option>
                        <option value="age">Newest</option>
                    </select>
                </p>
            </section>

            <section>
                <p>Shopping Cart</p>
                <ul id="basket">
                </ul>
            </section>
        </div> 
        
        <!-- Main Catalog -->
        <div class="col-md-10" data-component="phone-catalog"></div>
        
        <!-- Phone Viewer -->
        <div data-component="phone-viewer" class="js-hidden"></div>

    </div>
    `;
  }
}

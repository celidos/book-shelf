import React, { Component } from 'react';

import PageHeader from './components/page-header/page-header';
import { PageMainWrapper } from './components/page-main/page-main-wrapper';
import PageFooter from './components/page-footer/page-footer';
import { FiltersWrapper } from 'src/components/filters/filters-wrapper';
export class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <FiltersWrapper/>
        <PageMainWrapper />
        <PageFooter />
        {/* MainNav.main-nav
              ul.main-nav__list
                li.main-nav__item 
                  a.main-nav__link 
                li.main-nav__item.main-nav__item--active
                  a...
          PageMain.page-main
              ViewMode.view-mode (div)
                  Button.btn.btn--icon
                    svg.btn__icon
              Products.products (section)
                  h1.products__title
                  ul.products__list
                    li.products__item
                      Card.card (article)                      
                        img.card__img
                        h2.card__title
                        ul.card__info
                            li.card__info-item
                        div.card__descr
                          p
                        Button.btn.card__to-fav (button) 
                  Paginator
                  
                ///////////////////////////
                ProductsToRead.products-to-read
                    h1.products-to-read__title
                    ul.products-to-read__list
                      li.products-to-read__item
                        FieldCheckbox.field-checkbox (div)
                          input[type='checkbox'].field-checkbox__input
                          label[for .. id].field-checkbox__label
                        Close.close (button)

                ///////////////////////////////////
                PageError.page-error (div)
                    p.page-error__msg

                ///////////////////////////////////
          Footer.footer (footer)
              p*/}
      </div>
    );
  }
}

export default App;

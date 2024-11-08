import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ProdutoElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoAdicionarProdutoNoCarinho1(): Locator {
    return this.page.locator('#add-to-cart-sauce-labs-bike-light').first();
  }

  getBotaoAdicionarProdutoNoCarinho2(): Locator {
    return this.page.locator('#add-to-cart-sauce-labs-bike-light').last();
  }

  getOrdenar(): Locator {
    return this.page.locator('.product_sort_container');
  }

  getOrdenarDeAaZ(): Locator {
    return this.page.locator('option[value="az"]');
  }

  getOrdenarDeZaA(): Locator {
    return this.page.locator('option[value="za"]');
  }

  getOrdenarMenorMaior(): Locator {
    return this.page.locator('option[value="lohi"]');
  }

  getOrdenarMaiorMenor(): Locator {
    return this.page.locator('option[value="hilo"]');
  }

  getCarrinho(): Locator {
    return this.page.locator('#shopping_cart_container');
  }

  getQuantidadeCarrinho(): Locator {
    return this.page.locator('.shopping_cart_badge');
  }

  getMenuLateral(): Locator {
    return this.page.locator('#react-burger-menu-btn');
  }

  getLogout(): Locator {
    return this.page.locator('#logout_sidebar_link');
  }
}

import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CarrinhoElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getRemoverProdutoCarrinho1(): Locator {
    return this.page.locator('#remove-sauce-labs-backpack:first');
  }

  getRemoverProdutoCarrinho2(): Locator {
    return this.page.locator('#remove-sauce-labs-backpack:last');
  }

  getDescricaoProduto(): Locator {
    return this.page.locator('.inventory_item_name');
  }

  getDescricaoProduto2(): Locator {
    return this.page.locator('.inventory_item_name:last');
  }

  getValorProduto(): Locator {
    return this.page.locator('.inventory_item_price');
  }

  getValorProduto2(): Locator {
    return this.page.locator('.inventory_item_price:last');
  }

  getContinueShopping(): Locator {
    return this.page.locator('#continue-shopping');
  }

  getCheckout(): Locator {
    return this.page.locator('#checkout');
  }
}

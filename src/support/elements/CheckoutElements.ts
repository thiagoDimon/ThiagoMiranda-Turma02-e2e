import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CheckoutElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFirstName(): Locator {
    return this.page.locator('#first-name');
  }

  getLastName(): Locator {
    return this.page.locator('#last-name');
  }

  getPostalCode(): Locator {
    return this.page.locator('#postal-code');
  }

  getContinue(): Locator {
    return this.page.locator('#continue');
  }

  getCancel(): Locator {
    return this.page.locator('#cancel');
  }

  getFinish(): Locator {
    return this.page.locator('#finish');
  }

  getBackToProducts(): Locator {
    return this.page.locator('#back-to-products');
  }

  getValorTotalCompra(): Locator {
    return this.page.locator('.summary_total_label');
  }
}

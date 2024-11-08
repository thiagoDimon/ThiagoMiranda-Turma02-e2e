import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoUsername(): Locator {
    return this.page.locator('input[name="user-name"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('input[name="password"]');
  }

  getBotaoLogin(): Locator {
    return this.page.locator('input[name="login-button"]');
  }

  getMessageError(): Locator {
    return this.page.locator('h3[data-test="error"]');
  }
}

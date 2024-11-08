import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LoginElements from '../elements/LoginElements';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  readonly loginElements: LoginElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
  }

  async realizarLogin(): Promise<void> {
    await this.loginElements.getCampoUsername().fill('standard_user');
    await this.loginElements.getCampoSenha().fill('secret_sauce');
    await this.loginElements.getBotaoLogin().click();
  }

  async realizarLoginInvalido(): Promise<void> {
    await this.loginElements.getCampoUsername().fill(faker.person.firstName());
    await this.loginElements.getCampoSenha().fill('minha$3nh4qualquer');
    await this.loginElements.getBotaoLogin().click();
  }

  async validarMensagemErro(): Promise<void> {
    await expect(this.loginElements.getMessageError()).toBeVisible();
  }
}

import { expect, Page } from '@playwright/test';
import CheckoutElements from '../elements/CheckoutElements';
import BasePage from './BasePage';

export default class CheckoutPage extends BasePage {
  readonly checkoutElements: CheckoutElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.checkoutElements = new CheckoutElements(page);
  }

  async preencherNome(nome: string): Promise<void> {
    await this.checkoutElements.getFirstName().fill(nome);
  }

  async preencherSobrenome(sobrenome: string): Promise<void> {
    await this.checkoutElements.getLastName().fill(sobrenome);
  }

  async preencherCep(cep: string): Promise<void> {
    await this.checkoutElements.getPostalCode().fill(cep);
  }

  async confirmarCompra(): Promise<void> {
    await this.checkoutElements.getContinue().click();
  }

  async finalizarCompra(): Promise<void> {
    await this.checkoutElements.getFinish().click();
  }

  async verificarValorTotal(valor: string): Promise<void> {
    await expect(this.checkoutElements.getValorTotalCompra()).toHaveText(valor);
  }
}

import { Page, expect } from '@playwright/test';
import CarrinhoElements from '../elements/CarrinhoElements';
import BasePage from './BasePage';

export default class CarrinhoPage extends BasePage {
  readonly carrinhoElements: CarrinhoElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.carrinhoElements = new CarrinhoElements(page);
  }

  async verificarProdutoNoCarrinho(produto: string): Promise<void> {
    await expect(this.carrinhoElements.getDescricaoProduto()).toHaveText(
      produto
    );
  }

  async verificarPrecoDoProduto(preco: string): Promise<void> {
    await expect(this.carrinhoElements.getValorProduto()).toHaveText(preco);
  }

  async fazerCheckout(): Promise<void> {
    await this.carrinhoElements.getCheckout().click();
  }
}

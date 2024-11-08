import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import ProdutoElements from '../elements/ProdutosElements';

export default class ProdutosPage extends BasePage {
  readonly produtoElements: ProdutoElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.produtoElements = new ProdutoElements(page);
  }

  async adicionarProdutosNoCarrinho(): Promise<void> {
    await this.produtoElements.getBotaoAdicionarProdutoNoCarinho1().click();
  }

  async ordenarProdutosDeAaZ(): Promise<void> {
    await this.produtoElements
      .getOrdenar()
      .selectOption({ label: 'Name (A to Z)' });
  }

  async ordenarProdutosDeMenorParaMaiorPreco(): Promise<void> {
    await this.produtoElements
      .getOrdenar()
      .selectOption({ label: 'Price (low to high)' });
  }

  async acessarCarrinho(): Promise<void> {
    await this.produtoElements.getCarrinho().click();
  }

  async verificarQuantidadeCarinho(qtd: string): Promise<void> {
    await expect(this.produtoElements.getQuantidadeCarrinho()).toHaveText(qtd);
  }
}

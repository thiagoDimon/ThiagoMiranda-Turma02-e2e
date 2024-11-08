import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';
import ProdutosPage from '../support/pages/ProdutosPage';
import CarrinhoPage from '../support/pages/CarrinhoPage';
import CheckoutPage from '../support/pages/CheckoutPage';

test.describe('Testes App Sauce', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');

  let loginPage: LoginPage;
  let produtosPage: ProdutosPage;
  let carrinhoPage: CarrinhoPage;
  let checkoutPage: CheckoutPage;

  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.sauce_demo')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.sauce_demo')
      .retrieveData();
  } else if (process.env.HML) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.sauce_demo_HML')
      .retrieveData();
  } else if (process.env.PRD) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.sauce_demo_PRD')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    produtosPage = new ProdutosPage(page);
    carrinhoPage = new CarrinhoPage(page);
    checkoutPage = new CheckoutPage(page);

    await page.goto(BASE_URL);
  });

  test('Realizando Login Inválido', async () => {
    await loginPage.realizarLoginInvalido();
    await loginPage.validarMensagemErro();
  });

  test('Realizando Login válido', async () => {
    await loginPage.realizarLogin();
  });

  test('Ordenando produtos e adicionando ao carrinho', async () => {
    await loginPage.realizarLogin();
    await produtosPage.ordenarProdutosDeMenorParaMaiorPreco();
    await produtosPage.adicionarProdutosNoCarrinho();
  });

  test('Adicionando produtos e verificando quantidade no carrinho', async () => {
    await loginPage.realizarLogin();
    await produtosPage.ordenarProdutosDeAaZ();
    await produtosPage.adicionarProdutosNoCarrinho();
    await produtosPage.verificarQuantidadeCarinho('1');
  });

  test('Validando fluxo de compra', async () => {
    await loginPage.realizarLogin();
    await produtosPage.adicionarProdutosNoCarrinho();
    await produtosPage.acessarCarrinho();
    await carrinhoPage.verificarProdutoNoCarrinho('Sauce Labs Bike Light');
    await carrinhoPage.verificarPrecoDoProduto('$9.99');
    await carrinhoPage.fazerCheckout();
    await checkoutPage.preencherNome('Diego');
    await checkoutPage.preencherSobrenome('Mendes');
    await checkoutPage.preencherCep('78940-000');
    await checkoutPage.confirmarCompra();
    await checkoutPage.verificarValorTotal('Total: $10.79');
    await checkoutPage.finalizarCompra();
  });
});

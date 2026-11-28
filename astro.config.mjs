import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const paginasExtras = [
  'https://marcoshenrique.me/',
  'https://marcoshenrique.me/blog/',
  'https://marcoshenrique.me/agencia-de-marketing-digital-em-sorocaba/',
  'https://marcoshenrique.me/melhor-agencia-de-marketing-digital-no-rio-de-janeiro/',
  'https://marcoshenrique.me/agencia-de-marketing-digital-na-barra-da-tijuca/',
  'https://marcoshenrique.me/agencia-de-google-ads-rj/',
  'https://marcoshenrique.me/agencia-especializada-em-lancamento-de-produtos-digitais/',
  'https://marcoshenrique.me/agencia-google-ads/',
  'https://marcoshenrique.me/agencia-de-marketing-digital-rj/',
  'https://marcoshenrique.me/consultoria-especializada-em-automacao-de-marketing-digital/',
  'https://marcoshenrique.me/consultoria-de-marketing-digital-no-rio-de-janeiro/',
  'https://marcoshenrique.me/agencia-de-trafego-pago-para-facebook-ads-e-instagram-ads/',
  'https://marcoshenrique.me/agencia-de-marketing-digital-para-medicos/',
  'https://marcoshenrique.me/contratar-especialista-em-gestao-de-google-ads/',
  'https://marcoshenrique.me/consultoria-em-automacao-de-mensagens-whatsapp/',
  'https://marcoshenrique.me/consultoria-e-implementacao-de-crm-de-vendas/',
  'https://marcoshenrique.me/lancador-de-infoprodutos-para-iniciantes/',
  'https://marcoshenrique.me/agencia-de-marketing-rio-de-janeiro/',
  'https://marcoshenrique.me/gestor-de-trafego-em-sao-paulo/',
  'https://marcoshenrique.me/agencia-de-lancamento-de-lnfoprodutos/',
  'https://marcoshenrique.me/consultoria-em-crm-de-vendas-para-empresas/',
  'https://marcoshenrique.me/marketing-digital-para-pequenas-empresas-brasileiras-nos-estados-unidos/',
  'https://marcoshenrique.me/consultoria-para-lancamento-de-infoprodutos/',
  'https://marcoshenrique.me/especialista-em-lancamentos-digitais/',
  'https://marcoshenrique.me/agencia-de-trafego-pago-no-rio-de-janeiro/',
  'https://marcoshenrique.me/agencia-de-inbound-marketing-para-empresas/',
  'https://marcoshenrique.me/contratar-agencia-de-automacao-de-marketing-digital/',
  'https://marcoshenrique.me/agencia-de-trafego-pago-em-sao-paulo/',
  'https://marcoshenrique.me/agencia-de-marketing-digital-especializada-em-google-ads/'
];

export default defineConfig({
  site: 'https://marcoshenrique.me',
  integrations: [sitemap({ customPages: paginasExtras })],
});

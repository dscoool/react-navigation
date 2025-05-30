import { expect, test as it } from '@playwright/test';
import { load } from 'cheerio';

const server = 'http://localhost:3275';

it('renders the home page', async () => {
  const res = await fetch(server);
  const html = await res.text();

  const $ = load(html);

  expect($('title').text()).toBe('Examples');
});

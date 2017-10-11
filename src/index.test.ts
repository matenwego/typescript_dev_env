import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import * as fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    JSDOM.fromFile('./src/index.html').then((jsdom) => {
      const h1 = jsdom.window.document.getElementsByTagName('h1')[0];

      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      jsdom.window.close();
    }, (reason) => {
      console.log(reason); // eslint-disable-line no-console
    });
  });
});
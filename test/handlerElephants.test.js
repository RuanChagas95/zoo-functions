const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('verifica se ao passar o parâmetro count retorna a quantidade de elefantes', () =>
    expect(handlerElephants('count')).toBe(4));
  it('verifica se ao passar o parâmetro names retorna um array que inclui Jefferson', () =>
    expect(handlerElephants('names').includes('Jefferson')).toBeTruthy());
  it('verifica se ao passar o parâmetro averageAge retorna um número próximo a 10.5', () =>
    expect(handlerElephants('averageAge') > 10 && handlerElephants('averageAge') < 11)
      .toBeTruthy());
  it('verifica se ao passar o parâmetro location retorna a localização dos elefantes dentro do zoológico', () =>
    expect(handlerElephants('location')).toBe('NW'));
  it('verifica se ao passar o parâmetro popularity retorna um número igual ou maior a 5', () =>
    expect(handlerElephants('popularity') >= 5).toBeTruthy());
  it('verifica se ao passar o parâmetro availability retorna um número igual ou maior a 5', () =>
    expect(handlerElephants('availability').includes('Monday')).toBeFalsy());
  it('Não passando argumentos a função deve retornar undefined', () =>
    expect(handlerElephants()).toBeUndefined());
  it('Passando por argumento um objeto vazio ({}) deve retornar a string \'Parâmetro inválido, é necessário uma string\'', () =>
    expect(handlerElephants({}).includes('string')).toBeTruthy());
  it('Passada uma string que não contempla uma funcionalidade deve retornar null.', () =>
    expect(handlerElephants('gdsygfhsd')).toBeNull());
});

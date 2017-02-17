import wallet from '../src'

test('should be returned an wallet object', () => {
  expect(wallet.fromString('100')).toMatchObject({ value: 10000 })
})

test('should be returned an wallet object with value = 0', () => {
  expect(wallet.fromString()).toMatchObject({ value: 0, locale: 'en' })
})

test('should be returned an wallet object with value = 100 and locale pt-BR', () => {
  expect(wallet.fromString(1, { locale: 'pt-BR' })).toMatchObject({ value: 100, locale: 'pt-BR' })
})

test('should be returned an exception when value is a NaN', () => {
  expect(() => wallet.init(NaN)).toThrow(Error)
})

test('should be returned an exception when value is an object', () => {
  expect(() => wallet.init({})).toThrow(Error)
})

test('should be returned an exception when value is an array', () => {
  expect(() => wallet.init([])).toThrow(Error)
})
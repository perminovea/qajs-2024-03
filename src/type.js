/** Строки */
{
const a =  "строка"
console.log('typeof "строка"', typeof a)
const b = 'тоже строка'
// 
}

//Boolean

{
  console.group('Boolean')
  console.log('true', true)
  console.log('false',true)

  const a = 0
  const b = 0
  const c = 1
  const d = '1'
  const e = '1'

  // '=' - оператор присвоения (утвержение! Присовение значения)
  // '==' - приведение к 1 типу данных и сравнение (равны ли значения?)
  // '===' - строгое сравнение по типу данных (одинаковые ли типы данных? равны ли значения?)

  // == - запрещено lint
  console.log (`${a}` === `${b}`, a === b) 
  // eslint-disable-next-line
  console.log (`${a}` == `${b}`, a == b) 

  // < - меньше
  console.log (a < c)
  // <= >=

  console.log (a > b)
  console.log (a >= b) 

  // != - неравенство, !== - строгое неравенство
  console.log (a != c)
  console.log (c !== d)

}

// Numer 
const a = 1
let p = 1

// null / undefined
let a
const b = null
const c = undefined;


// let , const
// переменная, которую можно переопределить
let a = 1 
//переменная, которую нельзя переопредлить
const b = 2

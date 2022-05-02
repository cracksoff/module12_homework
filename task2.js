const obj = {
	test1: 'Object1',
	test2: 'Object2'
}
const argAndObject = (key, obj) => console.log(key in obj)
argAndObject('test', obj)
argAndObject('test1', obj)

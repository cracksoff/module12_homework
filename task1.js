const minorObj = {
	test1: 'minorObject1',
	test2: 'minorObject2'
}
const mainObj = Object.create(minorObj)
mainObj.test3 = 'mainObject1'
mainObj.test4 = 'mainObject2'
const allKeysAndValues = (obj) => {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`${key}:${obj[key]}`)
		}
	}
}
allKeysAndValues(mainObj)

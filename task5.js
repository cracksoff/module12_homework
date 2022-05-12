class SomeDevices {
	constructor(name, mode, power) {
		this.name = name
		this.mode = mode
		this.power = power
		this.getPower = function () {
			if (this.mode == 1) {
				console.log(`Устройство ${this.name} потребляет ${this.power} ватт`)
			} else {
				console.log(`Устройство ${this.name} потребляет 0 ватт, не подключено к сети`)
			}
		}

		this.getMode = function () {
			if (this.mode == 1) {
				console.log(`Устройство ${this.name} включено в сеть`)
			} else {
				console.log(`Устройство ${this.name} отключено от сети`)
			}
		}

		this.plugIn = function () {
			this.mode = 1
		}

		this.plugOut = function () {
			this.mode = 0
		}
	}
}

class WashingMachine extends SomeDevices {
	constructor(name, brand, creatingCountry, power, mode) {
		super(name, mode, power)
		this.name = name
		this.brand = brand
		this.creatingCountry = creatingCountry
		this.power = power
		this.mode = mode
		this.getCreator = function () {
			console.log(`Устройство ${this.name} произведено в ${this.creatingCountry} компанией ${this.brand}`)
		}
	}
}

class MusicCenter extends SomeDevices {
	constructor(name, brand, creatingCountry, size, power, mode) {
		super(name, mode, power)
		this.name = name
		this.brand = brand
		this.creatingCountry = creatingCountry
		this.size = size
		this.power = power
		this.mode = mode
		this.getSize = function () {
			console.log(`Устройство ${this.name} имеет размер ${this.size}`)
		}
	}
}

class Computer extends SomeDevices {
	constructor(name, brand, cost, specification, power, mode) {
		super(name, mode, power)
		this.name = name
		this.brand = brand
		this.cost = cost
		this.specification = specification
		this.power = power
		this.mode = mode
		this.getSpecification = function () {
			console.log(`Устройство ${this.name} имеет следующие характеристики: ${this.specification}`)
		}
	}
}

const washingMachine = new WashingMachine('Стиральная машина WA-ASLQWPZ-c', 'V-ZUG', 'Switzerland', 2900, 0)
const musicCenter = new MusicCenter('Музыкальный центр MSX-SZ22', 'Aiwa', 'England', '400x400', 110, 0)
const computer = new Computer('Компьютер Dynamic', 'HyperPC', 513000, 'Intel core i9, RTX 3090, z490 chipset, 4x16 HyperX Predator DDR4-3200', 850, 0)

washingMachine.getMode()
washingMachine.getPower()
washingMachine.plugIn()
washingMachine.getPower()
washingMachine.getCreator()

musicCenter.getSize()
musicCenter.plugIn()

computer.getSpecification()

function countingPowerConsumption(...obj) {
	let totalUsage = 0
	for (let i = 0; i < obj.length; i++) {
		if (obj[i]['mode'] == 1) {
			totalUsage += obj[i]['power']
		}
	}
	console.log(`Текущий расход энергии: ${totalUsage} ватт`)
}

countingPowerConsumption(washingMachine, musicCenter, computer)

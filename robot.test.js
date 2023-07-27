const createRobot = require('./robot.js');

describe('createRobot', () => {
	test('Should throw an invalid orientation error', () => {
		const message = '¡Invalid Orientation!'
		const myRobot = createRobot([1, 1], 'Norht')
		expect(myRobot.message).toBe(message)
	});

	test('Should trhow an invalid coordinates error', () => {
		const message = '¡Invalid Coordinates!'
		const myRobot = createRobot([-1, 1], 'East')
		expect(myRobot.message).toBe(message)
	})

	test('Should return a robot creation confirmation', () => {
		const message = '¡Robot Created!'
		const myRobot = createRobot([1, 9], 'South')
		expect(myRobot.message).toBe(message)
	})
});

describe('getPosition', () => {
	test('Should trhow an out of limits error', () => {
		const message = '¡Out Of Limits!'
		const myRobot = createRobot([1, 11], 'West')
		const result = myRobot.getPosition()
		expect(result).toBe(message)
	})

	test('Should return place correctly', () => {
		const place = { coordinates: [5, 2], orientation: 'North'}
		const myRobot = createRobot([5, 2], 'North')
		const result = myRobot.getPosition()
		expect(result).toHaveProperty('coordinates')
		expect(result).toMatchObject(place)
	})
});

describe('advance', () => {
	test('Should advance with coordinates [3, 6] and orientation "North" and return coordinates [3, 7]', () => {
    const place = { coordinates: [3, 7], orientation: 'North' }
    const myRobot = createRobot([3, 6], 'North')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject(place)
  })

	test('Should advance with coordinates [3, 6] and orientation "East" and return coordinates [4, 6]', () => {
    const place = { coordinates: [4, 6], orientation: 'East' }
    const myRobot = createRobot([3, 6], 'East')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject(place)
  })

	test('Should advance with coordinates [3, 6] and orientation "South" and return coordinates [3, 5]', () => {
    const place = { coordinates: [3, 5], orientation: 'South' }
    const myRobot = createRobot([3, 6], 'South')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject(place)
  })

	test('Should advance with coordinates [3, 6] and orientation "West" and return coordinates [2, 6]', () => {
    const place = { coordinates: [2, 6], orientation: 'West' }
    const myRobot = createRobot([3, 6], 'West')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject(place)
  })
});

describe('turnRight', () => {
	test('should turn right with orientation "North" and return orientation "East"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'East' }
		const myRobot = createRobot([1, 1], 'North')
		myRobot.turnRight();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})

	test('should turn right with orientation "East" and return orientation "South"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'South' }
		const myRobot = createRobot([1, 1], 'East')
		myRobot.turnRight();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})

	test('should turn right with orientation "South" and return orientation "West"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'West' }
		const myRobot = createRobot([1, 1], 'South')
		myRobot.turnRight();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})

	test('should turn right with orientation "West" and return orientation "North"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'North' }
		const myRobot = createRobot([1, 1], 'West')
		myRobot.turnRight();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})
});

describe('turnLeft', () => {
	test('should turn Left with orientation "North" and return orientation "West"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'West' }
		const myRobot = createRobot([1, 1], 'North')
		myRobot.turnLeft();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})

	test('should turn Left with orientation "West" and return orientation "South"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'South' }
		const myRobot = createRobot([1, 1], 'West')
		myRobot.turnLeft();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})

	test('should turn Left with orientation "South" and return orientation "East"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'East' }
		const myRobot = createRobot([1, 1], 'South')
		myRobot.turnLeft();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})

	test('should turn Left with orientation "East" and return orientation "North"', () => {
		const directionTurned = { coordinates: [1, 1], orientation: 'North' }
		const myRobot = createRobot([1, 1], 'East')
		myRobot.turnLeft();
		const result = myRobot.getPosition()
		expect(result).toMatchObject(directionTurned)
	})
});

describe('instructions', () => {
	test('Should return ([9,4], West) with initial parameters ([7, 3], North) and instructions "RAALAL"', () => {
		const directions = 'RAALAL'
		const instructionsFollowed = { coordinates: [9, 4], orientation: 'West' }
		const myRobot = createRobot([7, 3], 'North')
		myRobot.instructions(directions)
		const result = myRobot.getPosition()
		expect(result).toMatchObject(instructionsFollowed)
	})
})

function createRobot(coordinates, direction) {
  const cardinalOrientation = ['North', 'East', 'South', 'West']
  let [x, y] = coordinates
  let orientation = direction
  let message

  ((validateParameters) = () => {
    try {
      const isValid = cardinalOrientation.includes(direction);
      if(!isValid){
        throw new Error('¡Invalid Orientation!')
      }

      if(x > 10 || y > 10 || x < 0 || y < 0){
        throw new Error ('¡Invalid Coordinates!')
      }

      message = '¡Robot Created!'
    } catch(error) {
      message = error.message
    }

  })()

  const getPosition = () => {
    try{
      if(x > 10 || y > 10 || x < 0 || y < 0){
        throw new Error ('¡Out Of Limits!')
      }
      return { coordinates: [x, y], orientation }
    }catch(error){
      return error.message
    }
  }

  const advance = () => {
    const actions = {
      North: () => y += 1,
      South: () => y -= 1,
      East: () => x += 1,
      West: () => x -= 1
    }
    actions[orientation]()
  }

  const turnRight = () => {
    switch(orientation){
      case 'North':
        orientation = 'East';
        break;
      case 'East':
        orientation = 'South';
        break;
      case 'South':
        orientation = 'West';
        break;
      case 'West':
        orientation = 'North';
        break;
    }
  }

  const turnLeft = () => {
    switch(orientation){
      case 'North':
        orientation = 'West';
        break;
      case 'West':
        orientation = 'South';
        break;
      case 'South':
        orientation = 'East';
        break;
      case 'East':
        orientation = 'North';
        break;
    }
  }
  
  const instructions = (stringInstructions) => {
    const actions = {
      A: () => advance(),
      R: () => turnRight(),
      L: () => turnLeft(),
    }
    for(i = 0; i < stringInstructions.length; i++) {
      actions[stringInstructions[i]]()
    }
  }


  return {
    message,
    getPosition,
    advance,
    turnRight,
    turnLeft,
    instructions
      }
}

module.exports = createRobot

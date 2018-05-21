var recipes = {
  apples : '2',
}


function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}


console.log(updateObjectWithKeyAndValue(recipes, 'orange', '3'))

var recipes = {
  apples : '2',
}


function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}


updateObjectWithKeyAndValue(recipes, 'orange', '3')
console.log(recipes)
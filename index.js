var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = object.assign({}, object)
  newObj[key] = value
  return newObj
}



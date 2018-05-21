var recipes = {
  apples : '2',
};


function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = object;
  newObj[key] = value;
  return newObj;
}

// test function
console.log(updateObjectWithKeyAndValue(recipes, 'orange', '3'));
console.log(recipe);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
  return object;
}


function deleteFromObjectByKey(object, key) {
  newObj = Object.assign({}, object);
  
}
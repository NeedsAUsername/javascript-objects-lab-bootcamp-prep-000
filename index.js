var recipes = {
  apples : '2',
};


function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object); //why does changing this to object also change recipes?
  newObj[key] = value;
  return newObj;
}

// test function
console.log(updateObjectWithKeyAndValue(recipes, 'orange', '3'));
console.log(recipes);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
  return object;
}


function deleteFromObjectByKey(object, key) {
  newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}
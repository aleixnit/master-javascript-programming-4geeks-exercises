function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // Add your code after this line
  return person.age < 16 || person.age >= 21 || person.age >= 23 ? true : false
}
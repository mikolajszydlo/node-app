const fs = require('fs');

const genderArr = ['M', 'F'];
const firstNameArr = {male: ['James', 'Robert', 'John', 'Michael', 'William'], female: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth'],};
const lastNameArr = ['Smith', 'Kowalski', 'Johnson', 'Williams'];
const ageRange = [18, 78];
const people = [];

function randChoice(arr){
  const randomArrIndex = Math.floor(Math.random() * arr.length);
  return (arr[randomArrIndex]);
};

for(let i = 0; i<20; i++){
  let gender = randChoice(genderArr);
  let firstName = gender === 'M' ? randChoice(firstNameArr.male) : randChoice(firstNameArr.female);
  let lastName = randChoice(lastNameArr);
  let age = Math.floor(Math.random() * (ageRange[1] - ageRange[0]) + ageRange[0]);
  let email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@gmail.com';
  let phone = () => {
    let phoneNo = '';
    for(let i=0; i<10; i++){
      phoneNo = phoneNo + Math.floor(Math.random() * 9) 
    };
    return phoneNo;
  };

  people.push({
    gender,
    firstName,
    lastName,
    age,
    email,
    phone: phone(),
  });
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
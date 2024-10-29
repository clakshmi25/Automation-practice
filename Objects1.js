let person ={
firstname: 'Tim',
lastname: 'John',
fullname: function()
{
    console.log(this.firstname+this.lastname)
}
}

console.log(person.fullname())
console.log(person.lastname)
console.log('lastname' in person)
console.log(person)

for (let key in person)
{
    console.log(person[key])
}


module.exports = class person 
{
    age = 25
constructor (firstname,lastname)
{
this.Firstname = firstname
this.Lastname = lastname
}
fullname()
{
     return this.Firstname+this.Lastname
     //console.log(this.Firstname+this.Lastname)
     
}
}

// let Person = new person ("Tim", "John")
// console.log(Person.fullname())
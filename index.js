// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a, e) => a + e, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    return !(this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[1] + this.sides[2] <= this.sides[0] || this.sides[2] + this.sides[0] <= this.sides[1])
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[0]
  }

  get countSides() {
    return this.sides.length
  }

  get isValid() {
    return this.sides.every(side => side === this.sides[0])
  }
}

const polygon = new Polygon( [ 5, 5, 5 ] )
console.log(polygon.countSides)
console.log(polygon.perimeter)

const triangle = new Triangle( [ 5, 5, 5 ] )
const triangle2 = new Triangle( [ 15, 10, 1 ] )
console.log( triangle.countSides )
console.log( triangle.isValid )
console.log( triangle2.isValid )

let square = new Square( [ 5, 5, 5, 5 ] )
let square2 = new Square( [ 5, 4, 3, 2 ] )
console.log( square.countSides )
console.log( square.isValid )
console.log( square2.isValid )
///////////////////////////////////////////

// const fetch = require('node-fetch')

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(res => {
//     if(!res.ok) {
//       throw Error("Fetch failed")
//     }
//     return res.json()
//   })

// const usersThen = fetchUsers
//   .then(data => {console.log(data); return data})
//   .catch(e => console.log(e))

// console.log(usersThen instanceof Promise)
// console.log("usersThen")
// usersThen.then(obj => console.log("OBJECT1 =>", obj))

// const asyncUsers = async () => {
//   let data = await fetchUsers
//   console.log(data)
//   return data
// }

// console.log(asyncUsers() instanceof Promise)
// console.log("asyncUsers()")
// asyncUsers().then(obj => console.log("OBJECT2 =>", obj))
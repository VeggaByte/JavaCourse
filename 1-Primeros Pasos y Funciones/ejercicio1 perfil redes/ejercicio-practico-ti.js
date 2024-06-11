// Social Media


// 1. User Information
const username = 'coding'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

// Address objeto

const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Coding Land',
    zipCode: 54321
}

// 3. Hobbies array
const hobbies = ['Coding', 'Reading', 'Gaming']



// 4. Generating Personalized Bio
const personalizedbio = `hi, i am ${fullName} I'm ${age} i live in
${address.city} and my hobbies are ${hobbies.join(', ')}
Follow me for coding adventures
`

// 5. Print Profile and BiquadFilterNode
console.log(personalizedbio)

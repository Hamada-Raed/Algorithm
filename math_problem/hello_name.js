function hello(name) {
    if (name == null || name.length == 0) {
        return 'Hello, World!'
    }
    else {
        let first_latter = name[0].toUpperCase()
        let latters = name.slice(1).toLowerCase()
        let full_name = first_latter + latters

        return "Hello, " + full_name + "!"
    }
}

console.log(hello())
console.log(hello('Hamada'))

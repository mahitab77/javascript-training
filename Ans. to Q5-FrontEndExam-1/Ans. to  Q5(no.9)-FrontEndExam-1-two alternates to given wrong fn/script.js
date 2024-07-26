function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}

MyObject.prototype.getName = function() {
    return this.name;
};

MyObject.prototype.getMessage = function() {
    return this.message;
};

// Example usage
const obj = new MyObject("John Doe", "Hello, world!");

const outputElement = document.getElementById('output');
if (outputElement) {
    outputElement.textContent = `
Name: ${obj.getName()}
Message: ${obj.getMessage()}
    `;
}

/*class MyObject {
    constructor(name, message) {
        this.name = name.toString();
        this.message = message.toString();
    }

    getName() {
        return this.name;
    }

    getMessage() {
        return this.message;
    }
}

// Example usage
const obj = new MyObject("John Doe", "Hello, world!");

const outputElement = document.getElementById('output');
if (outputElement) {
    outputElement.textContent = `
Name: ${obj.getName()}
Message: ${obj.getMessage()}
    `;
}
*/
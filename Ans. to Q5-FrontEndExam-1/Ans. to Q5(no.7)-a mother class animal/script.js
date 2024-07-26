class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set_value(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Zebra extends Animal {
    constructor(name, age, origin) {
        super(name, age);
        this.origin = origin;
    }

    getInfo() {
        return `Zebra Name: ${this.name}, Age: ${this.age}, Origin: ${this.origin}`;
    }
}

class Dolphin extends Animal {
    constructor(name, age, habitat) {
        super(name, age);
        this.habitat = habitat;
    }

    getInfo() {
        return `Dolphin Name: ${this.name}, Age: ${this.age}, Habitat: ${this.habitat}`;
    }
}

document.getElementById('show-zebra').addEventListener('click', function() {
    const zebra = new Zebra('Marty', 5, 'Africa');
    document.getElementById('result').textContent = zebra.getInfo();
});

document.getElementById('show-dolphin').addEventListener('click', function() {
    const dolphin = new Dolphin('Flipper', 8, 'Ocean');
    document.getElementById('result').textContent = dolphin.getInfo();
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        this.salary += this.salary * (percent / 100);
        return this.salary;
    };
    Employee.prototype.toString = function () {
        return "Employee[id=".concat(this.id, ", name=").concat(this.getName(), ", salary=").concat(this.salary, "]");
    };
    return Employee;
}());
var Time = /** @class */ (function () {
    function Time(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    Time.prototype.getHour = function () {
        return this.hour;
    };
    Time.prototype.getMinute = function () {
        return this.minute;
    };
    Time.prototype.getSecond = function () {
        return this.second;
    };
    Time.prototype.setHour = function (hour) {
        this.hour = hour;
    };
    Time.prototype.setMinute = function (minute) {
        this.minute = minute;
    };
    Time.prototype.setSecond = function (second) {
        this.second = second;
    };
    Time.prototype.setTime = function (hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    };
    Time.prototype.toString = function () {
        return "".concat(this.hour.toString().padStart(2, '0'), ":").concat(this.minute.toString().padStart(2, '0'), ":").concat(this.second.toString().padStart(2, '0'));
    };
    Time.prototype.nextSecond = function () {
        this.second++;
        if (this.second === 60) {
            this.second = 0;
            this.minute++;
            if (this.minute === 60) {
                this.minute = 0;
                this.hour++;
                if (this.hour === 24) {
                    this.hour = 0;
                }
            }
        }
        return this;
    };
    Time.prototype.previousSecond = function () {
        this.second--;
        if (this.second < 0) {
            this.second = 59;
            this.minute--;
            if (this.minute < 0) {
                this.minute = 59;
                this.hour--;
                if (this.hour < 0) {
                    this.hour = 23;
                }
            }
        }
        return this;
    };
    return Time;
}());
var DateClass = /** @class */ (function () {
    function DateClass(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    DateClass.prototype.getDay = function () {
        return this.day;
    };
    DateClass.prototype.getMonth = function () {
        return this.month;
    };
    DateClass.prototype.getYear = function () {
        return this.year;
    };
    DateClass.prototype.setDay = function (day) {
        this.day = day;
    };
    DateClass.prototype.setMonth = function (month) {
        this.month = month;
    };
    DateClass.prototype.setYear = function (year) {
        this.year = year;
    };
    DateClass.prototype.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    };
    DateClass.prototype.toString = function () {
        return "".concat(this.day.toString().padStart(2, '0'), "/").concat(this.month.toString().padStart(2, '0'), "/").concat(this.year);
    };
    return DateClass;
}());
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.balance = 0;
        this.id = id;
        this.name = name;
        if (balance !== undefined) {
            this.balance = balance;
        }
    }
    Account.prototype.getId = function () {
        return this.id;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.credit = function (amount) {
        this.balance += amount;
        return this.balance;
    };
    Account.prototype.debit = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.transferTo = function (another, amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            another.credit(amount);
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.toString = function () {
        return "Account[id=".concat(this.id, ", name=").concat(this.name, ", balance=").concat(this.balance, "]");
    };
    return Account;
}());
var InvoiceItem = /** @class */ (function () {
    function InvoiceItem(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    InvoiceItem.prototype.getId = function () {
        return this.id;
    };
    InvoiceItem.prototype.getDesc = function () {
        return this.desc;
    };
    InvoiceItem.prototype.getQty = function () {
        return this.qty;
    };
    InvoiceItem.prototype.setQty = function (qty) {
        this.qty = qty;
    };
    InvoiceItem.prototype.getUnitPrice = function () {
        return this.unitPrice;
    };
    InvoiceItem.prototype.setUnitPrice = function (unitPrice) {
        this.unitPrice = unitPrice;
    };
    InvoiceItem.prototype.getTotal = function () {
        return this.unitPrice * this.qty;
    };
    InvoiceItem.prototype.toString = function () {
        return "InvoiceItem[id=".concat(this.id, ", desc=").concat(this.desc, ", qty=").concat(this.qty, ", unitPrice=").concat(this.unitPrice, "]");
    };
    return InvoiceItem;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = 1.0;
        this.width = 1.0;
        if (length !== undefined)
            this.length = length;
        if (width !== undefined)
            this.width = width;
    }
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[length=".concat(this.length, ", width=").concat(this.width, "]");
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = 1.0;
        if (radius !== undefined)
            this.radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.toString = function () {
        return "Circle[radius=".concat(this.radius, "]");
    };
    return Circle;
}());
var CircleWithColor = /** @class */ (function (_super) {
    __extends(CircleWithColor, _super);
    function CircleWithColor(radius, color) {
        var _this = _super.call(this, radius) || this;
        _this.color = "red";
        if (color !== undefined)
            _this.color = color;
        return _this;
    }
    CircleWithColor.prototype.getColor = function () {
        return this.color;
    };
    CircleWithColor.prototype.setColor = function (color) {
        this.color = color;
    };
    CircleWithColor.prototype.toString = function () {
        return "Circle[radius=".concat(this.getRadius(), ", color=").concat(this.color, "]");
    };
    return CircleWithColor;
}(Circle));
// Demonstrate the classes
window.onload = function () {
    var time = new Time(14, 30, 45);
    var timeOutput = document.getElementById('timeOutput');
    if (timeOutput) {
        timeOutput.textContent = time.toString();
    }
    var date = new DateClass(25, 12, 2023);
    var dateOutput = document.getElementById('dateOutput');
    if (dateOutput) {
        dateOutput.textContent = date.toString();
    }
    var account = new Account('A123', 'John Doe', 1000);
    var accountOutput = document.getElementById('accountOutput');
    if (accountOutput) {
        accountOutput.textContent = account.toString();
    }
    var invoiceItem = new InvoiceItem('I001', 'Laptop', 2, 1500.00);
    var invoiceItemOutput = document.getElementById('invoiceItemOutput');
    if (invoiceItemOutput) {
        invoiceItemOutput.textContent = invoiceItem.toString();
    }
    var rectangle = new Rectangle(5, 10);
    var rectangleOutput = document.getElementById('rectangleOutput');
    if (rectangleOutput) {
        rectangleOutput.textContent = rectangle.toString();
    }
    var circle = new Circle(7);
    var circleOutput = document.getElementById('circleOutput');
    if (circleOutput) {
        circleOutput.textContent = circle.toString();
    }
    var circleWithColor = new CircleWithColor(5, 'blue');
    var circleColorOutput = document.getElementById('circleColorOutput');
    if (circleColorOutput) {
        circleColorOutput.textContent = circleWithColor.toString();
    }
};

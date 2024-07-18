class Employee {
  private id: number;
  private firstName: string;
  private lastName: string;
  private salary: number;

  constructor(id: number, firstName: string, lastName: string, salary: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  public getId(): number {
    return this.id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }

  public getAnnualSalary(): number {
    return this.salary * 12;
  }

  public raiseSalary(percent: number): number {
    this.salary += this.salary * (percent / 100);
    return this.salary;
  }

  public toString(): string {
    return `Employee[id=${this.id}, name=${this.getName()}, salary=${this.salary}]`;
  }
}

class Time {
  private hour: number;
  private minute: number;
  private second: number;

  constructor(hour: number, minute: number, second: number) {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
  }

  public getHour(): number {
      return this.hour;
  }

  public getMinute(): number {
      return this.minute;
  }

  public getSecond(): number {
      return this.second;
  }

  public setHour(hour: number): void {
      this.hour = hour;
  }

  public setMinute(minute: number): void {
      this.minute = minute;
  }

  public setSecond(second: number): void {
      this.second = second;
  }

  public setTime(hour: number, minute: number, second: number): void {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
  }

  public toString(): string {
      return `${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`;
  }

  public nextSecond(): Time {
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
  }

  public previousSecond(): Time {
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
  }
}

class DateClass {
  private day: number;
  private month: number;
  private year: number;

  constructor(day: number, month: number, year: number) {
      this.day = day;
      this.month = month;
      this.year = year;
  }

  public getDay(): number {
      return this.day;
  }

  public getMonth(): number {
      return this.month;
  }

  public getYear(): number {
      return this.year;
  }

  public setDay(day: number): void {
      this.day = day;
  }

  public setMonth(month: number): void {
      this.month = month;
  }

  public setYear(year: number): void {
      this.year = year;
  }

  public setDate(day: number, month: number, year: number): void {
      this.day = day;
      this.month = month;
      this.year = year;
  }

  public toString(): string {
      return `${this.day.toString().padStart(2, '0')}/${this.month.toString().padStart(2, '0')}/${this.year}`;
  }
}

class Account {
  private id: string;
  private name: string;
  private balance: number = 0;

  constructor(id: string, name: string, balance?: number) {
      this.id = id;
      this.name = name;
      if (balance !== undefined) {
          this.balance = balance;
      }
  }

  public getId(): string {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public getBalance(): number {
      return this.balance;
  }

  public credit(amount: number): number {
      this.balance += amount;
      return this.balance;
  }

  public debit(amount: number): number {
      if (amount <= this.balance) {
          this.balance -= amount;
      } else {
          console.log("Amount exceeded balance");
      }
      return this.balance;
  }

  public transferTo(another: Account, amount: number): number {
      if (amount <= this.balance) {
          this.balance -= amount;
          another.credit(amount);
      } else {
          console.log("Amount exceeded balance");
      }
      return this.balance;
  }

  public toString(): string {
      return `Account[id=${this.id}, name=${this.name}, balance=${this.balance}]`;
  }
}

class InvoiceItem {
  private id: string;
  private desc: string;
  private qty: number;
  private unitPrice: number;

  constructor(id: string, desc: string, qty: number, unitPrice: number) {
      this.id = id;
      this.desc = desc;
      this.qty = qty;
      this.unitPrice = unitPrice;
  }

  public getId(): string {
      return this.id;
  }

  public getDesc(): string {
      return this.desc;
  }

  public getQty(): number {
      return this.qty;
  }

  public setQty(qty: number): void {
      this.qty = qty;
  }

  public getUnitPrice(): number {
      return this.unitPrice;
  }

  public setUnitPrice(unitPrice: number): void {
      this.unitPrice = unitPrice;
  }

  public getTotal(): number {
      return this.unitPrice * this.qty;
  }

  public toString(): string {
      return `InvoiceItem[id=${this.id}, desc=${this.desc}, qty=${this.qty}, unitPrice=${this.unitPrice}]`;
  }
}

class Rectangle {
  private length: number = 1.0;
  private width: number = 1.0;

  constructor(length?: number, width?: number) {
      if (length !== undefined) this.length = length;
      if (width !== undefined) this.width = width;
  }

  public getLength(): number {
      return this.length;
  }

  public setLength(length: number): void {
      this.length = length;
  }

  public getWidth(): number {
      return this.width;
  }

  public setWidth(width: number): void {
      this.width = width;
  }

  public getArea(): number {
      return this.length * this.width;
  }

  public getPerimeter(): number {
      return 2 * (this.length + this.width);
  }

  public toString(): string {
      return `Rectangle[length=${this.length}, width=${this.width}]`;
  }
}

class Circle {
  private radius: number = 1.0;

  constructor(radius?: number) {
      if (radius !== undefined) this.radius = radius;
  }

  public getRadius(): number {
      return this.radius;
  }

  public setRadius(radius: number): void {
      this.radius = radius;
  }

  public getArea(): number {
      return Math.PI * this.radius * this.radius;
  }

  public getCircumference(): number {
      return 2 * Math.PI * this.radius;
  }

  public toString(): string {
      return `Circle[radius=${this.radius}]`;
  }
}

class CircleWithColor extends Circle {
  private color: string = "red";

  constructor(radius?: number, color?: string) {
      super(radius);
      if (color !== undefined) this.color = color;
  }

  public getColor(): string {
      return this.color;
  }

  public setColor(color: string): void {
      this.color = color;
  }

  public toString(): string {
      return `Circle[radius=${this.getRadius()}, color=${this.color}]`;
  }
}

// Demonstrate the classes
window.onload = () => {
  const time = new Time(14, 30, 45);
  const timeOutput = document.getElementById('timeOutput');
  if (timeOutput) {
      timeOutput.textContent = time.toString();
  }

  const date = new DateClass(25, 12, 2023);
  const dateOutput = document.getElementById('dateOutput');
  if (dateOutput) {
      dateOutput.textContent = date.toString();
  }

  const account = new Account('A123', 'John Doe', 1000);
  const accountOutput = document.getElementById('accountOutput');
  if (accountOutput) {
      accountOutput.textContent = account.toString();
  }

  const invoiceItem = new InvoiceItem('I001', 'Laptop', 2, 1500.00);
  const invoiceItemOutput = document.getElementById('invoiceItemOutput');
  if (invoiceItemOutput) {
      invoiceItemOutput.textContent = invoiceItem.toString();
  }

  const rectangle = new Rectangle(5, 10);
  const rectangleOutput = document.getElementById('rectangleOutput');
  if (rectangleOutput) {
      rectangleOutput.textContent = rectangle.toString();
  }

  const circle = new Circle(7);
  const circleOutput = document.getElementById('circleOutput');
  if (circleOutput) {
      circleOutput.textContent = circle.toString();
  }

  const circleWithColor = new CircleWithColor(5, 'blue');
  const circleColorOutput = document.getElementById('circleColorOutput');
  if (circleColorOutput) {
      circleColorOutput.textContent = circleWithColor.toString();
  }
};

function User(name, age) {
  this.name = name;
  this.age = age;
  this.showMsg = function() {
    window.alert('Hi, 我是' + this.name + '!');
  };
}

var user1 = new User('小丸子', 20);
var user2 = new User('小紅豆', 18);


console.log(user1.age);
console.log(user2.age);
user1.showMsg();
user2.showMsg();
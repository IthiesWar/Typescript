"use strict";
let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 10;
let OrderIdAutoIncrement = 100;
let CurrentUserId;
let CurrentUser;
let CurrentUserName;
class User {
    constructor(paramUserName, paramUserPassword, paramUserPhoneNumber, paramUserEmail, paramUserbalance) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserPhoneNumber = paramUserPhoneNumber;
        this.Userbalance = paramUserbalance;
    }
}
class MedicineInfo {
    constructor(paramMedicineName, paramMedicineCount, paramMedicinePrice) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
    }
}
class Order {
    constructor(paramMedicineId, paramUserId, paramMedicineName, paramMedicineCount) {
        OrderIdAutoIncrement++;
        this.OrderId = "OI" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
}
let UserArrayList = new Array();
UserArrayList.push(new User("harshad", "har22@@", "8899887766", "harshad@gmail.com", 0));
UserArrayList.push(new User("harshini", "har22@@", "8899887766", "harshini@gmail.com", 0));
let MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 5, 50));
MedicineList.push(new MedicineInfo("Colpal", 5, 60));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70));
MedicineList.push(new MedicineInfo("Iodex", 5, 80));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100));
let OrderList = new Array();
function signup() {
    var a = document.getElementById('in');
    var b = document.getElementById('up');
    var c = document.getElementById('signup');
    var d = document.getElementById('signin');
    c.style.display = "block";
    d.style.display = "none";
}
function signin() {
    var a = document.getElementById('in');
    var b = document.getElementById('up');
    var c = document.getElementById('signup');
    var d = document.getElementById('signin');
    c.style.display = "none";
    d.style.display = "block";
}
function subsignin(event) {
    event.preventDefault();
    var email = document.getElementById('email1');
    var password = document.getElementById('password1');
    var flag = 0;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (email.value == UserArrayList[i].UserEmail && password.value == UserArrayList[i].UserPassword) {
            var a = document.getElementById('in');
            var b = document.getElementById('up');
            var c = document.getElementById('signup');
            var d = document.getElementById('signin');
            var e = document.getElementById('ul');
            var f = document.getElementById('wrapper');
            d.style.display = "none";
            f.style.display = "none";
            e.style.display = 'block';
            CurrentUserId = UserArrayList[i].UserId;
            CurrentUser = UserArrayList[i];
            flag = 1;
            home();
            break;
        }
    }
    if (flag == 0) {
        alert("not exit");
    }
}
function subsignup(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var balance = document.getElementById('balance').value;
    var flag = 0;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (email.toLocaleLowerCase() == UserArrayList[i].UserEmail.toLocaleLowerCase()) {
            flag = 1;
        }
    }
    if (flag == 1) {
        alert("already exits");
    }
    else {
        UserArrayList.push(new User(name, password, phone, email, 0));
        signin();
    }
}
function home() {
    var home = document.getElementById('home');
    for (var i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == CurrentUserId) {
            home.innerHTML = "Hello " + UserArrayList[i].UserName;
        }
    }
}
function showbalance() {
    var home = document.getElementById('home');
    var balance = document.getElementById('balance');
    for (var i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == CurrentUserId) {
            balance.innerHTML = "balance " + UserArrayList[i].Userbalance + "";
        }
    }
    home.style.display = "none";
}
function recharge() {
    var recharge = document.getElementById('recharge');
    var recharge1 = document.getElementById('recharge1');
    var inputrecharge = document.getElementById('inputrecharge');
    recharge1.style.display = "block";
    recharge.innerHTML = "hey";
}

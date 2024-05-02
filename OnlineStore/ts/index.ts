let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 10;
let OrderIdAutoIncrement = 100;

let CurrentUserId: string;
let CurrentUser:User;
let CurrentUserName: string;
class User {

    UserId: string;
    UserName: string;
    UserEmail: string;
    UserPhoneNumber: string;
    UserPassword: string;
    Userbalance:number
    constructor(paramUserName: string, paramUserPassword: string, paramUserPhoneNumber: string, paramUserEmail: string,paramUserbalance:number) {

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

    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;

    constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number) {
        MedicineIdAutoIncrement++;

        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
    }
}
class Order {
    OrderId: string;
    MedicineId: string;
    UserId: string;

    MedicineName: string;
    MedicineCount: number;

    constructor(paramMedicineId: string, paramUserId: string, paramMedicineName: string, paramMedicineCount: number) {
        OrderIdAutoIncrement++;

        this.OrderId = "OI" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;

        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
}
let UserArrayList: Array<User> = new Array<User>();

UserArrayList.push(new User("harshad", "har22@@", "8899887766", "harshad@gmail.com",0));
UserArrayList.push(new User("harshini", "har22@@", "8899887766", "harshini@gmail.com",0));

let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

MedicineList.push(new MedicineInfo("Paracetomol", 5, 50));
MedicineList.push(new MedicineInfo("Colpal", 5, 60));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70));
MedicineList.push(new MedicineInfo("Iodex", 5, 80));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100));

let OrderList: Array<Order> = new Array<Order>();
function signup() {
    var a = document.getElementById('in') as HTMLButtonElement
    var b = document.getElementById('up') as HTMLButtonElement
    var c = document.getElementById('signup') as HTMLDivElement
    var d = document.getElementById('signin') as HTMLDivElement

    c.style.display = "block"
    d.style.display = "none"
}
function signin() {
    var a = document.getElementById('in') as HTMLButtonElement
    var b = document.getElementById('up') as HTMLButtonElement
    var c = document.getElementById('signup') as HTMLDivElement
    var d = document.getElementById('signin') as HTMLDivElement
    c.style.display = "none"
    d.style.display = "block"
}
function subsignin(event:any) {
    event.preventDefault();
    var email = document.getElementById('email1') as HTMLInputElement
    var password = document.getElementById('password1') as HTMLInputElement
    var flag=0;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (email.value == UserArrayList[i].UserEmail && password.value == UserArrayList[i].UserPassword) {
            var a = document.getElementById('in') as HTMLButtonElement
            var b = document.getElementById('up') as HTMLButtonElement
            var c = document.getElementById('signup') as HTMLDivElement
            var d = document.getElementById('signin') as HTMLDivElement
            var e=document.getElementById('ul') as HTMLDivElement
            var f=document.getElementById('wrapper') as HTMLDivElement
            d.style.display = "none"
            f.style.display="none"
            e.style.display='block';
            CurrentUserId=UserArrayList[i].UserId
            CurrentUser=UserArrayList[i];
            flag=1
            home();
            break
            
        }
    }
    if(flag==0)
        {
            alert("not exit")
        }
}
function subsignup(event:any) {
    event.preventDefault();
    var name=(document.getElementById('name') as HTMLInputElement).value
    var email =(document.getElementById('email') as HTMLInputElement).value
    var phone=(document.getElementById('phone') as HTMLInputElement).value
    var password=(document.getElementById('password') as HTMLInputElement).value
    var balance=(document.getElementById('balance') as HTMLInputElement).value
    var flag=0;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (email.toLocaleLowerCase() == UserArrayList[i].UserEmail.toLocaleLowerCase()) {
            flag=1;
        }
    }
    if(flag==1)
    {
        alert("already exits")
    }
    else
    {
        UserArrayList.push(new User(name,password,phone,email,0))
        signin()
    }
}
function home()
{
    var home=document.getElementById('home') as HTMLParagraphElement
    for(var i=0;i<UserArrayList.length;i++)
        {
            if(UserArrayList[i].UserId==CurrentUserId)
                {
                    home.innerHTML="Hello "+UserArrayList[i].UserName
                }
         }
}
function showbalance()
{
    var home=document.getElementById('home') as HTMLParagraphElement
    var balance=document.getElementById('balance') as HTMLParagraphElement
    for(var i =0;i<UserArrayList.length;i++)
        {
            if(UserArrayList[i].UserId==CurrentUserId)
                {
                    balance.innerHTML="balance "+UserArrayList[i].Userbalance+""
                }
        }
        home.style.display="none"
}
function recharge()
{
   var recharge=document.getElementById('recharge') as HTMLParagraphElement
   var recharge1=document.getElementById('recharge1') as HTMLParagraphElement
   var inputrecharge=document.getElementById('inputrecharge') as HTMLInputElement
   recharge1.style.display="block";
   recharge.innerHTML="hey"
}

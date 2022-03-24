var string ;
var counter;
var timeSlot;
var countAr=new Array();
loadCustID();
function loadCustID(){
    count=1;
    $("#txtCusId").val("C00-00"+count);
    count++;
}
loadDate();

function loadDate(){
    let today =new Date();
    let dd=today.getDate();
    let mm=today.getMonth()+1;
    let yy=today.getFullYear();
    let d=`${dd}-${mm}-${yy}`;
    $("#txtDate").val(d);
}

$("#btnTimeSlot").click(function (){
    selectTimeSlot();
    loadSlot();
    window.location.href="index03.html";
});

function    selectTimeSlot(){
    var tempName=String;
    for ( var i =0; i<18; i++){
        if(medicinesDB[i].getName()==tempName){
            if(medicinesDB[i].getDisease()=="General"){
                counter="General Counter";
                countAr[0]="General Counter";
            }else if(medicinesDB[i].getDisease()=="Emergency"){
                counter="Emergency Counter";
                countAr[0]="Emergency Counter";
            }else if(medicinesDB[i].getDisease()=="Covid"){
                countAr[0]="Covid Counter";
            }
        }else{
            countAr[0]="General Counter";
        }
    }
    console.log(counter);
    timeSlot= $("#txtDate").val();
}


function loadSlot(){
    console.log(counter);
    console.log(timeSlot);
    $("#counter").text(counter);
    $("#time").text(timeSlot);
}
var medicinesDB = new Array();
function pack (name,price,disease){
    var name=name;
    var price=price;
    var disease=disease;

    this.getName = function (){
        return this.name;
    }
    this.getPrice = function (){
        return this.price;
    }
    this.getDisease = function (){
        return this.disease;
    }

    this.setName = function (name) {
        this.name=name;
    }
    this.setPrice = function (price) {
        this.price=price;
    }
    this.setDisease = function (disease) {
        this.disease=disease;
    }
}
var med1=new pack();
med1.setName("Gliclazide");
med1.setPrice("1.50");
med1.setDisease("General");
medicinesDB.push(med1);
var med2=new pack();
med2.setName("Glipizide");
med2.setPrice("1.50");
med2.setDisease("General");
medicinesDB.push(med2);
var med3=new pack();
med3.setName("Metformin");
med3.setPrice("1.50");
med3.setDisease("General");
medicinesDB.push(med3);
var med4=new pack();
med4.setName("Amlopine");
med4.setPrice("1.50");
med4.setDisease("General");
medicinesDB.push(med4);
var med5=new pack();
med5.setName("Mannitol");
med5.setPrice("1.50");
med5.setDisease("General");
medicinesDB.push(med5);
var med6=new pack();
med6.setName("Acetylcysteine");
med6.setPrice("1.50");
med6.setDisease("Emergency");
medicinesDB.push(med6);
var med7=new pack();
med7.setName("Enoxaparin");
med7.setPrice("1.50");
med7.setDisease("Emergency");
medicinesDB.push(med7);
var med8=new pack();
med8.setName("Prednisone");
med8.setPrice("1.50");
med8.setDisease("Emergency");
medicinesDB.push(med8);
var med9=new pack();
med9.setName("Salbutamol");
med9.setPrice("1.50");
med9.setDisease("Covid");
medicinesDB.push(med9);
var med10=new pack();
med10.setName("Salbutamol");
med10.setPrice("1.50");
med10.setDisease("Covid");
medicinesDB.push(med10);
var med11=new pack();
med11.setName("Deriphyllin");
med11.setPrice("1.50");
med11.setDisease("Covid");
medicinesDB.push(med11);
var med12=new pack();
med12.setName("Allermine");
med12.setPrice("1.50");
med12.setDisease("Covid");
medicinesDB.push(med12);
var med13=new pack();
med13.setName("A");
med13.setPrice("1.50");
med13.setDisease("Covid");
medicinesDB.push(med13);
var med14=new pack();
med14.setName("B");
med14.setPrice("1.50");
med14.setDisease("Covid");
medicinesDB.push(med14);
var med15=new pack();
med15.setName("C");
med15.setPrice("1.50");
med15.setDisease("Emergency");
medicinesDB.push(med15);
var med16=new pack();
med16.setName("D");
med16.setPrice("1.50");
med16.setDisease("Emergency");
medicinesDB.push(med16);
var med17=new pack();
med17.setName("E");
med17.setPrice("1.50");
med17.setDisease("General");
medicinesDB.push(med17);
var med18=new pack();
med18.setName("F");
med18.setPrice("1.50");
med18.setDisease("General");
medicinesDB.push(med18);

// var mainText = document.getElementById("mainText");
// var submitBtn = document.getElementById("submitBtn");
// var fireHeading = document.getElementById("fireHeading");

// var firebaseHadingRef = firebase.database().ref().child("Heading");

// firebaseHadingRef.on('value', function(datasnapshot) {
//   fireHeading.innerText = datasnapshot.val();
// });

// function submitClick() {

//   var firebaseRef = firebase.database().ref();

//   var messageText = mainText.value;
//   firebaseRef.push().set(messageText);

// }


  
  var rootRef = firebase.database().ref().child("Results");
  var realwhoRef = firebase.database().ref().child("Results");
  var realstatusRef = firebase.database().ref().child("Results");
  var realpicRef = firebase.database().ref().child("Results");

  rootRef.limitToLast(30).on("child_added", snap => {

    var who = snap.child("Who").val();
    var status = snap.child("Status").val();

    var table = document.getElementById("table_body");    
    

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = who;
    cell2.innerHTML = status;

    //$("#table_body").append("<tr><td>" + who + "</td><td>" + status + "</td></tr>");
  });


  // real-time 데이터를 한글로 표기
  realwhoRef.limitToLast(1).on("child_added", snap => {
    var who = snap.child("Who").val();

    var real = document.getElementById("realtext");


    real.innerHTML=who;

  });

  realstatusRef.limitToLast(1).on("child_added", snap => {
    var status = snap.child("Status").val();

    var real = document.getElementById("realstatus");

    real.innerHTML=status;

  });

  // real-time 그림으로 표시
  realpicRef.limitToLast(1).on("child_added", snap => {
    var who = snap.child("Who").val();

    var real = document.getElementById("realpic");

    if(who == "Human") {
      real.src = "assets/img/real/human.png"
    }
    if(who == "Animal") {
      real.src = "assets/img/real/animal.png"
    }
    if(who == "None") {
      real.src = "assets/img/real/none.png"
    }
  });


  // function check(){
  //   if(document.search.keyWord.value==''){
  //     alert('검색어를 입력하세요'); 
  //     document.search.keyWord.focus();
  //     return false; 
  //   }
  // } 

        

  
  // var rootRef = firebase.database().ref().child("Results").limitToLast(1);

  // rootRef.on("child_added", snap => {

  //   var who = snap.child("Who").val();    

  //   var table = document.getElementById("table_result");    

  //   var row = table.insertRow(0);
  //   var cell1 = row.insertCell(0);
    
    
  //   cell1.innerHTML = who;

    
  // });


// });


// var rootRef = firebase.database().ref().child("Results");

// rootRef.on("child_added", snap => {

//   var who = snap.child("Who").val();
//   var status = snap.child("Status").val();

//   $("#table_body").append("<tr><td>" + who + "</td><td>" + status + "</td></tr>");

// });


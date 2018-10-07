  var rootRef = firebase.database().ref().child("Results");
  var realwhoRef = firebase.database().ref().child("Results");
  var realstatusRef = firebase.database().ref().child("Results");
  var whopicRef = firebase.database().ref().child("Results");

  rootRef.limitToLast(30).on("child_added", snap => {

    var who = snap.child("Who").val();
    var direction = snap.child("Direction").val();
    var distance = snap.child("Distance").val();
    var speed = snap.child("Speed").val();
    var table = document.getElementById("table_body");    

    //distance, direction, speed

    //for not exist
    if(who == "not exist") {
      direction="-"
      distance="-"
      speed="-"
    }

    //close, left, walk
    else if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
      who="exist"
      distance="close"
      direction="left"      
      speed="walk"
    }

    //close, left, run
    else if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
      who="exist"
      distance="close"
      direction="left"      
      speed="run"   
    }

    //close, right, walk
    else if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
      who="exist"
      distance="close"
      direction="right"      
      speed="walk"
    }

    //close, right, run
    else if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
      who="exist"
      distance="close"
      direction="right"      
      speed="run"
    }

    //far, left, walk
    else if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
      who="exist"
      distance="far"
      direction="left"      
      speed="walk"
    }

    //far, left, run
    else if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
      who="exist"
      distance="far"
      direction="left"      
      speed="run"
    }

    //far, right, walk
    else if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
      who="exist"
      distance="far"
      direction="right"      
      speed="walk"
    }

    //far, right, run
    else if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
      who="exist"
      distance="far"
      direction="right"      
      speed="run"
    }

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = who;
    cell2.innerHTML = direction;
    cell3.innerHTML = distance;
    cell4.innerHTML = speed;
  });


 
  // real-time 그림으로 표시
  whopicRef.limitToLast(1).on("child_added", snap => {
    var who = snap.child("Who").val();


    var whopic = document.getElementById("whopic");
    var directionpic = document.getElementById("directionpic");
    var distancepic = document.getElementById("distancepic");
    var speedpic = document.getElementById("speedpic");


    //distance, direction, speed

      //pic for not exist
      if(who == "not exist") {
        whopic.src = "assets/img/real/none.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png"      
      }

      //pic for exist, close, left, walk
      if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/close.png"
        directionpic.src = "assets/img/real/left.png"
        speedpic.src = "assets/img/real/walk.png"
      }

      //pic for exist, close, left, run
      if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/close.png"
        directionpic.src = "assets/img/real/left.png"
        speedpic.src = "assets/img/real/run.png"    
      }

      //pic for exist, close, right, walk
      if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/close.png"
        directionpic.src = "assets/img/real/right.png"
        speedpic.src = "assets/img/real/walk.png"
      }

      //pic for exist, close, right, run
      if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/close.png"
        directionpic.src = "assets/img/real/right.png"
        speedpic.src = "assets/img/real/run.png"
      }

      //pic for exist, far, left, walk
      if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/far.png"
        directionpic.src = "assets/img/real/left.png"
        speedpic.src = "assets/img/real/walk.png"
      }

      //pic for exist, far, left, run
      if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/far.png"
        directionpic.src = "assets/img/real/left.png"
        speedpic.src = "assets/img/real/run.png"
      }

      //pic for exist, far, right, walk
      if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/far.png"
        directionpic.src = "assets/img/real/right.png"
        speedpic.src = "assets/img/real/walk.png"
      }

      //pic for exist, far, right, run
      if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/far.png"
        directionpic.src = "assets/img/real/right.png"
        speedpic.src = "assets/img/real/run.png"
      }     

  });



  var rootRef = firebase.database().ref().child("Results");
  var whopicRef = firebase.database().ref().child("Results");


  //historical
  rootRef.limitToLast(30).on("child_added", snap => {

    var who = snap.child("Who").val();
    var direction = snap.child("Direction").val();
    var distance = snap.child("Distance").val();
    var speed = snap.child("Speed").val();
    var table = document.getElementById("table_body");    
 
    //exist만 출력
    if(who == "not exist") {
      direction="-"
      distance="-"
      speed="-"
    }
    else if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-"
    }
    else if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-"    
    }
    else if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-" 
    }
    else if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-" 
    }
    else if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-" 
    }
    else if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-" 
    }
    else if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-" 
    }
    else if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
      who="exist"
      direction="-"
      distance="-"
      speed="-" 
    }

    //distance만 출력
    // if(who == "not exist") {
    //   direction="-"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance"close"
    //   speed="-"
    // }
    // else if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="close"
    //   speed="-"    
    // }
    // else if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="close"
    //   speed="-"
    // }
    // else if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="close"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="far"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="far"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="far"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="far"
    //   speed="-"
    // }    


    //direction만 출력
    // if(who == "not exist") {
    //   direction="-"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="left"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="left"
    //   distance="-"
    //   speed="-"   
    // }
    // else if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="right"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="right"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="left"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="left"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="right"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="right"
    //   distance="-"
    //   speed="-"
    // }


    //speed만 출력
    // if(who == "not exist") {
    //   direction="-"
    //   distance="-"
    //   speed="-"
    // }
    // else if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="walk"
    // }
    // else if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="run"    
    // }
    // else if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="walk"
    // }
    // else if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="run"
    // }
    // else if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="walk"
    // }
    // else if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="run"
    // }
    // else if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="walk"
    // }
    // else if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
    //   who="exist"
    //   direction="-"
    //   distance="-"
    //   speed="run"
    // }

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

    //exist에 대한 picture출력
    if(who == "not exist") {
        whopic.src = "assets/img/real/none.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png"      
      }
      if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png" 
      }
      if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png"     
      }
      if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png" 
      }
      if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png" 
      }
      if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png" 
      }
      if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png" 
      }
      if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png" 
      }
      if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
        whopic.src = "assets/img/real/human.png"
        distancepic.src = "assets/img/real/dontknow.png"
        directionpic.src = "assets/img/real/dontknow.png"
        speedpic.src = "assets/img/real/dontknow.png" 
      }  


      //distance에 대한 picture 출력
      // if(who == "not exist") {
      //   whopic.src = "assets/img/real/none.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"      
      // }
      // if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/close.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/close.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"     
      // }
      // if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/close.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/close.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/far.png"
      //   ddirectionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/far.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/far.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/far.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }


      //directions에 대한 picture 출력
      // if(who == "not exist") {
      //   whopic.src = "assets/img/real/none.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"      
      // }
      // if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/left.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/left.png"
      //   speedpic.src = "assets/img/real/dontknow.png"     
      // }
      // if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/right.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/right.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/left.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/left.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/right.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }
      // if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/right.png"
      //   speedpic.src = "assets/img/real/dontknow.png"  
      // }


      //speed에 대한 picture 출력
      // if(who == "not exist") {
      //   whopic.src = "assets/img/real/none.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/dontknow.png"      
      // }
      // if(who == " 1.0  0.0  1.0  0.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/walk.png"
      // }
      // if(who == " 1.0  0.0  1.0  0.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/run.png"    
      // }
      // if(who == " 1.0  0.0  0.0  1.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/walk.png"
      // }
      // if(who == " 1.0  0.0  0.0  1.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/run.png"
      // }
      // if(who == " 0.0  1.0  1.0  0.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/walk.png"
      // }
      // if(who == " 0.0  1.0  1.0  0.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/run.png"
      // }
      // if(who == " 0.0  1.0  0.0  1.0  1.0  0.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/walk.png"
      // }
      // if(who == " 0.0  1.0  0.0  1.0  0.0  1.0 ") {
      //   whopic.src = "assets/img/real/human.png"
      //   distancepic.src = "assets/img/real/dontknow.png"
      //   directionpic.src = "assets/img/real/dontknow.png"
      //   speedpic.src = "assets/img/real/run.png"
      // }
              

  });


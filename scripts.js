// Write your JavaScript code here.
// Remember to pay attention to page loading!
 // Requirements 1
        window.addEventListener("load", function(){
        
        let altitude = 0;//to setup shuttle height increase or decrease by 10,000 miles when we clicked up or down button
        let rocketPosX = 0;
        let rocketPosY = 0;


      // 2. create Button
        const takeOffButton = document.getElementById("takeoff") // for takeOff
        const landButton = document.getElementById("landing") //for Landing
        const abortMissionButton = document.getElementById("missionAbort")//for missionAbort


    //Objects(Areas)
        const flightStatus = document.getElementById("flightStatus")
        const flightHeight = document.getElementById("spaceShuttleHeight")
        const shuttleBackground = document.getElementById("shuttleBackground")
    
    //Rocket Image
        const rocket = document.getElementById('rocket');

    // Requirements 2
    //add listner for take off
        takeOffButton.addEventListener("click", function(){

    //A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
    // let windowConfirm = confirm('Confirm that the shuttle is ready for takeoff') option 1
         let windowConfirm = window.confirm('Confirm that the shuttle is ready for takeoff') //option 2

    //If the shuttle is ready for liftoff, then add parts b-d.
    //if(windowConfirm){} //other option
        if(windowConfirm === true){
            flightStatus.innerHTML = "Shuttle in flight"; // b
            altitude = 10000; //5 (b)
            flightHeight.innerHTML = altitude // use instead 10000;               // d
            shuttleBackground.style.backgroundColor = "blue";             // c
            //the following two line of codes that used to up the rocket from the bottom 10 px
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            
        }
     });

    // Requirements 3
      //add listner for landing
        landButton.addEventListener("click", function(){
        let windowAlert = window.alert('The shuttle is landing. Landing gear engaged.')
        //alert('The shuttle is landing. Landing gear engaged.')//other option
            flightStatus.innerHTML = "The shuttle has landed."; // b
            // here the following lines of code( 51 -57) duplicated so, let's create a function that hold these, then call function 
            
            /*shuttleBackground.style.backgroundColor = "green"; 
            altitude = 0;
            flightHeight.innerHTML = altitude // use instead 0; 
            rocketPosX = 0; //for Bonus mission 2
            rocketPosY = 0; //for Bonus mission 2
            rocket.style.marginLeft = rocketPosX + 'px'; //for Bonus mission 2
            rocket.style.marginBottom = rocketPosY + 'px'; //for Bonus mission 2 */
            resetRocket();
        
      });

       // Requirements 4
      //add listner for Abort Mission
      abortMissionButton.addEventListener("click", function(){
        let windowConfirm = window.confirm('Confirm that you want to abort the mission.')
        if(windowConfirm){
            flightStatus.innerHTML = "Mission aborted"; // b
            // here the following lines of code( 70 -72) duplicated so, let's create a function that hold these, then call the function
            
            /*shuttleBackground.style.backgroundColor = "green"; 
            altitude = 0;
            flightHeight.innerHTML = altitude // use instead 0;  */
            resetRocket();
        }
        
      });

      //use event delegation for directional buttons
      document.addEventListener("click",function(event){
        let backgroudWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'))//for Bonus Mission
        console.log(backgroudWidth)
        if(event.target.id === "left" && rocketPosX > -(backgroudWidth/2 -40)){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';

        }
        if(event.target.id === "right" && rocketPosX < (backgroudWidth/2 -40)){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';

        }

        if(event.target.id === "up" && altitude <250000){ // && altitude <25000 logic for Bonus Mission  Req 1
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            flightHeight.innerHTML = altitude;

        }

        if(event.target.id === "down" && altitude > 0){ // && altitude > 0 logic for Bonus Mission  Req 1
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            flightHeight.innerHTML = altitude;

        }
      
    });

        function resetRocket(){
            shuttleBackground.style.backgroundColor = "green"; 
            altitude = 0;
            flightHeight.innerHTML = altitude // use instead 0; 
            rocketPosX = 0; //for Bonus mission 2
            rocketPosY = 0; //for Bonus mission 2
            rocket.style.marginLeft = rocketPosX + 'px'; //for Bonus mission 2
            rocket.style.marginBottom = rocketPosY + 'px'; //for Bonus mission 2
    }

});
var unique = require('array-unique');

module.exports = {
  /*
  feature: find the root from blades's element
  parameter:
    array[integer,integer<optional>,integer<optional>] -> element of blade that driver1 use
    array[integer,integer<optional>,integer<optional>] -> element of blade that driver2 use
    <optional> array[integer,integer<optional>,integer<optional>] -> element of blade that driver3 use
  parameter rule
    0 -> fire
    1 -> water
    2 -> wind
    3 -> earth
    4 -> thunder
    5 -> ice
    6 -> light
    7 -> dark
  return:
    array[ [integer,integer,integer],[integer,integer,integer],..[] ]
  */
  cal: function(driver1, driver2, driver3){

    var err = "Please insert more 1 input(2-3)",
    parameter_num = arguments.length,
    fire = 0,
    water = 1,
    wind = 2,
    earth = 3,
    thunder = 4,
    ice = 5,
    light = 6,
    dark = 7;

    /*
    feture: in case that blade can chain from second step find the last
            posibility root
    */
    function findRootThird(element_number, pair_driver){

    }

    /*
    feature: find the root from blades in second combo
    parameter:
      integer -> number of the element that will pair with second parameter
      array -> other driver that want to pair
    call function: findRootThird

    return:
      array -> number of element that can chain
    */
    function findRootSecond(element_number, pair_driver1, pair_driver2){

      var next_posibility_combo = [];

      for(var i=0; i<pair_driver.length; i++){

        switch (pair_driver1[i]) {
          case fire:
            next_posibility_combo.push(fire, light);
            break;
          case water:
            next_posibility_combo.push(fire, ice);
            break;
        }

      }//end loop
      unique(next_posibility_combo);
      console.log("second pair: ", next_posibility_combo);

      /*
      if(next_posibility_combo.length != 0){
          findRootThird(next_posibility_combo, driver1);
      }
      */

    }//end func

    /*
    feaure:find root combo for double driver case
    call function: findRootSecond()
    */
    function doubleDriverBladeCombo(){

      for(var i=0; i<driver1.length;i++){
        //find driver 1 root
        switch(driver1[i]){
          case fire:
            findRootSecond(fire, driver2, driver3);
        }
      }//end for loop

    }//end func

    if(parameter_num <=1){
      return err;
    }
    else if(parameter_num >= 2){
      doubleDriverBladeCombo();
    }
    else{
      return err;
    }

  }//end object func

}//end module

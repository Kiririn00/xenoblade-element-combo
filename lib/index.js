var unique = require('array-unique');

module.exports = {
  /*
  feature: find the root from blades's element
  parameter:array[ integer,integer[optional],integer[optional] ]
  parameter rule
    0 <- fire
    1 <- water
    2 <- wind
    3 <- earth
    4 <- thunder
    5 <- ice
    6 <- light
    7 <- dark
    *9 <- dummy*
  return:
    array[ [integer,integer,integer],[integer,integer,integer],..[] ]
  */
  cal: function(raw_element){
    var err = "Please insert array 1-3",
    root_element,
    combo_route
    fire = 0,
    water = 1,
    wind = 2,
    earth = 3,
    thunder = 4,
    ice = 5,
    light = 6,
    dark = 7;

    function transferToEnglish(combo_route){

      var current_combo,
      translate_en = [];

      for(var i=0; i<combo_route.length;i++){

            switch (combo_route[i].step1) {
              case fire:
                combo_route[i].step1 = "fire";
                break;
              case water:
                combo_route[i].step1 = "water";
                break;
              case wind:
                combo_route[i].step1 = "wind";
                break;
              case earth:
                combo_route[i].step1 = "earth";
                break;
              case thunder:
                combo_route[i].step1 = "thunder";
                break;
              case ice:
                combo_route[i].step1 = "ice";
                break;
              case light:
                combo_route[i].step1 = "light";
                break;
              case dark:
                combo_route[i].step1 = "dark";
                break;

            }

            switch (combo_route[i].step2) {
              case fire:
                combo_route[i].step2 = "fire";
                break;
              case water:
                combo_route[i].step2 = "water";
                break;
              case wind:
                combo_route[i].step2 = "wind";
                break;
              case earth:
                combo_route[i].step2 = "earth";
                break;
              case thunder:
                combo_route[i].step2 = "thunder";
                break;
              case ice:
                combo_route[i].step2 = "ice";
                break;
              case light:
                combo_route[i].step2 = "light";
                break;
              case dark:
                combo_route[i].step2 = "dark";
                break;

            }

            switch (combo_route[i].step3) {
              case fire:
                combo_route[i].step3 = "fire";
                break;
              case water:
                combo_route[i].step3 = "water";
                break;
              case wind:
                combo_route[i].step3 = "wind";
                break;
              case earth:
                combo_route[i].step3 = "earth";
                break;
              case thunder:
                combo_route[i].step3 = "thunder";
                break;
              case ice:
                combo_route[i].step3 = "ice";
                break;
              case light:
                combo_route[i].step3 = "light";
                break;
              case dark:
                combo_route[i].step3 = "dark";
                break;

            }
      }//end loop
      console.log(combo_route);

    }//end func

    /*
    feature:
      make 3 set of driver's element
    parameter:
      arrayObject <-[{step1: integer, step2: integer, step3: integer}]
    return:
      arrayObject
    */
    function driverElement(combo_route){
      var driver1 = [9],
      driver2 = [9],
      driver3 = [9],
      current_combo,
      combo_check;


      driver1[0] = raw_element[0];
      driver2[0] = raw_element[1];
      driver3[0] = raw_element[2];

      for(var i=0; i<combo_route.length; i++){

        //pickup all value in array
        current_combo = Object.values(combo_route[i]);

        //combo 1 driver1 blank
        if( driver1.includes(current_combo[0]) == false ){
          driver1.push(current_combo[0]);
          //combo2 driver 2 blank
          if( driver2.includes(current_combo[1])== false ){
            driver2.push(current_combo[1]);
          }
          //combo2 driver2 full
          else if( driver2.includes(current_combo[1])== true ){

            //combo2 driver1 full
            if( driver1.includes(current_combo[1])== false ){
              driver1.push(current_combo[1]);
            }
          }
        }
        //combo 1 driver 1 full
        else if( driver1.includes(current_combo[0]) == true ){
          //combo 1 driver 2 blank
          if( driver2.includes(current_combo[0]) == false ){
            driver2.push(current_combo[0]);
          }

        }

      }
      console.log(driver1, driver2, driver3);

    }//end func

    /*
    feature:
      generate route from 1 element
    parameter
      integer
    return
      objects of 3 steps
    */
    function searchRoute(element){

      var route = {};

      switch (element) {
        case fire:
          route.step1 = fire;
          route.step2 = water;
          route.step3 = ice;
          break;
        case water:
          route.step1 = water;
          route.step2 = earth;
          route.step3 = wind;
          break;
        case earth:
          route.step1 = earth;
          route.step2 = fire;
          route.step3 = wind;
          break;
        case thunder:
          route.step1 = thunder;
          route.step2 = fire;
          route.step3 = wind;
          break;
        case wind:
          route.step1 = wind;
          route.step2 = ice;
          route.step3 = ice;
          break;
        case ice:
          route.step1 = ice;
          route.step2 = water;
          route.step3 = wind;
          break;
        case light:
          route.step1 = light;
          route.step2 = thunder;
          route.step3 = fire;
          break;
        case dark:
          route.step1 = dark;
          route.step2 = light;
          route.step3 = thunder;
          break;

      }//end switch case
      return route;
    }//end func

    /*
    feature:
      generate the complete route from root element for 3 raw_element
    parameter:
      array[integers] <- the number of the elements that we scope
    call:
      searchRoute()
    */
    function treeRouteCombo(root_element){

      //generate 3 objects for 3 drivers
      var combo_route = [];

      for(var i=0; i<root_element.length; i++){

        combo_route[i] = searchRoute(root_element[i]);

      }//end for loop

      return combo_route;

    }//end func

    /*
    feature:
      find extend element from default element in to core element
    parameter:
      array[integers] <- core elements
    call:
      treeRouteCombo()
    */
    function findExtendElement(core_element){

      var extend_element = [],
      root_element,
      root_combo;

      for(var i=0; i<core_element.length; i++){

        switch (core_element[i]) {
          case fire:
            extend_element.push(water, ice);
            break;
          case water:
            extend_element.push(earth, wind);
            break;
          case earth:
            extend_element.push(fire, wind);
            break;
          case thunder:
            extend_element.push(fire, wind, ice);
            break;
          case wind:
            extend_element.push(ice, ice);
            break;
          case ice:
            extend_element.push(water, wind);
            break;
          case light:
            extend_element.push(thunder, fire);
            break;
          case dark:
            extend_element.push(light, thunder);
            break;

        }//end switch case

      }//end for loop

      //console.log("core_element:", core_element, "\n", "extend_element:" ,extend_element);
      return extend_element
    }//end func

    /*
    feaure:find all posible element from blades's element
    call function: findExtendElement()
    */
    function defaultElement(){

      var core_element = [],
      extend_element;

      //generate default element
      for(var i=0; i<raw_element.length;i++){
        core_element.push(raw_element[i]);
      }//end for loop

      //require extend element
      extend_element = findExtendElement(core_element);

      //integrate 2 arrays
      root_element = core_element.concat(extend_element);

      //remove duplicate
      unique(root_element);

      return root_element;

    }//end func

    if(raw_element.length >3){
      return err;
    }
    else if(raw_element.length <= 3){
      //find all posibility element include input element from user
      root_element = defaultElement();
      console.log("root_element: ", root_element);

      //find all posibility combo route from root element
      combo_route = treeRouteCombo(root_element);
      //console.log("combo_route: \n", combo_route);

      //find all set of the driver's elements
      //driverElement(combo_route);

      transferToEnglish(combo_route);



    }
    else{
      return err;
    }

  }//end object func

}//end module

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
  return:
    array[ [integer,integer,integer],[integer,integer,integer],..[] ]
  */
  cal: function(raw_element){

    /*
    feature:
      make 3 set of driver's element
    parameter:
      objectArray <-[{step1: integer, step2: integer, step3: integer}]
    return:
      objectArray <-
                  [
                    {driver1:[integer,integer,integer]},
                    {driver2:[integer,integer,integer]},
                    {driver3:[integer,integer,integer]}
                  ]
    */
    function driverElement(combo_route){

    }

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

    if(raw_element.length >3){
      return err;
    }
    else if(raw_element.length <= 3){
      //find all posibility element include input element from user
      root_element = defaultElement();
      console.log("root_element: ", root_element);

      //find all posibility combo route from root element
      combo_route = treeRouteCombo(root_element);
      console.log("combo_route: \n", combo_route);

      //find all set of the driver's elements
      driverElement(combo_route);

    }
    else{
      return err;
    }

  }//end object func

}//end module

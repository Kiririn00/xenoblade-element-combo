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
  cal: function(driver){

    var err = "Please insert array 1-3",
    fire = 0,
    water = 1,
    wind = 2,
    earth = 3,
    thunder = 4,
    ice = 5,
    light = 6,
    dark = 7;

    /*
    feature: find extend element from default element in to core element
    parameter:
      array[integers] <- core elements
    */
    function findExtendElement(core_element){

      var extend_element = [],
      root_element;

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

      //integrate 2 arrays
      root_element = core_element.concat(extend_element);

      //remove duplicate
      unique(root_element);

      console.log("root_element: ", root_element);


    }//end func

    /*
    feaure:find all posible element from blades of the driver
    call function: findExtendElement()
    */
    function defaultElement(){

      var core_element = [];

      //generate default element
      for(var i=0; i<driver.length;i++){
        core_element.push(driver[i]);
      }//end for loop

      //require extend element
      findExtendElement(core_element);

    }//end func

    if(driver.length >3){
      return err;
    }
    else if(driver.length <= 3){
      defaultElement();
    }
    else{
      return err;
    }

  }//end object func

}//end module

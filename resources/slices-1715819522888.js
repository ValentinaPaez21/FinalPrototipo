(function(window, undefined) {
  var dictionary = {
    "s-2529a50d-5c6b-4ac0-bdfb-1de9af2badba mi-95b6a427-Slice_1": [ ["Slice 1@1x.png", "e745bd5f-edb0-4d7d-a8f3-68646e456458_1517424372.png"] ],
    "s-fce059cf-a258-4332-8433-7e6b75c0a24f mi-d5e3c2f0-Slice_1": [ ["Slice 1@1x.png", "d57de31d-359b-45e1-a67e-5a69ac17a0db_1517424372.png"] ],
    "s-0ecc89f5-0a7e-4f5a-a702-39f9003b887f mi-dc2e4324-Slice_1": [ ["Slice 1@1x.png", "73dbec07-32ff-4b51-a1da-40441069aaeb_1517424372.png"] ],
    "m-e3941925-a71f-491d-b9b7-7261e912fce3 Slice_1": [ ["Slice 1@1x.png", "33bac5c1-1a34-46d3-9baf-65672ee381a0_1517424372.png"] ]
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);
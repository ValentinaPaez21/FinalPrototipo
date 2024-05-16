(function(window, undefined) {
  var dictionary = {
    "2529a50d-5c6b-4ac0-bdfb-1de9af2badba": "Login",
    "fce059cf-a258-4332-8433-7e6b75c0a24f": "PaginaPrincipal",
    "c8dee116-d1f6-47c7-8e2e-1f28d5bc8454": "ActualizarDatos",
    "81f5589d-6d1f-4d14-81aa-10bb0d218557": "RegistrarBoveda",
    "d5916aa9-6fd9-4a89-bd0d-727a5ccd1283": "RegistroDifunto",
    "0ecc89f5-0a7e-4f5a-a702-39f9003b887f": "CrearUsuario",
    "4b9ef8b6-7341-45fc-8614-a864fb424ffd": "InicioAdmin",
    "cc4bd80e-9c2d-4ce3-baae-8a9f379c0800": "Administrativo",
    "f5e37af5-ed13-41e6-843d-d58beb079667": "InicioUsuarioFamiliarDifunto",
    "15d7c5a8-095e-4dcb-9fb8-5381f5151320": "RegistrarFamiliar",
    "195323c2-2ad6-4701-9ade-1f0dfc76d546": "TipoBoveda/Osario",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "3aa111f9-a661-46ba-9c42-d4b697b72ec3": "Master 2",
    "8eabc8cb-6117-425a-9c16-f30d74b80b75": "Group 3",
    "e3941925-a71f-491d-b9b7-7261e912fce3": "Master 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
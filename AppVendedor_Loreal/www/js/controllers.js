/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])





.factory('OtherFriends', ['$firebase','$firebaseArray', function (
                                                $firebase,
                                                $scope,
                                                $firebaseArray,
                                                $firebaseAuth,
                                                $firebaseObject
                                    ) {




    $scope.cliente={}

    $scope.user = { };



    var ref = new Firebase("https://appvendedorloreal.firebaseio.com/");

    ref.once("value",function(snapshot){
      //  console.log(snapshot.val())
    })







var cont = 0 ;
cont ++
   
   var novoCliente = function() {
       // var postsRef = ref.child("cadastros");
    //    var newPostRef = postsRef.push();

    //    newPostRef.set({
    //        author: "gracehop",
    //        title: "Announcing COBOL, a New Programming Language",
    //        time: cont
    //    });

    //    var cadastroID = newPostRef.key();

        //  setTimeout(function() {
        //    console.log(" Id do cadastro"+ cadastroID)
//
        //  }, 5000);

      return "cadastroID"
    };
  
  var salvoCliente = function(user) {

        $scope.cliente = user;

        return $scope.cliente
     }

  var novofimcliente = function(user) {

        console.log( "limpando cliente anterior")
        $scope.user = {}

    return  $scope.user
  }

        //  setTimeout(function() {
        //    console.log(" Id do cadastro"+ cadastroID)
//
        //  }, 5000);





  // we can also chain the two calls together
 // postsRef.push().set({
 //   author: "alanisawesome",
 //   title: "The Turing Machine"
 // });

 

      return {
        novo: function() {
                return novoCliente();
            },
        getcliente: function(idCliente) {
          // Simple index lookup
            return $scope.cliente;
            },
        getuser: function() {
          // Simple index lookup
            return $scope.user;
            },
        salvarcadastro: function(user) {
          // Simple index lookup
            return salvoCliente(user);
            },
        novofim: function(user) {
          // Simple index lookup
            return novofimcliente(user);
            }
      }
    }]) // fim do factory

.controller('AppCtrl', function(    $scope,
                                    $ionicModal,
                                    $ionicPopover, 
                                    $timeout,
                                    $firebaseArray,
                                    $firebaseAuth,
                                    $firebaseObject,
                                    OtherFriends
                                    ) {


        // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado AppCtrl' : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });

    $scope.criarcadastro = function() {
        console.log("chamei o cadastro ");
        setTimeout(function() {
                
               $scope.idCliente = OtherFriends.novo();  
              console.log(" Id do cadastro"+ $scope.idCliente)
            

               // $scope.data = $firebaseObject(refArray);
              //     $scope.data     = $firebaseArray(refArray);
              //  console.log($scope.data)

        }, 1000);

    }


    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

   var teste = $scope.idCliente

    $scope.incluir = function() {
         var refArray = new Firebase("https://appvendedorloreal.firebaseio.com/cadastros/");
       console.log(refArray )
        console.log("testando incluir itens ")
        // OtherFriends.atualizar($scope.idCliente);
            console.log($scope.idCliente);
         //   teste
         //   var postcliente = refArray.child();
         //   $scope.messages = $firebaseArray(ref);

       // $scope.cadastros = $firebaseArray(postcliente);
       //     $scope.messages.$add({
        //        text: "testando"
      //      });

            $scope.messages = $firebaseArray(refArray);
              // add new items to the array
              // the message is automatically added to our Firebase database!
             // $scope.addMessage = function() {
               // firebaseArray.$ref().child($scope.idCliente).set(newData);
                $scope.messages.$add($scope.idCliente).then({
                  text: "$scope.newMessageText"
                });
                console.log("aqui")
            //}
    }




    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('StartFormCtrl', function(    $scope,
                                    $ionicModal,
                                    $ionicPopover, 
                                    $timeout,
                                    $firebaseArray,
                                    $firebaseAuth,
                                    $firebaseObject,
                                    OtherFriends
                                    ) {


        // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado StartFormCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    $scope.cliente = OtherFriends.getcliente();

    $scope.user = OtherFriends.getuser();


    $scope.states = (' SP AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SE TO').split(' ').map(function(state) {
        return {abbrev: state};
    });


    $scope.countrys = (' Brazil Colombia Argentina').split(' ').map(function(country) {
        return {abbrev: country};
    });


   $scope.genders = (' Female Male Polygender ').split(' ').map(function(gender) {
        return {abbrev: gender};
    })


    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    //for (var i = 0; i < navIcons.length; i++) {
     //   navIcons.addEventListener('click', function() {
       //     this.classList.toggle('active');
      //  });
   // }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
      //  document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
       // document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
    //    var content = document.getElementsByTagName('ion-content');
     //   for (var i = 0; i < content.length; i++) {
     //       if (content[i].classList.contains('has-header')) {
     //           content[i].classList.toggle('has-header');
     //       }
    //    }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
     //   var content = document.getElementsByTagName('ion-content');
     //   for (var i = 0; i < content.length; i++) {
     //       if (!content[i].classList.contains('has-header')) {
     //           content[i].classList.toggle('has-header');
     //       }
     //   }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
      //  var fabs = document.getElementsByClassName('button-fab');
     //   if (fabs.length && fabs.length > 1) {
     //       fabs[0].remove();
      //  }
    };
})
.controller('LoginCtrl', function(   $scope,
                                     $timeout, 
                                     $stateParams, 
                                     ionicMaterialInk,
                                     $firebaseAuth,
                                     $firebaseObject

                                     ) {
    
    $scope.loginEmail = function() {
           
        var email="lorealpocadmin@gmail.com"
        var senha="teste123"
        firebase.auth()
          .signInWithEmailAndPassword(email,senha)
              .then(function(result) {
              console.log("Successfully user uid:", $scope.signedInUser);
               console.log(" Atendente"+ $scope.email);
              },
                function(error) {
                    console.log(" Deu ruim "+ error);
                //alert('Please note","Authentication Error'+ error);
              //  console.log(error);
              }
        );
    }// fim da funcao login 

    $scope.loginCreate = function() {

        var email="lorealpocadmin@gmail.com"
        var senha="teste123"
        firebase.auth()
        .createUserWithEmailAndPassword(email,senha)
          .then(function(result) {
            console.log(result);

            },
              function(error) {
                  alert('Erro na criacao '+ error); 
              console.log(error);
              }
          );          

    }

  //  $scope.loginEmail();


    $scope.logout = function() {
    console.log("fazendo logout");
      firebase.auth()
      .signOut().then(function() {
        // Sign-out successful.
        var limpar={};
        $scope.email=null;
        //$scope.usuario= new limpar;
        }, function(error) {
            alert(' Error'+ error);
            console.log(error);
      })
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log("Email: "+ user.email +"ID: " +user.uid );
        console.log(user.displayName);
        signedEmail=user.email;
        signedInUser=user;
        roomId=user.uid;

      

        

        console.log("sala "+roomId);
      }
      else{
        console.log("deslogado");
        //$scope.signedInUser= null;
        roomId=null;
        signedInUser=null;


        
      }
    });
} // logout funcao 

    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();



})

.controller('FriendsCtrl', function(    $scope, 
                                        $stateParams, 
                                        $timeout, 
                                        ionicMaterialInk, 
                                        ionicMaterialMotion,
                                        $firebaseArray,
                                        $firebaseAuth,
                                        $firebaseObject

                                        ) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function(    $scope, 
                                        $stateParams, 
                                        $timeout, 
                                        ionicMaterialMotion, 
                                        ionicMaterialInk,
                                        $firebaseArray,
                                        $firebaseAuth,
                                        $firebaseObject
                                        ) {
    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado ProfileCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();




})

.controller('ActivityCtrl', function(       $scope, 
                                            $stateParams, 
                                            $timeout, 
                                            ionicMaterialMotion, 
                                            ionicMaterialInk,
                                            $firebaseArray,
                                            $firebaseAuth,
                                            $firebaseObject
                                    ) {
    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado ActivityCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function(        $scope, 
                                            $stateParams, 
                                            $timeout, 
                                            ionicMaterialInk, 
                                            ionicMaterialMotion,
                                            $firebaseArray,
                                            $firebaseAuth,
                                            $firebaseObject
                                    ) {

    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado GalleryCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})
.controller('ResultCtrl', function(    $scope, 
                                        $stateParams, 
                                        $timeout, 
                                        ionicMaterialMotion, 
                                        ionicMaterialInk,
                                        $firebaseArray,
                                        $firebaseAuth,
                                        $firebaseObject,
                                        OtherFriends
                                        ) {
    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado ResultCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });

    $scope.skinTypesL = [{
        typeskin: "NORMAL",
        url: 'img/normal.png',
        value: 'NORMAL',
        text: 'It is balanced in oiliness, has delicate texture and pores are less evident'
      },{
        typeskin: "DRY",
        url: 'img/dry.png',
        value: 'DRY',
        text: "It hasn't brightness, is rough and the pores are almost invisible"
      }
    ];
        $scope.skinTypesR = [{
        typeskin: "OILY",
        url: 'img/oily.png',
        value: 'OILY',
        text: "It has excess oil, shiny appearance and dilated pores"
      },{
        typeskin: "COMBINATION",
        url: 'img/combination.png',
        value: 'COMBINATION',
        text: "It has more intense oiliness on the forehead and nose. On the cheeks it is dry or normal."
        }
    ];

    $scope.skinColorsL = [{
        typecolor: "FAIR",
        url: 'img/01_skin-fair@3x.png',
        value: 'FAIR',
        text:"Light Beige Almost White"
      },
        {
        typecolor: "MEDIUM LIGHT",
        url: 'img/03_skin-medium@3x.png',
        value: 'MEDIUM LIGHT',
        text: "Dark Beige Yellowish "
      },
        {
        typecolor: "TAN",
        url: 'img/06_skin-tan@3x.png',
        value: 'TAN',
        text:" Brown"
        }
    ];
    $scope.skinColorsR = [
    {
        typecolor: "LIGHT",
        url: 'img/02-skin-light@3x.png',
        value: 'LIGHT',
        text: "Pink beige"
      },
      {
        typecolor: "MEDIUM TAN",
        url: 'img/img-skin-m-tan@3x.png',
        value: 'MEDIUM TAN',
        text: "Light Brown"
        },
        {
        typecolor: "DEEP",
        url: 'img/06_skin-deep@3x.png',
        value: 'DEEP',
        text: "Dark Brown Almost Black"
        }

    ];

    $scope.skinShapesL = [{
        typeshape: "CIRCLE",
        url: 'img/01-face-circle@3x.png',
        value: 'CIRCLE',
        text: "It does not have very defined angles and It is wider in cheekbones"
      },
      {
        typeshape: "SQUARE",
        url: 'img/03_face_shape-square@3x.png',
        value: 'SQUARE',
        text: "The cheeks, chin and forehead have the same width"
      }
    ];
    $scope.skinShapesR = [{
        typeshape: "OVAL",
        url: 'img/02_face-oval@3x.png',
        value: 'OVAL',
        text: "It has soft corners and the chin is a little thin"
      },{
        typeshape: "HEART",
        url: 'img/04_face-shape-heart@3x.png',
        value: 'HEART',
        text: "The forehead is wider than the jaw and chin"
        }
    ];


 $scope.typeEyesL = [      {
        typeeye: "UPTURNED",
        url: 'img/01_eye-upturned@3x.png',
        value: 'UPTURNED',
        text: "The outer corner is slightly raised, resembling an almond"
      },
      {
        typeeye: "DOWNTURNED",
        url: 'img/03_eye-downturned@3x.png',
        value: 'DOWNTURNED',
        text: "Has a soft drop on the outer corners"
      },
      {
        typeeye: "CLOSESET",
        url: 'img/05_eye-close-set@3x.png',
        value: 'CLOSESET',
        text: "The space between the eyes is smaller than the width of the eye itself"
      },{
        typeeye: "PRODUTING",
        url: 'img/07_eyes-protuding@3x.png',
        value: 'PRODUTING',
        text: "It has the appearance of projected eyelids and larger eyes"
      }
    ];

     $scope.typeEyesR = [{
        typeeye: "HOODED",
        url: 'img/02-eyes-hooded@3x.png',
        value: 'HOODED',
        text: "When open the moving eyelid does not appear"
      },{
        typeeye: "WIDESET",
        url: 'img/04_eyes-wide-set@3x.png',
        value: 'WIDESET',
        text: "The space between the eyes is bigger than the width of the eye itself"
        }
        ,{
        typeeye: "DEEPESET",
        url: 'img/06_eye-deep-set@3x.png',
        value: 'DEEPESET',
        text: "They appear to be in the face creating the impression that the forehead bone is large"
        },
        {
        typeeye: "MONOLID",
        url: 'img/08_eye-monolid@3x.png',
        value: 'MONOLID',
        text: "Their surfaces are flat and do not have much volume"
        }
    ];


 $scope.typeLipsL = [{
        typelip: "SMALL",
        url: 'img/01_lips-mouth-small@3x.png',
        value: 'SMALL',
        text: "The mouth and lips small and discreet"
      },{
        typelip: "WIDE",
        url: 'img/03_lips-mouth-wide@3x.png',
        value: 'WIDE',
        text: "The mouth are wide, regardless of mouth size"
        },{
        typelip: "HEAVY UPPER",
        url: 'img/05_lips-mouth-heavy-upper@3x.png',
        value: 'HEAVY UPPER',
        text: "The upper lip is thicker than the bottom one"
      }
    ];
 $scope.typeLipsR = [      {
        typelip: "FULL",
        url: 'img/04_lips-mouth-full@3x.png',
        value: 'FULL',
        text: "Lips are very thick and protruding"
      },
      {
        typelip: "THIN",
        url: 'img/02_lips-mouth-thin@3x.png',
        value: 'THIN',
        text: "Lips are strait, regardless of mouth size"
      },
      {
        typelip: "HEAVY LOWER",
        url: 'img/06_lips-mouth-heavy-lower@3x.png',
        value: 'HEAVY LOWER',
        text: "The bottom lip is thicker than the upper one"
      },
    ];
   $scope.salvar = function() {

            $scope.cliente = OtherFriends.salvarcadastro($scope.user);

    }

    $scope.cliente = OtherFriends.getcliente();

    $scope.user = OtherFriends.getuser();

    $scope.novoCadastro= function(){
         $scope.user = OtherFriends.novofim();
       //  $scope.cliente = OtherFriends.getcliente();

        var refArray = new Firebase("https://appvendedorloreal.firebaseio.com/cadastros/");
            $scope.messages = $firebaseArray(refArray);
              // add new items to the array
              // the message is automatically added to our Firebase database!
             // $scope.addMessage = function() {
               // firebaseArray.$ref().child($scope.idCliente).set(newData);
            $scope.messages.$add($scope.cliente);
    }






    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();




})

;

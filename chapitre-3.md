### Il est temps de faire de la gym :

![angular](./img/angularjs1.png) 

Tous les exercices utilisent `Bootstrap` pour la partie CSS.
 [URL](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css)
 
> Allez on y est!

Créer un dossier différent pour chaque exercice, dans le même projet.

##Exo1 => Application Note :
* Objectif:
	* Créer un module et un contrôleur
	* Utiliser des directives Angular
	* Mettre en oeuvre le Data-binding
	
* Fonctionnalités:
	* Saisir une note (message textuel) et afficher le nombre de caractères restants (le message est limité à 100 caractères saisis)
	* Enregistrer (côté client en JS)
	* Effacer le contenu
	* Afficher les messages d'info (sauvegarde, modification…)
	* Gérer les changements de classe CSS sur l'affichage d'info
* Application/Contrôleurs:

Application |  Contrôlleur|
------------| ------------- | 
`NoteApp` (app/noteApp.js)| `NoteController` (app/noteController.js)  | 
| `MessageNote` : variable stockant le contenant de la note   | 
|`info` :message affiché (modifié,sauvegardé...) |
|`save()` :Met à jour le modèle (messageNote) |
|`clear()`:vide messageNote |
|`count()` :calcule le nombre de caractères restants (sur 100) |

* Vue:
	* Directive utilisées:
		* `ng-app`
		* `ng-change`
		* `ng-controller`
		* `ng-click`
		* `ng-model`
		* `ng-bind`
		* `ng-class`
		
	* INTERFACE :
	
	![interface](./img/interface.png)
	
> Libre à vous de l'amélioré hein!
	
   * Logique applicative / comportement de l'interface
   	* sur saisie dans la zone `messageNote` (textarea), le nombre de caractères restants est indiqué
		* la zone info apparaît et indique “note modifiée” dès que `messageNote` est modifié, avec le style `alert-warning`
		*  Le style de la zone info passe à `alert-danger` si le nombre de caractères restant est inférieur à 10
	* Sur enregistrement (à condition que le message ne soit pas vide) :
		* la zone `info` affiche “note sauvegardée” et sont style passe à `alert-success`
	* Sur effacement (à condition que le message ne soit pas vide) :
		* la zone `info` disparaît
	
##Exo2 => Choix de services:
 * Objectifs

	* Créer un module et un contrôleur
	* Utiliser des directives Angular
	* Mettre en oeuvre le Data-binding
- Fonctionnalités

	* Sélectionner/désélectionner des services.
	* Calculer le montant dû.
	* Afficher le nombre de services sélectionnés.
- Application/Contrôleurs:

Application |  Contrôlleur|
------------| ------------- | 
`ServicesApp` (app/servicesApp.js)| `ServicesController` (app/servicesController.js)  | 
| `services` : Tableau des services disponibles défini en JSON| 
|`total()`: Calcul le total des services actifs|
|`toggleActive()`:Change le statut d'un service |

`Services` : à intégrer dans le contrôleur

	[
    {
        name: 'Web Development',
        price: 300,
        active:true
    },{
        name: 'Design',
        price: 400,
        active:false
    },{
        name: 'Integration',
        price: 250,
        active:false
    },{
        name: 'Formation',
        price: 220,
        active:false
    }
	]
Ressources : [fichers zone fr](./fr.zip)

##- Vue :

* Directives utilisées:
	* ng-app
	* ng-controller
	* ng-repeat
	* ng-class
	* ng-pluralize
	* Expressions {{expression}}
Filtre : currency
* INTERFACE :

![interface2](./img/interface2.png)

* Logique applicative / comportement de l'interface

	* Le service `Web development` est sélectionné par défaut
	* La classe css d'un service sélectionné est égale à `active`
	* La sélection/dé-sélection met à jour l'affichage du nombre de services sélectionnés, ainsi que le `total`
 
##Exo4 = Calculatrice le retour !
* Objectifs:
	* Créer un service (moteur de la calculatrice)
	* Utiliser un service (Injection de dépendance)
	* Créer des directives  (hiihihihihihi)
* Focntionnalités:
	* faire des calculs simples
	* Mériser un résultat
	* Eteindre /allumer calculatrice
	
	
* Vue:

![calculatrice](./img/calculatrice.png)

* Consigne de réalisation:

Directives:

 * Créer une directive permettant de créer un bouton de calculatrice (placer ensuite les valeurs possibles prises par les boutons dans un tableau, initialisé dans le code :
 
 		exemple de tableau utilisé
 		this.ops=[
            {value:'('},
            {value:')'},
            {value:'M'},
            {value:' '},
            {value:'RM'},
            {value:'Off',cssClass:"btn-danger",title:"Eteindre la calculatrice"},
            {value:'\n'},
            {value:"⇤"},
            {value:"CE"},
            {value:"C"},
            {value:" "},
            {value:"±"},
            {value:"√x"},
            {value:"\n"},
            {value:7},
            {value:8},
            {value:9},
            {value:' '},
            {value:'/'},
            {value:'%'},
            {value:'\n'},
            {value:4},
            {value:5},
            {value:6},
            {value:' '},
            {value:'*'},
            {value:'1/x'},
            {value:'\n'},
            {value:1},
            {value:2},
            {value:3},
            {value:' '},
            {value:'-'},
            {value:'\n'},
            {value:0,cssClass:"colspan btn-default"},
            {value:'.',cssClass:"btn-default"},
            {value:' '},
            {value:'+'},
            {value:'=',cssClass:"rowspan btn-success",title:"Calculer ([ENTREE]) !"}
            ];

 * créer la partie calcul dans un service ,et injecter ce service dans le contrôleur.
 
####voilà pour vous!


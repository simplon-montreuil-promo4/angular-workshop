![angular.js](./img/angularjs.png)
___
#### Rappel :
Ne partez pas avec l’idée que jQuery peut faire X, Y ou Z, et qu’il suffira d’ajouter AngularJS au dessus pour les modèles et les contrôleurs. C’est très tentant lorsque l’on débute, c’est pour cela que je recommande aux nouveaux développeurs AngularJS de ne pas du tout utiliser jQuery, au moins le temps de se familiariser avec « l’Angular Way ».

J’ai vu beaucoup de développeurs créer des solutions très élaborées de 150 ou 200 lignes avec des plugins jQuery, qu’ils collent dans AngularJS avec des callbacks et des $apply, ce qui donne quelque chose de très compliqué et d’illisible, mais qui fonctionne ! Le problème est que dans la majorité des cas, ce plugin jQuery aurait pu être réécrit en AngularJS en quelques lignes, ce qui au passage, rendrait le code bien plus compréhensible.

Ce qu’il faut retenir de tout ça : Pensez d’abord en AngularJS ; si vous ne trouvez pas, demandez à la communauté ; et si après tout cela vous n’avez pas trouvé de solution simple, alors vous pouvez utiliser jQuery. Mais ne comptez pas trop sur jQuery ou vous ne maitriserez jamais AngularJS.

#### On pense architecture avec Angular.js :
Tout d’abord ayez en tête que les « single-page applications » sont avant tout des applications. Ce ne sont pas des pages web. Donc vous devez penser comme un développeur server-side en plus de penser comme un développeur client-side. Vous devez trouver comment diviser votre application en composants individuels, extensibles, et testables.

Comment fait-on cela ? Comment penser en AngularJS ? Voici les concepts principaux, comparés avec jQuery.

+ La "view" est la reine :
	* avec `jQuery`:
	
	``` 
	<ul class="main-menu">
    <li class="active">
        <a href="#/home">Home</a>
    </li>
    <li>
        <a href="#/menu1">Menu 1</a>
        <ul>
            <li><a href="#/sm1">Submenu 1</a>
            </li>
            <li><a href="#/sm2">Submenu 2</a>
            </li>
            <li><a href="#/sm3">Submenu 3</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="#/home">Menu 2</a>
    </li>
</ul>
```
le js:

```
$('.main-menu').dropdownMenu();
```
Quand on regarde juste la view, il n’est pas évident de voir que quelque chose ici est dynamique. Pour de petites applications, ça va, mais pour des applications de taille conséquente, c’est un peu plus déroutant et difficile à maintenir.

Avec `Angular.js` en revanche, la view est le « record » officiel. Notre ul ressemblerait plus à quelque chose comme ça :

```
	<ul class="main-menu" dropdown-menu>
    ...
	</ul>
```
+ Les deux morceaux de code font la même chose, mais dans la version AngularJS, n’importe qui peut comprendre en un coup d’oeil ce qui se passe dans le template. Quand un nouveau développeur rejoint l’équipe, il peut comprendre instantanément qu’il y a une directive dropdown-menu. Il n’a pas besoin de le deviner, ou de fouiller dans le code. La view nous renseigne sur ce qu’il doit se passer. Bien plus propre.

+ Les développeurs qui découvrent AngularJS posent souvent la question suivante : Comment faire pour trouver tous les éléments similaires pour leur attribuer une directive ? Le développeur est en général très étonné quand on lui dit qu’on ne peut pas. On ne fait pas ainsi, car cela reviendrait à faire du mi-jQuery, mi-AngularJS. Le problème est que le développeur essaie de faire du jQuery dans un contexte AngularJS. La view est le « record » officiel. En dehors d’une directive (plus d’explications un peu plus loin), vous ne devez jamais changer le DOM. D’ailleurs les directives sont appliquées dans la view, ce qui rend les choses bien claires.
# DATA BINDING :
C’est de loin la plus géniale des fonctionnalités d’AngularJS, elle permet d’ailleurs de nous épargner pas mal de manipulations de DOM dont je parlais un peu plus haut. AngularJS mettra à jour la view automatiquement, sans que vous ayez à intervenir ! En jQuery, on répond à des événements, et à partir de là on met à jour le contenu. Par exemple :
* `jQuery`:

```
$.ajax({
    url: '/myEndpoint.json',
    success: function(data, status) {
        $('ul#log').append('&lt;li&gt;Data Received!&lt;/li&gt;');
    }
});
```
Pour une simple "view" comme celle-là:

```
	<ul class="messages" id="log">
	</ul>
```
Déjà on mélange tout, mais plus important, on doit mettre à jour manuellement l’élément du DOM. Comment tester la logique en faisant abstraction du DOM ? Et que ce passe-t’il si on veut changer le HTML ?

Ce n’est pas très élégant, mais en AngularJS, on peut faire ceci :

```
 <div class="messages">
    <div class="alert" ng-repeat="entry in log">
        {{ entry.msg }}
    </div>
 </div>
```
# L’injection de dépendances (dependency injection ou DI):

Pour nous aider dans la « separation of concerns », il y a l’injection de dépendances. Si vous avez de l’expérience dans un language server-side (Java, PHP…), vous êtes sûrement déjà familier avec le concept, mais si vous êtes plutôt habitué à jQuery ce concept peut paraitre superflu. Mais ça ne l’est pas.

Globalement, l’injection de dépendances signifie que vous pouvez déclarer un composant un peu n’importe où, puis depuis n’importe quel composant en demander une instance. Vous n’avez pas à vous occuper de l’ordre des déclarations ou de l’emplacement des fichiers. L’intérêt n’est pas forcement visible au premier abord, mais voici juste un exemple : Les tests.

Disons que dans notre application, on utilise un service qui gère le stockage des données côté serveur via une API REST, ou selon le contexte, utilise le localStorage. Quand on lance nos tests sur notre contrôleur, on ne veut pas communiquer avec le serveur, on teste le contrôleur après tout. On peut juste ajouter un service « mock » du même nom que le composant, et l’injecteur s’assurera que le contrôleur utilise bien le faux ; notre contrôleur n’a pas à connaitre le différence.

A propos de tests…
## Le développement guidé par les tests (TDD) – Toujours :+1:
De tous les plugins jQuery que vous avez vu, utilisé, ou même écrit, combien d’entre eux étaient accompagnés de tests ? Très peu, car jQuery ne se prête pas vraiment à cette pratique, mais AngularJS oui.

En jQuery, le seul moyen de faire des tests est de créer un composant à part, avec une page de démo sur laquelle les tests pourront faire de la manipulation du DOM. Puis on devrait créer un composant séparément que l’on intègrerait dans notre application. Vraiment pas très pratique ! Donc la plupart du temps, en jQuery, on développe de manière itérative et non en TDD.

Mais puisqu’en AngularJS on a la « separation of concerns », on peut développer de manière itérative et en TDD ! Par exemple, disons que nous voulions une directive qui nous indiquerait quelle est notre route actuelle. On peut déclarer n’importe quoi dans notre view, par exemple :

`<a href="/hello" when-active>Hello</a>`
Puis, on peut écrire notre test :

	
	it('should add "active" when the route changes', inject(function() {
    var elm = $compile('<a href="/hello" when-active>Hello</a>')($scope);
 
    $location.path('/not-matching');
    expect(elm.hasClass('active')).toBeFalsey();
 
    $location.path('/hello');
    expect(elm.hasClass('active')).toBeTruthy();
	}));
	
# Conclusion :
N’utilisez pas jQuery. Ne l’importez même pas. Ça vous ralentirait. Et quand vous rencontrez un problème que vous pensez pouvoir régler avec jQuery, avant d’utiliser $, essayez plutôt de trouver une solution en Angular. Et si vous ne trouvez pas, demandez ! 19 fois sur 20, la meilleure manière de faire n’a pas besoin de jQuery.
Maintenant vous savez un peu plus de chose.
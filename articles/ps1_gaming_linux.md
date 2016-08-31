Aujourd'hui, j'ai eu envie de faire tourner quelques jeux **PS1** sur Linux.
J'avais déjà eu l'occasion de le faire depuis ma PSP, qui pouvait faire
fonctionner les jeux PS1 nativement, mais jamais depuis un ordinateur, en particulier sur Linux.

Un des émulateurs PSX les plus populaires et les plus performants sur Linux
est [PCSX Reloaded](http://pcsxr.codeplex.com/), qui est une amélioration de PCSX. Il est libre (license GPL),
écrit en C depuis 2000, puis repris en 2009.

Téléchargement
--------------
Sur [le site officiel de PCSX](http://pcsxr.codeplex.com/), ou bien directement sur [la logithèque Ubuntu](http://apt.ubuntu.com/p/pcsxr).

Lancement et configuration
--------------------------
Au lancement de PCSX, on arrive sur une interface très simple :
<img src='/image/ps1_gaming_linux/pcsx.png'>
Page d'accueil de PCSX

### Configuration du bios
TODO

### Lancement d'un jeu
Choisissez un fichier : `.bin`, `.img`, `.mdf`, `.iso` :
<img src='/image/ps1_gaming_linux/iso.png'>
Sélection d'un jeu

<img src='/image/ps1_gaming_linux/crash.png'>

## Configuration
La fenêtre de la configuration graphique est bien fournie :
<img src='/image/ps1_gaming_linux/config.png'>

Gestion des sauvegardes
-----------------------
PCSX possède un gestionnaire de sauvegardes très intéressant. Il permet
de gérer une infinité de cartes mémoires, et de manipuler les sauvegardes
de jeu présentes dessus. Chaque carte mémoire est représentée par un fichier
`.mcd`, qui est stocké par défaut dans `~/.pcsx/memcards`.

<img src='/image/ps1_gaming_linux/saves.png'>

Ayant déjà joué à deux jeux PS1 sur PSP, je possède de sauvegardes de jeu
au format `.vmp`, propre à la PSP. Il est possible de convertir les fichiers
`.vmp` vers des fichiers `.mcd`, avec un outil comme [Memory Converter](http://www.aldostools.org/memcards.html).

J'ai donc pu récupérer ma sauvegarde de **Crash Bandicoot 3** à 105% réalisée quelques années avant sur PSP :
<img src='/image/ps1_gaming_linux/105.png'>

Bilan
-----

Points positifs
- Gestionnaire de sauvegarde
- Beaucoup de jeux compatibles
- Très rapide et léger en ressources
- Compatible avec une manette

Points négatifs
- Choix de la résolution pas assez souple
- Quand un jeu est lancé, il est impossible de changer les paramètres
(résolution, contrôles, ...)

Bonus
-----
Niveau réalisé sur l'émulateur :
<iframe width="560" height="315" src="https://www.youtube.com/embed/CWPQp3rXmZ8" frameborder="0" allowfullscreen></iframe>

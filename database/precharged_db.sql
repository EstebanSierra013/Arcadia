USE arcadiaDB;

INSERT INTO rol (rol_name) VALUE("Administrateur");
INSERT INTO rol (rol_name) VALUE("Employé");
INSERT INTO rol (rol_name) VALUE("Vétérinaire");

INSERT INTO image (image_path) VALUES("/assets/img/animals/poisson-clown.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/poisson-ange.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/tortue.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/poulpe.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/etoile-mer.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/singe-capucin.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/gorille.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/chimpanze.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/orang-outan.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/lemur.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/girafe.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/zebre.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/elephant.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/toucan.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/loriquet.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/quetzal.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/colibri.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/cacatoes.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/dragon-barbu.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/serpent.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/scorpion.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/gecko.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/fennec.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/papillon-monarque.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/morpho.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/papillon-verre.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/papillon-tigre.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/papillon-hirondelle.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/crabe.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/hippocampe.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/poisson-ange-mangrove.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/anguille.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/poisson-archer.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/panthere.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/tigre.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/leopard.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/lion.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/jaguar.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/panda-geant.jpg");
INSERT INTO image (image_path) VALUES("/assets/img/animals/panda-roux.jpg");

INSERT INTO image (image_path) VALUES ("/assets/img/habitats/recif-enchante.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/forêt-singes.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/serenite-savane.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/voliere.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/vivarium-soleil-dore.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/jardin-papillons.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/mangrove-mysterieuse.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/enclos-felins.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/habitats/foret-bambou.jpg");

INSERT INTO image (image_path) VALUES ("/assets/img/services/safari.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/services/spectacle-oiseaux.jpg");
INSERT INTO image (image_path) VALUES ("/assets/img/services/restaurant.jpg"); 


INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Poisson-clown","Poissons",1,1);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Poisson-ange","Poissons",1,2);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Tortue marine","Chéloniens",1,3);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Poulpe","Invertébrés",1,4);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Étoile de mer","Invertébrés",1,5);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Singe capucin","Primates",2,6);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Gorille des plaines occidentales","Primates",2,7);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Chimpanzé commun","Primates",2,8);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Orang-outan de Bornéo","Primates",2,9);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Lémur catta","Primates",2,10);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Girafe réticulée","Giraffidés",3,11);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Zèbre de Grévy","Equidés",3,12);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Éléphant d'Afrique","Elephantidés",3,13);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Toucan toco","Oiseaux",4,14);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Loriquet arc-en-ciel","Oiseaux",4,15);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Quetzal resplendissant","Oiseaux",4,16);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Colibri rubis-émeraude","Oiseaux",4,17);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Cacatoès à huppe jaune","Oiseaux",4,18);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Dragon barbu","Reptiles",5,19);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Serpent à sonnette","Reptiles",5,20);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Scorpion empereur","Arachnidés",5,21);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Gecko léopard","Reptiles",5,22);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Fennec","Canidés",5,23);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Papillon monarque","Lépidoptères",6,24);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Morpho bleu","Lépidoptères",6,25);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Papillon de verre","Lépidoptères",6,26);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Papillon tigre","Lépidoptères",6,27);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Papillon à queue d'hirondelle","Lépidoptères",6,28);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Crabe violoniste","Crustacés",7,29);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Hippocampe", "Poissons",7,30);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Poisson-ange de mangrove", "Poissons",7,31);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Anguille jardinière","Invertébrés",7,32);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Poisson archer","Poissons",7,33);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Panthère noire","Félins",8,34);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Tigre du Bengale","Félins",8,35);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Léopard","Félins",8,36);
INSERT INTO animal (name,species,habitat_id,image_id) VALUES ("Lion","Félins",8,37);


INSERT INTO habitat (name,description,image_id) VALUES ("Récif Enchanté","Plongez dans le monde magique et coloré des récifs coralliens. Cet aquarium recrée un spectacle vibrant où des poissons aux couleurs éclatantes nagent parmi les coraux et les anémones.",41);
INSERT INTO habitat (name,description,image_id) VALUES ("Forêt des Singes","Plongez dans un habitat luxuriant et dynamique où les primates jouent et explorent. Écoutez les sons de la jungle et observez ces animaux fascinants interagir.",42);
INSERT INTO habitat (name,description,image_id) VALUES ("Sérénité de la Savane","Immergez-vous dans la vaste savane africaine, où de grands mammifères cohabitent dans des paysages ouverts. Observez les lions se reposer sous les acacias tandis que les éléphants cherchent de l'eau.",43);
INSERT INTO habitat (name,description,image_id) VALUES ("Volière de l'Arc-en-ciel","Entrez dans un monde de plumes colorées et de mélodies joyeuses. Cette volière abrite des oiseaux tropicaux du monde entier, où vous pouvez admirer leur beauté et leurs comportements uniques.",44);
INSERT INTO habitat (name,description,image_id) VALUES ("Vivarium du Soleil Doré","Explorez le mystérieux monde du désert, où la vie a trouvé des moyens ingénieux de survivre. Ce vivarium révèle la beauté et les adaptations uniques des animaux du désert.",45);
INSERT INTO habitat (name,description,image_id) VALUES ("Jardin des Papillons","Laissez-vous captiver par la grâce et les couleurs des papillons dans ce jardin enchanteur. Le jardin des papillons est un havre de paix rempli de fleurs et de plantes, où les papillons dansent avec délicatesse.",46);
INSERT INTO habitat (name,description,image_id) VALUES ("Mangrove Mystérieuse","Explorez le réseau complexe de racines de la mangrove, où la vie marine s'adapte aux eaux saumâtres. Cet aquarium offre un aperçu d'un écosystème unique et crucial pour la biodiversité côtière.",47);
INSERT INTO habitat (name,description,image_id) VALUES ("Enclos des Grands Félins", "Vivez la majesté et la puissance des grands félins dans cet enclos spécial. Ici, les prédateurs les plus impressionnants du monde rôdent parmi des paysages naturels et une végétation dense.",48);

INSERT INTO service (name,description,schedule,image_id,duration) VALUES (
"Safari en Train Écologique",
"Montez à bord du train écologique et profitez d'un tour panoramique à travers tout le zoo. Cette promenade en train vous permet de découvrir les différents habitats et d'apprendre sur les animaux de manière ludique et éducative.",
"10:00",
50,
60);

INSERT INTO service (name,description,schedule,image_id,duration) VALUES (
"Spectacle des Oiseaux Arc-en-ciel",
"Admirez la beauté et l'intelligence des oiseaux lors de notre spectacle d'oiseaux. Les dresseurs présenteront les habitants colorés de la Volière de l'Arc-en-ciel et réaliseront des démonstrations de vol et de comportement incroyables.",
"16:00",
51,
30);

INSERT INTO service (name,description,image_id) VALUES (
"Restaurant 'Le Repas Sauvage'",
"Profitez d'une expérience culinaire unique dans notre restaurant à thème 'Le Repas Sauvage'. Nous offrons une variété de plats inspirés de la cuisine internationale, utilisant des ingrédients frais et locaux.",
52);

INSERT INTO user (username,password,name,lastname,rol_id) VALUES (
"josesanchez@hotmail.com",
"$2a$10$dxn6SlQlqWzPHvrQpYVLXed2RA3LqLhuiPZV5W1SqpBPETI187uVO",
"José",
"Sanchez",
1
);

INSERT INTO veterinary_report (date, status,food, quantity, created_by, animal_id) VALUES (
"14/05/24",
5,
"carne",
10,
"josesanchez@hotmail.com",
3
);
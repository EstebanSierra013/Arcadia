USE arcadiaDB;

INSERT INTO rol (rol_name) VALUE("Administrateur");
INSERT INTO rol (rol_name) VALUE("Employé");
INSERT INTO rol (rol_name) VALUE("Vétérinaire");

INSERT INTO image (image_path) VALUES("/animals/poisson-clown");
INSERT INTO image (image_path) VALUES("/animals/poisson-ange");
INSERT INTO image (image_path) VALUES("/animals/tortue");
INSERT INTO image (image_path) VALUES("/animals/poulpe");
INSERT INTO image (image_path) VALUES("/animals/etoile-mer");
INSERT INTO image (image_path) VALUES("/animals/singe-capucin");
INSERT INTO image (image_path) VALUES("/animals/gorille");
INSERT INTO image (image_path) VALUES("/animals/chimpanze");
INSERT INTO image (image_path) VALUES("/animals/orang-outan");
INSERT INTO image (image_path) VALUES("/animals/lemur-catta");
INSERT INTO image (image_path) VALUES("/animals/girafe");
INSERT INTO image (image_path) VALUES("/animals/zebre");
INSERT INTO image (image_path) VALUES("/animals/elephant");
INSERT INTO image (image_path) VALUES("/animals/toucan");
INSERT INTO image (image_path) VALUES("/animals/loriquet");
INSERT INTO image (image_path) VALUES("/animals/quetzal");
INSERT INTO image (image_path) VALUES("/animals/colibri");
INSERT INTO image (image_path) VALUES("/animals/cacatoes");
INSERT INTO image (image_path) VALUES("/animals/dragon-barbu");
INSERT INTO image (image_path) VALUES("/animals/serpent");
INSERT INTO image (image_path) VALUES("/animals/scorpio");
INSERT INTO image (image_path) VALUES("/animals/gecko");
INSERT INTO image (image_path) VALUES("/animals/fennec");
INSERT INTO image (image_path) VALUES("/animals/papillon-monarque");
INSERT INTO image (image_path) VALUES("/animals/morpho");
INSERT INTO image (image_path) VALUES("/animals/papillon-verre");
INSERT INTO image (image_path) VALUES("/animals/papillon-tigre");
INSERT INTO image (image_path) VALUES("/animals/papillon-hirondelle");
INSERT INTO image (image_path) VALUES("/animals/crabe");
INSERT INTO image (image_path) VALUES("/animals/hippocampe");
INSERT INTO image (image_path) VALUES("/animals/poisson-ange-mangrove");
INSERT INTO image (image_path) VALUES("/animals/anguille");
INSERT INTO image (image_path) VALUES("/animals/poisson-archer");
INSERT INTO image (image_path) VALUES("/animals/panthere");
INSERT INTO image (image_path) VALUES("/animals/tigre");
INSERT INTO image (image_path) VALUES("/animals/leopard");
INSERT INTO image (image_path) VALUES("/animals/lion");
INSERT INTO image (image_path) VALUES("/animals/jaguar");
INSERT INTO image (image_path) VALUES("/animals/panda-geant");
INSERT INTO image (image_path) VALUES("/animals/panda-roux");

INSERT INTO image (image_path) VALUES ("/habitats/recif-enchante");
INSERT INTO image (image_path) VALUES ("/habitats/forêt-singes");
INSERT INTO image (image_path) VALUES ("/habitats/serenite-savane");
INSERT INTO image (image_path) VALUES ("/habitats/voliere");
INSERT INTO image (image_path) VALUES ("/habitats/vivarium-soleil-dore");
INSERT INTO image (image_path) VALUES ("/habitats/jardin-papillons");
INSERT INTO image (image_path) VALUES ("/habitats/mangrove-mysterieuse");
INSERT INTO image (image_path) VALUES ("/habitats/enclos-felins");
INSERT INTO image (image_path) VALUES ("/habitats/foret-bambou");

INSERT INTO image (image_path) VALUES ("/services/safari");
INSERT INTO image (image_path) VALUES ("/services/spectacle-oiseaux");
INSERT INTO image (image_path) VALUES ("/services/restaurant"); 


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

INSERT INTO user (username,password,name,lastname,rol) VALUES (
"josesanchez@",
"",
"José",
"Sanchez",
1
);

INSERT INTO user (username,password,name,lastname,rol) VALUES (
"juansanchez@",
"",
"Juan",
"Sanchez",
2
);

INSERT INTO user (username,password,name,lastname,rol) VALUES (
"andressanchez@",
"",
"Andres",
"Sanchez",
3
);
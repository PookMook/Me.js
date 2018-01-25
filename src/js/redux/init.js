const init = {
  "en" :{
    "meta":{
      "name": "Arthur Juchereau",
      "contact": "arthur.juchereau@gmail.com",
      "location": "Gatineau, Qc, Canada",
      "summary": "LAMP and MERN (express/react/nodejs) full stack developer.\n Interested in custom web software.\n Ex-CTO of Launchleap, Head Programmer at the Canadian Research Chair on Digital Textualities",
      "languages": "Fluent in English and French, German functional",
      "links":[
        {"title":"@ArthurBienSur","url":"https://twitter.com/ArthurBienSur"},
        {"title":"Linkedin","url":"https://ca.linkedin.com/in/arthurjuchereau"},
        {"title":"Github","url":"https://github.com/PookMook"}
      ]
    },
    "data":{
      "Resume":{
        "Skillsets": [
          {
            "title": "Frontend",
            "subskills": [
              "HTML5",
              "CSS2/3/4",
              "Javascript(ES5,ES6,ES7)",
              "React/Redux/Router"
            ],
            "cardType": "Skillset"
          },
          {
            "title": "Backend",
            "subskills": [
              "Dedicated/Virtual private server administration",
              "Linux/Apache/MYSQL/PHP stack",
              "Mongo/Express/Node stack",
              "SQL and NoSQL databases",
              "Erlang/Elixir/Phoenix",
              "deployment (Git, Docker)",
              "SSL certification"
            ],
            "cardType": "Skillset"
          },
          {
            "title": "Computer Hardware",
            "subskills": [
              "Network Architecture",
              "router/switch administration",
              "computer part selection",
              "assembly and maintenance",
              "electronic repair"
            ],
            "cardType": "Skillset"
          },
          {
            "title":"Data science",
            "subskills":["R","SAS","Python","Hadoop","SQL/NoSQL databases"],
            "cardType": "Skillset"
          },
          {
            "title": "Audio/Video/Photo",
            "subskills": [
              "video transcoding",
              "DSLR operation",
              "audio/video/photo captation",
              "adobe suit (Lightroom, illustrator, photoshop)",
              "Studio preparation",
              "lighting configuration and shooting"
            ],
            "cardType": "Skillset"
          }
        ],
        "Experiences": [
          {
            "date": "2014, Present",
            "title": "Tech Ninja, head Developer at Canadian Research Chair of Digital Textualities",
            "description": "Development of custom platform, specifically for academics.\nThis include development in PHP/SQL/HTML5 and Node.js/Sails.js/React/Redux and Datafiles like XML/JSON/YaML",
            "city": "Montreal, Qc, Canada",
            "cardType": "Experience"
          },
          {
            "date": "2014, 2017",
            "title": "CTO at Launchleap",
            "description": "Development from the initial proof of concept of an interactive survey/crowdsourcing app to a fully fledged platform usable by our clients on their own.\nAgile project management, Training of staff\nFull stack development in PHP/MySQL/HTML5\nSysAdmin LAMP + security hardening",
            "city": "Montreal, Qc, Canada",
            "cardType": "Experience"
          },
          {
            "date": "2013,2014",
            "title": "Webmaster at Les Publications du Quartier Libre",
            "description": "Web Administration of the Student newspaper of the University of Montreal",
            "city": "Montreal, Qc, Canada",
            "cardType": "Experience"
          },
          {
            "date": "2011 (6 months)",
            "title": "Technician at Canal+",
            "description": "Technician for the Canal+ French TV station\nCabling, Guest preparation",
            "city": "Paris, France",
            "cardType": "Experience"
          },
          {
            "date": "2010, 2011",
            "title": "GameShow demonstrator, Sony Computer Entertainment Europe",
            "description": "Setup and logistic of Playstation European gameshow booths.\nGamer feedback gathering and reporting.\nWorked mostly with Playsation Move and Gran Turismo 5",
            "city": "Paris, France",
            "cardType": "Experience"
          }
        ],
        "Education": [
          {
            "date": "2013, 2014",
            "title": "Art, Creation and Technologies",
            "institution": "University of Montreal",
            "city": "Montreal, Qc, Canada",
            "level": "Post-Graduate Diploma",
            "cardType": "Education"
          },
          {
            "date": "2010, 2013",
            "title": "Network Architecture and Web development",
            "institution": "Université Pierre et Marie Curie (Paris VI)",
            "city": "Paris, France",
            "level": "Master",
            "cardType": "Education"
          },
          {
            "date": "2008, 2010",
            "title": "Web Development",
            "institution": "SUPINFO,  The International Institute of Information Technology",
            "city": "Paris, France",
            "level": "Bachelor",
            "cardType": "Education"
          }
        ],
      },
      "Portfolio":{
          "Past Projects": [
              {
                  "title": "LaunchLeap",
                  "description": "Crowdsourcing platform. Basically Kickstarter but replacing money by feedback. Coded this from scratch. Made using PHP, HTML5/JQuery",
                  "scope": "CTO of Launchleap",
                  "version": "production",
                  "link": "https://launchleap.com",
                  "cardType": "Project"
              },
              {
                  "title": "YamlEditor",
                  "description": "Quick YAML editor for the publication Sens-Public, enable non-tech to enrich article using YAML. Made using react, JS-Yaml",
                  "scope": "Canadian Research Chair on Digital Textualities",
                  "version": "production",
                  "link": "https://github.com/EcrituresNumeriques/chaineEditorialeSP/releases",
                  "cardType": "Project"
              },
              {
                  "title": "lightium",
                  "description": "Lightweight CMS for scholars to easily publish to the web, fetch information from their zotero repository and build their corpus automatically.  Made using PHP, HTML5, SQLite, Docker",
                  "scope": "Canadian Research Chair on Digital Textualities",
                  "version": "production",
                  "examples": [
                      "http://ecrituresnumeriques.ca/fr/",
                      "http://technes.org/fr/",
                      "http://biocultura.ca/fr/"
                  ],
                  "link": "https://github.com/EcrituresNumeriques/Lightium",
                  "cardType": "Project"
              }
          ],
        "Active projects": [
          {
            "title": "Stylo.js",
            "description": "Edition platform for scholars. Provide an editor to help academics write in WYSIWYM (What you see is what you mean) loaded with metadata and bibliography inlined within the text. Then deal with the multiple output needed for academic papers, memoir or thesis",
            "scope": "Canadian Research Chair on Digital Textualities",
            "version": "v.0.3.0",
            "link": "https://github.com/EcrituresNumeriques/stylo",
            "cardType": "Project"
          },
          {
            "title": "Anthologia Palatina",
            "description": "Platform to enable scholars to translate greek manuscripts and then align translations. Made using Sails.js, react, Docker",
            "scope": "Canadian Research Chair on Digital Textualities",
            "version": "v0.9.0",
            "link": "http://anthologia.ecrituresnumeriques.ca/",
            "cardType": "Project"
          },
          {
            "title": "openRaid",
            "description": "Online Raid/party management for World of Warcraft",
            "scope": "Personal",
            "version": "v.0.6.0",
            "link": "https://github.com/PookMook/openRaid",
            "cardType": "Project"
          },
          {
            "title": "Me.js",
            "description": "Didn't had a Resume up to date, didn't found a simple generator online, made one. Made using react, react-router, Redux, github-pages",
            "scope": "Personal project",
            "version": "v.0.1.0",
            "link": "https://github.com/PookMook/Me.js",
            "cardType": "Project"
          },
          {
            "title": "Genkidama Player",
            "description": "Serverless video distribution platform using IPFS to serve files, VideoContext to enhance and make videos interactive. Made using IPFS, VideoContext, Electron",
            "scope": "Personal project",
            "version": "Exploration of technology",
            "link": "https://github.com/PookMook/Genkidama",
            "cardType": "Project"
          }
        ],
      },
      "Misc":{
        "Achievements": [
          {
            "title": "You've Made it",
            "description": "Successfully made it through the Canadian immigration system.",
            "required": "Canadian permanent resident",
            "cardType": "Achievement"
          },
          {
            "title": "The Light of Dawn",
            "description": "Raid leaded the way in clearing The Burning Crusade and Wrath of the Lich King",
            "required": "Spend many nights raiding and managing people in World of Warcraft",
            "cardType": "Achievement"
          },
          {
            "title": "Mod it up",
            "description": "Modelisator for the Wiwiland Morrowind Moding community.",
            "required": "Owning a licence of 3DSMax 4",
            "cardType": "Achievement"
          },
          {
            "title": "Eyjafjallajökull",
            "description": "Helped replant a forest in Iceland, lived through the permanent night and day",
            "required": "Spend 5 months in Iceland",
            "cardType": "Achievement"
          },
          {
            "title": "EuroTrotter",
            "description": "User of the Interrail unlimited train ticket.",
            "required": "Visit more than 30 european capitals",
            "cardType": "Achievement"
          }
        ],
        "Hobbies": [
          {
            "title": "Sports & Outdoors",
            "description": "Used to play soccer on a competitive level, after an injury, I had to drop out and play in a casual way. I still play Soccer (back midfield), ride my bike, hike around the parks in Canada and wander in cities.",
            "cardType": "Hobby"
          },
          {
            "title": "Gaming",
            "description": "I like testing the gaming mechanics of different genres and platforms. I've found the competitive part of sports in E-sports, used to play quake3 then CounterStrike, warcraft III and finished my intense gaming with World of Warcraft. Nowadays, i enjoy playing from time to time and test out new mechanics. I have been a huge fan of board games as they give a very good entrance for friends and family who are usually non-gamer people to gather and share a great time (when the dice RNG does like me)",
            "cardType": "Hobby"
          },
          {
            "title": "Tinkering",
            "description": "I always liked doing stuff with my hands. It started with legos, then shifted to computers later on. Nowadays, I am exploring the wonderful world of 3D printing and Virtual Reality. I am also a \"superbacker\" on kickstater, for the better or worse.",
            "cardType": "Hobby"
          },
          {
            "title": "Photo/Video",
            "description": "A cheap Canon 600D for a birthday, then the Nikon D700 from my parents, hooked me into photography. I now own a Canon 6D. Maybe now's time for an upgrade! #GearAquisitionSyndrome. I use my DSLR to shoot concerts, landscape and cities. I also was filming concert as my day job at Canal+ and still do from times to time when friends need a videographer that knows how to record sound. (some of my pictures : http://bit.ly/2u53Dro )",
            "cardType": "Hobby"
          }
        ],
      }
    }
  },
  "fr" :{
    "meta":{
      "name": "Arthur Juchereau",
      "contact": "arthur.juchereau@gmail.com",
      "location": "Gatineau, Qc, Canada",
      "summary": "Dévoloppeur full-stack LAMP et MERN (express/react/nodejs).\n Intéressé par les plateformes web personnalisées.\n Ancien CTO de Launchleap, développeur principal de la Chaire de Recherche du Canada sur les Écritures Numériques",
      "languages": "Bilingue Français/Anglais, Allemand fonctionnel",
      "links":[
        {"title":"@ArthurBienSur","url":"https://twitter.com/ArthurBienSur"},
        {"title":"Linkedin","url":"https://ca.linkedin.com/in/arthurjuchereau"},
        {"title":"Github","url":"https://github.com/PookMook"}
      ]
    },
    "data":{
      "CV":{
        "Compétences": [
          {
            "title": "Frontend",
            "subskills": [
              "HTML5",
              "React/Redux/Router",
              "Javascript(ES5,ES6,ES7)",
              "Svelte/sapper",
              "CSS2/3/4",
              "JQuery",
            ],
            "cardType": "Skillset"
          },
          {
            "title": "Backend",
            "subskills": [
              "Administration de serveur Dédié/virtuel",
              "Linux/Apache/MYSQL/PHP stack",
              "Mongo/Express/Node stack",
              "Bases de données SQL et NoSQL",
              "Erlang/Elixir/Phoenix",
              "Déploiement continue (Git, Docker)",
              "certificationSSL"
            ],
            "cardType": "Skillset"
          },
          {
            "title": "Matériel informatique",
            "subskills": [
              "Architecture réseau",
              "Administration de routeurs/switchs",
              "Selection de pièces informatiques",
              "Assemblage et maintenance",
              "Réparation"
            ],
            "cardType": "Skillset"
          },
          {
            "title":"Traitement des données",
            "subskills":["R","SAS","Python","Hadoop","bases de données SQL/NoSQL"],
            "cardType": "Skillset"
          },
          {
            "title": "Audio/Video/Photo",
            "subskills": [
              "transcodage video",
              "camera reflex et sans-mirroir",
              "captation audio/video/photo",
              "suite adobe (Lightroom, illustrator, photoshop)",
              "Studio preparation",
              "lighting configuration and shooting"
            ],
            "cardType": "Skillset"
          }
        ],
        "Expériences": [
          {
            "date": "2014, actuel",
            "title": "Tech Ninja, Développeur principal pour la chaire de recherche du Canada sur les Écritures Numériques",
            "description": "Développement de plateformes web spécialisées pour les chercheurs de la chaire.\nInclus des développement en PHP/MySQL/HTML5 ainsi que Node.js/Sails.js/React/Redux et gestion de données formattées en XML/JSON/YaML",
            "city": "Montréal, Qc, Canada",
            "cardType": "Experience"
          },
          {
            "date": "2014, 2017",
            "title": "Directeur de la technologie chez Launchleap",
            "description": "Développement de la preuve de concept initiale d'une application de sondage/socio-innovation jusqu'à une plateforme SaaS utilisable par nos clients.\nGestion de projet Agile et formation de l'équipe de développeurs\nDeveloppement full-stack en PHP/MySQL/HTML5\nSysAdmin LAMP + sécurisation serveur",
            "city": "Montréal, Qc, Canada",
            "cardType": "Experience"
          },
          {
            "date": "2013,2014",
            "title": "Webmestre des Publications du Quartier Libre",
            "description": "Administration de la plateforme de publication du journal étudiant de l'université de Montréal",
            "city": "Montréal, Qc, Canada",
            "cardType": "Experience"
          },
          {
            "date": "2011 (6 mois)",
            "title": "Technicien chez Canal+",
            "description": "Technicien pour la chaine de télévision française Canal+\nCablage et preparation des invités",
            "city": "Paris, France",
            "cardType": "Experience"
          },
          {
            "date": "2010, 2011",
            "title": "Démonstrateur de jeux, Sony Computer Entertainment Europe",
            "description": "logistique et installation des stands Playstation dans les salons de jeux-vidéo\nGamer feedback gathering and reporting.\nWorked mostly with Playsation Move and Gran Turismo 5",
            "city": "Paris, France",
            "cardType": "Experience"
          }
        ],
        "Education": [
          {
            "date": "2013, 2014",
            "title": "Art, création et technologies",
            "institution": "Université de Montréal",
            "city": "Montréal, Qc, Canada",
            "level": "D.E.S.S. (second cycle)",
            "cardType": "Education"
          },
          {
            "date": "2010, 2013",
            "title": "Architecture réseau et développement web",
            "institution": "Université Pierre et Marie Curie (Paris VI)",
            "city": "Paris, France",
            "level": "Maîtrise",
            "cardType": "Education"
          },
          {
            "date": "2008, 2010",
            "title": "Développement web",
            "institution": "SUPINFO,  The International Institute of Information Technology",
            "city": "Paris, France",
            "level": "Licence",
            "cardType": "Education"
          }
        ],
      },
      "Portfolio":{
        "Projets": [
          {
              "title": "LaunchLeap",
              "description": "Plateforme de Crowdsourcing. Sorte de Kickstarter mais pour le feedback plutôt que le financement. Mes responsabilités s'étalait sur l'ensemble du stack, de l'administration du serveur Linux, jusqu'au front end en HTML5/JQuery en passant par le backend en PHP/MySQL. Également responsable de la formation ",
              "cadre": "CTO of Launchleap",
              "version": "Production",
              "link": "https://launchleap.com",
              "cardType": "Project"
          },
          {
              "title": "YamlEditor",
              "description": "Editeur YAML pour le journal scientifique Sens-Public. Permet l'enrichissement des articles et s'assure que les fichiers YaML sont formatés correctement. Réalisé grâce à react/redux, JS-Yaml",
              "cadre": "Chaire de recherche du Canada sur les Écritures Numériques",
              "version": "Production",
              "link": "https://yaml.14159.ninja",
              "cardType": "Project"
          },
          {
              "title": "lightium",
              "description": "CMS destiné aux universitaires afin de les aider à publier pour le web. Moisonne depuis leurs repertoires Zotero et publie leur corpus automatically. Utilise PHP, HTML5, SQLite et Docker",
              "cadre": "Chaire de recherche du Canada sur les Écritures Numériques",
              "version": "Production",
              "exemples": [
                  "http://ecrituresnumeriques.ca/fr/",
                  "http://technes.org/fr/",
                  "http://biocultura.ca/fr/"
              ],
              "link": "https://github.com/EcrituresNumeriques/Lightium",
              "cardType": "Project"
          }
        ],
        "Projets en cours": [
          {
            "title": "Stylo.js",
            "description": "Plateforme d'édition pour les universitaires. Éditeur WYSIWYM (What you see is what you mean) avec intégration des meta-données et des références bibliographiques directement dans le texte. Support de multiple format de fichier en sortie afin de satisfaire les besoins des maîtrises, thèses et articles scientifiques.",
            "cadre": "Chaire de Recherche du Canada sur les Écritures Numériques",
            "version": "v.0.3.0",
            "link": "https://github.com/EcrituresNumeriques/stylo",
            "cardType": "Project"
          },
          {
            "title": "Anthologia Palatina",
            "description": "Plateforme de traduction de manuscripts grecs, avec alignement et méta-données. Utilise Sails.js, react, Docker.",
            "cadre": "Chaire de Recherche du Canada sur les Écritures Numériques",
            "version": "v0.9.0",
            "link": "http://anthologia.ecrituresnumeriques.ca/",
            "cardType": "Project"
          },
          {
            "title": "Me.js",
            "description": "Aprés avoir cherché un générateur de CV en ligne, j'ai décidé d'en faire un moi-même en utilisant React/Redux.",
            "cadre": "Projet personnel",
            "version": "v.0.3.0",
            "link": "https://github.com/PookMook/Me.js",
            "cardType": "Project"
          },
          {
            "title": "Genkidama Player",
            "description": "Plateforme de distribution video basée sur IPFS, VideoContext et electron.",
            "cadre": "Projet personnel",
            "version": "Exploration",
            "link": "https://github.com/PookMook/Genkidama",
            "cardType": "Project"
          },
          {
            "title": "openRaid",
            "description": "Gestion de groupe/raid pour le jeu en ligne World of Warcraft",
            "cadre": "Projet personnel",
            "version": "v.0.6.0",
            "link": "https://github.com/PookMook/openRaid",
            "cardType": "Project"
          },
        ],
      },
      "Misc":{
        "Achievements": [
          {
            "title": "Tu y es arrivé!",
            "description": "Réussir à passer au travers du système d'immigration Canadien avec succès",
            "required": "Résident permanent Canadien",
            "cardType": "Achievement"
          },
          {
            "title": "The Light of Dawn",
            "description": "Raid leaded the way in clearing The Burning Crusade and Wrath of the Lich King",
            "required": "Spend many nights raiding and managing people in World of Warcraft",
            "cardType": "Achievement"
          },
          {
            "title": "Mod it up",
            "description": "Modelisator for the Wiwiland Morrowind Moding community.",
            "required": "Owning a licence of 3DSMax 4",
            "cardType": "Achievement"
          },
          {
            "title": "Eyjafjallajökull",
            "description": "Helped replant a forest in Iceland, lived through the permanent night and day",
            "required": "Spend 5 months in Iceland",
            "cardType": "Achievement"
          },
          {
            "title": "EuroTrotter",
            "description": "User of the Interrail unlimited train ticket.",
            "required": "Visit more than 30 european capitals",
            "cardType": "Achievement"
          }
        ],
        "Hobbies": [
          {
            "title": "Sports & Outdoors",
            "description": "Used to play soccer on a competitive level, after an injury, I had to drop out and play in a casual way. I still play Soccer (back midfield), ride my bike, hike around the parks in Canada and wander in cities.",
            "cardType": "Hobby"
          },
          {
            "title": "Gaming",
            "description": "I like testing the gaming mechanics of different genres and platforms. I've found the competitive part of sports in E-sports, used to play quake3 then CounterStrike, warcraft III and finished my intense gaming with World of Warcraft. Nowadays, i enjoy playing from time to time and test out new mechanics. I have been a huge fan of board games as they give a very good entrance for friends and family who are usually non-gamer people to gather and share a great time (when the dice RNG does like me)",
            "cardType": "Hobby"
          },
          {
            "title": "Tinkering",
            "description": "I always liked doing stuff with my hands. It started with legos, then shifted to computers later on. Nowadays, I am exploring the wonderful world of 3D printing and Virtual Reality. I am also a \"superbacker\" on kickstater, for the better or worse.",
            "cardType": "Hobby"
          },
          {
            "title": "Photo/Video",
            "description": "A cheap Canon 600D for a birthday, then the Nikon D700 from my parents, hooked me into photography. I now own a Canon 6D. Maybe now's time for an upgrade! #GearAquisitionSyndrome. I use my DSLR to shoot concerts, landscape and cities. I also was filming concert as my day job at Canal+ and still do from times to time when friends need a videographer that knows how to record sound. (some of my pictures : http://bit.ly/2u53Dro )",
            "cardType": "Hobby"
          }
        ],
      }
    }
  }
};
export default init;

const initialState = {infos:[
  {
    lang:'en',
    name:'Arthur Juchereau',
    location:'Gatineau, Qc, Canada',
    summary:'LAMP and MERN (express/react/nodejs) full stack developper.\n Interested in custom web software to help advance research and expand the realm of possibilities.\n ex-CTO of Launchleap, Head Programmer at the Canadian Research Chair on Digital Textualities',
    languages:'Fluent in English and French, German functional',
    education:[
      {
        date:'2013, 2014',
        title:'Art, Creation and Technologies',
        institution:'University of Montreal',
        city:"Montreal, Qc, Canada",
        level:'Post-Graduate Diploma'
      },
      {
        date:'2010, 2013',
        title:'Network Architecture and Web development',
        institution:'Université Pierre et Marie Curie (Paris VI)',
        city:'Paris, France',
        level:'Master'
      },
      {
        date:'2008, 2010',
        title:'Web development',
        institution:'SUPINFO,  The International Institute of Information Technology',
        city:'Paris, France',
        level:'Bachelor'
      }
    ],
    experiences:[
      {
        date:'2014, Present',
        title:'Tech Ninja, head Developper at Canadian Research Chair of Digital Textualities',
        description:'Development of custom platform, specifically for academics.\nThis include development in PHP/SQL/HTML5 and Node.js/Sails.js/React/Redux and Datafiles like XML/JSON/YaML',
        city:'Montreal, Qc, Canada'
      },
      {
        date:'2014, 2017',
        title:'CTO at Launchleap',
        description:'Development from the initial proof of concept of an interactive survey/crowdsourcing app to a fully fledged platform usable by our clients on their own.\nAgile project management, Training of staff\nFull stack development in PHP/MySQL/HTML5\nSysAdmin LAMP + security hardening',
        city:'Montreal, Qc, Canada'
      },
      {
        date:'2013,2014',
        title:'Webmaster at Les Publications du Quartier Libre',
        description:'Web Administration of the Student newspapper of the University of Montreal',
        city:'Montreal, Qc, Canada'
      },
      {
        date:'2011 (6 months)',
        title:'Technician at Canal+',
        description:'Technican for the Canal+ french TV station\nCabling, Guest preparation',
        city:'Paris, France'
      },
      {
        date:'2010, 2011',
        title:'GameShow demonstrator, Sony Computer Entertainment Europe',
        description:'Setup and logistic of Playstation European gameshow booths.\nGamer feedback gathering and reporting.\nWorked mostly with Playsation Move and Gran Turismo 5',
        city:'Paris, France'
      },
    ],
    achievements:[
      {
        title:'The Light of Dawn',
        description:'Raid leaded the way in clearing The Burning Crusade and Wrath of the Lich King',
        required:'Spend many nights raiding and managing people in World of Warcraft'
      },
      {
        title:'You\'ve Made it',
        description:'Succesfully made it through the Canadian immigration system.',
        required:'Canadian permanent resident'
      },
      {
        title:'EuroTrotter',
        description:'User of the Interrail unlimited train ticket.',
        required:'Visit more than 30 european capitals'
      }
    ],
    skills:[
      {
        title:'Development',
        subskills:['Full Stack developer LAMP and MERN', 'SQL and NoSQL databases', 'HTML5', 'deployement (Git, Docker)', 'SSL certification']
      },
      {
        title:'Computer Hardware',
        subskills:['Network Architecture', 'router/switch administration', 'computer part selection', 'assembly and maintenance', 'electronic repair']
      },
      {
        title:'Audio/Video/Photo',
        subskills:['video transcoding','DSLR operation', 'audio/vidéo/photo captation', 'adobe suit (Lightroom, illustrator, photoshop)', 'Studio preparation', 'lighting configuration and shooting']
      }
    ],
    activeProject:[
      {
        title:"Anthologia Palatina",
        description:"Platform to enable scholars to translate greek manuscrits ans align those translations. Made using Sails.js, react, Docker",
        scope:"Canadian Research Chaire on Digital Textualities",
        version:"v0.9.0",
        link:"http://anthologia.ecrituresnumeriques.ca/"
      },
      {
        title:"Me",
        description:"Didn't had a Resume up to date, didn't found a simple generator online, made one. Made using react, react-router, Redux, github-pages",
        scope:"Personal project",
        version:"v.0.1.0",
        link:"https://github.com/PookMook/me"
      },
      {
        title:"Genkidama Player",
        description:"Serverless video distribution platform using IPFS to serve files, VideoContext to enhance and make videos interactive. Made using IPFS, VideoContext, Electron",
        scope:"Personal project",
        version:"Exploration of technology",
        link:"https://github.com/PookMook/Genkidama"
      },
      {
        title:"CityBuilder.js",
        description:"Graphics/network engine for inbrowser City Builder à la Sierra (caesar, pharaoh, etc). ServerSide in Elixir for super high availability and fault-tolerant microservices. Made using JS canvas, Elixir, WebSockets",
        scope:"Personal project",
        version:"Exploration of technology",
        link:"https://github.com/PookMook/CityBuilder.js"
      },
    ],
    portfolio:[
      {
        title:"LaunchLeap",
        description:"Crowdsourcing platform. Basically Kickstarter but replacing money by feedback. Coded this from scratch. Made using PHP, HTML5/JQuery",
        scope:"CTO of Launchleap",
        version:"production",
        link:"https://launchleap.com"
      },
      {
        title:"YamlEditor",
        description:"Quick YAML editor for the publication Sens-Public, enable non-tech to enrich article using YAML. Made using react, JS-Yaml",
        scope:"Canadian Research Chaire on Digital Textualities",
        version:"production",
        link:"https://github.com/EcrituresNumeriques/chaineEditorialeSP/releases"
      },
      {
        title:"lightium",
        description:"Lightweight CMS for scholars to easily publish to the web, fetch information from their zotero repository and build their corpus automatically.  Made using PHP, HTML5, SQLite, Docker",
        scope:"Canadian Research Chaire on Digital Textualities",
        version:"production",
        exemples:['http://ecrituresnumeriques.ca/fr/','http://technes.org/fr/','http://biocultura.ca/fr/'],
        link:"https://github.com/EcrituresNumeriques/Lightium"
      },
    ]
  }
]};

export function reducers(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'LOADJSON':
      return Object.assign({}, state, {infos:action.payload})
      break;
    case 'LOADINFO':
      console.log(action.payload);
      return Object.assign({}, state, {contact:decodeURIComponent(action.payload).substr(1)})
      break;
    default:
      return state
  }
}

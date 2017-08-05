const initialState = {infos:[
  {
    lang:'en',
    name:'Placeholder Name',
    location:'Placeholder Place',
    summary:'Placeholder Summary.\n Second line placeholder',
    languages:'Placeholder languages',
    education:[
      {
        date:'Placeholder data',
        title:'Placeholder Title',
        institution:'Placeholder institution',
        city:"Placeholder City",
        level:'Placeholder level'
      }
    ],
    experiences:[
      {
        date:'Placeholder Date',
        title:'Placeholder title',
        description:'Placeholder description.\nSecond line',
        city:'Placeholder City'
      }
    ],
    hobbies:[
      {
        title:'Placeholder category',
        description:'Placeholder description.'
      }
    ],
    achievements:[
      {
        title:'Placeholder Title',
        description:'Placeholder description.',
        required:'Placeholder requirement'
      }
    ],
    skills:[
      {
        title:'Placeholder skill',
        subskills:['Placeholder spec', 'Placeholder spec']
      }
    ],
    activeProject:[
      {
        title:"Placeholder project",
        description:"Placeholder description",
        scope:"Placeholder scope",
        version:"Placeholder version",
        link:"http://placeholder.com/"
      }
    ],
    portfolio:[
      {
        title:"Placeholder title",
        description:"Placeholder CTO",
        scope:"Placeholder position",
        version:"Placeholder version",
        link:"https://placeholder.com"
      }
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

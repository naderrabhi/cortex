import eaSport from '../assets/images/easport.png'
import aws from '../assets/images/aws.png'
import digitalOcean from '../assets/images/digital ocean.png'
import opstrace from '../assets/images/opstrace.png'
import cortexai from '../assets/images/cortexai.png'

export const taoDelegators = {
  id: 1,
  title: 'No Staking Fees',
  paragraph: 'Staking your TAO with Cortex Validator offers the maximum APR since the validator fee is 0% and the team is consistently focused on running the validator across all active subnets to ensure the highest possible APR for its delegators.',
  buttonText: 'Cortex Validator',
  buttonColor: '#030F1A'
}
export const ftNeuronHolders = {
  id: 1,
  title: 'Bitneuron Token Generation',
  paragraph: 'Cortex delegators will generate 20% of the token supply on a daily basis based on the amount of TAO staked. The more TAO you stake.',
  buttonText: 'Cortex Validator',
  buttonColor: '#030F1A'
}

export const bitneuronToken = {
  id: 1,
  title: 'Cortex.AI',
  firstParagraph: 'The first decentralized and incentivized advertising tool. Here, you can engage hundreds of influencers to drive traffic to your campaigns, revolutionizing how you reach your audience.',
  secondParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullat.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullat.',
  logo: cortexai,
}

export const cortextValidator = {
  id: 1,
  title: 'Cortex Validator',
  paragraph: 'In a move to enhance the value we offer to our delegators, we charge a 0% fee for staking. Additio nally, we are focusing on running our validator on all the active Bittensor subnets, aiming to provide the maximum APR for our delegators.',
  buttonText: 'Cortex Validator',
  buttonColor: '#030F1A'
}

export const cortextCluster = {
  id: 2,
  title: 'Cortex Cluster',
  paragraph: 'We have the capability to offer various benefits within the Cortex ecosystem to its owner, like free access to all platforms developed by Cortex and also boost the daily generation.',
  buttonText: 'Cortex Cluster',
  buttonColor: '#030F1A'
}

export const introImg = [
  {
    id: 1,
    img: aws,
    width: '10%',
  },
  {
    id: 2,
    img: digitalOcean,
    width: '10%',
  },
  {
    id: 3,
    img: opstrace,
    width: '10%',
  },
  {
    id: 4,
    img: eaSport,
    width: '6%',
  },
]

export const statsData = [
    { label: 'TAO Price:', value: '$0.785446', percent: '(0.72%)' },
    { label: 'Price 24H:', value: '$414.77', percent: '(2.84%)' },
    { label: 'MCap:', value: '$2.86m' },
];

export const statButtonData = [
    {
      id: 1,
      text: 'STAKE TAO',
      href: 'https://firsttensor.com/stake',
      color: 'var(--color-purple)',
      size: '12',
    },
    {
      id: 2,
      text: 'GET Cortex',
      href: 'https://firsttensor.com/connect',
      color: '',
      size: '12',
    },
  ];

export const calculateButtonData = [
    {
      id: 1,
      text: 'Calculate',
      function: 'calculate()',
      background: '',
      color: '',
    },
    {
      id: 2,
      text: 'Stake TAO',
      function: 'window.open("https://firsttensor.com/stake", "_blank");',
      background: 'var(--color-gray)',
      color: 'var(--color-blue)',
    },
    {
      id: 3,
      text: 'Get Bitneurons',
      function: 'window.open("https://firsttensor.com/connect", "_blank");',
      background: '',
      color: '',
    },
  ];

export const pagesLinks = [
    { text: 'Home', path: '/home' },
    { text: 'Ecosystem', path: '/ecosystem' },
    { text: 'Check Rewards', path: '/rewards' },
    { text: 'Staking Calculator', path: '/calculator' },
    { text: 'Cortex Docs', path: 'https://firsttensor.com/docs' },
  ];

export const ecosystemData = [
  {
    id: 1,
    title: "BrainTensor - Cortex API",
    paragraphs: [
      { a: "", p: "BrainTensor represents the people's AI tools factory, where all tools built using the Cortex API will be interconnected through Bitneuron tokens." },
      { a: "", p: "In other words, one token will empower the entire economy of multiple products. The more tools are built, the greater the utility of the Bitneuron token will become." },
      { a: "", p: "How it will work: The Cortex Validator will launch its API, called BrainTensor. Through this key, developers will be able to access the Bittensor network intelligence and build their tools." },
      { a: "", p: "Free Unlimited Access: Developers opting for this will need to integrate Bitneuron into their projects. To qualify, they must submit their product concept on the BrainTensor website, explaining how it will enhance the utility of the Bitneuron token. If the community votes in favor of the project, it will be granted complimentary API access." },
      { a: "", p: "Paid Access: In this model, Cortex will allocate 70% of the profits derived from selling BrainTensor API access to buy and burn Bitneuron Tokens." }
    ]
  },
  {
    id: 2,
    title: "BitAds - Incentivized & Decentralized Advertising with Bittensor",
    paragraphs: [
      { a: "", p: "Incentivized & Decentralized Advertising with Bittensor" },
      { a: "https://bitads.ai ", p: "Introduces a revolutionary approach to online advertising through a decentralized network built on Bittensor (Subnet 16). Aiming to disrupt the traditional advertising industry, BitAds offers a solution that significantly reduces costs for clients while incentivizing miners to promote and drive organic traffic to advertising campaigns." }
    ]
  },
  {
    id: 3,
    title: "FirstAds - Boost your marketing campaign",
    paragraphs: [
      { a: "https://firstads.ai ", p: "The first app built on top of the BitAds infrastructure, where you can boost your Brand and Sales with an Army of Influencers." }
    ]
  },
  {
    id: 4,
    title: "FirstStudio - 1st product",
    paragraphs: [
      { a: "https://firststudio.ai ", p: "Aims to become a revolutionary decentralized platform where creativity meets technology, enabling users to transform ideas into images, sounds, and videos through our Text-To-Media magic tools. This distinctive space not only allows the realization and sharing of imaginative creations but also provides our creators with avenues for monetization through the Bitneuron token reward mechanism." },
      { a: "", p: "Built on the Bittensor infrastructure, a decentralized neural network, FirstStudio.AI optimally utilizes the Cortex validator to offer these innovative AI tools at minimal costs. With an emphasis on quality and affordability, we are poised to accelerate the adoption of AI tools, marking a new era in artificial intelligence and creative expression." }
    ]
  },
  {
    id: 5,
    title: "BittensorStaking - The staking platform",
    paragraphs: [
      { a: "https://bittensorstaking.com ", p: "A friendly platform with validator statistics and TAO token management. Your personal toolkit to check out Validator stats, use the TAO staking calculator, and easily delegate or undelegate your TAO tokens to the Validator you prefer." }
    ]
  },
  {
    id: 6,
    title: "BittensorMining - The mining platform",
    paragraphs: [
      { a: "https://bittensormining.com ", p: "The place to go when you want to learn how to mine TAO on different subnetworks within the Bittensor ecosystem. Our website will offer practical information and step-by-step guides, helping you understand the process of TAO mining in a straightforward and approachable way. - Coming soon -" }
    ]
  }
];  
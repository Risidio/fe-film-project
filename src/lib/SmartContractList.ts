export const DUMMY_CONTRACTS = [
  {
    title: 'FilmRights',
    description: 'Manages ownership of IP, assigns revenue shares',
    type: 'ERC-721',
    functions: ['Assigns ownership', 'Records rights', 'Facilitates transfers'],
    keyFeatures: [
      'Manages ownership of film IP rights on the blockchain',
      'Provides licensing functionality',
      'Facilitates transfers of ownership',
    ],
    useCases: [
      'Independent filmmakers establishing transparent IP rights',
      'Streamlined licensing process for distributors',
      'Studios managing revenue shares among stakeholders',
    ],
    standards: ['ERC-721', 'ERC-1155'],
    chainSupport: ['Ethereum', 'Polygon'],
  },
  {
    title: 'Licensing',
    description: 'Automates film licensing and royalty payments',
    type: 'ERC-721',
    functions: ['Issues licenses', 'Enforces royalties on distribution'],
    keyFeatures: [
      'Automates licensing agreements through smart contracts',
      'Manages territorial rights and restrictions',
      'Enforces royalty payments based on usage reports',
    ],
    useCases: [
      'Film distribution across multiple territories',
      'Licensing content to streaming platforms with automated payments',
      'Sublicensing management with royalty tracking',
    ],
    standards: ['ERC-721'],
    chainSupport: ['Ethereum', 'Polygon'],
  },
  {
    title: 'RevenueSplit',
    description:
      'Automates revenue sharing among investors, creators, and stakeholders',
    type: 'ERC-20',
    functions: ['Distribution of revenue', 'Handles multiple revenue streams'],
    keyFeatures: [
      'Automates revenue distribution to multiple stakeholders',
      'Provides transparent accounting and distribution records',
      'Supports various revenue streams and payment schedules',
    ],
    useCases: [
      'Film production companies distributing profits to investors',
      'Digital content creator revenue sharing with collaborators',
      'Cross-border royalty distributions with minimal fees',
    ],
    standards: ['ERC-20'],
    chainSupport: ['Ethereum', 'Polygon'],
  },
  {
    title: 'Investment',
    description: 'Enables tokenised film investment and revenue sharing',
    type: 'ERC-1155',
    functions: [
      'Tracks contributions',
      'Issues film-backed tokens',
      'Automates investor payouts',
    ],
    keyFeatures: [
      'Tokenises film investment opportunities for fractional ownership',
      'Enables transparent tracking of investment allocations',
      'Automates return distributions based on revenue performance',
    ],
    useCases: [
      'Independent film funding through tokenised investments',
      'Fan-based funding for creator-driven projects',
      'Portfolio diversification for media investors',
    ],
    standards: ['ERC-1155'],
    chainSupport: ['Ethereum', 'Polygon'],
  },
  {
    title: 'StreamingPayouts',
    description: 'Enables tokenised film investment and revenue sharing',
    type: 'ERC-20',
    functions: ['Reads external streaming data', 'Executes micropayments'],
    keyFeatures: [
      'Connects to streaming platform APIs for usage data',
      'Processes micropayments based on per-view metrics',
      'Distributes revenue to multiple stakeholders in real-time',
      'Provides detailed analytics on streaming performance',
    ],
    useCases: [
      'Creator payments based on actual streaming metrics',
      'Real-time revenue splits for collaborative content',
      'Transparent reporting for stakeholders on content performance',
    ],
    standards: ['ERC-20'],
    chainSupport: ['Ethereum', 'Polygon'],
  },
];

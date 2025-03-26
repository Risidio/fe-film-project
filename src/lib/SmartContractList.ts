export const DUMMY_CONTRACTS = [
    {
      title: "FilmRights",
      description: "Manages ownership of IP, assigns revenue shares",
      type: "ERC-721",
      functions: [
        "Assigns ownership",
        "Records rights",
        "Facilitates transfers",
      ],
    },
    {
      title: "Licensing",
      description: "Automates film licensing and royalty payments",
      type: "ERC-721",
      functions: ["Issues licenses", "Enforces royalties on distribution"],
    },
    {
      title: "RevenueSplit",
      description:
        "Automates revenue sharing among investors, creators, and stakeholders",
      type: "ERC-20",
      functions: [
        "Distribution of revenue",
        "Handles multiple revenue streams",
      ],
    },
    {
      title: "Investment",
      description: "Enables tokenised film investment and revenue sharing",
      type: "ERC-1155",
      functions: [
        "Tracks contributions",
        "Issues film-backed tokens",
        "Automates investor payouts",
      ],
    },
    {
      title: "StreamingPayouts",
      description: "Enables tokenised film investment and revenue sharing",
      type: "ERC-20",
      functions: ["Reads external streaming data", "Executes micropayments"],
    },
  ];
const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Prison Ape Gang";
const description = "Prison Ape Gang is the first NFT collection of the Basel-based collective Pirate Labs and was created about 12 months ago as an experiment to better understand what NFTs are in the first place, how they work and how to make NFTs. Regardless of this experiment which became an important project for us, we strive for meaningfulness in our creation. To the love in all of us. The hope of a better world. And most of all, we strive for freedom and self-determination in our lives. We believe this is the only way to create the best possible version of our world, where even the poorest is doing well. That's why we decided to represent the Innocence Project with our collection and raise awareness for this foundation.";
const baseUri = "ipfs://QmXcpofcpEuszc1x4PNFJ9ymZnXrCVYCm8Mo16HFm1iQXv";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 550, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://prisonapegang.io/",
  creators: [
    {
      address: "0x478c017582Fb81Ad04312945c699C9e7F309B5f6",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Fur" },
      { name: "Extras" },
      { name: "Clothes" },
      { name: "Scarf" },
      { name: "Eyes" },
      { name: "Head" },
      { name: "Mouth" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1200,
  height: 1200,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  studio: "pirate-labs",
  artists: "Mio D. Basilea and jdthomson"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

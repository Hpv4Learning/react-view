export const listedTokens = [
  [
    `bitcoin`,
    `ethereum`,
    `tether`,
    `binancecoin`,
    `ripple`,
    `usd-coin`,
    `staked-ether`,
    `dogecoin`,
    `cardano`,
    `solana`,
  ],
];

export const joinedTokensAsUrl = listedTokens.flat().join(`%2C`);

export const defaultURL = `https://api.coingecko.com/api/v3`;

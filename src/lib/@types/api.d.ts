declare module 'api' {
  export interface IUser {
    users: {
      address: string;
      email: string;
    };
  }
  export interface IProduct {
    pk: number;
    description: string;
    image: string;
    name: string;
    address: string;
    owner: string;
    tokenId: string;
    tokenUri: string;
    transactionHash: string;
    cursor: string;
  }
}

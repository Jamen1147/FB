import config from 'config';

interface ExtendedConfig {
  db: {
    user: string;
    password: string;
    name: string;
  };
  server: {
    port: number;
  };
  jwt: {
    secret: string;
    expiresIn: string;
    issuer: string;
    refresh: {
      secret: string;
      expiresIn: string;
    };
  };
}

declare module 'config' {
  interface IConfig extends ExtendedConfig {}
}

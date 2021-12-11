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
}

declare module 'config' {
  interface IConfig extends ExtendedConfig {}
}

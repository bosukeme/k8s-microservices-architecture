export interface IConfig {
  port: number;
  nodeEnv: string;
}

export interface IAppError extends Error {
  status?: number;
}


export interface IHealthOption {
    timeout: number;
    host: string;
    port: number;
    path: string;
}
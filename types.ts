
export enum AppView {
  LOGIN = 'LOGIN',
  ADVANCED_SETTINGS = 'ADVANCED_SETTINGS',
  MAIN_MEETING = 'MAIN_MEETING',
  STANDBY_MAP = 'STANDBY_MAP',
  SETTINGS = 'SETTINGS',
  INTERCOM = 'INTERCOM'
}

export interface UserState {
  id: string;
  name: string;
  isOnline: boolean;
  lastUpdate: string;
}

export interface NetworkConfig {
  protocol: 'TCP' | 'UDP';
  latency: number;
  ip: string;
  port: string;
  node: string;
}

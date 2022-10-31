import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chillflix.app',
  appName: 'chillflix',
  webDir: 'out',
  bundledWebRuntime: false,
  server:{
    url: 'http://192.168.18.59:4001',
    cleartext: true
  }
};

export default config;

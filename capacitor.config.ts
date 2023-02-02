import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.imd.bob',
  appName: 'BOB',
  webDir: 'build',
  bundledWebRuntime: false,
	plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_notification_icon",
      iconColor: "#FF9D28",
      sound: "beep.wav",
			allowWhileIdle: true,
			foreground: true,
    },
  },
};

export default config;

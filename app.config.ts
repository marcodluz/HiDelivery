import "dotenv/config";

export default ({ config }: any) => {
  return {
    ...config,
    expo: {
      name: "HiDelivery",
      slug: "HiDelivery",
      version: "1.0.0",
      owner: "marcodluz",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true,
      },
      android: {
        package: "com.marcoluz.hidelivery",
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      extra: {
        googleApiKey: process.env.GOOGLE_API_KEY,
        eas: {
          projectId: "600a05a6-dec9-43ea-b6dc-1d8cd2747347",
        },
      },
      experiments: { tsconfigPaths: true },
    },
  };
};

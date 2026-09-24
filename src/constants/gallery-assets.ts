const imageKitUrlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT?.replace(
  /\/$/,
  ""
);

export const galleryAssetFiles = {
  2026: {
    awsCloudWorkshop: "aws-cloud-workshop.webp",
    cloudComputingSession: "cloud-computing-session.webp",
    studentBuilders: "student-builders.webp",
    awsCommunityMeetup: "aws-community-meetup.webp",
    technicalWorkshop: "technical-workshop.webp",
    builderCommunity: "builder-community.webp",
  },
  2025: {},
  2024: {},
  2023: {
    tenure1: {
      event1: {
        intro: "AWSX/Tenure 1/EVENT 1/1st Event (8).webp",
        images: [
          "AWSX/Tenure 1/EVENT 1/1st Event (1).webp",
          "AWSX/Tenure 1/EVENT 1/1st Event (2).webp",
          "AWSX/Tenure 1/EVENT 1/1st Event (3).webp",
          "AWSX/Tenure 1/EVENT 1/1st Event (4).webp",
          "AWSX/Tenure 1/EVENT 1/1st Event (5).webp",
          "AWSX/Tenure 1/EVENT 1/1st Event (6).webp",
          "AWSX/Tenure 1/EVENT 1/1st Event (7).webp",
          "AWSX/Tenure 1/EVENT 1/1st Event (8).webp",
        ],
      },
    },
  },
} as const;

function encodeImageKitPath(assetPath: string) {
  return assetPath.split("/").map(encodeURIComponent).join("/");
}

export function galleryImageUrl(
  year: number,
  fileName: string,
  fallbackUrl: string
) {
  if (!imageKitUrlEndpoint) {
    return fallbackUrl;
  }

  return `${imageKitUrlEndpoint}/gallery/${year}/${encodeImageKitPath(fileName)}`;
}

export function galleryAssetUrl(
  assetPath: string
) {
  if (!imageKitUrlEndpoint) {
    throw new Error(
      "VITE_IMAGEKIT_URL_ENDPOINT is required for gallery assets."
    );
  }

  return `${imageKitUrlEndpoint}/${encodeImageKitPath(assetPath)}`;
}
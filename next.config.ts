import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Nothing on this site ever renders an image wider than ~700px
    // (hero laptop maxes at 520px, project cards max at ~700px), so the
    // largest default breakpoints (1920/2048/3840) would only ever cause
    // over-fetching. Capping these keeps delivered image weight tied to
    // actual display size.
    deviceSizes: [384, 480, 640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [65, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

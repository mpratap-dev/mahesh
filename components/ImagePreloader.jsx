"use client";

import { useEffect } from "react";
import DESIGNS from "../constants/portfolio.json";

export default function ImagePreloader() {
  useEffect(() => {
    DESIGNS.forEach(({ image }) => {
      if (!image) return;
      const img = new window.Image();
      img.src = image;
      if (img.decode) {
        img.decode().catch(() => {
          // Ignore decode errors for slow network or unsupported formats
        });
      }
    });
  }, []);

  return null;
}

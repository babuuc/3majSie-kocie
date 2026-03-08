import { useEffect, useState } from 'react';

export default function CatImage({ apiImage, localImage, color, altText }) {
  const [src, setSrc] = useState(apiImage || localImage);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (apiImage) {
      setSrc(apiImage);
      setFailed(false);
    }
  }, [apiImage]);

  if (failed || !src) {
    return (
      <div
        className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundColor: color }}
      >
        🐱
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={altText}
      className="w-full h-full object-cover"
      loading="lazy"
      onError={() => {
        if (localImage && src !== localImage) {
          setSrc(localImage);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

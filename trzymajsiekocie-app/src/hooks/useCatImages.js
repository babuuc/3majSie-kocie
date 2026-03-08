import { useState, useEffect } from 'react';

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export default function useCatImages(count = 1) {
  const safeCount = Math.max(0, count);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(safeCount > 0);

  useEffect(() => {
    if (safeCount <= 0) return;

    let cancelled = false;

    const batchSize = 10;
    const requests = [];
    for (let i = 0; i < safeCount; i += batchSize) {
      const limit = Math.min(batchSize, safeCount - i);
      requests.push(
        fetch(`${API_URL}?limit=${limit}`)
          .then((res) => res.json())
          .then((data) => (Array.isArray(data) ? data.map((item) => item.url) : []))
      );
    }

    Promise.all(requests)
      .then((results) => {
        if (!cancelled) {
          setImages(results.flat());
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setImages([]);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [safeCount]);

  return { images, loading };
}

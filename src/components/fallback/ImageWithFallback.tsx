import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string; // optional custom fallback image
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  fallbackSrc = ERROR_IMG_SRC,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const { t } = useI18n();

  const handleError = () => setDidError(true);

  if (didError) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-100 text-center ${className ?? ''}`}
        style={{ width: style?.width || '100%', height: style?.height || '100%', ...style }}
      >
        <img
          src={fallbackSrc}
          alt={t('imageLoading')}
          {...rest}
          data-original-url={src}
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      {...rest}
    />
  );
}

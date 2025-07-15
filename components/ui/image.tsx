"use client";
import { useState } from "react";
import Image, { ImageProps as NextImageProps } from "next/image";
import { Skeleton } from "./skeleton";

export type ImageProps = NextImageProps & {
  skeletonClassName?: string;
  wrapperClassName?: string;
};

export function UiImage({
  className,
  skeletonClassName,
  wrapperClassName,
  ...props
}: ImageProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={wrapperClassName || className}
      style={{ position: "relative", display: "inline-block", width: props.width, height: props.height }}
    >
      {(loading || error) && (
        <Skeleton
          className={skeletonClassName}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />
      )}
      <Image
        {...props}
        className={className}
        onLoadingComplete={() => {
          setLoading(false);
        }}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        onLoad={() => {
          setLoading(true);
        }}
        style={{
          display: loading || error ? "none" : undefined,
          ...props.style,
        }}
      />
    </div>
  );
}

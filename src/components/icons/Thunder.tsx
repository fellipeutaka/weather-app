import { SVGAttributes } from "react";

export function Thunder(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M48.501 31.383c-.021 0-.04.006-.062.007a7.487 7.487 0 00-6.873-10.454c-1.461 0-2.82.425-3.973 1.15-1.559-3.79-5.282-6.459-9.633-6.459-5.753 0-10.417 4.664-10.417 10.417 0 .435.035.86.087 1.281-.03 0-.058-.004-.087-.004a6.984 6.984 0 100 13.969h30.958a4.953 4.953 0 100-9.907z"
        fill="#C2CEF2"
      />
      <path
        d="M30.138 44.364L28 51.04h2.948l-1.912 6.777L36 48.251h-3.595l1.36-3.887h-3.627z"
        fill="#FBDB60"
      />
    </svg>
  );
}

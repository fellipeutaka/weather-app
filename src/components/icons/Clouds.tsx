import { SVGAttributes } from "react";

export function Clouds(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width={162}
      height={88}
      viewBox="0 0 162 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M148.809 40.605c-.054 0-.105.016-.159.016a18.906 18.906 0 001.561-7.54c0-10.514-8.523-19.04-19.039-19.04-3.716 0-7.172 1.08-10.103 2.925C117.106 7.33 107.635.54 96.572.54c-14.63 0-26.49 11.858-26.49 26.494 0 1.103.09 2.182.22 3.254-.074 0-.146-.008-.22-.008-9.81 0-17.761 7.947-17.761 17.757 0 9.809 7.952 17.764 17.761 17.764h78.727c6.957 0 12.596-5.64 12.596-12.594 0-6.962-5.639-12.602-12.596-12.602z"
        fill="#C2CEF2"
      />
      <path
        d="M117.246 57.18c-.066 0-.126.016-.192.016a22.873 22.873 0 001.883-9.097c0-12.68-10.278-22.951-22.955-22.951-4.48 0-8.648 1.299-12.181 3.52C79.02 17.052 67.604 8.862 54.264 8.862c-17.64 0-31.94 14.307-31.94 31.946 0 1.33.108 2.636.267 3.927-.09 0-.177-.016-.267-.016C10.498 44.72.91 54.31.91 66.136c0 11.827 9.588 21.415 21.415 21.415h94.921c8.388 0 15.188-6.8 15.188-15.187 0-8.388-6.8-15.184-15.188-15.184z"
        fill="#fff"
      />
    </svg>
  );
}
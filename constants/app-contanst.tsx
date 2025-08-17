import { JSX } from 'react';

export type keyOptions = 'payment' | 'delivery' | 'bill';

type IconsOptionTypes = Record<keyOptions, { icons: JSX.Element }>;

export const IconsOption: IconsOptionTypes = {
  payment: {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M3.33398 16.667H36.6673"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.2497 34.1663H10.7331C4.81643 34.1663 3.31641 32.6996 3.31641 26.8496V13.1496C3.31641 7.84962 4.54979 6.14962 9.19979 5.88295C9.66646 5.86628 10.1831 5.84961 10.7331 5.84961H29.2497C35.1664 5.84961 36.6664 7.31628 36.6664 13.1663V20.5163"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 26.667H16.6667"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M36.6673 29.9997C36.6673 31.2497 36.3173 32.433 35.7006 33.433C34.5506 35.3663 32.434 36.6663 30.0007 36.6663C27.5673 36.6663 25.4507 35.3663 24.3007 33.433C23.684 32.433 23.334 31.2497 23.334 29.9997C23.334 26.3163 26.3173 23.333 30.0007 23.333C33.684 23.333 36.6673 26.3163 36.6673 29.9997Z"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.4004 30.0005L29.0504 31.6505L32.6004 28.3672"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )
  },
  delivery: {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20.0002 23.333H21.6669C23.5002 23.333 25.0002 21.833 25.0002 19.9997V3.33301H10.0002C7.50024 3.33301 5.31693 4.71632 4.18359 6.74965"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33398 28.333C3.33398 31.0997 5.56732 33.333 8.33398 33.333H10.0007C10.0007 31.4997 11.5007 29.9997 13.334 29.9997C15.1673 29.9997 16.6673 31.4997 16.6673 33.333H23.334C23.334 31.4997 24.834 29.9997 26.6673 29.9997C28.5007 29.9997 30.0007 31.4997 30.0007 33.333H31.6673C34.434 33.333 36.6673 31.0997 36.6673 28.333V23.333H31.6673C30.7507 23.333 30.0007 22.583 30.0007 21.6663V16.6663C30.0007 15.7497 30.7507 14.9997 31.6673 14.9997H33.8173L30.9673 10.0164C30.3673 8.98302 29.2674 8.33301 28.0674 8.33301H25.0007V19.9997C25.0007 21.833 23.5007 23.333 21.6673 23.333H20.0007"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3333 36.6667C15.1743 36.6667 16.6667 35.1743 16.6667 33.3333C16.6667 31.4924 15.1743 30 13.3333 30C11.4924 30 10 31.4924 10 33.3333C10 35.1743 11.4924 36.6667 13.3333 36.6667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.6673 36.6667C28.5083 36.6667 30.0007 35.1743 30.0007 33.3333C30.0007 31.4924 28.5083 30 26.6673 30C24.8264 30 23.334 31.4924 23.334 33.3333C23.334 35.1743 24.8264 36.6667 26.6673 36.6667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M36.6667 20V23.3333H31.6667C30.75 23.3333 30 22.5833 30 21.6667V16.6667C30 15.75 30.75 15 31.6667 15H33.8166L36.6667 20Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33398 13.333H13.334"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33398 18.333H10.0007"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33398 23.333H6.66732"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )
  },
  bill: {
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
      >
        <path
          d="M32.1621 17.9121C32.1621 14.1328 30.6608 10.5082 27.9884 7.83584C25.316 5.16344 21.6914 3.66211 17.9121 3.66211C14.1328 3.66211 10.5082 5.16344 7.83584 7.83584C5.16344 10.5082 3.66211 14.1328 3.66211 17.9121C3.66211 26.8059 13.5285 36.0684 16.8416 38.9291C17.1504 39.1607 17.5261 39.2857 17.9121 39.2853M32.1621 39.2871V33.9434M26.8184 39.2871C26.3459 39.2871 25.8929 39.0994 25.5588 38.7654C25.2248 38.4313 25.0371 37.9783 25.0371 37.5059V30.3809C25.0371 30.0877 25.1094 29.799 25.2477 29.5405C25.3859 29.282 25.5859 29.0616 25.8298 28.8989L31.1735 25.3364C31.4662 25.1411 31.8102 25.0368 32.1621 25.0368C32.514 25.0368 32.858 25.1411 33.1507 25.3364L38.4945 28.8989C38.7383 29.0616 38.9383 29.282 39.0766 29.5405C39.2148 29.799 39.2872 30.0877 39.2871 30.3809V37.5059C39.2871 37.9783 39.0994 38.4313 38.7654 38.7654C38.4313 39.0994 37.9783 39.2871 37.5059 39.2871H26.8184ZM23.2559 17.9121C23.2559 20.8634 20.8634 23.2559 17.9121 23.2559C14.9608 23.2559 12.5684 20.8634 12.5684 17.9121C12.5684 14.9608 14.9608 12.5684 17.9121 12.5684C20.8634 12.5684 23.2559 14.9608 23.2559 17.9121Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )
  }
};

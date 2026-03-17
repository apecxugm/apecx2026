import Image from "next/image";
import HeroBackgroundAnimation from "@/src/lib/animation";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-linear-to-b from-secondary-200 to-neutral-100">
      <HeroBackgroundAnimation />
      <Image
        src="/logo/half-light.webp"
        alt="Hero Background"
        width={80}
        height={80}
        className="opacity object-contain z-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-50 lg:w-70 h-auto"
      />

      {/* Left trapezium */}
      <svg className="absolute md:left-20 md:rotate-0 rotate-355 -left-75 md:-top-10 h-full w-auto z-2"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 817" fill="none">
        <path d="M195.946 -46.2646L371.774 150.082L289.738 747.475L4.79163e-06 816.618L195.946 -46.2646Z"
          fill="url(#leftGrad)" />
        <defs>
          <radialGradient id="leftGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="translate(83.6052 345.5) rotate(96.097) scale(494.296 226.194)">
            <stop stopColor="#C324B1" />
            <stop offset="1" stopColor="#430D4B" />
          </radialGradient>
        </defs>
      </svg>

      {/* Left background trapezium */}
      <svg className="z-1 md:block absolute hidden" xmlns="http://www.w3.org/2000/svg" width="317" height="829" viewBox="0 0 317 829" fill="none">
        <path d="M52.4251 -290.001L316.212 -32.9485L201.128 741.993L-229 828.435L52.4251 -290.001Z" fill="url(#paint0_radial_90_2944)" />
        <path d="M52.4251 -290.001L316.212 -32.9485L201.128 741.993L-229 828.435L52.4251 -290.001Z" fill="url(#paint1_linear_90_2944)" />
        <defs>
          <radialGradient id="paint0_radial_90_2944" cx="0" cy="0" r="1" gradientTransform="matrix(-72.3835 637.75 334.795 33.8113 -110.117 217.518)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C324B1" />
            <stop offset="1" stopColor="#430D4B" />
          </radialGradient>
          <linearGradient id="paint1_linear_90_2944" x1="-155.815" y1="324.83" x2="296.233" y2="396.146" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2B0830" stopOpacity="0" />
            <stop offset="1" stopColor="#2B0830" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left light path */}
      <svg className="absolute z-10 md:block hidden" xmlns="http://www.w3.org/2000/svg" width="340" height="859" viewBox="0 0 340 859" fill="none">
        <g filter="url(#filter0_dddddf_90_2950)">
          <path className="hero-light" d="M91.0001 747L262 -8" stroke="url(#paint0_linear_90_2950)" strokeWidth="12" />
        </g>
        <defs>
          <filter id="filter0_dddddf_90_2950" x="-195.852" y="-36.3254" width="535.704" height="1467.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-5" dy="21" />
            <feGaussianBlur stdDeviation="24" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.98 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_2950" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-20" dy="85" />
            <feGaussianBlur stdDeviation="43.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_90_2950" result="effect2_dropShadow_90_2950" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-46" dy="191" />
            <feGaussianBlur stdDeviation="59" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_90_2950" result="effect3_dropShadow_90_2950" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-82" dy="339" />
            <feGaussianBlur stdDeviation="70" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_90_2950" result="effect4_dropShadow_90_2950" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-128" dy="530" />
            <feGaussianBlur stdDeviation="76.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_90_2950" result="effect5_dropShadow_90_2950" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_90_2950" result="shape" />
            <feGaussianBlur stdDeviation="3" result="effect6_foregroundBlur_90_2950" />
          </filter>
          <linearGradient id="paint0_linear_90_2950" x1="176.5" y1="-8" x2="176.5" y2="747" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left light bottom path */}
      <svg className="absolute z-1 bottom-8 left-21 md:block hidden" xmlns="http://www.w3.org/2000/svg" width="300" height="89" viewBox="0 0 300 89" fill="none">
        <g filter="url(#filter0_f_90_3004)">
          <path className="hero-light-bottom" d="M293.667 9.86182L6.16687 78.8618" stroke="url(#paint0_linear_90_3004)" strokeWidth="10" />
        </g>
        <defs>
          <filter id="filter0_f_90_3004" x="0" y="0" width="299.834" height="88.7238" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_90_3004" />
          </filter>
          <linearGradient id="paint0_linear_90_3004" x1="149.917" y1="9.86182" x2="149.917" y2="78.8618" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

    {/* Left light path - mobile*/}
      <svg className="z-1 absolute bottom-6 md:hidden" xmlns="http://www.w3.org/2000/svg" width="44" height="65" viewBox="0 0 44 65" fill="none">
        <g filter="url(#filter0_f_99_3149)">
          <path className="hero-light-bottom" d="M40.806 4.15161L-100.373 59.9204" stroke="url(#paint0_linear_99_3149)" strokeWidth="4.30206" />
        </g>
        <defs>
          <filter id="filter0_f_99_3149" x="-103.314" y="9.25064e-05" width="147.062" height="64.0721" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1.07552" result="effect1_foregroundBlur_99_3149" />
          </filter>
          <linearGradient id="paint0_linear_99_3149" x1="-29.7835" y1="4.15161" x2="-29.7835" y2="59.9204" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* left snake thingy */}
      <svg className="floating hidden md:block absolute left-0 top-0 h-full w-auto z-1" xmlns="http://www.w3.org/2000/svg" width="477" height="859" viewBox="0 0 477 859" fill="none">
        <g filter="url(#filter0_ddddd_90_3052)">
          <path d="M29.9551 -905.669C17.5941 -919.218 -3.40755 -920.179 -16.9543 -907.814C-20.7059 -904.39 -25.4634 -899.699 -29.8818 -894.193C-33.8948 -889.191 -39.1108 -881.71 -42.1491 -872.469L-42.4367 -871.569L-43.0326 -869.617C-55.4209 -828.48 -60.0314 -778.088 -59.392 -729.539C-58.7396 -680.004 -52.5827 -629.858 -42.0336 -589.869C-28.9287 -540.191 5.55228 -499.607 43.105 -468.354C81.0177 -436.801 125.004 -412.297 162.359 -395.36C193.991 -381.018 265.219 -346.169 308.138 -308.13C318.605 -298.853 326.318 -290.295 331.25 -282.78C336.238 -275.181 337.204 -270.465 337.236 -268.233C337.241 -267.963 338.303 -256.048 300.953 -240.187C280.939 -231.688 258.5 -227.675 229.143 -220.223C202.356 -213.424 170.561 -203.756 144.737 -182.497C71.3898 -122.116 73.3015 -22.983 99.0027 48.438C116.037 95.7751 139.502 141.242 158.611 182.81C178.265 225.561 194.526 266.468 201.524 310.488C204.309 328.003 204.436 353.477 198.505 373.464C192.665 393.141 184.529 398.695 174.87 399.402C172.418 399.581 163.857 398.887 150.645 375.953C138.24 354.42 127.642 322.701 118.571 286.181C109.626 250.166 102.776 212.119 96.8666 178.93C91.3164 147.76 86.009 116.824 80.0951 100.302C71.0728 75.0965 56.3412 45.1751 35.9302 19.5123C15.7734 -5.83109 -12.5326 -30.2168 -49.2636 -37.7746C-67.7217 -41.5726 -85.7425 -39.923 -101.621 -31.4282C-117.135 -23.128 -127.159 -10.1371 -133.482 2.57719C-145.583 26.9114 -147.326 56.4201 -146.09 77.5281C-140.883 166.483 -101.453 249.612 -68.6138 324.791C-34.6187 402.614 -6.93801 473.145 -11.6066 546.773C-12.8499 566.38 -17.1672 572.841 -18.2733 574.211C-19.2478 574.32 -21.4615 574.241 -25.6332 572.909C-34.2495 570.16 -45.5819 563.482 -57.3982 553.339C-68.9813 543.396 -79.134 531.747 -85.868 521.291C-95.7987 505.871 -116.347 501.424 -131.765 511.357C-147.182 521.291 -151.63 541.845 -141.699 557.264C-131.159 573.631 -116.613 590.046 -100.651 603.747C-84.9234 617.248 -65.8654 629.795 -45.8245 636.191C-25.7832 642.587 0.876534 644.239 23.247 626.145C44.2778 609.134 52.7395 581.426 54.6706 550.973C60.4877 459.231 25.7145 374.82 -7.75754 298.194C-42.385 218.922 -75.4352 148.092 -79.7936 73.6406C-80.7434 57.4151 -78.6366 41.4386 -74.0209 32.1572C-71.9852 28.0638 -70.4331 27.2139 -70.3008 27.1432C-70.1952 27.0866 -69.8264 26.8924 -68.8812 26.7844C-67.8654 26.6685 -65.8765 26.6236 -62.6485 27.2877C-47.169 30.4729 -31.1784 41.837 -16.0423 60.8677C-1.16011 79.5793 10.3983 102.658 17.5708 122.696C21.0613 132.447 25.2562 155.601 31.4845 190.58C37.3532 223.539 44.5577 263.701 54.1194 302.199C63.5556 340.19 75.9179 379.287 93.1029 409.118C109.48 437.547 137.139 468.766 179.715 465.649C228.849 462.052 252.539 424.816 262.17 392.361C271.71 360.215 270.952 324.214 267.111 300.052C258.65 246.835 239.27 199.259 218.95 155.058C198.085 109.673 177.243 69.7173 161.489 25.9391C139.947 -33.9238 145.334 -96.962 186.938 -131.211C200.519 -142.391 219.635 -149.281 245.475 -155.84C268.745 -161.746 300.648 -167.895 326.904 -179.045C371.513 -197.989 404.247 -226.897 403.639 -269.193C403.365 -288.238 395.959 -305.231 386.768 -319.235C377.522 -333.323 365.25 -346.265 352.183 -357.845C300.966 -403.24 221.286 -441.575 189.781 -455.859C155.957 -471.195 117.564 -492.799 85.5837 -519.415C53.2427 -546.331 30.3146 -575.979 22.179 -606.819C13.2801 -640.552 7.60902 -685.157 7.01289 -730.418C6.41973 -775.456 10.89 -818.674 20.7181 -850.992C20.9427 -851.34 21.3242 -851.887 21.9121 -852.62C23.4564 -854.545 25.5555 -856.693 27.8083 -858.749C41.3551 -871.113 42.3161 -892.12 29.9551 -905.669Z" fill="black" fillOpacity="0.01" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_ddddd_90_3052" x="-653.993" y="-954.494" width="1130.64" height="2498.13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-12" dy="28" />
            <feGaussianBlur stdDeviation="33" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.33 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_3052" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-47" dy="111" />
            <feGaussianBlur stdDeviation="60" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.28 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_90_3052" result="effect2_dropShadow_90_3052" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-107" dy="249" />
            <feGaussianBlur stdDeviation="81.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.17 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_90_3052" result="effect3_dropShadow_90_3052" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-190" dy="443" />
            <feGaussianBlur stdDeviation="96.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_90_3052" result="effect4_dropShadow_90_3052" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-296" dy="692" />
            <feGaussianBlur stdDeviation="105.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_90_3052" result="effect5_dropShadow_90_3052" />
            <feBlend mode="normal" in="BackgroundImageFix" in2="effect5_dropShadow_90_3052" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          </filter>
        </defs>
      </svg>

      {/* Right trapezium */}
      <svg className="absolute md:right-20 md:rotate-0 rotate-5 -right-75 md:-top-10 h-full w-auto z-2"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 817" fill="none">
        <path d="M175.828 -46.2646L4.17664e-07 150.082L82.0355 747.475L371.774 816.618L175.828 -46.2646Z"
          fill="url(#rightGrad)" />
        <defs>
          <radialGradient id="rightGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="translate(288.169 345.5) rotate(83.903) scale(494.296 226.194)">
            <stop stopColor="#C324B1" />
            <stop offset="1" stopColor="#430D4B" />
          </radialGradient>
        </defs>
      </svg>

      <svg className="absolute z-10 right-5 md:block hidden"
        xmlns="http://www.w3.org/2000/svg" width="532" height="859" viewBox="0 0 532 859" fill="none">
        <g filter="url(#filter0_dddddf_90_2935)">
          <path className="hero-light" d="M453.849 723L286.849 -8" stroke="url(#paint0_linear_90_2935)" strokeWidth="12" />
        </g>
        <defs>
          <filter id="filter0_dddddf_90_2935" x="0" y="-36.3362" width="531.699" height="1443.67" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-5" dy="21" />
            <feGaussianBlur stdDeviation="24" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.98 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_2935" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-20" dy="85" />
            <feGaussianBlur stdDeviation="43.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_90_2935" result="effect2_dropShadow_90_2935" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-46" dy="191" />
            <feGaussianBlur stdDeviation="59" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_90_2935" result="effect3_dropShadow_90_2935" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-82" dy="339" />
            <feGaussianBlur stdDeviation="70" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_90_2935" result="effect4_dropShadow_90_2935" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-128" dy="530" />
            <feGaussianBlur stdDeviation="76.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_90_2935" result="effect5_dropShadow_90_2935" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_90_2935" result="shape" />
            <feGaussianBlur stdDeviation="3" result="effect6_foregroundBlur_90_2935" />
          </filter>
          <linearGradient id="paint0_linear_90_2935" x1="370.349" y1="-8" x2="370.349" y2="723" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="z-1 absolute bottom-8 right-21 md:block hidden" xmlns="http://www.w3.org/2000/svg" width="300" height="89" viewBox="0 0 300 89" fill="none">
        <g filter="url(#filter0_f_90_3003)">
          <path className="hero-light-bottom" d="M6.16686 9.86182L293.667 78.8618" stroke="url(#paint0_linear_90_3003)" strokeWidth="10" />
        </g>
        <defs>
          <filter id="filter0_f_90_3003" x="0" y="0" width="299.834" height="88.7238" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_90_3003" />
          </filter>
          <linearGradient id="paint0_linear_90_3003" x1="149.917" y1="9.86182" x2="149.917" y2="78.8618" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="z-1 absolute bottom-6 right-0 md:hidden" xmlns="http://www.w3.org/2000/svg" width="43" height="65" viewBox="0 0 43 65" fill="none">
        <g filter="url(#filter0_f_99_3148)">
          <path className="hero-light-bottom" d="M2.94128 4.15161L144.12 59.9204" stroke="url(#paint0_linear_99_3148)" strokeWidth="4.30206" />
        </g>
        <defs>
          <filter id="filter0_f_99_3148" x="-2.95639e-05" y="9.25064e-05" width="147.062" height="64.0721" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1.07552" result="effect1_foregroundBlur_99_3148" />
          </filter>
          <linearGradient id="paint0_linear_99_3148" x1="73.5308" y1="4.15161" x2="73.5308" y2="59.9204" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Right background trapezium */}
      <svg className="md:block hidden absolute right-0 top-0 z-1" xmlns="http://www.w3.org/2000/svg" width="307" height="829" viewBox="0 0 307 829" fill="none">
        <path d="M263.787 -290.001L-1.37029e-06 -32.9485L115.084 741.993L545.212 828.435L263.787 -290.001Z" fill="url(#paint0_radial_90_1540)" />
        <path d="M263.787 -290.001L-1.37029e-06 -32.9485L115.084 741.993L545.212 828.435L263.787 -290.001Z" fill="url(#paint1_linear_90_1540)" />
        <defs>
          <radialGradient id="paint0_radial_90_1540" cx="0" cy="0" r="1" gradientTransform="matrix(72.3835 637.75 -334.795 33.8113 426.329 217.518)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C324B1" />
            <stop offset="1" stopColor="#430D4B" />
          </radialGradient>
          <linearGradient id="paint1_linear_90_1540" x1="472.027" y1="324.83" x2="19.9789" y2="396.146" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2B0830" stopOpacity="0" />
            <stop offset="1" stopColor="#2B0830" />
          </linearGradient>
        </defs>
      </svg>

      {/* right snake thingy */}
      <svg className="floating md:block hidden absolute right-0 top-0 h-full w-auto z-1" xmlns="http://www.w3.org/2000/svg" width="860" height="859" viewBox="0 0 860 859" fill="none">
        <g filter="url(#filter0_ddddd_90_3050)">
          <path d="M880.692 -773.669C893.053 -787.218 914.055 -788.179 927.601 -775.814C931.353 -772.39 936.111 -767.699 940.529 -762.193C944.542 -757.191 949.758 -749.71 952.796 -740.469L953.084 -739.569L953.68 -737.617C966.068 -696.48 970.679 -646.088 970.039 -597.539C969.387 -548.004 963.23 -497.858 952.681 -457.869C939.576 -408.191 905.095 -367.607 867.542 -336.354C829.629 -304.801 785.643 -280.297 748.289 -263.36C716.656 -249.018 645.428 -214.169 602.51 -176.13C592.042 -166.853 584.329 -158.295 579.397 -150.78C574.41 -143.181 573.443 -138.465 573.411 -136.233C573.406 -135.963 572.344 -124.048 609.694 -108.187C629.708 -99.6876 652.148 -95.675 681.504 -88.2232C708.291 -81.4237 740.086 -71.7563 765.91 -50.4971C839.257 9.88406 837.346 109.017 811.645 180.438C794.61 227.775 771.146 273.242 752.036 314.81C732.382 357.561 716.121 398.468 709.123 442.488C706.338 460.003 706.211 485.477 712.142 505.464C717.982 525.141 726.118 530.695 735.777 531.402C738.229 531.581 746.791 530.887 760.003 507.953C772.408 486.42 783.006 454.701 792.076 418.181C801.022 382.166 807.871 344.119 813.781 310.93C819.331 279.76 824.638 248.824 830.552 232.302C839.574 207.097 854.306 177.175 874.717 151.512C894.874 126.169 923.18 101.783 959.911 94.2254C978.369 90.4274 996.39 92.077 1012.27 100.572C1027.78 108.872 1037.81 121.863 1044.13 134.577C1056.23 158.911 1057.97 188.42 1056.74 209.528C1051.53 298.482 1012.1 381.612 979.261 456.791C945.266 534.614 917.585 605.145 922.254 678.773C923.497 698.381 927.814 704.841 928.92 706.211C929.895 706.32 932.109 706.241 936.28 704.909C944.897 702.16 956.229 695.482 968.045 685.339C979.629 675.396 989.781 663.747 996.515 653.291C1006.45 637.871 1026.99 633.424 1042.41 643.357C1057.83 653.291 1062.28 673.845 1052.35 689.264C1041.81 705.631 1027.26 722.046 1011.3 735.747C995.571 749.248 976.513 761.795 956.472 768.191C936.43 774.587 909.771 776.238 887.4 758.145C866.369 741.134 857.908 713.426 855.977 682.973C850.16 591.231 884.933 506.82 918.405 430.194C953.032 350.922 986.082 280.092 990.441 205.641C991.391 189.415 989.284 173.439 984.668 164.157C982.632 160.064 981.08 159.214 980.948 159.143C980.842 159.087 980.474 158.892 979.528 158.784C978.513 158.668 976.524 158.624 973.296 159.288C957.816 162.473 941.826 173.837 926.69 192.868C911.807 211.579 900.249 234.658 893.076 254.696C889.586 264.447 885.391 287.601 879.163 322.58C873.294 355.539 866.09 395.701 856.528 434.199C847.092 472.19 834.729 511.288 817.544 541.118C801.167 569.547 773.509 600.766 730.932 597.649C681.798 594.052 658.108 556.816 648.477 524.361C638.938 492.215 639.695 456.214 643.537 432.052C651.997 378.835 671.377 331.259 691.698 287.058C712.562 241.673 733.404 201.717 749.158 157.939C770.7 98.0762 765.313 35.038 723.709 0.78893C710.128 -10.3915 691.012 -17.2806 665.172 -23.8398C641.902 -29.7465 609.999 -35.8953 583.744 -47.0452C539.134 -65.9889 506.4 -94.8974 507.008 -137.193C507.282 -156.237 514.688 -173.231 523.879 -187.235C533.125 -201.323 545.398 -214.265 558.464 -225.845C609.681 -271.24 689.361 -309.574 720.866 -323.859C754.69 -339.195 793.083 -360.799 825.064 -387.415C857.405 -414.331 880.333 -443.979 888.468 -474.819C897.367 -508.552 903.038 -553.157 903.634 -598.418C904.227 -643.456 899.757 -686.674 889.929 -718.992C889.704 -719.34 889.323 -719.887 888.735 -720.62C887.191 -722.545 885.092 -724.693 882.839 -726.749C869.292 -739.113 868.331 -760.12 880.692 -773.669Z" fill="black" fillOpacity="0.01" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_ddddd_90_3050" x="7.62939e-06" y="-822.494" width="1130.64" height="2498.13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-12" dy="28" />
            <feGaussianBlur stdDeviation="33" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.33 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_3050" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-47" dy="111" />
            <feGaussianBlur stdDeviation="60" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.28 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_90_3050" result="effect2_dropShadow_90_3050" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-107" dy="249" />
            <feGaussianBlur stdDeviation="81.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.17 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_90_3050" result="effect3_dropShadow_90_3050" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-190" dy="443" />
            <feGaussianBlur stdDeviation="96.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_90_3050" result="effect4_dropShadow_90_3050" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-296" dy="692" />
            <feGaussianBlur stdDeviation="105.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.2 0 0 0 0 0.490196 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_90_3050" result="effect5_dropShadow_90_3050" />
            <feBlend mode="normal" in="BackgroundImageFix" in2="effect5_dropShadow_90_3050" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          </filter>
        </defs>
      </svg>


      <div className="relative w-full h-full justify-center items-center">
        {/* Top ceiling square */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-40 z-0"
          style={{
            background:
              "radial-gradient(156.13% 116.55% at 53.43% -46.84%, var(--Colors-Secondary-800, #A01E91) 0%, var(--Colors-Primary-900, #430D4B) 100%)",
          }}
        />

        {/* floor */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1440px] h-[117px]"
          style={{ background: "linear-gradient(90deg, rgba(8, 1, 9, 0.70) 0%, rgba(43, 8, 48, 0.00) 50%, rgba(8, 1, 9, 0.70) 100%), radial-gradient(33.23% 60.68% at 49.45% 0%, #FDF6FD 0%, var(--Colors-Primary-800, #63136F) 100%)", }} />
      </div>

      {/* Middle white glowing card (blurred trapezium) */}
      <svg className="absolute inset-0 w-full h-full z-2 md:block hidden"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1130 859" fill="none">
        <g filter="url(#blur)">
          <path className="glowing" d="M930 741L848.098 144H284.446L200 741H930Z" fill="url(#midGrad)" />
        </g>
        <defs>
          <filter id="blur" x="0" y="-56" width="1130" height="997"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="100" />
          </filter>
          <radialGradient id="midGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="translate(565 184.726) rotate(90) scale(448.907 548.915)">
            <stop stopColor="#F9DFF6" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>

      <svg className="absolute inset-0 w-full h-full z-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="430" height="655" viewBox="0 0 430 655" fill="none">
        <g filter="url(#filter0_f_99_3162)">
          <path className="glowing" d="M393.14 568.563L352.921 86.0413H76.1358L34.6679 568.563H393.14Z" fill="url(#paint0_radial_99_3162)" />
        </g>
        <defs>
          <filter id="filter0_f_99_3162" x="-51.3733" y="4.57764e-05" width="530.555" height="654.604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="43.0206" result="effect1_foregroundBlur_99_3162" />
          </filter>
          <radialGradient id="paint0_radial_99_3162" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(213.904 118.957) rotate(90) scale(362.826 269.549)">
            <stop stopColor="#F9DFF6" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>

      {/* left floating blue triangles */}
      <Image className="shoot-left md:block hidden absolute -left-35 bottom-0 h-[650px] w-auto z-10" src="/triangles-left.webp" alt="Left Triangles" width={500} height={600} />

      {/* right floating blue triangles */}
      <Image className="shoot-right md:block hidden absolute -right-70 -bottom-30 h-[640px] w-auto z-10" src="/triangles-right.webp" alt="Right Triangles" width={500} height={600} />
    </div>
  )
}
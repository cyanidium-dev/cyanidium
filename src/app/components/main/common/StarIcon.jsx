const StarIcon = ({ className = '', width = 32, height = 32, style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M16 0L17.0748 14.9252L32 16L17.0748 17.0748L16 32L14.9252 17.0748L0 16L14.9252 14.9252L16 0Z"
      fill="url(#paint0_linear_4039_10202)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4039_10202"
        x1="16.5857"
        y1="0"
        x2="19.9398"
        y2="41.1574"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EAEBFF" />
        <stop offset="1" stopColor="#6A8FFF" />
      </linearGradient>
    </defs>
  </svg>
);
  export default StarIcon;
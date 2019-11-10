<template>
  <g>
    <path
      id="magnifier-path"
      d="M.4-.21c-6.58,8-23.81,10.13-26.3,30.39s1.36,33.29,6.12,34.74S15.59,70,18.76,59.85s3.61-26.79-3-53.19S2.85-44.17-2.79-31.6c0,0-11.79,36-2.48,81.8"
    />
    <g id="magnifier-mover">
      <circle class="magnifier circle" cx="58.47" cy="58.47" r="50.97" />
      <line class="magnifier" x1="95.03" y1="95.03" x2="146" y2="146" />
      <path
        class="highlight"
        d="M514.11,329.8a42,42,0,0,1-21.61,75.49c1.15.09,2.3.16,3.47.16a40,40,0,0,0,18.14-75.65Z"
        transform="translate(-435.77 -306.66)"
      />
      <path
        class="highlight"
        d="M474.36,400.45A42,42,0,0,1,496,325c-1.14-.1-2.3-.16-3.47-.16a40,40,0,0,0-18.14,75.65Z"
        transform="translate(-435.77 -306.66)"
      />
    </g>
  </g>
</template>

<style lang="scss" scoped>
.magnifier {
  fill: none;
  stroke: #0000ff;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 15px;
  &.circle {
    fill: rgba(0, 0, 255, 0.08);
  }
}
.highlight {
  fill: rgba(255, 255, 255, 0.5);
}
#magnifier-path {
  fill: none;
  stroke: none;
}
</style>

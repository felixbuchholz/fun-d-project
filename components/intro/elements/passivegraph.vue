<template>
  <g>
    <path class="line axis" d="M76.5 400.5h722" />
    <path class="line dashed" d="M76.5 67.5l714.5 2" />
    <path class="line dashed" d="M76.5 233.5l714.5 2" />

    <text transform="translate(51.42 404.664)" class="st6 st7">
      0
    </text>
    <text transform="translate(63.41 432.664)" class="st6 st7">
      1998
    </text>
    <text transform="translate(768.483 432.664)" class="st6 st7">
      Apr 2019
    </text>
    <text transform="rotate(-90 145.809 121.84)" class="st6 st7">
      $ Trillions
    </text>
    <text transform="translate(51.118 72.664)" class="st6 st7">
      5
    </text>
    <text transform="translate(38.643 235.664)" class="st6 st7">
      2.5
    </text>
    <g>
      <text transform="translate(321.939 45.164)" class="st6 st7">
        Active Assets
      </text>
      <path class="graph line active" d="M309.1 39h-37" />
    </g>
    <g>
      <text transform="translate(501.603 45.164)" class="st6 st7">
        Passive Assets
      </text>
      <path class="graph line passive" d="M489.1 39h-37" />
    </g>
    <g class="passivegraphlines">
      <path
        id="passivegraphlinesactive"
        class="graph line active"
        d="M76.5 281.5l35-37 34 3 31 16 37 32 36-38 37-24 29-11 37-22 34-9 35 89 33-34 34-21 34 11 35-14 36-61 32-14 34 11 36-4 34-35 35 29 34-34"
      />
      <path
        id="passivegraphlinespassive"
        class="graph line passive"
        d="M76.5 386.5l33-9 33-2 38 1 34 2 35-8 33-9 34-4 71-14 33 13 68-22 35-3 33-15 34-37 35-26 36-7 33-34 35-54 35 4 34-48"
      />
    </g>
  </g>
</template>

<script>
export default {
  mounted() {
    console.log("graph is mounted");
  }
};
</script>

<style lang="scss" scoped>
.line {
  fill: none;
}
.graph.line {
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.axis,
.dashed {
  stroke-linecap: square;
  stroke: #1a222e;
  stroke-width: 1;
}
.dashed {
  stroke: #9fa0a3;
  stroke-dasharray: 3, 3;
}
.active {
  // TODO: color variables!
  stroke: #0071bc;
}
.passive {
  stroke: #f7931e;
}
</style>

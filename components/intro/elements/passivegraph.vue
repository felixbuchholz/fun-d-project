<template>
  <g>
    <path class="line axis" d="M76.5 400.5h722" />
    <path class="line dashed" d="M76.5 67.5l714.5 2" />
    <path class="line dashed" d="M76.5 233.5l714.5 2" />

    <text transform="rotate(-90 145.809 126)">$ Trillions</text>
    <text transform="translate(65 406)" class="svg-text-right">0</text>
    <text transform="translate(65 238)" class="svg-text-right">2.5</text>
    <text transform="translate(65 72.664)" class="svg-text-right">5.0</text>
    <text transform="translate(75 433)" class="svg-text-center">1998</text>
    <text transform="translate(795 433)" class="svg-text-center">Apr 2019</text>
    <g>
      <text transform="translate(321.939 45.164)">Active Funds</text>
      <path class="line-medium active-stroke" d="M309.1 39h-37" />
    </g>
    <g>
      <text transform="translate(501.603 45.164)">Passive Funds</text>
      <path class="line-medium passive-stroke" d="M489.1 39h-37" />
    </g>
    <g class="passivegraphlines">
      <path
        id="passivegraphlinesactive"
        class="line-medium active-stroke"
        d="M76.5 281.5l35-37 34 3 31 16 37 32 36-38 37-24 29-11 37-22 34-9 35 89 33-34 34-21 34 11 35-14 36-61 32-14 34 11 36-4 34-35 35 29 34-34"
      />
      <path
        id="passivegraphlinespassive"
        class="line-medium passive-stroke"
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

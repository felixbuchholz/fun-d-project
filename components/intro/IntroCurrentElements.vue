<template>
  <g>
    <g id="piggy" class="first-elements zero-opacity" :style="`scale(0)`">
      <g
        class="initial-position"
        :style="`transform:translate(${width / 4}px, ${height / 2}px)`"
      >
        <g
          class="center-in-g"
          :style="`transform:translate(${-45}px, ${-31}px)`"
        >
          <circle id="piggy-coin" class="line" cx="50" cy="-12" r="7" />
          <path
            id="piggy-body"
            class="line both-round"
            d="M65.8,71.2H53.9l-0.7-4.7c-1.7,0.2-3.5,0.4-5.2,0.5v0c-3.1,0-6.1-0.1-9.2-0.6l-3.4,4.8H23.5v-9.8C12.8,55.8,4.4,46.4,0,35.1V23.3c3.7,0,7.3-0.5,10.5-2.4c1.9-1.2,3.3-2.8,4.9-4.4c1.7-1.8,3.5-3.4,5.5-4.8V0c2.3,0,4.6,0.1,6.8,0.7c2.9,0.8,5.6,2.4,7.8,4.5c12.9-3,27.5-0.6,38,7.7c8.9,7,14,18.2,10.9,29.5c-2,7.2-7,13.2-13.1,17.3L65.8,71.2z"
          />
          <path
            id="piggy-eye"
            class="line both-round"
            d="M91.5,28.8c0,3.4-2.8,6.2-6.2,6.2"
          />
          <path
            id="piggy-tail"
            class="line both-round"
            d="M18.4,24.3c0,2.4,1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3"
          />
        </g>
      </g>
    </g>
    <g id="house" class="first-elements zero-opacity" :style="`scale(0)`">
      <g
        class="initial-position"
        :style="`transform:translate(${(width / 4) * 2}px, ${height / 2}px)`"
      >
        <g
          class="center-in-g"
          :style="`transform:translate(${-46}px, ${-46}px)`"
        >
          <polyline
            class="line"
            points="10.9,53.2 10.9,91.1 33.9,91.1 33.9,60.4 58.4,60.4 58.4,91.1 81.5,91.1 81.5,53.6 	"
          />
          <path class="line" d="M81.5,53.5" />
          <polyline
            class="line"
            points="27.8,18.1 27.8,5.2 15.5,5.2 15.5,30.4 	"
          />
          <path
            class="line"
            d="M2,44c-4.2,4.6-0.8,9.4,2.1,10.5c2.4,0.9,5,0.6,6.9-1.3l35-35l35.5,35.4c3,2.5,5.7,1.3,6.5,1c2.7-0.7,6.2-6,2.1-10.5L46,0L2,44z"
          />
          <line class="line" x1="5.1" y1="91.1" x2="87.2" y2="91.1" />
        </g>
      </g>
    </g>
    <!-- nest-egg -->
    <g id="nest-egg" class="first-elements zero-opacity" :style="`scale(0)`">
      <g
        class="initial-position"
        :style="`transform:translate(${(width / 4) * 3}px, ${height / 2}px)`"
      >
        <g
          class="center-in-g"
          :style="`transform:translate(${-41}px, ${-46}px) scale(1.2)`"
        >
          <g id="#sign-ira">
            <path
              class="line-thin background"
              d="M79.7,82.9l-35.9,8.6c-0.9,0.2-1.8-0.3-2-1.2l-3.5-14.6c-0.2-0.9,0.3-1.8,1.2-2l35.9-8.6c0.9-0.2,1.8,0.3,2,1.2L81,80.9C81.2,81.8,80.6,82.7,79.7,82.9z"
            />
            <text
              transform="matrix(0.9764 -0.2161 0.2161 0.9764 50.578 85.1423)"
              class="text-sign"
            >
              IRA
            </text>
          </g>
          <g id="sign-401k">
            <path
              class="line-thin background"
              d="M37.9,91.3L1.4,85.7c-0.9-0.1-1.5-1-1.4-1.9L2.3,69c0.1-0.9,1-1.5,1.9-1.4l36.5,5.6c0.9,0.1,1.5,1,1.4,1.9l-2.3,14.8C39.6,90.8,38.8,91.5,37.9,91.3z"
            />
            <text
              transform="matrix(0.9857 0.1682 -0.1682 0.9857 6.3295 81.7638)"
              class="text-sign"
            >
              401k
            </text>
          </g>
          <polygon
            id="nest"
            class="fill"
            points="40.9,54.6 45.6,56.5 51.9,55.6 54.1,58.1 60.7,58.4 60,61.1 65.6,62.5 62.2,64.8 65.6,67 60,68.5 60.7,71.1 
	54.1,71.4 51.9,73.9 45.6,73.1 40.9,74.9 36.2,73.1 29.9,73.9 27.6,71.4 21.1,71.1 21.7,68.5 16.2,67 19.6,64.8 16.2,62.5 
	21.7,61.1 21.1,58.4 27.6,58.1 29.9,55.6 36.2,56.5 "
          />
          <g id="egg">
            <path
              class="line background"
              d="M66,40.2c0,19.8-11.6,27.2-25.6,27.2S15,59.9,15,40.2S28.9,0.4,40.9,0.4S66,20.4,66,40.2z"
            />
            <path
              class="fill"
              d="M47.2,38.6c0-6.1-8.4-5.8-8.4-8.8c0-1.4,0.8-2,2.4-2c1.3,0,2.3,0.6,3.5,1.6l2.3-2.7c-1.2-1.3-2.7-2.3-4.7-2.6v-3.2h-3.1
		v3.3c-3,0.6-4.8,2.7-4.8,5.8c0,5.7,8.4,5.7,8.4,8.9c0,1.4-0.8,2.2-2.6,2.2c-1.5,0-2.9-0.6-4.5-1.9l-2,3.2c1.5,1.4,3.7,2.2,5.6,2.4
		V48h3.1v-3.3C45.5,44,47.2,41.7,47.2,38.6z"
            />
          </g>
        </g>
      </g>
    </g>
  </g>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      window: state => state.window.window
    }),
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
  }
};
</script>

<style lang="scss" scoped></style>

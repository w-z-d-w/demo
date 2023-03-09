<template>
  <svg class="imooc-logo" viewBox="0 0 1082 1024">
    <path :stroke="stroke"
          :stroke-width="strokeWidth"
          class="imooc-logo1"
          d="M760.384 64c47.808 0 91.968 11.968 132.352 35.84a264.32 264.32 0 0 1 95.872 97.152A263.68 263.68 0 0 1 1024 330.88c0 34.752-6.592 68.544-19.712 101.312a262.4 262.4 0 0 1-57.536 87.424L512 960 77.248 519.68A268.8 268.8 0 0 1 0 330.88c0-48.384 11.776-93.056 35.392-133.952A264.32 264.32 0 0 1 131.2 99.84 255.296 255.296 0 0 1 263.68 64 260.736 260.736 0 0 1 449.92 142.208l62.08 62.912 62.144-62.912a258.944 258.944 0 0 1 86.336-58.24A259.584 259.584 0 0 1 760.512 64h-0.128z m0 88.96a174.272 174.272 0 0 0-124.16 52.16L511.872 330.88 387.84 205.12a174.272 174.272 0 0 0-124.288-52.16c-32 0-61.504 7.936-88.384 23.808a175.36 175.36 0 0 0-63.808 64.64 176.32 176.32 0 0 0-23.552 89.536c0 23.168 4.352 45.632 13.056 67.392 8.704 21.824 21.504 41.28 38.4 58.432L512 834.176l372.672-377.408c16.896-17.152 29.696-36.608 38.4-58.432 8.704-21.76 13.056-44.224 13.056-67.392 0-32.448-7.808-62.336-23.488-89.536a175.36 175.36 0 0 0-63.872-64.64 170.688 170.688 0 0 0-88.32-23.808z"
    />
<!--     <path :stroke="stroke"
          :stroke-width="strokeWidth"
          class="imooc-logo1"
          d="M232.813 819.351s384.237-577.074 849.94-433.222l-60.57 66.248s-253.634-24.606-388.022 71.926c0 0-264.991 132.496-401.272 310.418z"
    />
    <path :stroke="stroke"
          :stroke-width="strokeWidth"
          class="imooc-logo1"
          d="M902.861 564.052l-81.39 79.497s-278.24 11.357-588.658 240.384c0 0 300.954-359.857 670.048-319.881z"
    />
    <path :stroke="stroke"
          :stroke-width="strokeWidth"
          class="imooc-logo1"
          d="M223.35 921.79s321.774-217.672 611.37-179.816L868.792 1024 546.108 849.863l-341.61 173.91z"
    /> -->
  </svg>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      strokeWidth: {
        type: [String, Number],
        default: 1
      },
      stroke: {
        type: String,
        default: '#000'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .imooc-logo {
    width: 100%;
    height: 100%;
  }

  .imooc-logo1 {
    fill: none;
    animation: imooc-logo-animation 5s linear infinite forwards;
  }

  @keyframes imooc-logo-animation {
    0% {
      stroke-dasharray: 4748;
      stroke-dashoffset: 4748;
    }
    50% {
      stroke-dasharray: 4748;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 4748;
      stroke-dashoffset: 0;
    }
  }
</style>

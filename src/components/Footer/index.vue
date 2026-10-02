<template>
  <footer>
    <div class="power" v-show="!store.playerState">
      <span class="copyright">&copy; 2022–{{ fullYear }}</span>
      <span class="owner">Rizon_Lin</span>
    </div>
    <div class="lrc" v-show="store.playerState">
      <music-one theme="filled" size="18" fill="#efefef" />
      <span class="lrc-text">
        {{ store.getPlayerLrc ? store.getPlayerLrc : "这句没有歌词" }}
      </span>
      <music-one theme="filled" size="18" fill="#efefef" />
    </div>
  </footer>
</template>

<script setup>
import { MusicOne } from "@icon-park/vue-next";
import { mainStore } from "@/store";
const store = mainStore();

const fullYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 46px;
  line-height: 46px;
  text-align: center;
  backdrop-filter: blur(10px);
  background: rgb(0 0 0 / 25%);
  z-index: 0;
  animation: fade;
  -webkit-animation: fade 0.5s;
  @media (max-width: 720px) {
    font-size: 0.85rem;
  }
  .power {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 100%;
    padding: 0 16px;
    font-size: 13px;
    letter-spacing: 0.02em;
    white-space: nowrap;
    color: rgb(255 255 255 / 70%);
    animation: fade;
    -webkit-animation: fade 0.3s;
    .owner {
      color: rgb(255 255 255 / 90%);
      font-weight: 500;
    }
  }
  .lrc {
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: fade;
    -webkit-animation: fade 0.3s;
    .lrc-text {
      margin: 0 8px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;
    }
    .i-icon {
      width: 18px;
      height: 18px;
      display: inherit;
    }
  }
}
</style>

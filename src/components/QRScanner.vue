<script setup>
import { StreamBarcodeReader } from "vue-barcode-reader";
</script>
<script>
export default {
  data() {
    return {
      arr: ["Paulo", "Daryll", "Eric", "Jum"],
      isShown: false,
    };
  },
  methods: {
    onDecode(text) {
      console.log(`Decode text from QR code is ${text}`);
      window.location.href = `${text}`;
    },
    onLoaded() {
      console.log(`Ready to start scanning barcodes`);
    },
  },
};
</script>
<template>
    <div class="header">
        <img class="logoimg" src="/logo.jpg" alt="">
    </div>
  <div class="screen">
    <div class="container">
      <StreamBarcodeReader
        class="camera"
        @decode="onDecode"
        @loaded="onLoaded"
      ></StreamBarcodeReader>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.camera {
  z-index: 1;
}
.screen {
  background-color: #fef193;
  width: 100vw;
  height: 100vh;
}
.container {
  width: 600px;
  margin: auto;
  background-color: #30457c;
  border-color: #30457c;
  border-style: solid;
}

@media (max-width:600px) {
    .logoimg {
        width: 80%;
    }
    .container {
        width: 100vw;
    }
}
</style>

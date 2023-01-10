<script setup>
import { StreamBarcodeReader } from "vue-barcode-reader";
</script>
<script>
export default {
    data() {
        return {
            arr: ["Paulo", "Daryll", "Eric", "Jum"],
            isShown: false
        }
    },
    methods: {
        onDecode(text) {
            console.log(`Decode text from QR code is ${text}`)
            // window.location.href=`${text}`
            this.isShown = true;
        },
        onLoaded() {
            console.log(`Ready to start scanning barcodes`)
        },
    }
}
</script>
<template>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <div v-show="isShown" v-for="data in arr">{{ data }}</div>
</template>
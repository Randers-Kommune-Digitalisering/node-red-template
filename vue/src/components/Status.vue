<script setup>
import { ref } from 'vue';
const statusExpress = ref(null);
const statusNodered = ref(null);

fetch('/status')
    .then(response => response = response.json())
    .then(data => statusExpress.value = data);

fetch('/api/vuetest')
    .then(response => response = response.json())
    .then(value => statusNodered.value = value.success ? "Connected" : null)
    .then(value => console.log(value));
</script>

<template>

    <div class="wrapper">

        <div class="status">
            <h2>Express:</h2>
            <h3 v-if="statusExpress">{{statusExpress}}</h3>
            <h3 v-else="statusExpress">Not running</h3>
        </div>
        
        <div class="status">
            <h2>Node-RED:</h2>
            <h3 v-if="statusNodered">{{statusNodered}}</h3>
            <h3 v-else="statusNodered">Not connected</h3>
        </div>
        
    </div>

</template>

<style scoped>
    .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
    .wrapper > * {
        gap: 20px;
    }
</style>

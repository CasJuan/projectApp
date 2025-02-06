<template>
    <div class="flex flex-col">
        <!-- top menu -->
         <TopMenu />


        <main class="flex flex-row">
            <SideMenu />
            <router-view />
        </main>
    </div>

</template>

<script setup lang="ts">
import TopMenu from '../../common/components/TopMenu.vue'
import SideMenu from '../components/SideMenu.vue'
</script>


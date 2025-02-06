<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Projecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>

    <fab-button @click="() => console.log('click')">
        <AddCircle />
    </fab-button>



  </div>
</template>

<script setup lang="ts">
import FabButton from '@/modules/common/components/FabButton.vue'
import AddCircle from '@/modules/common/components/Icons/AddCircle.vue'
</script>


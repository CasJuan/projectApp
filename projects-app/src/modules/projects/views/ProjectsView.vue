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

    <input-modal 
    :open="modalOpen" 
    @close="modalOpen = false" 
    @value="onNewValue"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo proyecto"
    subtitle="Dale un nombre unico a tu proyecto"
    />


    <fab-button @click="modalOpen = true">
        <AddCircle />
    </fab-button>

  </div>
</template>

<script setup lang="ts">
import FabButton from '../../common/components/FabButton.vue'
import AddCircle from '../../../modules/common/Icons/AddCircle.vue'
import InputModal from '../../common/components/InputModal.vue' 
import { ref } from 'vue';


const modalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({projectName})
}

</script>


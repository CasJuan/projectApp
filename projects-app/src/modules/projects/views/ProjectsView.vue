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
        <tr v-for= "(project , index) in projectsStore.projectList" :key="index" class="hover">
          <th>{{index + 1 }}</th>
          <td>{{project.name}}</td>
          <td>{{project.tasks.length}}</td>
          <td>
            <progress class="progress progress-primary w-56" value="40" max="100"></progress>
          </td>
        </tr>
      </tbody>

    </table>

    <input-modal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="projectsStore.addProject"
      placeholder="Ingrese el nombre del proyecto"
      title="Nuevo proyecto"
      subtitle="Dale un nombre unico a tu proyecto"
    />

    <custom-modal :open="customModalOpen">
      <template #header>
        <h1 class="text-2xl font-bold">TItulo de Modal</h1>
      </template>
      <template #body>
        <h1 class="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolor asperiores
          provident natus doloremque. Nihil, commodi cupiditate omnis nemo amet porro earum
          recusandae sequi accusamus ipsam quaerat at soluta. Voluptatem?
        </h1>
      </template>
      <template #footer>
        <div class="flex justify-end">
          <button @click="customModalOpen = false" class="btn mr-4">Close</button>
          <button class="btn btn-primary">Aceptar</button>
        </div>
      </template>
    </custom-modal>

    <fab-button @click="modalOpen = true">
      <AddCircle />
    </fab-button>

    <fab-button @click="customModalOpen = true" position="bottom-left">
      <ModalIcon />
    </fab-button>
  </div>
</template>

<script setup lang="ts">
import FabButton from '../../common/components/FabButton.vue';
import AddCircle from '../../../modules/common/Icons/AddCircle.vue';
import InputModal from '../../common/components/InputModal.vue';
import CustomModal from '../../common/components/CustomModal.vue';
import { ref } from 'vue';
import ModalIcon from '../../../modules/common/Icons/ModalIcon.vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();




</script>

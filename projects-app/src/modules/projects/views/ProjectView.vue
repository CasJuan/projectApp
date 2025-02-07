<template>
    <div class="w-full h-full flex flex-col gap-4">
        <section class="m-2">
            <bread-crumbs :name="project?.name ?? 'Proyecto Actual'" />
        </section>
        <section>
            <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th class="w-14">Completada</th>
        <th>Tarea</th>
        <th>Completada en</th>
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

      <tr class="hover">
        <th></th>
        <td>
            <input 
            type="text" 
            class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100 " 
            placeholder="Tarea" 
            />
        </td>
        <td></td>

      </tr>
    </tbody>
  </table>
</div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BreadCrumbs from '../../../modules/common/components/BreadCrumbs.vue'

import { useProjectsStore } from '../store/projects.store';
import { useRouter } from 'vue-router';
interface Props {
    id: string;
}

const router = useRouter();

const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project|null>()



//const project = projectStore.projectList.find( project => project.id === props.id);

watch ( () => props.id, () => {
    project.value = projectStore.projectList.find( project => project.id === props.id);
    if(!project.value) {
        router.replace('/');
    }
},
{
    immediate: true,
});







</script>

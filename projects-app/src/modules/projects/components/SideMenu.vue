<template>
  <aside class="bg-base-200 w-72 min-h-screen">
    <h2 class="text-lg font-bold mx-4">Pryectos</h2>
    <p v-if="projectsStore.noProjects" class="text-sm text-gray-500 mx-4">No hay proyectos</p>
    <ul class="menu rounded-box w-56">
      <li v-for="project in projectsStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details open>
            <summary>
              <router-link :to="`/project/${project.id}`" >
                {{project.name}}
              </router-link>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <router-link :to="`/project/${project.id}`">{{task.name}}</router-link>
              </li>
            </ul>
          </details> 
        </template>
        <template v-else>
          <router-link :to="`/project/${project.id}`" > {{project.name}} </router-link>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">

import { useProjectsStore } from '../store/projects.store';

const projectsStore = useProjectsStore();


</script>

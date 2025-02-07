<template>
    <bread-crumbs :name="project?.name ?? 'Proyecto Actual'" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BreadCrumbs from '../../../modules/common/components/BreadCrumbs.vue'
import { useProjectsStore } from '../store/projects.store';

interface Props {
    id: string;
}

const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project|null>()


//const project = projectStore.projectList.find( project => project.id === props.id);

watch ( () => props.id, () => {
    project.value = projectStore.projectList.find( project => project.id === props.id);
},
{
    immediate: true,
});






</script>

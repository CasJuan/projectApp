import { defineStore } from "pinia";
import { ref } from "vue";
import type { Project } from "../interfaces/project.interface";

const initialLoad = ():Project[] => {
    return [
        {
            id: '1',
            name: 'Project2',
            tasks: []        
        },
        {
            id: '2',
            name: 'Project2',
            tasks: []
        }

    ]
}


export const useProjectsStore = defineStore('projects', () =>  {

    const projects = ref<Project[]>(initialLoad());

    return{ projects };

});
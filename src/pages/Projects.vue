<script>
import { store } from "../data/store";
import axios from "axios";
import ProjectCard from "../components/microComponents/ProjectCard.vue";

export default {
    data() {
        return {
            name: "App",
            store,
            allPost: "",
            links: [],
            currentPage: null
        };
    },
    components : {
        ProjectCard
    },
    methods: {
        getApi(url) {
            axios.get(url).then((results) => {
                this.allPost = results.data.data;
                this.links = results.data.links;
                this.currentPage = results.data.current_page;
                console.log(this.links, this.currentPage);
            });
        },
    },
    mounted() {
        this.getApi(store.apiUrl);
    },
};
</script>

<template>
    <div class="container-fluid home wrapper">
        <h1>Hello there! I'm Marco Vittorio</h1>
        <div class="container-fluid p-5">

            <!-- <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Project name</th>
                        <th scope="col">Status</th>
                        <th scope="col">url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in allPost" :key="post.id">
                        <td class="col col-6">{{ post.project_name }}</td>
                        <td class="col col-3">{{ post.status }}</td>
                        <td class="col col-3">{{ post.url }}</td>
                    </tr>
                </tbody>
            </table> -->
            <div class="project-wrapper">
                <div class="row row-cols-3 justify-content-between">

                    
                    <project-card class="col"
                        v-for="post in allPost" :key="post.id"
                        :post="post">
                    </project-card>
                
            </div>
            </div>

            <div class="nav-button px-5 text-end">
                <button
                v-for="link in links"
                :key="link.id"
                type="button"
                class="btn border border-1"
                :class=" { 'link-active' : link.active }"
                v-html="link.label"
                @click="getApi(link.url)">
                </button>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    height: calc(100vh - 100px - 80px);
    overflow: auto;
}
.link-active{
    background-color: lightgreen;
}
</style>
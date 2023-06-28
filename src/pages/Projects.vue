<script>
import { store } from "../data/store";
import axios from "axios";
import ProjectCard from "../components/microComponents/ProjectCard.vue";

export default {
    data() {
        return {
            name: "App",
            store,
            titleToSearch : '',
        };
    },
    components : {
        ProjectCard
    },
    methods: {
        getApi() {
            axios.get(store.apiUrl).then((results) => {
                store.allPost = results.data.data;
                store.links = results.data.links;
                store.currentPage = results.data.current_page;
                this.titleToSearch = '';
            });
        },

        searchProjects(title) {
            axios.get(store.apiUrl +'/search/' + title).then((results) => {
                store.allPost = results.data.data ;
                store.links = results.data.links;
                store.currentPage = results.data.current_page;
                console.log(store.links)
            });
        },

    },
    mounted() {
        this.getApi();
    },
};
</script>

<template>
    <div class="container-fluid home wrapper">

            
            <!-- Barra di ricerca -->
            <div class="d-flex justify-content-center gap-3" role="search">
                <input
                v-model="titleToSearch"
                class="form-control w-25"
                type="search"
                placeholder="Search"
                aria-label="Search"
                @keyup.enter="searchProjects(titleToSearch)"
                >
                <button class="btn btn-outline-success" type="submit" @click="searchProjects(titleToSearch)">Search</button>
                <button class="btn btn-outline-danger" type="submit" @click="getApi()">Reset</button>
            </div>
            <!-- Barra di ricerca -->

        <div class="container-fluid p-5">

            <div class="project-wrapper">
                <div class="row row-cols-3 justify-content-between">

                    
                    <project-card class="col"
                        v-for="post in store.allPost" :key="post.id"
                        :post="post">
                    </project-card>
                
            </div>
            </div>

            <div class="nav-button px-5 text-end">
                <button
                v-for="link in store.links"
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
    padding-top: 20px;
    height: calc(100vh - 100px - 80px);
    overflow: auto;
}
.link-active{
    background-color: lightgreen;
}
</style>
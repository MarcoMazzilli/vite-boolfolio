<script>
import { store } from "../data/store";
import axios from "axios";

export default {
    data() {
        return {
            name: "App",
            store,
            allPost: "",
        };
    },
    methods: {
        getApi(url) {
            axios.get(url).then((results) => {
                this.allPost = results.data;
                console.log(this.allPost);
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


                <table class="table">
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
                </table>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    height: calc(100vh - 100px - 80px);
    overflow: auto;
}
</style>
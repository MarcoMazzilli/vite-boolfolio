<script>
import { store } from '../data/store.js';
import axios from 'axios';


export default {
    data(){
        return{
            store,
            project : {},
        }
    },
    methods :{

        getApi(url , slug){

            axios.get(url, slug).then(results => {
                this.project = results.data
            });
        },
    },
    mounted(){
        this.getApi(store.apiUrl +  '/' + this.$route.params.slug);
    }

}
</script>

<template>
    <div class="container bg-garning">

        <div class="container show p-5 overflow-auto">

            <div class="card">
                <div class="card-body">

                    <label class="fw-bold" for="name">Project name</label>
                    <p id="name"> {{ project.project_name }}</p>

                    <!-- TODO: Query per ottenere la tipologia -->
                    <!-- <label class="fw-bold" for="type">Project type</label>
                    <p id="type"> $project -> type -> name</p> -->
                        <!-- TODO: Query per ottenere le tecnologie  -->
                    <!-- <div>
                        <label class="fw-bold d-block" for="technology">Project technology</label>
                        @forelse ($project->technologies as $technology )
                        <p id="technology" class="badge text-bg-success">$technology -> name </p>
                        @empty
                        <p class="badge text-bg-danger">No Technology</p>
                        @endforelse
                    </div> -->

                    <label class="fw-bold" for="description">Description</label>
                    <p id="description"> {{ project.description }} </p>

                    <label class="fw-bold" for="url">Url</label>
                    <p>
                        <a class="d-block" id="url" target="_blank"> {{ project.url }} </a>
                    </p>

                    <label class="fw-bold" for="status">Status</label>
                    <p id="status">{{ project.status }} </p>

                    <label class="fw-bold" for="license">License</label>
                    <p id="license"> {{ project.license }}</p>

                    <label class="fw-bold" for="license">Img. name</label>
                    <p id="license"> {{project.image_original_name ?? 'No image available'}} </p>

                    <p class="card-text"><small class="text-body-secondary">Last Update {{project.updated_at}}  </small>
                    </p>


                </div>
                
                <div class="img-wrapper">
                    <img :src="project.image_path" class="card-img-bottom image-show" alt="No Image available">
                </div>

            </div>

            <div class="cta text-end py-3">
                <router-link  class="btn btn-success" :to="{'name' : 'projects'}">Back to view</router-link>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>

.img-wrapper{
    height: 300px;
    overflow: hidden;
    img{
        width:30%;
        object-position: center;
    }

}

</style>
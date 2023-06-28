<script>
export default {
    data() {
        return {
            name: 'card'
        }
    },
    props: {
        post : Object
    }
}
</script>

<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row h-100">
            <div class="col-md-4">
                <img src="{{ post.image_path }}" class="img-fluid rounded-start" alt=".?.?">
            </div>
            <div class="col-md-8 d-flex flex-column">
                <div class="card-body">
                    <h5 class="card-title">{{ post.project_name }}</h5>
                    <p class="card-text">{{ post.description }}</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
                <div class="my-2 text-end">
                    <router-link class="btn btn-primary" :to="{name : 'projectDetails', params : {slug: post.slug}}">Dettagli</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
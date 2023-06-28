<script>
import { store } from '../data/store.js'; 

export default {
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <header>

        <div class="container-fluid">
            
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="logo-mvm">
            <img src="/mvm-avatar.PNG" alt="no image">
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name : 'home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name : 'projects'}">Progetti</router-link>
            </li>
        </ul>
        
        
    </div>
</div>
</nav>

</div>

</header>
</template>

<style lang="scss" scoped>
.logo-mvm{
    height: 100px;
    img{
        height: 100%;
    }
}
</style>
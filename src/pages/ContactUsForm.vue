<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            errors: {},
            sending : false,
            success : false,
        }
    },
    methods: {
        submitForm() {
            //Sending lo utilizzo come un loader per indicare quando questa chiamata è finita
            this.sending = true
            //Creo un oggetto con i dati valorizzati dal v-model
            const dataForm = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            axios.post(`${store.apiUrlContacts}`, dataForm)
            .then(results => {
                //una volta entrati nel then il sending diventa false quindi significa che la chiamata ha prodotto dei risultati
                this.sending = false;

                console.log('errori -->', results.data.success)

                // Success lo utilizzo per mostrare/nascondere il form, quindi se la chiamata va a buon fine questo valore diventa true.
                this.success = results.data.success;

                // Se non va a buon fine questa condizione restituisco gli errori che mi rimanda 'results.data.errors'
                if(!results.data.success){
                    this.errors = results.data.errors

                }else{ //altrimenti un oggetto vuoto

                    this.errors = {};
                }
            });
        },
    }

};


</script>

<template>
    <div class="container">
        <!--@submit -> intercetta l'evento scaturito dal bottone submit .prevent inibisce l'invio del form  -->
        <form v-if="!success" @submit.prevent="submitForm()">

            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" class="form-control" :class="{'is-invalid' : errors.name}" id="name" placeholder="Inserisci il tuo nome" v-model.trim="name" />
                <p v-for="(error,ix) in errors.name" :key="ix" class="text-danger">{{ error }}</p>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Indirizzo mail</label>
                <input type="email" :class="{'is-invalid' : errors.email}" class="form-control" id="email" placeholder="Inserisci qui la tua mail"
                    v-model.trim="email" />
                <div id="emailHelp" class="form-text">
                    Non condivideremo mai la tua mail con nessuno
                </div>
                <!--  -->
                <p v-for="(error,ix) in errors.email" :key="ix" class="text-danger">{{ error }}</p>
            </div>

            <div class="mb-3">
                <label for="message">Lascia un messaggio</label>
                <textarea :class="{'is-invalid' : errors.message}" class="form-control" placeholder="Scrivi qui il tuo messaggio" id="message" style="height: 200px"
                    v-model.trim="message"></textarea>
                    <p v-for="(error,ix) in errors.message" :key="ix" class="text-danger">{{ error }}</p>
            </div>

            <button :disabled="sending" type="submit" class="btn btn-primary">{{ sending ? 'in corso...' : 'invia' }}</button>

        </form>

        <div v-else>
            <h2>Form inviato correttamente</h2>
        </div>
        
    </div>
</template>

<style></style>
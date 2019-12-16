<template>
    <div class="container" style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="form-group">
                <input type="text" name="message" class="form-control" placeholder="Digite sua mensagem..." v-model="newMessage"/>
                <p class="text-danger" v-if="errorText">{{errorText}}</p>
            </div>
            <button class="btn btn-primary" type="submit" name="action">Enviar</button>
        </form>
    </div>
</template>

<script>
import fb from '@/firebase/init'

export default {
    name: "createMessage",
    props: ["name"],
    data(){
        return{
            newMessage: null,
            errorText: null
        }
    },
    methods: {
        createMessage() {
            if(this.newMessage){
                fb.collection('messages').add({
                    message: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    this.errorText = err.message
                })
                this.newMessage = null
                this.errorText = null
            } else {
                this.errorText = "Uma mensagem deve ser digitada antes do envio ... "
            }
        }
    }
    
}
</script>
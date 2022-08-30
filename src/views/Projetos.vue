<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
            </div>


            <div v-if="!haveProject">
                <NotNamedAlert />
            </div>

            <div class="field">
                <button class="button" type="submit" @click="notNamedVerify">
                    Salvar
                </button>
            </div>

        </form>

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nome
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>
                        {{  projeto.id  }}
                    </td>
                    <td>
                        {{  projeto.nome  }}
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import iProjeto from '../interfaces/iProjeto'
import NotNamedAlert from '../components/NotNamedAlert.vue'

export default defineComponent({
    name: "Projetos",
    data() {
        return {
            nomeDoProjeto: "",
            haveProject: true,
            projetos: [] as iProjeto[]
        };
    },
    methods: {
        salvar() {
            if (this.haveProject) {
                const projeto: iProjeto = {
                    id: new Date().toISOString(),
                    nome: this.nomeDoProjeto
                };
                this.projetos.push(projeto);
                this.nomeDoProjeto = "";
            }
        },
        notNamedVerify() {
            this.nomeDoProjeto === "" ? this.haveProject = false : this.haveProject = true
        }
    },
    components: { NotNamedAlert }
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>
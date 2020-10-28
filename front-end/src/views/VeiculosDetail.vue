<template>
  <div>
    <ul>
      <li>
        <router-link to="/veiculos">Voltar</router-link>
      </li>
    </ul>

    <h2>Cadastro de Veículos - Atualizar um veículo</h2>

    <table>
      <tr>
        <th>Veículo</th>
        <th>Marca</th>
        <th>Ano</th>
        <th>Descrição</th>
        <th>#</th>
      </tr>
      <tr>
        <td>
          <select v-model="marcasObj" @change="onChange()">
            <option disabled value="">Selecione a marca</option>
            <option v-for="marca in marcas" v-bind:value="marca" v-bind:key="marca.id">
              {{ marca.name }}
            </option>
          </select>
        </td>
        <td>
          <select v-model="model.veiculo">
            <option disabled value="">Selecione o veículo</option>
            <option v-for="veiculo in veiculos" v-bind:value="veiculo.name" v-bind:key="veiculo.id">
              {{ veiculo.name }}
            </option>
          </select>
        </td>
        <td>
          <input v-model.number="model.ano" type="number" placeholder="Informe o ano do veículo"/>
        </td>
        <td>
          <textarea v-model="model.descricao" placeholder="Descrição do veículo"></textarea>
        </td>
        <td>
          <button v-on:click="atualizar()">Atualizar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "form-detail",
  props: ['id'],
  data() {
    return {
      response: [],
      messages: "",
      errorMessage: "",
      marcas: [],
      veiculos: [],
      /* dados: [], */
      marcasObj: {},      
      model: {
        veiculo: "",
        marca: "",
        ano: 2020,
        descricao: "",
        vendido: false,
      },
    };
  },  
  mounted() {
    this.$http
      .get("http://www.fipeapi.appspot.com/api/1/carros/marcas.json")
      .then((response) => (this.marcas = response.data));
  },
  methods: {
    onChange() {
      const id = this.marcasObj.id;
      this.model.marca = this.marcasObj.fipe_name;
      this.$http
        .get(`http://www.fipeapi.appspot.com/api/1/carros/veiculos/${id}.json`)
        .then((response) => (this.veiculos = response.data));
    },
    atualizar() {
      this.$http
        .put(`http://localhost:3000/veiculos/${this.id}`, this.model)
        .then((response) => {
          this.response = response.data;
          this.messages = "Veículo atualizado com sucesso";          
        })
        .catch((error) => {
          this.messages = error.message;
          console.error("Erro ao atualizar veículo", error);
        });
    },
  },
};
</script>
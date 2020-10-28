<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>

    <h2>Cadastro de Veículos</h2>

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
            <option
              v-for="marca in marcas"
              v-bind:value="marca"
              v-bind:key="marca.id"
            >
              {{ marca.name }}
            </option>
          </select>
        </td>
        <td>
          <select v-model="model.veiculo">
            <option disabled value="">Selecione o veículo</option>
            <option
              v-for="veiculo in veiculos"
              v-bind:value="veiculo.name"
              v-bind:key="veiculo.id"
            >
              {{ veiculo.name }}
            </option>
          </select>
        </td>
        <td>
          <input
            v-model.number="model.ano"
            type="number"
            placeholder="Informe o ano do veículo"
          />
        </td>
        <td>
          <textarea
            v-model="model.descricao"
            placeholder="Descrição do veículo"
          ></textarea>
        </td>
        <td>
          <button v-on:click="cadastrar()">Cadastrar</button>
        </td>
      </tr>
    </table>  

    <h3>Veículos cadastrados</h3>
    <table>
      <tr>
        <th>ID</th>
        <th>Veículo</th>
        <th>Marca</th>
        <th>Ano</th>
        <th>Descrição</th>
        <th>#</th>
        <th>#</th>
      </tr>
      <tr v-for="item in dados" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.veiculo }}</td>
        <td>{{ item.marca }}</td>
        <td>{{ item.ano }}</td>
        <td>{{ item.descricao }}</td>
        <td>
          <button v-on:click="remover(item.id)">Remover</button>
        </td>
        <td>
          <button v-on:click="atualizar(item.id)">Atualizar</button>                    
        </td>
      </tr>
    </table>
  </div>
  
</template>

<script>
export default {
  name: "Formulario",  
  props: {
    msg: String,
  },
  data() {
    return {
      response: [],
      messages: "",
      errorMessage: "",
      marcas: [],
      veiculos: [],
      dados: [],
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
      .get("http://localhost:3000/veiculos")
      .then((response) => (this.dados = response.data));

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
    cadastrar() {
      this.$http
        .post("http://localhost:3000/veiculos", this.model)
        .then((response) => {
          this.response = response.data;
          this.messages = "Veículo cadastrado com sucesso";
          this.$http
            .get("http://localhost:3000/veiculos")
            .then((response) => (this.dados = response.data));
        })
        .catch((error) => {
          this.messages = error.message;
          console.error("Erro ao cadastrar veículo", error);
        });
    },
    remover(id) {
      this.$http
        .delete(`http://localhost:3000/veiculos/${id}`)
        .then((response) => {
          this.response = response.data;
          this.messages = "Veículo removido com sucesso";
          this.$http
            .get("http://localhost:3000/veiculos")
            .then((response) => (this.dados = response.data));
        })
        .catch((error) => {
          this.messages = error.message;
          console.error("Erro ao tentar remover veículo", error);
        });
    },
    atualizar(id) {
      alert(id);
      //eventhub.$emit('modify-vehicle', id)
    }
  },
};
</script>
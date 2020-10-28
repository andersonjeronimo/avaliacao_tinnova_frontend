<template>
  <div>    
    <ul>
      <li>
        <router-link to="/eleicoes">Desafio 001 - Eleições</router-link>
      </li>
      <li>
        <router-link to="/ordenacao">Desafio 002 - Ordenação</router-link>
      </li>
      <li>
        <router-link to="/fatorial">Desafio 003 - Fatorial</router-link>
      </li>
      <li>
        <router-link to="/multiplos">Desafio 004 - Soma múltiplos</router-link>
      </li>
      <li>
        <router-link to="/veiculos">Desafio 005 - Cadastro de Veículos</router-link>
      </li>
    </ul>

    <h1>{{ info.message }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:3000")
      .then((response) => (this.info = response.data));
  },
};
</script>
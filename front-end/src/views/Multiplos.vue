<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
    <h2>Soma dos naturais abaixo de um número que são múltiplos de 3 e 5</h2>
    <p>{{ info.message }}</p>
    <p>Teste abaixo com outro valor:</p>    
    <input v-model.number="valor" type="number" />
    <button v-on:click="calcula()">Calcular</button>
    <!-- <p>O valor é: {{ valor }}</p> -->
  </div>
</template>

<script>
export default {
  name: "Multiplos",
  props: {
    msg: String,
  },
  data() {
    return {
      info: "",
      valor: 10
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:3000/matematica/multiplos")
      .then((response) => (this.info = response.data));
  },
  methods: {
    calcula() {
      this.$http
        .get(`http://localhost:3000/matematica/multiplos/${this.valor}`)
        .then((response) => (this.info = response.data));
    },
  },
};
</script>
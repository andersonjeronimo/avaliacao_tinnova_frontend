<template>
  <div>    
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
    <h2>Fatorial de um número</h2>
    <p>{{ info.message }}</p>
    <p>Teste abaixo com outro valor:</p>    
    <input v-model.number="valor" type="number" />
    <button v-on:click="calcula()">Calcular</button>
  </div>
</template>

<script>
export default {
  name: "Fatorial",
  props: {
    msg: String,
  },
  data() {
    return {
      info: "",
      valor: 5
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:3000/matematica/fatorial")
      .then((response) => (this.info = response.data));
  },
  methods: {
    calcula() {
      this.$http
        .get(`http://localhost:3000/matematica/fatorial/${this.valor}`)
        .then((response) => (this.info = response.data));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
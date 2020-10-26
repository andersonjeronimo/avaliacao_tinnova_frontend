<template>
  <div>    
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
    <h2>Apuração das eleições - Percentual</h2>
    <p>Dados: 1000 eleitores, 800 votos válidos, 150 votos brancos, 50 votos nulos</p>
    <p>{{ info.message }}</p>
  </div>
</template>

<script>
export default {
  name: "Eleicoes",
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
      .get("http://localhost:3000/eleicoes/apuracao")
      .then((response) => (this.info = response.data));
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
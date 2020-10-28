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
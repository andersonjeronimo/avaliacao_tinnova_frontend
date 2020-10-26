<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
    <h2>Ordenação dos valores de um vetor</h2>
    <p>Vetor v = {5,3,2,4,7,1,0,6}</p>
    <p>{{ info.message }}</p>
  </div>
</template>

<script>
export default {
  name: "Ordenacao",
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
      .get("http://localhost:3000/ordenacao/bubblesort")
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
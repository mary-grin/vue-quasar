<template>
  <div class="city-input">
    <input v-model="city" type="text" placeholder="Enter city name">
    <button @click="getWeather">Get Weather</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: ''
    };
  },
  methods: {
    getWeather() {
      this.$emit('search', this.city);
    }
  }
};
</script>

<style scoped>
.city-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>

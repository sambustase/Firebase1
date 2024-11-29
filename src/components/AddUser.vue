<template>
    <div>
      <h2>Agregar Usuario</h2>
      <form @submit.prevent="addUser">
        <input v-model="name" type="text" placeholder="Nombre" required />
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    data() {
      return {
        name: "",
        email: "",
      };
    },
    methods: {
      ...mapActions(["createUser"]),
      addUser() {
        if (this.name && this.email) {
          this.createUser({ name: this.name, email: this.email });
          this.name = "";
          this.email = "";
        }
      },
    },
  };
  </script>
  
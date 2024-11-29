<template>
    <div>
      <h2>Lista de Usuarios</h2>
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
          <button @click="deleteUser(user.id)">Eliminar</button>
        </li>
      </ul>
      <p v-else>No hay usuarios registrados.</p>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    computed: {
      ...mapGetters(["allUsers"]),
    },
    methods: {
      ...mapActions(["deleteUser"]),
    },
    mounted() {
      this.$store.dispatch("fetchUsers");
    },
  };
  </script>
  
import Vue from "vue";
import Vuex from "vuex";
import db from "../firebaseConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [], // Almacenará la lista de usuarios
  },
  mutations: {
    setUsers(state, users) {
      state.users = users; // Actualiza la lista de usuarios
    },
    addUser(state, user) {
      state.users.push(user); // Agrega un nuevo usuario
    },
    removeUser(state, userId) {
      state.users = state.users.filter((user) => user.id !== userId); // Elimina un usuario
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const snapshot = await db.collection("users").get();
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      commit("setUsers", users); // Guarda los usuarios en el estado
    },
    async createUser({ commit }, user) {
      const docRef = await db.collection("users").add(user);
      commit("addUser", { id: docRef.id, ...user }); // Agrega el usuario al estado
    },
    async deleteUser({ commit }, userId) {
      await db.collection("users").doc(userId).delete();
      commit("removeUser", userId); // Elimina el usuario del estado
    },
  },
  getters: {
    allUsers: (state) => state.users, // Retorna la lista de usuarios
  },
});

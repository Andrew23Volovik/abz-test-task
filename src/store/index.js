import Vue from 'vue';
import Vuex from 'vuex';
import { HTTP } from '@/services/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    userPositions: null,
    isLoading: false,
    token: null,
    successImg: false,
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUserPositions(state) {
      return state.userPositions;
    },
    getLoading(state) {
      return state.isLoading;
    },
    getSuccessImg(state) {
      return state.successImg;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = [...state.users, ...payload];
    },
    setUserPosition(state, payload) {
      state.userPositions = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async requestGetToken({ commit, state }) {
      try {
        state.isLoading = true;
        const res = await HTTP.get(`token`);
        const data = res.data;
        commit('setToken', data.token);
        state.isLoading = false;
      } catch (error) {
        console.log(error.message);
      }
    },
    async requestGetUsers({ commit, state }, page) {
      try {
        state.isLoading = true;
        const res = await HTTP.get(`users?page=${page}&count=6`);
        const data = res.data;
        commit('setUsers', data.users);
        state.isLoading = false;
      } catch (error) {
        console.log(error.message);
        state.isLoading = false;
      }
    },
    async requestUserPositions({ commit, state }) {
      try {
        state.isLoading = true;

        const res = await HTTP.get(`positions `);
        const data = res.data;

        const positionsCheckedValue = data.positions.map((el, idx) => {
          let checked = false;
          if (idx === 0) {
            checked = true;
            return { ...el, checked };
          } else {
            return { ...el, checked };
          }
        });

        commit('setUserPosition', positionsCheckedValue);

        state.isLoading = false;
      } catch (error) {
        console.log(error.message);
      }
    },
    async requestPostUser({ state }, formData) {
      try {
        state.isLoading = true;

        const res = await HTTP.post(`users`, formData, {
          headers: {
            Token: state.token,
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(res);

        if (res.data.success === true) {
          state.successImg = true;
        } else {
          state.successImg = false;
        }

        state.isLoading = false;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  modules: {},
});

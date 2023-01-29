<template>
  <v-row>
    <v-col cols="5">
      <input
        class="outline-blue-400 p-3 pr-10"
        type="date"
        v-model="startDate"
      />
    </v-col>
    <v-col cols="5">
      <input class="outline-blue-400 p-3 pr-10" type="date" v-model="endDate" />
    </v-col>
    <v-col cols="2">
      <v-btn color="blue lighten-3" @click="clearFilters()">
        <small>Limpar filtros</small>
      </v-btn>
    </v-col>
    <v-col cols="12" class="font-bold">
      <h1 class="text-2xl">Asteroides próximos a terra</h1>
    </v-col>
    <v-col v-if="loading" cols="12" class="flex justify-center items-center">
      <v-progress-circular
        indeterminate
        color="blue lighten-3"
      ></v-progress-circular>
    </v-col>
    <v-col
      class="flex justify-start items-start"
      cols="12"
      v-for="(asteroidsByDate, index) in asteroids"
      :key="index"
    >
      <v-timeline>
        <AsteroidComponent :asteroids="asteroidsByDate" :date="index" />
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
import AsteroidComponent from "../components/AsteroidComponent.vue";
import { get } from "../services/asteroid";

export default {
  name: "AsteroidView",
  data() {
    return {
      asteroids: [],
      startDate: "",
      endDate: "",
      loading: false,
    };
  },
  watch: {
    async startDate() {
      await this.getAsteroids();
    },
    async endDate() {
      await this.getAsteroids();
    },
  },
  async created() {
    await this.getAsteroids();
  },
  methods: {
    get,
    async getAsteroids() {
      this.loading = true;
      this.asteroids = await this.get(this.startDate, this.endDate);
      this.loading = false;
    },
    clearFilters() {
      this.startDate = "";
      this.endDate = "";
    },
  },
  components: { AsteroidComponent },
};
</script>

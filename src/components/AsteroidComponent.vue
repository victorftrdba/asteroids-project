<template>
  <v-timeline-item>
    <template v-slot:opposite
      ><span class="font-bold">{{
        moment(asteroidDate).format("DD/MM/YYYY")
      }}</span></template
    >
    <div v-for="asteroid in asteroids" :key="asteroid.id">
      <div
        class="text-base font-bold mb-3"
        :class="
          !asteroid.is_potentially_hazardous_asteroid
            ? 'text-green-600'
            : 'text-red-600'
        "
      >
        {{ asteroid.name }}
        <div>
          Situação:
          {{
            asteroid.is_potentially_hazardous_asteroid
              ? "Perigoso"
              : "Distância segura"
          }}
        </div>
      </div>
    </div>
  </v-timeline-item>
</template>

<script>
import moment from "moment";

export default {
  name: "AsteroidComponent",
  props: ["asteroids", "date"],
  data() {
    return {
      asteroidDate: this.date,
    };
  },
  methods: {
    moment,
  },
};
</script>

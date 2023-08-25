<script setup>
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import { computed } from 'vue';

const xs = computed(() => vuetify.display.xs.value);

const back = () => {
  router.go(-1);
};
</script>
<template>
  <v-container>
    <v-row justify="center" style="min-height: 100vh" class="h-auto">
      <v-col cols="auto" align-self="center">
        <v-card
          min-height="80vh"
          :min-width="xs ? '80vw' : '60vw'"
          :max-width="xs ? '80vw' : '60vw'"
          elevation="2"
          rounded="xl"
          class="d-flex"
          :class="xs ? 'flex-column' : 'flex-row'"
        >
          <v-btn
            @click="back"
            icon="mdi-arrow-left"
            color="blue"
            position="absolute"
            style="z-index: 99"
          ></v-btn>
          <v-row>
            <v-col md="6">
              <v-img
                src="../../assets/bg-donasi.jpg"
                min-width="100%"
                min-height="100%"
                cover
              ></v-img>
            </v-col>

            <v-col class="pa-md-15 pa-10" cols="12" md="6" align-self="center">
              <p class="mb-0">Name</p>

              <v-text-field
                class="py-0"
                variant="outlined"
                color="blue"
                base-color="blue"
                density="compact"
                required="true"
              >
              </v-text-field>

              <p class="mb-0">Email</p>
              <v-text-field
                type="email"
                name="email"
                variant="outlined"
                class="py-0"
                color="blue"
                base-color="blue"
                density="compact"
              >
              </v-text-field>

              <p class="mb-0">Donation Amount (Rp)</p>
              <v-select
                class="py-0"
                color="blue"
                base-color="blue"
                label="Select"
                :items="[5000, 20000, 50000, 100000, 500000, 1000000]"
                variant="outlined"
                density="compact"
                hide-details="true"
              ></v-select>

              <v-checkbox color="blue" label="Yakin?" class="py-0" hide-details="true"></v-checkbox>

              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    v-bind="props"
                    :elevation="isHovering ? '6' : '2'"
                    rounded="pill"
                    width="100%"
                    :variant="isHovering ? 'flat' : 'outlined'"
                    color="blue"
                    to="/donation"
                    >Donasi</v-btn
                  >
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

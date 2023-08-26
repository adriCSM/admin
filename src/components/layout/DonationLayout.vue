<script setup>
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const xs = computed(() => vuetify.display.xs.value);
const store = useStore();

const payload = ref({
  firstName: '',
  lastName: '',
  email: '',
  grossAmount: 0,
});
const selected = ref(false);

const pay = async () => {
  const token = await store.dispatch('payment/donation', payload.value);

  window.snap.pay(token, {
    onSuccess: function (result) {
      store.commit('success', 'Donasi berhasil terkirim');
      router.push({ name: 'Donation Success' });
      console.log(result.transaction_status);
    },
    onPending: function (result) {
      console.log(result.transaction_status);
    },
    onError: function (result) {
      store.commit('error', 'Gagal melakukan donasi');
      console.log(result.transaction_status);
    },
    onClose: function () {
      console.log('customer closed the popup without finishing the payment');
    },
  });
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
            to="/"
            icon="mdi-arrow-left"
            color="#6368D9"
            position="absolute"
            class="text-white"
            elevation="2"
            style="z-index: 99"
          ></v-btn>
          <v-row>
            <v-col md="6">
              <v-img
                src="../../assets/img/bg-donasi.jpg"
                min-width="100%"
                min-height="100%"
                cover
              ></v-img>
            </v-col>

            <v-col class="pa-md-15 pa-10" cols="12" md="6" align-self="center">
              <p class="mb-0">Firs Name</p>

              <v-text-field
                v-model="payload.firstName"
                class="py-0"
                variant="outlined"
                color="#6368D9"
                base-color="blue"
                density="compact"
                required="true"
              >
              </v-text-field>
              <p class="mb-0">Last Name</p>

              <v-text-field
                v-model="payload.lastName"
                class="py-0"
                variant="outlined"
                color="#6368D9"
                base-color="blue"
                density="compact"
                required="true"
              >
              </v-text-field>

              <p class="mb-0">Email</p>
              <v-text-field
                v-model="payload.email"
                type="email"
                name="email"
                variant="outlined"
                class="py-0"
                color="#6368D9"
                base-color="blue"
                density="compact"
              >
              </v-text-field>

              <p class="mb-0">Donation Amount (Rp)</p>
              <v-select
                v-model="payload.grossAmount"
                class="py-0"
                color="#6368D9"
                base-color="blue"
                label="Select"
                :items="[5000, 20000, 50000, 100000, 500000, 1000000]"
                variant="outlined"
                density="compact"
                hide-details="true"
              ></v-select>

              <v-checkbox
                v-model="selected"
                color="#6368D9"
                label="Yakin?"
                class="py-0"
                hide-details="true"
              ></v-checkbox>

              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    v-bind="props"
                    :elevation="isHovering ? '6' : '2'"
                    rounded="pill"
                    width="100%"
                    :variant="isHovering ? 'flat' : 'outlined'"
                    color="#6368D9"
                    :class="isHovering ? 'text-white' : null"
                    @click="pay"
                    :disabled="!selected"
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

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ButtonBackVue from '@/components/ButtonBack.vue';

const store = useStore();

const profile = computed(() => store.state.profile.userProfile);

const payload = ref({
  username: null,
  name: null,
  email: null,
  phoneNumber: null,
  gender: null,
  birth: null,
});

const reset = () => {
  payload.value = {
    ...payload.value,
    username: null,
    name: null,
    email: null,
    phoneNumber: null,
    gender: null,
    birth: null,
  };
};
const mode = computed(() => store.state.mode);
</script>

<template>
  <v-container fluid class="px-7" v-if="profile">
    <v-row>
      <v-col md="4" cols="12">
        <v-row>
          <v-col md="12 ">
            <v-card
              class="pa-3 rounded-xl"
              :class="mode ? 'bg-white' : 'bg-grey-darken-3'"
              elevation="3"
            >
              <v-row>
                <ButtonBackVue />
                <v-col cols="12" class="text-center">
                  <v-avatar
                    color="white"
                    :image="profile.pic"
                    size="200"
                    density="compact"
                  ></v-avatar>
                </v-col>
                <v-col cols="12">
                  <div class="text-title text-center">Adri Candra</div>
                </v-col>
                <v-col cols="12">
                  <div class="text-subtitle text-center">Backend Developer</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="8" cols="12">
        <v-card
          :loading="!profile ? true : false"
          class="pa-3 rounded-lg h-auto"
          :class="mode ? 'bg-white' : 'bg-grey-darken-3'"
          elevation="3"
        >
          <v-row>
            <v-col md="12">
              <v-table class="bg-transparent">
                <tbody>
                  <tr>
                    <th>Username</th>

                    <td>{{ profile.username }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>

                    <td>{{ profile.email }}</td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td>{{ profile.phone_number }}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td v-if="profile.gender">{{ profile.gender }}</td>
                    <td v-else>---</td>
                  </tr>
                  <tr>
                    <th>Birth Date</th>
                    <td v-if="profile.birth">{{ profile.birth }}</td>
                    <td v-else>---</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col class="text-end">
              <v-btn color="blue" class="ms-2 font-weight-bold" @click="reset">kolaborasi</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const profile = computed(() => store.state.profile.myProfile);

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
const store = useStore();
const mode = computed(() => store.state.mode);
</script>

<template>
  <v-container fluid class="px-7">
    <v-row>
      <v-col md="4" cols="12" order-md="1">
        <v-row>
          <v-col md="12">
            <v-card class="pa-3 rounded-xl" :class="mode ? 'bg-white' : 'bg-element'" elevation="3">
              <v-row>
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
          <v-col md="12">
            <v-card class="pa-3 rounded-lg" :class="mode ? 'bg-white' : 'bg-element'" elevation="3">
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
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="8" cols="12" order-md="0">
        <v-card
          class="pa-3 rounded-lg h-auto"
          :class="mode ? 'bg-white' : 'bg-element'"
          elevation="3"
        >
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Username"
                hide-details
                :base-color="mode ? 'grey' : 'white'"
                :class="mode ? 'text-input-blue' : 'text-white'"
                color="blue"
                v-model="payload.username"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Name"
                hide-details
                base-color="grey"
                color="blue"
                v-model="payload.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Email"
                hide-details
                base-color="grey"
                color="blue"
                v-model="payload.email"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Phone Number"
                hide-details
                base-color="grey"
                color="blue"
                v-model="payload.phoneNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Gender"
                hide-details
                base-color="grey"
                color="blue"
                v-model="payload.gender"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Birth Date"
                variant="outlined"
                hide-details
                base-color="grey"
                color="blue"
                v-model="payload.birth"
              >
              </v-text-field>
            </v-col>
            <v-col class="text-end">
              <v-btn color="blue"> Ubah</v-btn>
              <v-btn color="grey " class="ms-2" @click="reset"> Reset</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

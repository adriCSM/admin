<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const dialog = ref(false);
const visible = ref(false);
const visible1 = ref(false);

const user = ref({
  username: '',
  phoneNumber: '',
  email: '',
  pic: [],
  password: '',
  confirmPassword: '',
});

const add = async () => {
  await store.dispatch('auth/register', user.value);
  if (!store.state.error) {
    user.value = {
      ...user.value,
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
    };
    dialog.value = false;
  }
};
</script>

<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="blue" variant="tonal" v-bind="props" @click="show"
        ><v-icon>mdi-plus</v-icon> User
      </v-btn>
    </template>
    <v-card class="bg-dark">
      <v-card-title style="color: #0fe" class="text-center"> Add User </v-card-title>

      <v-card-text style="color: #0fe">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label=" Username"
                name="Username"
                variant="outlined"
                v-model="user.username"
                required
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Phone Number"
                name="noHp"
                variant="outlined"
                v-model="user.phoneNumber"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email"
                name="email"
                variant="outlined"
                v-model="user.email"
                required
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                name="password"
                variant="outlined"
                v-model="user.password"
                required
                :type="visible ? 'text' : 'password'"
                :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="visible = !visible"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Confirm Password"
                name="password"
                variant="outlined"
                v-model="user.confirmPassword"
                required
                :type="visible1 ? 'text' : 'password'"
                :append-inner-icon="visible1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="visible1 = !visible1"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="add"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

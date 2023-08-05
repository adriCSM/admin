<template>
  <v-container fluid>
    <v-row>
      <v-col md="8 ">
        <v-card class="bg-white pa-3 rounded-lg h-auto" elevation="3">
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                placeholder="Username"
                hide-details
                base-color="grey"
                color="blue"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                placeholder="Email"
                hide-details
                base-color="grey"
                color="blue"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                placeholder="Phone Number"
                hide-details
                base-color="grey"
                color="blue"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                placeholder="Gender"
                hide-details
                base-color="grey"
                color="blue"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                placeholder="Date"
                hide-details
                base-color="grey"
                color="blue"
              >
              </v-text-field>
            </v-col>
            <v-col class="text-end">
              <v-btn color="blue"> Ubah</v-btn>
              <v-btn color="grey " class="ms-2"> Reset</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col md="4">
        <v-row>
          <v-col md="12">
            <v-card class="bg-white pa-3 rounded-xl" elevation="3">
              <v-row>
                <v-col cols="12" class="text-center">
                  <v-avatar
                    :image="require('../assets/109715820.jpg')"
                    size="200"
                    density="compact"
                    variant="text"
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
            <v-card class="bg-white pa-3 rounded-lg" elevation="3">
              <v-table>
                <tbody>
                  <tr>
                    <th>email</th>

                    <td>adricandrasaputra@gmail.com</td>
                  </tr>
                  <tr>
                    <th>phone number</th>
                    <td>123995660</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>29 agustus 1998</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

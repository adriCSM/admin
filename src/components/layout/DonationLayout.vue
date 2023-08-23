<!-- <template>
  <div class="text-center">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-btn
          variant="tonal"
          v-bind="props"
          color="blue"
          :class="isHovering ? ' font-weight-bold  text-white' : null"
          rounded="pill"
          :elevation="isHovering ? '6' : '2'"
        >
          Donasi

          <v-dialog
            v-model="dialog"
            class="centered-card"
            position="absolute"
            activator="parent"
            width="auto"
          >
            <v-card>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click.stop="dialog = false">Close Dialog</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn></template
      ></v-hover
    >
  </div>
</template> -->

<template>
  <v-container>
    <v-row justify="center" class="h-screen">
      <v-col cols="auto" align-self="center">
        <v-card min-height="80vh" min-width="60vw" max-width="60vw" elevation="2" rounded="xl">
          <v-row>
            <v-col md="6" align-self="center"
              ><v-img src="../../assets/109715820.jpg" height="screen" cover></v-img
            ></v-col>
            <v-col md="6" align-self="center" class="pa-15">
              <v-card-title>Username</v-card-title>
              <v-text-field variant="outlined" color="blue" base-color="blue" density="compact">
              </v-text-field>
              <v-card-title>Password </v-card-title>
              <v-text-field variant="outlined" color="blue" base-color="blue" density="compact">
              </v-text-field>
              <v-card-title>Amount </v-card-title>
              <v-text-field variant="outlined" color="blue" base-color="blue" density="compact">
              </v-text-field>
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
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>

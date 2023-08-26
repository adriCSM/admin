<template>
  <v-container>
    <v-row class="h-auto" style="min-height: 100vh" justify="center">
      <v-col cols="auto" align-self="center">
        <v-img src="../assets/img/coin_dollar.png" width="100"></v-img>
        <h1>Donation is successfully</h1>

        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              :elevation="isHovering ? '6' : '2'"
              :to="{ name: 'Home' }"
              v-bind="props"
              color="blue"
              :variant="isHovering ? 'flat' : 'outlined'"
              >Back to home</v-btn
            >
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

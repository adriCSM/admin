<script setup></script>

<template>
  <v-container fluid class="overflow-y-auto" style="max-height: 100vh">
    <v-table class="pa-5 bg-dark" style="color: #0fe">
      <thead>
        <tr>
          <th class="text-center text-white">Consumer</th>
          <th class="text-center text-white">Products & Cuantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 5" :key="item.name" class="text-center">
          <td>Setya Novanto</td>
          <td style="max-width: 25vh">
            <span v-for="n in 10" :key="n" class="text-start"> ale (2),</span>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<template>
  <v-container>
    <v-card class="table-card">
      <v-card-title class="table-title">
        {{ title }}
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            class="pa-2 search-field"
            label="Buscar..."
            hide-details
            append-icon="mdi-magnify"
            solo
          ></v-text-field>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'GenericTable',
  data() {
    return {
      search: '',
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.table-card {
  margin: 20px auto;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0);
}

.table-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  padding: 16px;
  background-color: #003459;
  color:white ;
  border-radius: 12px 12px 0 0;
}

.v-data-table {
  background-color: white;
  margin-top: 0;
  border-radius: 0 0 12px 12px;

}

.v-data-table-header {
  background-color: #f1f1f1;
  font-weight: 700;
}

.v-data-table th {
  color: #555;
  font-size: 16px;
}

.v-data-table td {
  color: #333;
  font-size: 14px;
}

.search-field {
  max-width: 600px; 
  width: 100%;
  margin: 16px auto;
  border-radius: 8px;
}

.v-text-field--solo .v-input__control {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

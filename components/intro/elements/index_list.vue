<template>
  <div
    id="index-box"
    class="zero-opacity"
    style="transform: translateX(-50%) translateY(-50%) scale(0)"
  >
    <div id="index-list">
      <tbody>
        <tr v-for="company in indexList" :key="`company-${company[0]}`" class="company-row">
          <td>{{ company[0] }}</td>
          <td>{{ company[1] }}</td>
          <td>{{ company[2] }}</td>
          <td>{{ company[3] }}</td>
          <td class="table-right">{{ company[4] }}</td>
          <td
            :class="
              `table-right ${company[5] == 'pos' ? 'pos-color' : 'neg-color'}`
            "
          >{{ company[6] }}</td>
          <td
            :class="
              `table-right ${company[7] == 'pos' ? 'pos-color' : 'neg-color'}`
            "
          >{{ company[8] }}</td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import data from "~/static/data/index-list.json";
export default {
  data() {
    return {
      indexList: data
    };
  }
};
</script>

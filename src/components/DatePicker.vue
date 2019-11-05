<template>
  <div>
    <DatePicker v-model="pickedDate" />
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  name: "datePicker",
  components: {
    DatePicker
  },
  data() {
    return {
      pickedDate: new Date()
    }
  }
};
</script>
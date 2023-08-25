<template>
  <div>
    <h1>Horario</h1>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import DayGrid from "@fullcalendar/daygrid";
import TimeGrid from "@fullcalendar/timegrid";
import Interaction from "@fullcalendar/interaction";
import List from "@fullcalendar/list";
import RRule from "@fullcalendar/rrule";

export default {
  data() {
    return {
      calendarOptions: {
        locale: "es",
        plugins: [DayGrid, TimeGrid, Interaction, List, RRule],
        initialView: "timeGridWeek",
        headerToolbar: {
          left: "timeGridWeek timeGridDay listWeek",
          center: "title",
          right: "prev today next",
        },
        slotLabelFormat: {
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: false,
          meridiem: "short",
        },
        titleFormat: {
            year: 'numeric', 
            month: 'short'
        },
        dayHeaderFormat: {
            weekday: 'long'
        },
        nowIndicator: true,
        contentHeight: 'auto',
        buttonText: {
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          list: "Agenda",
        },
        allDayText: 'Día Entero',
        weekends: true,
        selectable: true,
        editable: false,
        events: [
          {
            daysOfWeek: ["4"],
            startTime: "07:00:00",
            endTime: "09:00:00",
            color: "green",
          },
          {
            daysOfWeek: ["4"],
            startTime: "07:00:00",
            endTime: "09:00:00",
            color: "green",
          },
        ],
      },
    };
  },
  components: {
    FullCalendar,
  },
};
</script>

<style>
.fc-toolbar {
  text-transform: capitalize;
  text-align: center;
}

.fc-timegrid {
  background: #ffffff;
}

.fc-col-header-cell-cushion {
    text-transform: capitalize;
}

.fc-timegrid-axis-cushion {
    text-transform: capitalize;
    text-align: center;
}

.fc-scrollgrid-section-header {
    background: #ff8181;
}
</style>
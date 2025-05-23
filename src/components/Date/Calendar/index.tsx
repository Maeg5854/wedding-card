"use client";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import _Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export default function WeddingDateCalendar() {
  const weddingDate = dayjs("2025-08-23 16:30").locale("ko");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "33px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <WeddingDate>{weddingDate.format("YYYY년 MM월 DD일")}</WeddingDate>
        <WddingTime>{weddingDate.format("dddd A HH시 mm분")}</WddingTime>
      </div>
      <Calendar
        value={weddingDate.toDate()}
        formatDay={(locale, date) => date.getDate().toString()}
        showNavigation={false}
        selectRange={false}
        showNeighboringMonth={false}
        onChange={() => {}}
        calendarType="gregory"
        tileClassName={({ date, view }) => {
          if (view === "month") {
            const day = date.getDay();
            return day === 0 ? "sunday" : "";
          }
        }}
      />
    </div>
  );
}

const WeddingDate = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: SeoulHangangCB;
  font-size: 18px;
`;

const Calendar = styled(_Calendar)`
  width: 267px;
  background: #ffff;
  font-family: SeoulHangangCL;
  border: none;
  line-height: 1.125em;
  border-radius: 10px;

  .react-calendar__month-view__weekdays__weekday {
    text-decoration: none;
    font-weight: normal;

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  .react-calendar__tile--active {
    background: #e79b9b !important;
    border-radius: 50%;
    color: white;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: transparent;
    cursor: default;
  }

  .sunday {
    color: #d44d4d;
  }
`;

const WddingTime = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: SeoulHangangCL;
  font-size: 16px;
`;

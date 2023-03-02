import React, { FormEvent } from "react";
import Button from "../UI/Button";
import classes from "./EventSearch.module.css";
import { useRef } from "react";

interface Props {
  onSearch: (year: string, month: string) => void;
}

const EventSearch: React.FC<Props> = ({ onSearch }) => {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const findEventHandler = (event: FormEvent) => {
    event.preventDefault();
    const year = yearRef.current!.value;
    const month = monthRef.current!.value;
    if (!year && !month) {
      console.log("invalid");
      return;
    }
    onSearch(year, month);
  };
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <select ref={yearRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <select ref={monthRef}>
            <option value="1">January</option>
            <option value="2">Febuary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
          </select>
        </div>
      </div>
      <Button onClick={findEventHandler}>Find Events</Button>
    </form>
  );
};

export default EventSearch;

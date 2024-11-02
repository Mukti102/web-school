import React, { useEffect } from "react";
import { apiClient } from "../../../api/api";
import CardEvent from "../../ui/CardEvent";
import Skeleton from "../../ui/Skeleton";
import Loading from "../../Loading";

export default function AllEvent() {
  const [events, setEvents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await apiClient.get("agenda");
        setEvents(res.data.data);
        setIsLoading(false);
      } catch {
        console.log("error");
      }
    };
    getData();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pt-20 px-5 dark:bg-background">
      <h1 className="sm:font-bold  text-white py-5 text-xl sm:text-3xl">
        Semua Agenda
      </h1>
      <div className="gap-4 px-0 sm:px-10 bg-background grid grid-cols-3   w-full sm:mt-5">
        {events.map((item, index) => (
          <CardEvent item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

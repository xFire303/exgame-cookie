import { Box, Table } from "@mui/joy";
import { StudentSubscriptionRow } from "./StudentSubscriptionRow";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Exam, Session, Subscription } from "../../../../../api-types";
import { config } from "../../../config";
import { useFetch } from "../../../lib/useFetch";

export const SessionReport: React.FC = () => {
  const fetch = useFetch();
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [exam, setExam] = useState<Exam | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[] | null>(null);


  const { sessionId } = useParams();

  useEffect(() => {
    fetch(`${config.API_BASEPATH}/sessions/${sessionId}`)
  .then((res) => res?.json())
  .then(setSession)
  .catch(console.error);
  }, [sessionId]);

  useEffect(() => {
    fetch(`${config.API_BASEPATH}/exam/${session?.exam_id}`)
  .then((res) => res?.json())
  .then(setExam)
  .catch(console.error);
  }, [session?.exam_id]);

  useEffect(() => {
    fetch(`${config.API_BASEPATH}/subscriptions/${sessionId}`)
  .then((res) => res?.json())
  .then(setSubscriptions)
  .catch(console.error);
  }, [sessionId]);




  return (
    <>
      <h1>{exam?.name}: sessione del 24/10/2024</h1>
      <h2>{session?.student_class}</h2>

      <Box></Box>

      <Table>
        <tr>
          {subscriptions?.map((value) => (
            <StudentSubscriptionRow
              first_name={value.student_id.first_name}
              last_name={value.student_id.last_name}
              results={value.grade}
            ></StudentSubscriptionRow>
          ))}
        </tr>
      </Table>
    </>
  );
};

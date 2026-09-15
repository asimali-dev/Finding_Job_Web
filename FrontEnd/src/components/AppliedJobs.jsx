import React, { useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useParams } from "react-router-dom";
import axios from "axios";



function AppliedJobs() {
  const { id } = useParams();
  const [appliedjob, setappliedjob] = useState([]);
  useEffect(() => {
    const FetchAppliedJobs = async () => {
      try {
        console.log("chala ha")
        const res = await axios.get(
          `http://localhost:3000/api/v1/applicants/get/apply/${id}`,
          {
            withCredentials: true
          }
        )
        if (res.data.success) {

          console.log("Applied Jobs:", res.data.application);
          setappliedjob(res.data.application)
        }

      } catch (error) {
        console.log(error)

      }
    }
    FetchAppliedJobs()

  }, [id])
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <Table>
        <TableCaption className="pb-4">
          A list of your applied jobs.
        </TableCaption>

        <TableHeader className="text-[18px]">
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-[16px]">
          {appliedjob.map((item) => (
            <TableRow key={item._id}>
              <TableCell>17-07-2026</TableCell>

              <TableCell>{item?.job?.title}</TableCell>

              <TableCell>{item?.job?.company?.name}</TableCell>

              <TableCell className="text-right">
                <Badge className={item.status === "accepted"
                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                  : item.status === "rejected"
                    ? "bg-red-100 text-red-700 hover:bg-red-100"
                    : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"}>
                  {item?.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobs;
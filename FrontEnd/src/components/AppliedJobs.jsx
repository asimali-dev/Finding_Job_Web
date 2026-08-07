import React from "react";
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

function AppliedJobs() {
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
          {[1, 2, 3, 4].map((item, index) => (
            <TableRow key={index}>
              <TableCell>17-07-2026</TableCell>

              <TableCell>Full Stack Developer</TableCell>

              <TableCell>Google</TableCell>

              <TableCell className="text-right">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  Selected
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
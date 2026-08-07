import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import Filterbar from "./Filterbar";

function MobileFilter() {
  return (
    <div className="lg:hidden mb-5 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex items-center gap-2">
            <Filter size={18} />
            Filters
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[320px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filter Jobs</SheetTitle>
          </SheetHeader>

          <div className="mt-6">
            <Filterbar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileFilter;
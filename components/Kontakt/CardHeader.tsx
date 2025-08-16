import { Calendar } from "lucide-react";
import React from "react";

type CardHeaderProps = {
  title: string;
};

function CardHeader({ title }: CardHeaderProps) {
  return (
    <div className="flex items-center mb-6">
      <Calendar className="h-6 w-6 mr-2 text-primary" />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

export default CardHeader;

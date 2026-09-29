import type React from "react";
import './StatCard.css'

type StatCardProps = {
    title: string;
    value: string;
    description: string;
    svg: React.ReactNode;
  };
  
  const StatCard = ({ title, value, description,svg }: StatCardProps) => {
    return (
      <div className="statCard">
        <div className="cardHeader">
            <h3>{title}</h3>
            <span>{svg}</span>
        </div>
        <h2>{value}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default StatCard;
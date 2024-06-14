import { ReactNode } from "react";

export interface Ticket {
  adult: number;
  child: number;
  old: number;
}

export interface TravelDetails {
  id: string;
  industry: string;
  name: string;
  orderDate: string;
  ticket: Ticket;
  amount: number;
  paymentState: number;
  paymentDescription: string;
  paymentDeadline?: string
  imageUrl: string;
  description: string;
  tags: string[];
}

export interface OrderItemType {
  name: string;
  imgUrl: string;
  orderDate: string;
  amount: number;
  ticket: {
    adult: number;
    child: number;
    old: number;
  };
  paymentDescription?: string;
  paymentDeadline?: string
  children?: ReactNode;
}

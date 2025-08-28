export interface Payment {
  id?: number;
  orderId?: string;
  totalOrderPrice?: number;
  paymentStatus?: number;
  modeOfPayment?: string;
  accountNumber: string;
  cvv?: number;
}

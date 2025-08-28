export interface Iorder {
  id?: number;
  orderId?: string;
  userId?: number;
  foodId: number;
  foodquantity: number;
  totalOrderPrice?: number;
  orderStatus?: number;
}

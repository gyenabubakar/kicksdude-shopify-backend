export interface OrderEdit {
  order_edit: {
    id: number;
    app_id: number;
    created_at: string;
    notify_customer: boolean;
    order_id: number;
    staff_note: string;
    user_id: number;
    line_items: {
      additions: any[];
      removals: any[];
    };
    discounts: {
      line_item: {
        additions: any[];
      };
    };
    shipping_lines: {
      additions: any[];
    };
  };
}


package ecommerce_system;

public class order {
  private  int customer_id ;
  private int orderid;
  private Product[]products;
  private float totalprice;

    
    public int getCustomer_id() {
        return customer_id;
    }

    
    public void setCustomer_id(int customer_id) {
        this.customer_id =Math.abs( customer_id);
    }

    
    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = Math.abs(orderid);
    }

    public Product[] getProducts() {
        return products;
    }

    public void setProducts(Product[] products) {
        this.products = products;
    }

    public float getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(float totalprice) {
        this.totalprice =Math.abs( totalprice);
    }
    public order(){}
    
    
    public void printorderinfo()
    {System.out.println("Here's your order's summary: ");
      System.out.println("Order ID : " +orderid);
        System.out.println("Customer ID : " +customer_id);
        
     }
}

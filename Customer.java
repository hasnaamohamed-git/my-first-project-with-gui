package ecommerce_system;
public class Customer {
    private int customer_id;
     String name;
     String address;
     
    public int getCustomer_id() {
        return customer_id;
    }
    
    public void setCustomer_id(int customer_id) {
        this.customer_id = Math.abs(customer_id);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    } public Customer(){}
    public Customer(int customer_id,String name,String address){
    setCustomer_id(customer_id);
    this.name=name;
    this.address=address;
    
    }
    
}

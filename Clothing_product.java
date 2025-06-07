
package ecommerce_system;

public class Clothing_product extends Product {
   String size;
    String fabric; 

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getFabric() {
        return fabric;
    }
    
    public void setFabric(String fabric) {
        this.fabric = fabric;
    }
    public Clothing_product(){}
    public Clothing_product( int product_id,String name,float price,String size,String fabric){ 
    super  ( product_id,name, price);  
        this.size=size;
    this.fabric=fabric;}
    
}

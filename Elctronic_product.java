
package ecommerce_system;
public class Elctronic_product  extends Product{
     String brand;
    private int warranty_period;
    
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getWarranty_period() {
        return warranty_period;
    }

    public void setWarranty_period(int warranty_period) {
        this.warranty_period = Math.abs(warranty_period);
    }
     public Elctronic_product(){}
     public Elctronic_product(int product_id,String name,float price,String brand,int warranty_period){
     super( product_id,name, price);
     setBrand(brand);
     setWarranty_period(warranty_period);
     }
     
}


package ecommerce_system;
public class Product {
   private int product_id;
   String name;
   private float price;
   
 public void setname(String name){
 this.name=name;
 }
  public String getname(){
  return name;
  } 
   public void setprice(float  price){
   this.price=Math.abs(price);
   } 
  public float getprice(){
  return price;}
  
  public void setproduct_id(int product_id){
  this.product_id=Math.abs(product_id);
  
  }
  public int getproduct_id(){return product_id;}
  public Product(){}
  
  
  public Product(int product_id,String name,float price){
  setproduct_id(product_id);
  setname(name);
  setprice(price);
  
  }
}

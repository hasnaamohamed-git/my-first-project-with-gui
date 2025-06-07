
package ecommerce_system;

import java .util.Scanner;
public class Cart {
    private int customer_id;
    private  int nproduct;
    Product[]productsss;
    
order order1 ;
int round=0;


    Scanner input=new Scanner(System.in);
    public int getCustomer_id() {
        return customer_id;
    }

    
    public void setCustomer_id(int customer_id) {
        this.customer_id = Math.abs(customer_id);
                order1.setCustomer_id(customer_id);
    }

    public int getNproduct() {
        return nproduct;
    }
    
    public void setNproduct(int nproduct) {
        this.nproduct = Math.abs(nproduct);
    }

    public Product[] getProducts() {
        return productsss;
    }

    public void setProducts(Product[] products) {
        this.productsss = products;
    }
   
    public Cart(){
        this.order1 = new order();
    order1.setProducts(productsss);
}
    
    public void addproduct(Product producttt){
        
    if(round<=nproduct){
        Boolean f=true;
        for(int i=0;i<round&&f==true;i++){
           if(productsss[i].getprice()==0){
             productsss[i].setname(producttt.getname());
              productsss[i].setprice(producttt.getprice());
                productsss[i].setproduct_id(producttt.getproduct_id());
      
        f=false;
        }}
        if(f==true){
        productsss[round]=new Product(producttt.getproduct_id()
              ,producttt.name,producttt.getprice());
        round++;
        }}
    
    if(round>=nproduct)
    {System.out.println("you reached to your limit");
    }
        
    }
    public void removeproduct(Product p){Boolean flag3=true;
   for(int i=0;i<round&&flag3==true;i++){
   if(p.name.equals (productsss[i].name)){
       
   productsss[i].setprice(0);
   flag3=false;
   
   }}}
   
    public float calculate(){
    float total=0;
    for(int i=0;i<round;i++){
    total+=productsss[i].getprice();
    
    }
    return total;
    
    }

   public void placeorder(){
   order1.setTotalprice(calculate());
       System.out.println("Your total  is :" +order1.getTotalprice());
       System.out.println(" Would you like to place the order?  1-yes 2-No");
       int flag=input.nextInt();
       if (flag==1){
       order1.setOrderid(flag);
       order1.printorderinfo();
           System.out.println("Products : ");
       for(int i=0;i<round;i++){
       if(productsss[i].getprice()!=0){
       
           System.out.println(productsss[i].getname()+" --> " +productsss[i].getprice());
       
      }
       }
           System.out.println("Total price : " +order1.getTotalprice());
       }
   
       if(flag==2){
       System.out.println("we hope to help you in another time");
   for(int i=0;i<round;i++){
   productsss[i].setprice(0);
   }
   }
  if(round>=nproduct)
  {System.out.println("Do you want to empty your cart ");
  Boolean flag2=input.nextBoolean();
  if(flag2==true){round=0;}
  else{  System.out.println("you reached to limit orders you must empty your cart");} }
   }
     }

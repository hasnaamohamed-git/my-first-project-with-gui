package ecommerce_system;
import java.util.Scanner;
public class Ecommerce_System {
     
public static void main(String[] args) {
Scanner inpuut=new Scanner(System.in);
  //if we use console to react with user
  //  
      /* System.out.println("Welcome to the E-commerce System! ");
 
 Elctronic_product q1=new Elctronic_product();
 q1.setname("SmartPhone");q1.setproduct_id(1);
 q1.setprice((float) 599.99);q1.setBrand("Smasung");q1.setWarranty_period(1);
 
 Book_product q2=new Book_product();
 q2.setname("OOP");q2.setproduct_id(3);q2.setprice((float) 39.99);
 q2.setAuthor("O'Reilly");q2.setPublisher("X publications");
 
 Clothing_product q3=new Clothing_product();
 q3.setname("T-shirt");q3.setproduct_id(2);
 q3.setprice((float) 19.99);q3.setSize("Medium");q3.setFabric("Cotton");
 
    Customer cc=new Customer();
 System.out.println("Please enter your id: ");
              int id=inpuut.nextInt();
               cc.setCustomer_id(id);
   
              inpuut.nextLine();
 System.out.println("Please enter your name: ");
               String n=inpuut.nextLine();
               cc.setName(n);
        
 System.out.println("Please enter your address: ");
                String address=inpuut.nextLine();
              cc.setAddress(address);
        
        
            Cart car=new Cart();
 System.out.println("How many products you want to add to your cart ? ");
             int number=Math.abs(inpuut.nextInt());
             car.setNproduct(number);
             car.productsss= new Product[number];

             car.setCustomer_id(id);
    for(int i=0;i<number;i++){
            System.out.println("Which product would you like to add ?  1-SmartPhone  2-T-shirt  3-OOP");
                        int pro=inpuut.nextInt();
          if (pro==1){
                      car.addproduct(q1);
        }
         else if(pro==2){car.addproduct(q3);}
         else if(pro==3){car.addproduct(q2);
        }
        else{System.out.println("invalid value");
    }
    
}
      
        car.placeorder();*/
      
    
    //react with user by using gui
  Gui1 h=new Gui1();
 
      
    }}
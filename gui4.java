
package ecommerce_system;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JPanel;
import static javax.swing.WindowConstants.EXIT_ON_CLOSE;
public class gui4 extends JFrame implements ActionListener{
String x,y;
int z;
float m;
int a=0;
int b=0;
int c=0;
int d=0;
int round=0;

    JMenu g1=new JMenu("HELP  ");
      JMenu g2=new JMenu(" Return   ");
      JMenu g3=new JMenu(" Cart  "); 
      JMenuBar bar=new JMenuBar();
     JButton b00=new JButton(" Homepage");
     JButton b000=new JButton(" your cart ");
    JLabel l2 =new JLabel("OOP");
    JLabel l1 =new JLabel("SmartPhone    ");
    JLabel l3 =new JLabel(" Tablet");
    JLabel l4 =new JLabel("T-shirt");
    JLabel l6 =new JLabel(" $599.99 ");
    JLabel l5 =new JLabel(" $39.99");
    JLabel l7 =new JLabel(" $19.99");
    JLabel l8 =new JLabel("  $299.99");
     JButton b1=new JButton(" Buy  ");
    JButton b2=new JButton(" Cancel");
    JButton b3=new JButton(" Buy ");
    JButton b4=new JButton(" Cancel ");
    JButton b5=new JButton(" Buy ");
    JButton b6=new JButton(" Cancel ");
    JButton b7=new JButton(" Buy ");
    JButton b8=new JButton(" Cancel "); 
    Font newfont=new Font("h",Font.BOLD,60);
    
     Font newfont1=new Font("h",Font.BOLD,40);
     Font newfont3=new Font("h",Font.BOLD,20);
    gui3 p=new gui3();
    Cart q1;
        Elctronic_product q4;
        Clothing_product q3;
        Book_product q2;
        Elctronic_product q11;
    public gui4(String x,String y,int z){ 
        this.x=x;
        this.y=y;
        this.z=z;
        q1=new Cart();
        
        q1.setNproduct(z);
                 q1.productsss= new Product[z];
     
 q11=new Elctronic_product();
 q11.setname("SmartPhone");q11.setproduct_id(1);
 q11.setprice((float) 599.99);q11.setBrand("Smasung");q11.setWarranty_period(1);
  q2=new Book_product();
  
  
 q2.setname("OOP");q2.setproduct_id(3);q2.setprice((float) 39.99);
 q2.setAuthor("O'Reilly");q2.setPublisher("X publications");
 
 q3=new Clothing_product();
 q3.setname("T-shirt");q3.setproduct_id(2);
 q3.setprice((float) 19.99);q3.setSize("Medium");q3.setFabric("Cotton");
        
        q4=new Elctronic_product();
 q4.setname("Tablet");q4.setproduct_id(4);
 q4.setprice((float) 299.99);q4.setBrand("Smasung");q4.setWarranty_period(1);
 
   
        b00.addActionListener(this);
         b000.addActionListener(this);
         b1.addActionListener(this);
         b2.addActionListener(this);
         b3.addActionListener(this);
         b4.addActionListener(this);
         b5.addActionListener(this);
         b6.addActionListener(this);
         b7.addActionListener(this);
         b8.addActionListener(this);
         
        bar.setBackground(Color.BLACK);
      g1.setForeground(Color.LIGHT_GRAY);
      g2.setForeground(Color.LIGHT_GRAY);
      g3.setForeground(Color.LIGHT_GRAY);
        g1.setFont(newfont3);
        g2.setFont(newfont3);
        b00.setBackground(Color.black);
        b00.setForeground(Color.darkGray);
        b000.setBackground(Color.black);
        b000.setForeground(Color.darkGray);
        g2.add(b00);
        g3.setFont(newfont3);g3.add(b000);
        bar.add(g1); bar.add(g2);
        bar.add(g3);
        bar.setBounds(0, 650,1620, 30);
        
        p.add(bar);
         b1.setForeground(Color.WHITE);
        
        b1.setBackground(Color.PINK);
        b1.setFont(newfont3);
        
        b1.setBounds(100,220,160,50);
        p.add(b1);
        
        b2.setForeground(Color.WHITE);
        
        b2.setBackground(Color.PINK);
        b2.setFont(newfont3);
        
        b2.setBounds(300,220,160,50);
        p.add(b2);
        
        b3.setForeground(Color.WHITE);
        
        b3.setBackground(Color.PINK);
        b3.setFont(newfont3);
        
        b3.setBounds(700,220,160,50);
        p.add(b3);
        
        b4.setForeground(Color.WHITE);
        b4.setBackground(Color.PINK);
        b4.setFont(newfont3);
        
        b4.setBounds(900,220,160,50);
        p.add(b4);
        b5.setForeground(Color.WHITE);
        b5.setBackground(Color.PINK);
        b5.setFont(newfont3);
        b5.setBounds(100,540,160,50);
        p.add(b5);
        b6.setForeground(Color.WHITE);
        b6.setBackground(Color.PINK);
        b6.setFont(newfont3);
        b6.setBounds(300,540,160,50);
        p.add(b6);
        b7.setForeground(Color.WHITE);
        b7.setBackground(Color.PINK);
        b7.setFont(newfont3);
        b7.setBounds(700,540,160,50);
        p.add(b7);
        b8.setForeground(Color.WHITE);
        b8.setBackground(Color.PINK);
        b8.setFont(newfont3);
        b8.setBounds(900,540,160,50);
        p.add(b8);
        l6.setBackground(Color.PINK);
        l6.setFont(newfont3);
        l6.setBounds(470,200,100,50);
        p.add(l6);
        l5.setBackground(Color.PINK);
        l5.setFont(newfont3);
        l5.setBounds(1075,200,100,50);
        p.add(l5);
        l8.setBackground(Color.PINK);
        l8.setFont(newfont3);
        
        l8.setBounds(470,520,100,50);
        p.add(l8);
        
        l1.setForeground(Color.CYAN);
        
        l1.setBackground(Color.PINK);
        l1.setFont(newfont1);
       
        l7.setBackground(Color.PINK);
        l7.setFont(newfont3);
        
        l7.setBounds(1075,520,100,50);
        p.add(l7);
        
        l1.setBounds(120,60,300,150);
        p.add(l1);
       
        l2.setForeground(Color.CYAN);
        l2.setBackground(Color.PINK);
        l2.setFont(newfont);
        l2.setBounds(720,60,340,150);
        p.add(l2);
        
        l3.setForeground(Color.CYAN);
        l3.setBackground(Color.PINK);
        l3.setFont(newfont);
        l3.setBounds(120,380,300,150);
        p.add(l3);
        
        l4.setForeground(Color.CYAN);
        l4.setBackground(Color.PINK);
        l4.setFont(newfont);
        
        l4.setBounds(720,380,300,150);
        p.add(l4);
    this.setSize(1620,720);
    this.setLocation(0,0);
    this.setResizable(false);
    this.setVisible(true);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    p.setBackground(Color.pink);
    p.setForeground(Color.black);
    this.add(p);
p.setLayout(null);
 }

    @Override
    public void actionPerformed(ActionEvent e) {
      if(e.getSource()==b00){
      Gui1 sd=new Gui1();
      }
      if(e.getSource()==b000){
          m=q1.calculate();
         
      gui5 q2=new gui5(x,y,z,m,a,b,c,d);
      }
      if(e.getSource()==b1)
      {
          if(round>=z){
          gui6 q=new gui6();
          }
          else{ 
          a++;round++;
      q1.addproduct(q11);
      b1.setBackground(Color.red);
      b2.setBackground(Color.PINK);}
      }
      if(e.getSource()==b3)
      {
          if(round>=z){
          gui6 q=new gui6();
          }
          else{ 

          b++;round++;
      q1.addproduct(q2);
      b3.setBackground(Color.red);
      b4.setBackground(Color.PINK);
      }}
      if(e.getSource()==b5)
      {
          if(round>=z){
          gui6 q=new gui6();
          
          }
          else{ 
          c++;round++;
      q1.addproduct(q4);
      b5.setBackground(Color.red);
       b6.setBackground(Color.PINK);
      }}
      if(e.getSource()==b7)
      { 
          if(round>=z){
          gui6 q=new gui6();
          }
          else{ 
                d++;round++;
      q1.addproduct(q3);
      b7.setBackground(Color.red);
       b8.setBackground(Color.PINK);
      }}
      if(e.getSource()==b2)
      {a--;round--;
      q1.removeproduct(q11);
      b2.setBackground(Color.red);
      b1.setBackground(Color.PINK);
      }
      if(e.getSource()==b4)
      {b--;round--;
      q1.removeproduct(q2);
      b4.setBackground(Color.red);
      b3.setBackground(Color.PINK);
      }
      if(e.getSource()==b6)
      {c--;round--;
      q1.removeproduct(q4);
      b6.setBackground(Color.red);
      b5.setBackground(Color.PINK);
      }
      if(e.getSource()==b8)
      {d--;round--;
      q1.removeproduct(q3);
      b8.setBackground(Color.red);
      b7.setBackground(Color.PINK);
      }
      
      
    }
}


package ecommerce_system;

import javax.swing.*;
import java .awt.*;
import java .awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
public class gui5 extends JFrame implements ActionListener{
    JPanel p=new JPanel();
    String x,y;
    int z;float m;
    int a,b,c,d;
   
    
    JLabel l1 =new JLabel(" name  : ");
    JLabel l2 =new JLabel("ID  :  ");
    JLabel l4 =new JLabel(" Products :");
    JLabel l3 =new JLabel("Nproducts  :");
    JLabel l5 =new JLabel(" Total Price : ");
    JLabel l6 ;
    JLabel l7 ;
    JLabel l11;
    JLabel l12 ;
    JLabel l15 ;
    JLabel l25 ;
    JLabel l35 ;
    JLabel l45;
    
    
    JButton b1=new JButton(" SAVE ");
    JButton b2=new JButton(" EMPTY ");
    JMenu g1=new JMenu(" HELP");
    JMenu g2=new JMenu(" EXIT ");
    JMenuBar bar=new JMenuBar();
    public gui5(String x,String y,int z,float m,int a,int b,int c,int d){
        this.x=x;this.y=y;this.z=z;this.m=m;
        this.a=a;this.b=b;this.c=c;this.d=d;
        
     l15 =new JLabel(+a+" SmartPhone-->$ "+(599.99 *a));
   l25 =new JLabel(+b+" OOP-->$ "+(39.9*b) );
  l35 =new JLabel(+c+" Tablet-->$ "+( 299.99*c) );
  l45 =new JLabel(+d+" T-shirt-->$" +(19.99*d) );
    
        
        b2.addActionListener(this);
        l6 =new JLabel(x);
     l7 =new JLabel(Integer.toString(z));
     l11 =new JLabel(y);
       l12=new JLabel("$" +Float.toString(m)) ;
        b1.addActionListener(this);
       bar.setBackground(Color.PINK);
        bar.add(g1);
        bar.add(g2);
        bar.setBounds(0, 0,400 ,20 );
    this.setTitle("Your Data");
    
    this.setSize(400,500);
    this.setLocation(900,20);
    this.setResizable(false);
    this.setVisible(true);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    this.add(p);
 p.setForeground(Color.red);
 p.setBackground(Color.MAGENTA.darker());
 p.setLayout(null);
 l1.setBounds(30,20,70,50);
 p.add(l1);
 l6.setBounds(110,20,200,50);
 p.add(l6);
 
 l2.setBounds(50,40,70,80);
 p.add(l2);
 
 l11.setBounds(110,40,200,80);
 p.add(l11);
 l4.setBounds(20,130,70,50);
 p.add(l4);
 
 l7.setBounds(120,50,200,120);
 p.add(l7);
 
 l3.setBounds(15,60,70,100);
 p.add(l3);
 
 l15.setBounds(120,150,200,15);
 p.add(l15);
 
 l25.setBounds(120,170,200,15);
 p.add(l25);
 
 l35.setBounds(120,190,200,15);
 p.add(l35);
 
 
 l45.setBounds(120,210,200,15);
 p.add(l45);
 
 
 
 
 
l5.setBounds(10,240,90,10);
 p.add(l5);
 
 l12.setBounds(120,150,200,190);
 p.add(l12);
 
b1.setBounds(50, 350, 150, 50);
 
 b1.setBackground(Color.PINK);
b1.setForeground(Color.BLACK);
 p.add(b1);
 b1.setBounds(30, 320, 120, 50);

 
b2.setBounds(200, 320, 120, 50);
 
 b2.setBackground(Color.PINK);
b2.setForeground(Color.BLACK);
 p.add(b2);
 p.add(bar);
 
    }

    @Override
    public void actionPerformed(ActionEvent e) {
if(e.getSource()==b2){
a=0;b=0;c=0;d=0;m=0;
gui4 we=new gui4(x,y,z);
}
    }
    
    
}

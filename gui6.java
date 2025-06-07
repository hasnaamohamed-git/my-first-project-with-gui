
package ecommerce_system;

import java.awt.Color;
import java.awt.Font;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;


public class gui6 extends JFrame{
    
        JLabel l1  =new JLabel(" ERROR ");
        JLabel l2=new JLabel(" you reached to your limit!! please, empty your car to continue "); 
        JPanel m=new JPanel(); ;
         Font newfont2=new Font("h",Font.BOLD,15);
          Font newfont1=new Font("h",Font.BOLD,20);
    public gui6(){
   
       m.setBackground(Color.BLACK);
    this.setSize(500,150);
    this.setLocation(400,300);
    this.setResizable(false);
    this.setVisible(true);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
     this.add(m);
  
    m.setLayout(null);
    
    l1.setForeground(Color.PINK);
    l1.setBackground(Color.PINK);
    l1.setFont(newfont1);
    l1.setBounds(10,10 ,100, 30);
   m.add(l1);
  

    l2.setForeground(Color.PINK);
    l2.setBackground(Color.PINK);
    l2.setFont(newfont2);
    l2.setBounds(2,30 ,450, 90);
   m.add(l2); }
}






package ecommerce_system;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JPanel;
import javax.swing.JTextField;
public class Gui1 extends JFrame implements ActionListener{
    String x,y;
    int z;
    JButton b2;
    JTextField t1=new JTextField();
    JTextField t2=new JTextField();
    
    JTextField t3=new JTextField();
    public Gui1(){ Gui2 p=new Gui2();
    JLabel l3=new JLabel("Name:  ");
    JLabel l4=new JLabel("     ID  :  ");
    JLabel l5=new JLabel("NProducts: ");
     t1.addActionListener(this);
     t2.addActionListener(this);t3.addActionListener(this);
     
     
  b2=new JButton(" GO ");
   b2.addActionListener(this);
        Font newfont1=new Font("h",Font.HANGING_BASELINE,130);
        Font newfont2=new Font("h",Font.ITALIC,40);
        
        Font newfont3=new Font("h",Font.ITALIC,18);
        
         
b2.setBounds(570, 490, 140, 50);
 b2.setFont(newfont2);
 b2.setBackground(Color.PINK.darker());
b2.setForeground(Color.WHITE);
 p.add(b2);
        
        l3.setFont(newfont3);
        l3.setForeground(Color.PINK);
        l3.setBounds(520, 295, 80, 40);
        p.add(l3);
        
        t1.setForeground(Color.BLACK);
        t1.setBackground(Color.PINK);
        t1.setBounds(590,300,180,30);
        p.add(t1);
       
        l4.setFont(newfont3);
        l4.setForeground(Color.PINK);
        l4.setBounds(520, 355, 80, 40);
        p.add(l4);
        
        t2.setForeground(Color.BLACK);
        t2.setBackground(Color.PINK);
        t2.setBounds(590,355,180,30);
        p.add(t2);
      
        l5.setFont(newfont3);
        l5.setForeground(Color.PINK);
        l5.setBounds(500, 410, 100, 40);
        p.add(l5);
     
        t3.setForeground(Color.BLACK);
        t3.setBackground(Color.PINK);
        t3.setBounds(590,410,180,30);
        p.add(t3);
        
        JLabel l1=new JLabel(" SAND ");
        JLabel l2=new JLabel(" shop ");
        l1.setFont(newfont1);
        l1.setForeground(Color.BLACK.darker());
        l1.setBounds(450,60, 450, 100);
        p.add(l1);
        
         l2.setFont(newfont2);
        l2.setForeground(Color.BLACK.darker());
        l2.setBounds(850,150, 250, 60);
        p.add(l2);
        
    
    this.setSize(1620,720);
    this.setLocation(0,0);
    this.setResizable(false);
    this.setVisible(true);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    p.setBackground(Color.orange.darker());
    p.setForeground(Color.black);
    
    this.add(p);
p.setLayout(null);
    
    }

    @Override
    public void actionPerformed(ActionEvent e) {
      if(e.getSource()==b2){
         x=t1.getText().toString();
           y=t2.getText().toString();
            z=Math.abs(Integer.parseInt(t3.getText().toString()));
          
          
          
      gui4 q=new gui4(x,y,z);
      }
    }

    
}

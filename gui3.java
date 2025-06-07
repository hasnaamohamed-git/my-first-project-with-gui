
package ecommerce_system;
import javax.swing.*;
import java .awt.*;
import java .awt.Graphics ;
public class gui3  extends JPanel{
   @Override
   protected void paintComponent(Graphics g){
   super.paintComponent(g);
   g.setColor(Color.magenta.darker());
    g.fill3DRect(70, 30, 550, 250, true);
    
    g.setColor(Color. magenta.darker());
    g.fill3DRect(670, 30, 550, 250, true);
    
    g.setColor(Color.CYAN.magenta.darker());
    g.fill3DRect(70, 350, 550, 250, true);
    
    g.setColor(Color.magenta.darker());
    g.fill3DRect(670, 350, 550, 250, true);
    
    
     g.setColor(Color.black.brighter());
    g.fillOval(470, 170, 100, 100);
    
    g.setColor(Color.black.brighter());
    g.fillOval(1070,170 , 100, 100);
    
    g.setColor(Color.black.brighter());
    g.fillOval(470, 490, 100, 100);
    
    g.setColor(Color.black.brighter());
    g.fillOval(1070, 490, 100, 100);
    
    g.setColor(Color.GREEN);
    g.fillOval(617, 305,15,15);
    g.setColor(Color.GREEN);
    g.fillOval(635, 294,15,15);
    g.setColor(Color.GREEN);
    g.fillOval(653, 305,15,15);
    
    g.setColor(Color.GREEN);
    g.fillOval(623, 328,15,15);
    g.setColor(Color.GREEN);
    g.fillOval(647, 328,15,15);
    
    
    g.setColor(Color.GREEN.darker());
    g.fillOval(625, 307,35,27);
     g.setColor(Color.black.darker());
    g.fillOval(633, 312,19,17);
    
   
   }

   
}

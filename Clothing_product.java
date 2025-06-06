
package ecommerce_system;
import javax.swing.*;
import java .awt.*;
import java .awt.Graphics ;
public class Gui2  extends JPanel{
   @Override
   protected void paintComponent(Graphics g){
   super.paintComponent(g);
   g.setColor(Color.CYAN.darker());
   g.fill3DRect(0,0, 1620, 200, true);
   
   g.fillOval(0, 0, 1300, 260);
  
   g.setColor(Color.YELLOW);
   g.fillOval(40, 50,90, 50);
   
   g.setColor(Color.BLACK.brighter());
   g.fill3DRect(490, 253, 300, 350, true);
   
}}

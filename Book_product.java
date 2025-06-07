package ecommerce_system;

public class Book_product extends Product {
     String author;
     String publisher;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }
    public Book_product(){}
    public Book_product(int product_id,String name,float price,String author,String publisher){
        super( product_id, name, price);
    this.author=author;
    this.publisher=publisher;
    
    }
    
}

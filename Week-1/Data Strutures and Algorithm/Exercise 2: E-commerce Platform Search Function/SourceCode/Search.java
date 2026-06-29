public class Search {

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String name) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            int compare = products[mid].productName.compareToIgnoreCase(name);

            if (compare == 0) {
                return products[mid];
            } else if (compare < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Bag", "Accessories"),
                new Product(102, "Bottle", "Kitchen"),
                new Product(103, "Laptop", "Electronics"),
                new Product(104, "Mobile", "Electronics"),
                new Product(105, "Shoes", "Footwear")
        };

        Product result1 = linearSearch(products, "Laptop");

        if (result1 != null)
            System.out.println("Linear Search Found: " + result1.productName);
        else
            System.out.println("Product not found");

        Product result2 = binarySearch(products, "Laptop");

        if (result2 != null)
            System.out.println("Binary Search Found: " + result2.productName);
        else
            System.out.println("Product not found");
    }
} 

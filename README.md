All my updated files are pushed and available inside the master branch on GitHub.
I created a Product class with 6 properties taken from the Fake API data.

The class has a constructor to initialize the properties.

Added a displayDetails() method to show the main details of the product.

Added a getPriceWithDiscount() method to calculate the price after discount.

For discount calculation, I created a discountCalculator utility that calculates the final price after applying the discount percentage.

For tax calculation, I created a taxCalculator utility which calculates tax based on the product category using a ternary operator.

The tax is calculated in dollar amount as per instructions, and the value is returned.

I created a customFetchError class that extends the built-in Error class and includes a status code property.

The constructor of this custom error calls the parent Error constructor using super(message) and saves the HTTP status code.

I made an API service function to fetch product data asynchronously from an external API.

The API service uses try-catch blocks to handle errors:

If the fetch response is not okay, it throws a customFetchError with a status code.

If successful, it parses the JSON response and returns the product array.

Errors are caught and logged for debugging.

I created a main.js file to put everything together:

Imported Product class, calculateTax function, and fetchData function.

Defined a ProductData interface to specify product properties.

Created an async main() function to fetch data, create Product instances, calculate tax, and log product details with tax.

I used lessons(Lab1 and Lab2), documentation, and extra hours (IA hours with Bryan) to complete this project.

I am currently stuck with running the main.js file to see the output in the terminal.

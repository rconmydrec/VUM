using System;

public class Program
{

    public static void Main(string[] args)
    {
        Console.WriteLine("Enter temperature in Celsius:");
        decimal celsius = decimal.Parse(Console.ReadLine());

        Console.WriteLine("Enter temperature in Fahrenheit:");
        decimal fahrenheit = decimal.Parse(Console.ReadLine());

        CompareTemperatures(celsius, fahrenheit);
        decimal fahrenheitConverted = CelsiusToFahrenheit(celsius);
        decimal celsiusConverted = FahrenheitToCelsius(fahrenheit);

        int result = CompareTemperatures(celsius, fahrenheit);

        if (result == 0)
        {
            Console.WriteLine("Both temperatures are equal.");
            Console.ReadLine();
        }
        else if (result == 1)
        {
            Console.WriteLine($"Celsius temperature is higher by {celsius - celsiusConverted} degrees Celsius and by {fahrenheit - fahrenheitConverted} degrees Fahrenheit.");
            Console.ReadLine();
        }
        else
        {
            Console.WriteLine($"Fahrenheit temperature is higher by {celsiusConverted - celsius} degrees Celsius and by {fahrenheitConverted - fahrenheit} degrees Fahrenheit.");
            Console.ReadLine();
        }
    }

    static decimal CelsiusToFahrenheit(decimal celsius)
    {
        return (celsius * (decimal)1.8) + 32;
    }

    static decimal FahrenheitToCelsius(decimal fahrenheit)
    {
        return (fahrenheit - 32) / (decimal)1.8;
    }

    static int CompareTemperatures(decimal celsius, decimal fahrenheit)
    {
        decimal fahrenheitConverted = CelsiusToFahrenheit(celsius);
        decimal celsiusConverted = FahrenheitToCelsius(fahrenheit);

        if (celsius == celsiusConverted)
        {
            return 0;
        }

        if (celsius > celsiusConverted)
        {
            return 1;
        }
        else
        {
            return -1;
        }
    }

}

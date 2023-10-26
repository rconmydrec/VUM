using System;

public class Program
{

    public static void Main(string[] args)
    {
        Console.WriteLine("Enter temperature in Celsius:");
        double celsius = double.Parse(Console.ReadLine());

        Console.WriteLine("Enter temperature in Fahrenheit:");
        double fahrenheit = double.Parse(Console.ReadLine());

        CompareTemperatures(celsius, fahrenheit);
    }

    static double CelsiusToFahrenheit(double celsius)
    {
        return (celsius * 1.8) + 32;
    }

    static double FahrenheitToCelsius(double fahrenheit)
    {
        return (fahrenheit - 32) / 1.8;
    }

    static void CompareTemperatures(double celsius, double fahrenheit)
    {
        double fahrenheitConverted = CelsiusToFahrenheit(celsius);
        double celsiusConverted = FahrenheitToCelsius(fahrenheit);

        if (celsius == celsiusConverted && fahrenheit == fahrenheitConverted)
        {
            Console.WriteLine("Both temperatures are equal.");
            return;
        }

        if (celsius > celsiusConverted)
        {
            Console.WriteLine($"Celsius temperature is higher by {celsius - celsiusConverted} degrees Celsius and by {fahrenheit - fahrenheitConverted} degrees Fahrenheit.");
        }
        else
        {
            Console.WriteLine($"Fahrenheit temperature is higher by {celsiusConverted - celsius} degrees Celsius and by {fahrenheitConverted - fahrenheit} degrees Fahrenheit.");
        }
    }

}

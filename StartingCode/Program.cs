using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static Random rng = new Random();

    static void Main()
    {
        List<string> randomNumbers = GenerateRandomNumbersList(10, -100, 100);

        Console.WriteLine("Original List:");
        PrintList(randomNumbers);

        var sortedListAsc = randomNumbers.OrderBy(n => int.Parse(n)).ToList();
        Console.WriteLine("\nSorted Normal:");
        PrintList(sortedListAsc);

        var sortedListDesc = randomNumbers.OrderByDescending(n => int.Parse(n)).ToList();
        Console.WriteLine("\nSorted Backwards:");
        PrintList(sortedListDesc);

        var sortedByLength = randomNumbers.OrderBy(n => n.Length).ThenBy(n => int.Parse(n)).ToList();
        Console.WriteLine("\nSorted By Length:");
        PrintList(sortedByLength);
    }

    static List<string> GenerateRandomNumbersList(int count, int min, int max)
    {
        List<string> numbers = new List<string>();

        for (int i = 0; i < count; i++)
        {
            numbers.Add(rng.Next(min, max).ToString());
        }

        return numbers;
    }

    static void PrintList(List<string> list)
    {
        foreach (string item in list)
        {
            Console.WriteLine(item);
        }
    }
}
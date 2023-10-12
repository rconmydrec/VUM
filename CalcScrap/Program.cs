/* Assumption is that 10% of space is applied also to all borders */

using System;

namespace CalcScrap
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double length = 210;
            double width = 130;
            double weight = 300;
            double radius = 25;

            for (int i = 0; i < 10; i++)
            {
                int lengthCircles = CalcCircles(length, radius);
                int widthCircles = CalcCircles(width, radius);
                int allCircles = CalcAllCircles(lengthCircles, widthCircles);

                double result = CirclePercentage(length, width, weight, radius, allCircles);

                Console.WriteLine($"Input: Length: {length}, Width: {width}, Radius: {radius}, Weight: {weight}");
                Console.WriteLine($"Weight of Scrap (iteration {i + 1}): {result}");

                length += 20;
                width += 20;
                weight += 50;
                radius += 1;
            }

            Console.ReadLine();
        }

        static int CalcCircles(double dimension, double radius)
        {
            return (int)Math.Floor(dimension / (2.1 * radius + 0.1 * radius));
        }

        static int CalcAllCircles(int lengthCircles, int widthCircles)
        {
            return lengthCircles * widthCircles;
        }

        static double CirclePercentage(double length, double width, double weight, double radius, int allCircles)
        {
            double rectangleArea = length * width;
            double circlesArea = rectangleArea - ((Math.PI * radius * radius) * allCircles);
            double percentage = circlesArea / rectangleArea * 100;
            double result = (percentage / 100) * weight;
            return result;
        }
    }
}

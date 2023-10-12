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
            double r = 25;

            for (int i = 0; i < 10; i++)
            {
                int intValue = CalcLengthCircles(length, r);
                int intValue2 = CalcWidthCircles(width, r);
                int intValue3 = CalcCircles(intValue, intValue2);

                double result = CirclePercentage(length, width, weight, r, intValue3);

                Console.WriteLine($"Input: Length: {length}, Width: {width}, Radius: {r}, Weight: {weight}");
                Console.WriteLine($"Weight of Scrap (iteration {i + 1}): {result}");

                length += 20;
                width += 20;
                weight += 50;
                r += 1;
            }

            Console.ReadLine();
        }

        static int CalcLengthCircles(double length, double r)
        {
            double result = length / (2.1 * r + 0.1 * r);
            int intValue = (int)Math.Floor(result);
            return intValue;
        }

        static int CalcWidthCircles(double width, double r)
        {
            double result = width / (2.1 * r + 0.1 * r);
            int intValue2 = (int)Math.Floor(result);
            return intValue2;
        }

        static int CalcCircles(int intValue, int intValue2)
        {
            int intValue3 = intValue * intValue2;
            return intValue3;
        }

        static double CirclePercentage(double length, double width, double weight, double r, int intValue3)
        {
            double rectangleArea = length * width;
            double circlesArea = rectangleArea - ((Math.PI * r * r) * intValue3);
            double percentage = circlesArea / rectangleArea * 100;
            double result = (percentage / 100) * weight;
            return result;
        }
    }
}

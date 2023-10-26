using System;

class Program
{
    static void Main(string[] args)
    {
        string[] arrNames = new string[5];
        arrNames[0] = "Vesso";
        arrNames[1] = "Alan Bebera";
        arrNames[2] = "Ardita123";
        arrNames[3] = "bebra";
        arrNames[4] = "amogusыы";

        foreach (string name in arrNames)
        {
            if (IsValidName(name))
            {
                Console.WriteLine($"{name} - Valid Name");
            }
            else
            {
                Console.WriteLine($"{name} - Invalid Name");
            }
        }

        Console.ReadLine();
    }

    static bool IsValidName(string name)
    {
        for (int i = 0; i < name.Length; i++)
        {
            char c = name[i];
            if (!Char.IsLetter(c) && !Char.IsWhiteSpace(c))
            {
                return false;
            }
        }
        return true;
    }
}
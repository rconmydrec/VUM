using System;
using System.Globalization;

public class Program
{
    public static bool IsCorrectID(string id)
    {
        return id.Length == 10
               && long.TryParse(id, out _)
               && DateTime.TryParseExact(id.Substring(0, 6), "yyMMdd", CultureInfo.InvariantCulture, DateTimeStyles.None, out _);
    }

    public static void Main()
    {
        string[] testIDs =
        {
            "6006307744",
            "0112088762",
            "9902286654",
            "2312318877",
            "3654104321",
            "za456789"
        };

        foreach (string testID in testIDs)
        {
            Console.WriteLine($"{testID} is {(IsCorrectID(testID) ? "correct" : "incorrect")} Bulgarian ID");
        }
    }
}
using System;
using System.Text;

public class Program
{
    public static void Main()
    {
        var truncator = new Program();

        Console.WriteLine(truncator.TruncateSentence("The error is due to slow Internet connection.", 30));
        Console.WriteLine(truncator.TruncateSentence("Wrong file name.", 40));
    }

    public string TruncateSentence(string sentence, int maxLength)
    {
        if (string.IsNullOrEmpty(sentence) || sentence.Length <= maxLength)
            return sentence;

        maxLength -= 3;

        var words = sentence.Split(' ');
        var result = new StringBuilder();

        foreach (var word in words)
        {
            if (result.Length + word.Length > maxLength)
                break;

            if (result.Length > 0)
                result.Append(' ');

            result.Append(word);
        }

        result.Append("...");

        return result.ToString();
    }
}
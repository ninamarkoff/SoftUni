namespace _02.EnterNumbers
{
    using System;

    /* Problem 2. Enter Numbers
     * Write a method ReadNumber(int start, int end) that enters an integer
     * number in given range [start…end]. If an invalid number or non-number 
     * text is entered, the method should throw an exception. Using this method
     * write a program that enters 10 numbers: a1, a2, … a10, such that 
     * 1 < a1 < … < a10 < 100. If the user enters an invalid number, 
     * let the user to enter again.
     */

    public class EnterNumbers
    {
        public static int ReadNumber(int start, int end)
        {
            try
            {
                int number = int.Parse(Console.ReadLine());
                if(number <= start || number >= end)
                {
                    throw new ArgumentOutOfRangeException();
                }
                return number;
            }
            catch (Exception)
            {
                Console.WriteLine("Invalid number!");
            }
            return -1;
        }

        public static void Main()
        {
            int start = 1;
            int end = 100;

            for (int i = 0; i < 10; i++)
            {
                int number;
                do
                {
                    Console.Write("Please enter a number in the interval {{{0}, {1}}}: ", start, end);
                    number = ReadNumber(start, end);
                }
                while (number == -1);
                start = number;
            }
        }
    }
}

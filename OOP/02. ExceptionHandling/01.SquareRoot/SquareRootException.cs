namespace _01.SquareRoot
{
    using System;

    /* Problem 1.Square Root
     * Write a program that reads an integer number and calculates and prints its square root. 
     * If the number is invalid or negative, print "Invalid number".
     * In all cases finally print "Good bye". Use try-catch-finally.
     */

    public class SquareRootException
    {
        public static void Main()
        {
            Console.Write("Please enter a number: ");
            SquareRoot();
        }

        public static void SquareRoot()
        {
            try
            {
                int number = int.Parse(Console.ReadLine());
                if(number < 0)
                {
                    throw new ArgumentException();
                }
                double squareRootNumber = Math.Sqrt(number);
                Console.WriteLine("The square root of {0} is: {1}", number, squareRootNumber);
            }
            catch (Exception)
            {
                Console.WriteLine("Invalid number!");
            }
            finally
            {
                Console.WriteLine("Good bye!");
            }
        }
    }
}
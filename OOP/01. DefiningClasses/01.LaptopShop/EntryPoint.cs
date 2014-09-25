namespace _01.LaptopShop
{
    using System;

    // Define a class Laptop that holds the following information about a laptop device:
    // model, manufacturer, processor, graphics card, battery, battery life in hours, screen size and price.
    // Define 2 separate classes (class Laptop holding an instance of class Battery). 
    // Define several constructors that take different sets of arguments (full laptop/battery 
    // information or only part of it). Use proper variable types.
    // All non-numeric data should be mandatory. All numeric fields should have a default value of 0.
    // Add a method in the Laptop class that displays information about the given instance. 
    // (Tip: override ToString());
    // Use properties to validate the data. String values cannot be empty, and numeric data 
    // cannot be negative. Throw exceptions when improper data is entered. 

    public class EntryPoint
    {
        public static void Main()
        {
            
            Laptop laptopHP = new Laptop("HP 2056", "HP", "Intel", "ExtraGC", new Battery(5000));
            Console.WriteLine(laptopHP);
        }
    }
}

namespace _01.LaptopShop
{
    using System;
    using System.Text;

    public class Laptop
    {
        private string model;

        private string manufacturer;

        private string processor;

        private string graphicsCard;

        private Battery battery;

        private double screenSize;

        private decimal price;

        public Laptop(string model, string manufacturer,
            string processor, string graphicsCard, Battery battery)
        {
            this.Model = model;
            this.Manufacturer = manufacturer;
            this.Processor = processor;
            this.GraphicsCard = graphicsCard;
            this.Battery = battery;
        }

        public Laptop(string model, string manufacturer, string processor, string graphicsCard,
                        Battery battery, double screenSize = 0, decimal price = 0)
            : this(model, manufacturer, processor, graphicsCard, battery)
        {
            this.Price = price;
            this.ScreenSize = screenSize;
        }

        public string Model
        {
            get
            {
                return this.model;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The value cannot be null ot empty!");
                }
                this.model = value;
            }
        }

        public string Manufacturer
        {
            get
            {
                return this.manufacturer;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The value cannot be null ot empty!");
                }
                this.manufacturer = value;  
            }
        }

        public string Processor
        {
            get
            {
                return this.processor;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The value cannot be null ot empty!");
                }
                this.processor = value;   
            }
        }

        public string GraphicsCard
        {
            get
            {
                return this.graphicsCard;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The value cannot be null ot empty!");
                }
                this.graphicsCard = value;
            }
        }

        public Battery Battery
        {
            get
            {
                return this.battery;
            }
            set
            {
                if (String.IsNullOrEmpty(value.ToString()))
                {
                    throw new ArgumentException("The value cannot be null ot empty!");
                }
                this.battery = value;
            }
        }

        public double ScreenSize
        {
            get
            {
                return this.screenSize;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("The value cannot be negative!");
                }
                this.screenSize = value;   
            }
        }

        public decimal Price
        {
            get
            {
                return this.price;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("The value cannot be negative!");
                }
                this.price = value;   
            }
        }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine("Model: " + this.Model);
            result.AppendLine("Manufacturer:" + this.Manufacturer);
            result.AppendLine("Screen Size: " + this.ScreenSize);
            result.AppendLine("Price: " + this.Price.ToString());
            result.AppendLine("Battery: " + this.Battery.ToString());
            result.AppendLine("--------------------------------------------");
            return result.ToString();
        }
    }
}

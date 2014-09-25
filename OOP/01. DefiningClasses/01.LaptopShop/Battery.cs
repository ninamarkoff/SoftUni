namespace _01.LaptopShop
{
    using System;
    using System.Text;

    public class Battery
    {
        private int batteryLife;

        public Battery(int batteryLife = 0) : this()
        {
            this.BatteryLife = batteryLife;
        }

        public Battery()
        {
            
        }

        public int BatteryLife
        {
            get
            {
                return this.batteryLife;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("The value cannot be negative!");
                }
                this.batteryLife = value;
            }
        }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine("Battery Life (in hours): " + this.BatteryLife);
            result.AppendLine("--------------------------------------------");
            return result.ToString();
        }
    }
}

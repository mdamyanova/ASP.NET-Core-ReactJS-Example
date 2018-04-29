namespace ASPNETCoreReactJS_Example.Data.Models
{
    public class Score
    {
        public int Id { get; set; }

        public int Guesses { get; set; }

        public double Time { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}
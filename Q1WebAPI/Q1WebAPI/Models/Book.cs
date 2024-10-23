namespace Q1WebAPI.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Note { get; set; }

        public Book(int bookId, string name, string description, decimal price, string note)
        {
            BookId = bookId;
            Name = name;
            Description = description;
            Price = price;
            Note = note;
        }
    }
}

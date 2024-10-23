using Microsoft.EntityFrameworkCore;
using Q1WebAPI.Models;
using System;

namespace Q1WebAPI
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }
    }
}

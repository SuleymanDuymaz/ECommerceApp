using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Persistence
{
    public static class CultureConfiguration
    {
        public static void ConfigureCulture()
        {
            var supportedCultures = new[]
            {
                new CultureInfo("en-US"),
                new CultureInfo("tr-TR"), // Türkçe için
                // Diğer desteklenen kültürleri buraya ekleyin
            };

            System.Threading.Thread.CurrentThread.CurrentCulture = supportedCultures[0];
            System.Threading.Thread.CurrentThread.CurrentUICulture = supportedCultures[0];
        }
    }
}

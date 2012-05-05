using System.Web.Mvc;

namespace MvcJsRouting.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return Content("Home details");
        }

        public ActionResult About()
        {
            return Content("About page");
        }

        public ActionResult Contact()
        {
            return Content("Contact stuff");
        }

        public ActionResult Urls()
        {
            return PartialView("_Urls");
        }
    }
}
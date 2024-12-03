import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "HEAD OFFICE & PANADURA FACILITY",
                location: "SRI LANKA",
                address:
                  "100/1, Moratuwa Road, Moronthuduwa, Panadura, Sri Lanka",
                phone: "+94 382 242 200",
                email: "info@naturub.com",
              },
              {
                title: "HORANA FACILITY",
                location: "SRI LANKA",
                address:
                  "Lot 400, Horana Export Processing Zone, Panawakanda, Horana, Sri Lanka",
                phone: "+94 345 555 7891",
              },
              {
                title: "CHITTAGONG FACILITY",
                location: "BANGLADESH",
                address:
                  "Plot 55/56 & 75-79, Sector 02, Karnaphuli EPZ, North Patenga-4204, Chittagong, Bangladesh",
                phone: "+880 312 501 700",
              },
            ].map((facility, index) => (
              <div key={facility.title + index} className="space-y-4">
                <h3 className="text-xl font-bold">{facility.title}</h3>
                <p className="text-blue-300">{facility.location}</p>
                <div className="space-y-2 text-sm">
                  <p>{facility.address}</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{facility.phone}</span>
                  </div>
                  {facility.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{facility.email}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-sm text-blue-300">
            © {new Date().getFullYear()} Naturub Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

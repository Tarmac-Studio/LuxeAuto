import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-light pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Support message */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-1">
            Need support? We're here to help.
          </h2>
          <p className="text-sm opacity-80">
            Mon-Fri: 8AM-8PM AEDT, Sat-Sun: 9AM-6PM AEDT
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          <div className="bg-white text-black p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3">
            <span className="material-icons text-base sm:text-lg">email</span>
            <a
              href="mailto:hello@carma.com.au"
              className="text-xs sm:text-sm font-medium"
            >
              hello@carma.com.au
            </a>
          </div>

          <div className="bg-white text-black p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3">
            <span className="material-icons text-base sm:text-lg">call</span>
            <a href="tel:0283193210" className="text-xs sm:text-sm font-medium">
              02 8319 3210
            </a>
          </div>

          <div className="bg-white text-black p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3">
            <span className="material-icons text-base sm:text-lg">chat</span>
            <a href="tel:0437871436" className="text-xs sm:text-sm font-medium">
              0437 871 436
            </a>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Links section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mb-8">
          <div>
            <h4 className="font-semibold mb-3">Popular Makes</h4>
            <ul className="space-y-1 opacity-80">
              <li>Toyota</li>
              <li>Hyundai</li>
              <li>Mitsubishi</li>
              <li>Mazda</li>
              <li>Kia</li>
              <li>Ford</li>
              <li>Subaru</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Popular Car Types</h4>
            <ul className="space-y-1 opacity-80">
              <li>SUVs</li>
              <li>Utes</li>
              <li>Hatchbacks</li>
              <li>Sedans</li>
              <li>Coupes</li>
              <li>Convertibles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">About Us</h4>
            <ul className="space-y-1 opacity-80">
              <li>How LuxeAuto works</li>
              <li>Car financing</li>
              <li>Checklist</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-1 opacity-80">
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-1 opacity-80">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-6" />

        {/* Legal / disclaimers */}
        <div className="text-xs opacity-70 leading-relaxed space-y-4 max-w-5xl mx-auto text-center mb-10">
          <p>
            *Estimated repayment based on an average rate calculated across all
            fixed P&I used car loans offered by LuxeAuto preferred financiers to
            eligible applicants purchasing a vehicle aged 0–7 years from build
            date. The rate does not reflect any particular product or your
            situation and does not imply credit is available to you at this
            rate. Final rate and all applications subject to financier approval.
            Fees and charges apply. The direct debit frequency options available
            from financiers may differ.
          </p>
          <p>*Within Greater Sydney</p>
          <p>NSW Motor Dealer’s License: 000000. ABN: 00 000 000 000.</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border bg-white text-black py-4 flex flex-col sm:flex-row items-center justify-center text-xs gap-2 px-4">
        <span className="opacity-80">
          © {new Date().getFullYear()} LuxeAuto
        </span>
        <div className="flex items-center gap-2">
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import Image from "next/image";
import Link from "next/link";

export default function PaymentPolicy() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
                <header className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                  <div className="w-30 h-30 relative">
                    <Image 
                      src="https://raw.githubusercontent.com/thinkagain-lab/academy/827d563df1ae8a49ff856defe56e1e0fb756e77d/public/TalLogoRound.png" 
                      alt="Think Again Lab Logo" 
                      width={100} 
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  <a href="/#register" className="bg-gradient-to-r from-blue-500 to-green-500 text-white  inline-block px-8 py-3 rounded-full font-bold transition hover:scale-105 hover:bg-green-400">
                    Register Now
                  </a>
                </header>
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Payment Policy</h1>
      <div className="text-sm text-gray-600 mb-8 text-center">Last updated 14th April 2025</div>
      
      <div className="space-y-6">
        <section>
          <p className="mb-4">
            We use Razorpay/Direct Bank Transfer for processing payments. We/ Razorpay do not store your card data on servers. 
            The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. 
            Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. 
            After that is complete, your purchase transaction information is not saved.
          </p>
          <p className="mb-4">
            Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, 
            which is a joint effort of brands like Rupay, Visa, MasterCard, American Express, and Discover.
          </p>
          <p className="mb-4">
            PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Payment Terms</h2>
          <p className="mb-4">
            If an enrolment is requested for any Course via the Site, Application or Services, We will either pre-approve, 
            confirm or reject the enrolment request within the period of 7 days from the date of the request for enrolment 
            ('Enrolment Request Period'), otherwise, the enrolment request will automatically expire. If we are unable to 
            confirm or decide to reject an enrolment request within the Enrolment Request Period, any amounts collected by 
            Think Again Lab for the requested enrolment will be refunded to the concerned Student. When we confirm an enrolment 
            requested by a Student, Think Again Lab will send the Student an email, text message or message via e-mail and the 
            Application confirming such enrolment, depending on the selections you make via the Site, Application and Services.
          </p>
          <p className="mb-4">
            The Course Fees payable will be displayed to the Student before the Student sends an enrolment request to Think Again Lab. 
            Upon receipt of the Students enrolment request, Think Again Lab may initiate a pre-authorization and/or charge a nominal 
            amount to Student's Payment Method pursuant to the Payments Terms. If a requested enrolment is canceled (before any confirmations 
            are provided), any amounts collected by Think Again Lab will be refunded to such Student, depending on the selections the Student 
            makes via the Site and Application, and any pre-authorization of Student's Payment Method will be released, if applicable.
          </p>
          <p className="mb-4">
            Think Again Lab will collect the Course Fees from Students at the time of the enrolment request.
          </p>
          <p className="mb-4">
            Think Again Lab agrees that no refund will be permitted in respect of workshops or services already provided and in accordance 
            with the cancellation policy reflected in the relevant Listing, (i) permit the Student to cancel the enrolment and (ii) refund 
            to the Student that portion of the Course Fees specified in the applicable cancellation policy. In case relevant Listing does not 
            have a specified cancellation policy, the refund amount would be pro-rata to the unconsumed portion of the service.
          </p>
          <p className="mb-4">
            You agree that Think Again Lab through its Site or Application would raise system generated invoice to the Student in relation to 
            the Course for which the Student has enrolled or in relation to any kind of payment done, as per applicable laws. Think Again Lab 
            will raise an invoice for the above which shall be inclusive of all applicable taxes.
          </p>
          <p className="mb-4">
            You as a Student agree to pay the Course Fees for any enrolment requested, in connection with your Think Again Lab Account. 
            Think Again Lab will collect the Course Fees pursuant to the Payments Terms.
          </p>
          <p className="mb-4">
            Once you're confirmed enrolment transaction is complete you will receive a confirmation email summarizing your confirmed enrolment.
          </p>
          <p className="mb-4">
            Once the payment and confirmation is done, the classes start within 7 days of enrollment or according to the convenience of the customer.
          </p>
          <p className="mb-4">
            In case of any development project/product, Think Again Lab will first generate a Quotation in against of the requirement sent by the 
            client for the project/product via application/website/meeting. Think Again Lab has a very transparent payment method for any 
            development project/ product and is divided into 2 parts: 60% of the amount is paid once the project is confirmed; rest 40% of the 
            amount is paid after the project is deployed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Taxes</h2>
          <p className="mb-4">
            You understand and acknowledge that appropriate governmental agencies, departments or authorities (the "Tax Authority") where your 
            office or residence is located may require Taxes to be collected from Students, Clients on the amount paid for the Course and to be 
            remitted to the respective Tax Authority. The laws in jurisdictions may vary, but these Taxes may be required to be collected and 
            remitted as a percentage of the Course Fees/Project price set by Think Again Lab.
          </p>
        </section>
      </div>
    </div>
{/* Footer */}
<footer className="py-8 text-center border-t border-gray-700 mt-12">
          <div className="mb-6">
            <Image 
              src="https://raw.githubusercontent.com/thinkagain-lab/academy/refs/heads/main/public/BBBBBBBBBBBBBBBB.png" 
              alt="Think Again Lab Logo" 
              width={200} 
              height={200}
              className="mx-auto mb-4"
            />
            <p className="text-gray-400">© 2025 Think Again Lab. All rights reserved.</p>
          </div>
          

          <div className="flex justify-center gap-6 mb-6">
            <Link href="/about-us" passHref className="text-gray-400 hover:text-green-500">About Us</Link>
            <Link href="/contact-us" passHref className="text-gray-400 hover:text-green-500">Contact Us</Link>
            <Link href="/privacy-policy" passHref className="text-gray-400 hover:text-green-500">Privacy Policy</Link>
            <Link href="/payment-policy" passHref className="text-gray-400 hover:text-green-500">Payment Policy</Link>
            <Link href="/terms-and-conditions" passHref className="text-gray-400 hover:text-green-500">Terms and Conditions</Link>
          </div>
          
        </footer>
    </div>
  );
}
'use client';
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
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
      <h1 className="text-3xl font-bold mb-8 text-center text-white">TERMS AND CONDITIONS</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Thinkagain Educational Services LLP ("Company", "we", "our", "us"). These Terms and Conditions 
            ("Terms", "Terms and Conditions") govern your use of our website www.thinkagainlab.com (together or 
            individually "Service") operated by Thinkagain Educational Services LLP.
          </p>
          <p className="mb-4">
            Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and 
            disclose information that results from your use of our web pages. Please read it here.
          </p>
          <p className="mb-4">
            Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge 
            that you have read and understood the Agreements, and agree to be bound by them.
          </p>
          <p className="mb-4">
            If you do not agree with the Agreements, you must not use our Service. Please contact us if you have 
            any questions regarding the Agreements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">2. Communications</h2>
          <p className="mb-4">
            By using our Service, you agree to subscribe to newsletters, marketing or promotional materials 
            and other information we may send. However, you may opt out of receiving any, or all, of these 
            communications from us by following the unsubscribe link or by emailing us at hello@thinkagainlab.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Enrollments</h2>
          <p className="mb-4">
            If you wish to enroll in a course or service available through the Service, you may be asked 
            to supply certain information relevant to your enrollment including, without limitation, your 
            name, email, phone number, and educational background.
          </p>
          <p className="mb-4">
            You represent and warrant that: (i) you have the legal right to use any payment method(s) in 
            connection with any enrollment; and that (ii) the information you supply to us is true, correct 
            and complete.
          </p>
          <p className="mb-4">
            We reserve the right to refuse or cancel your enrollment if fraud or an unauthorized or illegal 
            transaction is suspected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">4. Contests, Sweepstakes and Promotions</h2>
          <p className="mb-4">
            Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through 
            the Service may be governed by rules that are separate from these Terms. If you participate in any 
            Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a 
            Promotion conflict with these Terms, the Promotion rules will apply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. Refunds</h2>
          <p className="mb-4">
            We issue refunds for courses within 7 days of the original purchase of the course.
          </p>
          <p className="mb-4">
            For any development project/product, the payment is divided into two parts: 60% paid upon project 
            confirmation and 40% paid after deployment. The initial 60% payment is non-refundable once work has 
            begun on your project.
          </p>
          <p className="mb-4">
            No refund will be permitted in respect of workshops or services already provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">6. Content</h2>
          <p className="mb-4">
            Our Service allows you to post, link, store, share and otherwise make available certain information, 
            text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post 
            on or through the Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="mb-4">
            By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours 
            (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided 
            in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the 
            privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. 
            We reserve the right to terminate the account of anyone found to be infringing on a copyright.
          </p>
          <p className="mb-4">
            You retain any and all of your rights to any Content you submit, post or display on or through the Service 
            and you are responsible for protecting those rights. We take no responsibility and assume no liability for 
            Content you or any third party posts on or through the Service. However, by posting Content using the Service 
            you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute 
            such Content on and through the Service.
          </p>
          <p className="mb-4">
            Thinkagain Educational Services LLP has the right but not the obligation to monitor and edit all Content 
            provided by users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">7. Prohibited Uses</h2>
          <p className="mb-4">
            You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-1">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", 
                "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm 
                the Company or users of the Service or expose them to liability.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">8. Analytics</h2>
          <p className="mb-4">
            We may use third-party Service Providers to monitor and analyze the use of our Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">9. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content (excluding Content provided by users), features and functionality are and will remain 
            the exclusive property of Thinkagain Educational Services LLP and its licensors. The Service is protected by copyright, 
            trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection 
            with any product or service without the prior written consent of Thinkagain Educational Services LLP.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">10. Copyright Policy</h2>
          <p className="mb-4">
            We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the 
            Service infringes on the copyright or other intellectual property rights of any person or entity.
          </p>
          <p className="mb-4">
            If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way 
            that constitutes copyright infringement, please submit your claim via email to hello@thinkagainlab.com, with the subject line: 
            "Copyright Infringement" and include in your claim a detailed description of the alleged infringement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">11. Error Reporting and Feedback</h2>
          <p className="mb-4">
            You may provide us with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, 
            and other matters related to our Service ("Feedback"). You acknowledge and agree that: (i) you shall not retain, acquire or 
            assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) the Company may have 
            development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information 
            from you or any third party; and (iv) the Company is not under any obligation of confidentiality with respect to the Feedback.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">12. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under 
            our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
          <p className="mb-4">
            If you wish to terminate your account, you may simply discontinue using the Service.
          </p>
          <p className="mb-4">
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without 
            limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">13. Indemnification</h2>
          <p className="mb-4">
            You agree to defend, indemnify, and hold harmless Thinkagain Educational Services LLP, its licensees and licensors, and their 
            employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, 
            liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your 
            use and access of the Service, or b) a breach of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">14. Limitation Of Liability</h2>
          <p className="mb-4">
            In no event shall Thinkagain Educational Services LLP, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, 
            data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the 
            Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) 
            unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including 
            negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">15. Disclaimer</h2>
          <p className="mb-4">
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is 
            provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of 
            merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>
          <p className="mb-4">
            Thinkagain Educational Services LLP, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will 
            function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; 
            c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">16. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>
          <p className="mb-4">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision 
            of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. 
            These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we 
            might have had between us regarding the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">17. Changes To Service</h2>
          <p className="mb-4">
            We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole 
            discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time 
            or for any period. From time to time, we may restrict access to some parts of the Service, or the entire Service, to users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">18. Amendments To Terms</h2>
          <p className="mb-4">
            We may amend the Terms at any time by posting the amended terms on this site. It is your responsibility to review these 
            Terms periodically.
          </p>
          <p className="mb-4">
            Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. 
            You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">19. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at hello@thinkagainlab.com.
          </p>
        </section>
      </div>
    </div>
{/* Footer */}
<Footer/>
    </div>
  );
}
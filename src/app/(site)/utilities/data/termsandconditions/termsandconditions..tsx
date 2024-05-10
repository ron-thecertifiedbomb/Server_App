/* eslint-disable */
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

interface AccordionItem {
  section: string;
  title: string;
  content: JSX.Element;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

interface AccordionContent {
    terms: AccordionItem[];
}

export const TermsAndConditonsContent: AccordionContent = {
    
  terms: [
    {
      section: "welcome",
      title: "Welcome to LOTS' A STUFF!",
      content: (
        <>
        <p className="para" style={{ marginBottom: '20px'}}>
              These Terms and Conditions (“Terms”, “Terms of Service”) govern
              your use of our website located at{" "}
              <Link href={"/"}>
                <span className="text-[var(--link-color)]">Stuff.com.ph</span>{" "}
              </Link>{" "}
              (together or individually “Service”) operated by LOTS' A STUFF
              CORPORATION.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              LOTS' A STUFF CORPORATION hereinafter referred to as the “Company”
              (“we”, “our”, “us”).
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              Our Privacy Policy also governs your use of our service and
              explains how we collect, safeguard, and disclose information that
              results from your use of our website.
            </p>
            <p className="para">
              Your agreement with us includes these Terms and our Privacy Policy
              (“Agreements”). You acknowledge that you have read and understood
              the agreements and agreed to be bound by them. These terms apply
              to all visitors, users, and others who wish to access or use our
              service.
            </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "communications",
      title: "Communications",
      content: (
        <>
       <p className="para">
              By using the service, you agree to subscribe to newsletters,
              marketing or promotional materials, and other information we may
              send. However, you may opt-out of receiving any, or all, of these
              communications from us by following the unsubscribe link or by
              emailing us at customerservice@stuff.com.ph
            </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "purchases",
      title: "Purchases",
      content: (
        <>
        <p className="para"  style={{ marginBottom: '20px'}}>
              If you wish to purchase any product or service made available
              through the service (“Purchase”), you may be asked to supply
              certain information relevant to your purchase including but not
              limited to, your name and contact information, payment details,
              your billing address, and your shipping information.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              You represent and warrant that: (i) you have the legal right to
              use any card(s) or other payment methods in connection with any
              purchase; and that (ii) the information you supply to us is true,
              correct, and complete.
            </p>

            <p className="para" style={{ marginBottom: '20px'}}>
              We may employ the use of third-party services for the purpose of
              facilitating payment and the completion of purchases. By
              submitting your information, you grant us the right to provide the
              information to these third parties subject to our Privacy Policy.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              We reserve the right to refuse or cancel your order at any time
              for reasons including but not limited to product or service
              availability, errors in the description or price of the product or
              service, error in your order, or other reasons.
            </p>
            <p className="para">
              We reserve the right to refuse or cancel your order if fraud or an
              unauthorized or illegal transaction is suspected.
            </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "promotions",
      title: "Promotions",
      content: (
        <>
        <p className="para">
              Any contests, sweepstakes, or other promotions (collectively,
              “Promotions”) made available through the service may be governed
              by rules that are separate from these Terms of Service. If you
              participate in any promotions, please review the applicable rules
              as well as our Privacy Policy. If the rules for a promotion
              conflict with these Terms of Service, promotion rules will apply.
            </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "customersupport",
      title: "Customer Support and Services",
      content: (
        <>
       <p className="para">
              For assistance on product usage, after-sales support, and service
              center requirements, please email at customerservice@stuff.com.ph
            </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "content",
      title: "Content",
      content: (
        <>
      <p className="para">
              The content found on or through this service is the property of
              LOTS' A STUFF CORPORATION or used with permission. You may not
              distribute, modify, transmit, reuse, download, repost, copy, or
              use said content, whether in whole or in part, for commercial
              purposes or for personal gain, without express advance written
              permission from us.
            </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "prohibited",
      title: "Prohibited Uses",
      content: (
        <>
  <p className="para" style={{ marginBottom: '20px'}}>
              You may use the service only for lawful purposes and in accordance
              with the Terms and Conditions. You agree not to use the service:
            </p>

            <div className="subcontainer" style={{paddingLeft: '20px'}}>
              <p className="list">
                • In any way that violates any applicable national or
                international law or regulation.
              </p>
              <p className="list">
                • For the purpose of exploiting, harming, or attempting to
                exploit or harm minors in any way by exposing them to
                inappropriate content or otherwise.
              </p>
              <p className="list">
                • To transmit, or procure the sending of, any advertising or
                promotional material, including any “junk mail”, “chain letter,”
                “spam”, or any other similar solicitation.
              </p>
              <p className="list">
                • To impersonate or attempt to impersonate company, a company
                employee, another user, or any other person or entity.
              </p>
              <p className="list">
                • In any way that infringes upon the rights of others, or in any
                way is illegal, threatening, fraudulent, or harmful, or in
                connection with any unlawful, illegal, fraudulent, or harmful
                purpose or activity.
              </p>
              <p className="list">
                • To engage in any other conduct that restricts or inhibits
                anyone’s use or enjoyment of the service, or which, as
                determined by us, may harm, or offend the company or users of
                the service or expose them to liability.
              </p>
              <p className="list">
                • Use the service in any manner that could disable, overburden,
                damage, or impair the service or interfere with any other
                party’s use of the service, including their ability to engage in
                real-time activities through the service.
              </p>
              <p className="list">
                • Use any robot, spider, or other automatic devices, process, or
                means to access the service for any purpose, including
                monitoring or copying any of the material on the service.
              </p>
              <p className="list">
                • Use any manual process to monitor or copy any of the material
                on the service or for any other unauthorized purpose without our
                prior written consent.
              </p>
              <p className="list">
                • Use any device, software, or routine that interferes with the
                proper working of the service.
              </p>
              <p className="list">
                • Introduce any viruses, trojan horses, worms, logic bombs, or
                other material which is malicious or technologically harmful.
              </p>
              <p className="list">
                • Attempt to gain unauthorized access to, interfere with,
                damage, or disrupt any parts of the service, the server on which
                the service is stored, or any server, computer, or database
                connected to the service.
              </p>

              <p className="list">
                • Attack the service via a denial-of-service attack or a
                distributed denial-of-service attack.
              </p>
              <p className="list">
                • Take any action that may damage or falsify the company rating.
              </p>
              <p className="list">
                • Otherwise attempt to interfere with the proper working of the
                service.
              </p>
            </div>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "accounts",
      title: "Accounts",
      content: (
        <>
     <p className="para" style={{ marginBottom: '20px'}}>
              When you create an account with us, you guarantee that you are of
              legal age and that the information you provide us is accurate,
              complete, and current always. Inaccurate, incomplete, or obsolete
              information may result in the immediate termination of your
              account on the service.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              You are responsible for maintaining the confidentiality of your
              account and password, including but not limited to the restriction
              of access to your computer and/or account. You agree to accept
              responsibility for any and all activities or actions that occur
              under your account and/or password, whether your password is with
              our service or a third-party service. You must notify us
              immediately upon becoming aware of any breach of security or
              unauthorized use of your account.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              You may not use as a username the name of another person or entity
              or that is not lawfully available for use, a name or trademark
              that is subject to any rights of another person or entity other
              than you, without appropriate authorization. You may not use as a
              username any name that is offensive, vulgar, or obscene.
            </p>
            <p className="para">
              We reserve the right to refuse service, terminate accounts,
              remove, or edit content, or cancel orders at our sole discretion.
            </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "intellectual",
      title: "Intellectual Property",
      content: (
        <>
   <p className="para">
              The service and its original content (excluding content provided
              by users), features, and functionality are and will remain the
              exclusive property of LOTS' A STUFF CORPORATION and its licensors.
              The service is protected by copyright, trademark, and other laws.
              Our trademarks may not be used in connection with any product or
              service without the prior written consent of LOTS' A STUFF
              CORPORATION.
            </p>
            
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "reportfeedback",
      title: "Error Report and Feedback",
      content: (
        <>
  <p className="para">
              You may provide us either directly at customerservice@stuff.com.ph
              or via third-party sites and tools with information and feedback
              concerning errors, suggestions for improvements, ideas, problems,
              complaints, and other matters related to our service (“Feedback”).
              You acknowledge and agree that: (i) you shall not retain, acquire,
              or assert any intellectual property right or other rights, title,
              or interest in or to the feedback; (ii) company may have developed
              ideas like the feedback; (iii) feedback does not contain
              confidential information or proprietary information from you or
              any third party, and (iv) company is not under any obligation of
              confidentiality with respect to the Feedback. In the event the
              transfer of the ownership to the Feedback is not possible due to
              applicable mandatory laws, you grant company and its affiliates an
              exclusive, transferable, irrevocable, free-of-charge,
              sub-licensable, unlimited, and perpetual right to use (including
              copy, modify, create derivative works, publish, distribute, and
              commercialize) feedback in any manner and for any purpose.
            </p>
            
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "link",
      title: "Links to Other Websites",
      content: (
        <>
  <p className="para" style={{ marginBottom: '20px'}}>
              Our service may contain links to third-party websites or services
              that are not owned or controlled by LOTS' A STUFF CORPORATION.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              LOTS' A STUFF CORPORATION has no control over and assumes no
              responsibility for the content, privacy policies, or practices of
              any third-party websites or services. We do not warrant the
              offerings of any of these entities/individuals or their websites.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              YOU ACKNOWLEDGE AND AGREE THAT THE COMPANY SHALL NOT BE
              RESPONSIBLE OR LIABLE, DIRECTLY, OR INDIRECTLY, FOR ANY DAMAGE OR
              LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE
              OF OR RELIANCE ON ANY SUCH CONTENT, GOODS, OR SERVICES AVAILABLE
              ON OR THROUGH ANY SUCH THIRD-PARTY WEB SITES OR SERVICES.
            </p>
            <p className="para">
              WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
              POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES THAT YOU VISIT.
            </p>
            
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "disclaimer",
      title: "Disclaimer of Warranty",
      content: (
        <>
  <p className="para" style={{ marginBottom: '20px'}}>
              THESE SERVICES ARE PROVIDED BY THE COMPANY ON AN “AS IS” AND “AS
              AVAILABLE” BASIS. THE COMPANY MAKES NO REPRESENTATIONS OR
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF
              THEIR SERVICES, OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED
              THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES,
              THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT
              YOUR SOLE RISK.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY
              MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE
              COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR
              AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING,
              NEITHER COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS
              OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR
              ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE,
              ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT
              THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF
              VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY
              SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE
              MEET YOUR NEEDS OR EXPECTATIONS.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
              EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT
              LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT,
              AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p className="para" style={{ marginBottom: '20px'}}>
              {" "}
              THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CAN NOT BE
              EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "limitation",
      title: "Limitation of Liability",
      content: (
        <>
   <p className="para">
              EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
              PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER,
              IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND
              EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
              IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED),
              WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS
              ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT,
              INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR
              PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY
              YOU OF ANY INTERNATIONAL OR LOCAL LAWS, STATUTES, RULES, OR
              REGULATIONS, EVEN IF THE COMPANY HAS BEEN PREVIOUSLY ADVISED OF
              THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF
              THERE IS LIABILITY FOUND ON THE PART OF THE COMPANY, IT WILL BE
              LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND
              UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE
              DAMAGES. SOME LOCATIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION
              OF PUNITIVE, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, SO THE PRIOR
              LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "termination",
      title: "Termination",
      content: (
        <>
   <p className="para" style={{ marginBottom: '20px'}}>
              We may terminate or suspend your account and bar access to the
              service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of terms.
            </p>
            <p className="para style={{ marginBottom: '20px'}}">
              If you wish to terminate your account, you may simply discontinue
              using the service.
            </p>
            <p className="para">
              All provisions of Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "governinglaw",
      title: "Governing Law",
      content: (
        <>
  <p className="para" style={{ marginBottom: '20px'}}>
              These terms shall be governed and construed in accordance with the
              laws of the Philippines, which governing law applies to the
              agreement without regard to its conflict of law provisions.
            </p>
            <p className="para">
              Our failure to enforce any right or provision of these terms will
              not be considered a waiver of those rights. If any provision of
              these terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these terms will remain in effect. These
              terms constitute the entire agreement between us regarding our
              service and supersede and replace any prior agreements we might
              have had between us regarding service.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "changes",
      title: "Changes to the Service",
      content: (
        <>
   <p className="para">
              We reserve the right to withdraw or amend our service, and any
              service or material we provide via the service, in our sole
              discretion without notice. We will not be liable if for any reason
              all or any part of the service is unavailable at any time or for
              any period. From time to time, we may restrict access to some
              parts of the Service, or the entire service, to users, including
              registered users.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "amendments",
      title: "Amendments to Terms",
      content: (
        <>
  <p className="para" style={{ marginBottom: '20px'}}>
              We may amend the terms at any time by posting the amended terms on
              this website. It is your responsibility to review these terms
              periodically.
            </p>

            <p className="para" style={{ marginBottom: '20px'}}>
              Your continued use of the website following the posting of revised
              terms means that you accept and agree to the changes. You are
              expected to check this page frequently, so you are aware of any
              changes, as they are binding on you.
            </p>
            <p className="para">
              By continuing to access or use our service after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use the Service.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "waiver",
      title: "Waiver and Severability",
      content: (
        <>
  <p className="para" style={{ marginBottom: '20px'}}>
              No waiver by company of any term or condition set forth in the
              terms shall be deemed a further or continuing waiver of such term
              or condition or a waiver of any other term or condition, and any
              failure of the company to assert a right or provision under the
              terms shall not constitute a waiver of such right or provision.
            </p>

            <p className="para">
              If any provision of the terms is held by a court or other tribunal
              of competent jurisdiction to be invalid, illegal, or unenforceable
              for any reason, such provision shall be eliminated or limited to
              the minimum extent such that the remaining provisions of terms
              will continue in full force and effect.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    {
      section: "acknowledgement",
      title: "Acknowledgement",
      content: (
        <>
   <p className="para" style={{ marginBottom: '20px'}}>
              BY USING THE SERVICE OR OTHER SERVICES PROVIDED BY US, YOU
              ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO
              BE BOUND BY THEM.
            </p>

            <p className="para">
              Please send your feedback, comments, requests for support by email
              at customerservice@stuff.com.ph.
            </p>
          
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: "#f02f1b" }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: "#f02f1b" }} />,
    },
    // Add other profile items here
  ],
  
};
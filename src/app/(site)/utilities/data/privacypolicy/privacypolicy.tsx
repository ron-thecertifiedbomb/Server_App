/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-inline-styles */
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';

interface AccordionItem {
  section: string;
  title: string;
  content: JSX.Element;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

interface AccordionContent {
  profile: AccordionItem[];
  facts: AccordionItem[];
  policy: AccordionItem[];
}

export const PrivacyPolicyContent: AccordionContent = {
  profile: [
    {
      section: 'privacystatement',
      title: 'Privacy Statement',
      content: (
        <>
          <p className="para" style={{ marginBottom: '25px' }}>
            LOTS' A STUFF CORPORATION (“Us”, “We”, “Ours”) takes your privacy very seriously and is
            committed to protecting and respecting your personal data privacy. To show our
            commitment, we are at the forefront of complying with the Data Privacy Act of 2012
            (“DPA”), its implementing rules and regulations, memorandum circulars, advisories, and
            opinions. This Privacy Policy is intended to inform you regarding our privacy practices
            with the collection, use, and disclosure of your personal information when using our
            shopping services available at the LOTS' A STUFF website.
          </p>
          <p className="para">
            By visiting{' '}
            <Link href={'/'}>
              <span className="text-[var(--link-color)]">Stuff.com.ph</span>{' '}
            </Link>
            and placing an order or using our services, you agree to the collection and use of
            information in relation to this policy. The personal information that we collect is used
            to respond to your inquiries, verify and confirm your orders, and for providing you with
            personalized shopping services.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    // Add other profile items here
  ],
  facts: [
    {
      section: 'personalandbusiness',
      title: 'Personal and Business Information',
      content: (
        <>
          <p className="para" style={{ marginBottom: '20px' }}>
            With the aim of providing, you with an excellent shopping experience, we collect and
            process personal information about you when you interact with us and purchase goods and
            services through our website. We require you to provide us with personally identifiable
            information, including but not limited to the following:
          </p>
          <div className="subcontainer">
            <ul>
              <li>Your full name</li>
              <li>Telephone number</li>
              <li>Date of birth</li>
              <li>Email address</li>
              <li>Delivery and billing address</li>
              <li>Payment details</li>
              <li>Any other information you provide</li>
            </ul>
          </div>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'useandcollection',
      title: 'Use and Collection',
      content: (
        <>
          <p className="para" style={{ marginBottom: '20px' }}>
            With your consent, LOTS' A STUFF CORPORATION will collect and process personal
            information for us to provide you with the best shopping experience and personalized
            services. Any information that needs to be shared with third-party/ies, business
            partners, or government agencies will be encrypted and filtered and used for a
            legitimate business purpose, to improve our product and services, to support our
            processes, to strengthen our internal risk protocols, and to provide you with a seamless
            service. Furthermore, the information that you provided may be used for the following
            purposes:
          </p>

          <div className="subcontainer" style={{paddingLeft: '20px'}}>
            <p className="list">• For website account creation</p>
            <p className="list">• For newsletter signup</p>
            <p className="list">• For order processing</p>
            <p className="list">• For order delivery and delivery updates</p>
            <p className="list">• For customer service and after-sales support</p>
            <p className="list">• To provide relevant product information</p>
            <p className="list">• To administer your account with us</p>
            <p className="list"> • To improve, modify, and customize website layout and/or design for a better user
              experience
            </p>
            <p className="list">
              • To identify users and visitors and conduct research on demographics
            </p>
            <p className="list">
              • To send you information based on interests and usage which may be useful, or which
              may have been requested regarding our products and services
            </p>
          </div>
          <br></br>

          <p className="parause">
            For as long as either required to us by law or as relevant for the purpose stated above:
          </p>
          <div className="subcontainer">
            <p className="list">
              • Browsing the{' '}
              <Link href={'/'}>
                <span className="text-[var(--link-color)]">Stuff.com.ph</span>{' '}
              </Link>{' '}
              website will not require you to provide any personal information. You may remain
              anonymous, and we will not be able to identify you unless you register and create an
              account with LOTS' A STUFF CORPORATION
            </p>
            <p className="list">
              • LOTS' A STUFF CORPORATION will not sell, share, or trade your personal information
              collected online with third parties, except in the case of relevant information being
              passed onto our third-party logistics partners or third-party payment partners as
              necessary, to process your order, payments, and delivery. This would include, but may
              not be limited to, name, bank account/credit card/debit card, shipping address, and
              other order-related information. The processing of your personal information by LOTS'
              A STUFF's third-party logistics partners and third-party payment partners are covered
              by the appropriate outsourcing, subcontracting, or data sharing agreements to ensure
              confidentiality, integrity, and availability of the personal information processed,
              prevent its use for unauthorized purposes, and generally, comply with the legal
              requirements of R.A. No. 10173 or the Data Privacy Act of 2012, its Implementing Rules
              and Regulations, Memorandums, Circulars, Advisory, and Advisory Opinions.
            </p>
            <p className="list">
              • We may also send you marketing and/or promotional materials which you can
              unsubscribe from upon receipt of the notice.
            </p>
            <p className="list">
              • Personal information collected online may be disclosed within our corporate group
              for internal use only and in accordance with the above purposes, subject to the
              execution of the appropriate Data Sharing Agreement as may be needed.
            </p>
          </div>
          <br></br>

          <p className="parause">
            LOTS' A STUFF CORPORATION will implement reasonable and appropriate organizational,
            physical, and technical security measures for the protection of its users and visitors’
            personal information. LOTS' A STUFF CORPORATION shall ensure that the security measures
            being and to be implemented shall maintain the availability, integrity, and
            confidentiality of personal information against accidental or unlawful destruction,
            alteration, disclosure, or any other unlawful processing.
          </p>

          <p className="parause">
            LOTS' A STUFF CORPORATION will endeavor to ensure that all information collected from
            you is safely and securely stored. We will protect your personal information by:
          </p>
          <div className="subcontainer">
            <p className="list">
              • Restricting third-party access to your personal information unless necessary; and
            </p>
            <p className="list">
              • Not retaining your personal information for any period longer than required to
              fulfill the above purpose.
            </p>
            <p className="list">
              • All payment-related data is encrypted as per our third-party payment partners’
              policies.
            </p>
          </div>
          <br></br>

          <p className="parause">
            Our Privacy Policy complies with the applicable laws governing the protection of
            personal data and represents the industry’s best practices.
          </p>

          <p className="parause">
            Any transfer, access, amendment, erasure, storage, blocking, or processing of your
            personal data will only be done by LOTS' A STUFF CORPORATION with your consent.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'exceptions',
      title: 'Exceptions',
      content: (
        <>
          <p className="para">
            LOTS' A STUFF CORPORATION is committed in its endeavor to comply with applicable laws
            governing the protection of personal data. However, in exceptional circumstances, if
            LOTS' A STUFF CORPORATION is required by law or by order of competent authority to
            disclose personal information, especially if the disclosure is deemed essential to
            prevent a threat to life or health, national security, or for other law enforcement
            purposes, it will do so.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'rightsofdata',
      title: 'Rights of Data Subject',
      content: (
        <>
          <p className="para" style={{ marginBottom: '20px' }}>
            You will be able to specify how you want LOTS' A STUFF CORPORATION to handle your
            information and protect your privacy by informing us. We recognize the importance of
            your rights as a data subject under the DPA as follows:
          </p>
          <div className="subcontainer" style={{paddingLeft: '20px'}}>
            <p className="list">• Right to be informed</p>
            <p className="list">• Right to object</p>
            <p className="list">• Right to access</p>
            <p className="list">• Right to correct</p>
            <p className="list">• Right to rectification</p>
            <p className="list">• Right to damages</p>
            <p className="list">• Data Portability</p>
          </div>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'miscellaneous',
      title: 'Miscellaneous Provisions',
      content: (
        <>
          <p className="para">
            The personal information you have provided on our website shall be retained for as long
            as necessary to fulfill the purposes for which it was collected, to meet regulatory
            requirements, resolve disputes, prevent fraud, abuse, and enforce our terms and
            conditions.
          </p>
          <p className="para">
            Customers undertake to treat the personal information relayed to the website
            confidentially and not make it available to unauthorized third parties. Customers accept
            and agree that LOTS' A STUFF CORPORATION cannot be held liable for misuse of passwords
            unless such misuse is a result of our actions.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    // Add other facts items here
  ],
  policy: [
    {
      section: 'logdata',
      title: 'Log Data',
      content: (
        <>
          <p className="para">
            When using the website, LOTS' A STUFF CORPORATION’s servers will automatically record
            the information that your browser sends, such as but not limited to the IP address, type
            of browser, referring site or page, pages visited within the website, access dates and
            time, or operating system. This information is collected to help us customize and/or
            improve our website and the services and experience we provide and will not be used in
            association or conjunction with any other personal information.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'cookies',
      title: 'Cookies',
      content: (
        <>
          <p className="para">
            LOTS' A STUFF CORPORATION may implement or install cookies to collect information and
            help us improve our website and our shopping services. A cookie is a file that is placed
            on your web browser or mobile device to track activities on our website but is not used
            to run any other program. You have the option to either accept or refuse these cookies
            and disable cookies by modifying your browser settings. If you choose to refuse our
            cookies, certain functionalities on the website may also be disabled.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'ourcommitment',
      title: 'Our Commitment',
      content: (
        <>
          <p className="para">
            LOTS' A STUFF CORPORATION is committed to securing your personal information and assures
            that we adhere to a high standard of security and confidentiality in all our processes.
            We have adopted all reasonable physical and technical measures relevant to collecting
            personal information, and sensitive personal information and have placed protocols to
            secure this information.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'updates',
      title: 'Updates',
      content: (
        <>
          <p className="para">
            By accepting this Privacy Policy, you accept that LOTS' A STUFF CORPORATION reserves the
            right to modify and change this Privacy Policy at any time. LOTS' A STUFF CORPORATION
            will endeavor to ensure that any changes to this policy will be made available
            immediately on the website.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'acknowledgement',
      title: 'Acknowledgement',
      content: (
        <>
          <p className="para">
            By accepting this Privacy Policy, you agree and accept that all personal information
            provided by you will be true and accurate and will be kept up to date and that you will
            inform us of any changes in the same, which you can do by accessing your LOTS' A STUFF
            CORPORATION account.
          </p>
          <br></br>
          <p className="para">
            You likewise acknowledge that you have read this Privacy Policy, understood its contents, and consent
            to the processing of personal information pursuant to the purposes described above. By
            accepting this Privacy Policy, you agree that your consent does not preclude the
            existence of other criteria for lawful processing of personal data and does not waive
            any of your rights under the Data Privacy Act of 2012 and other applicable laws.
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'contactinformation',
      title: 'Contact Information',
      content: (
        <>
          <p className="para">
            For questions, feedback, and/or concerns about this Privacy Policy, you may contact us
            at customerservice@stuff.com.ph
          </p>
        </>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
  ],
};

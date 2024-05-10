/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-inline-styles */
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface AccordionItem {
  section: string;
  title: any;
  content: JSX.Element;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

interface AccordionContent {
  legal: AccordionItem[];
  shipping: AccordionItem[];
  delivery: AccordionItem[];
  refund: AccordionItem[];
}

export const FAQsContent: AccordionContent = {
  legal: [
    {
      section: 'order',
      title: 'How do I place an order?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}} >
          <ul>
            <li>Choose the product you want and click it to see the details.</li>
            <li>Select the item and proceed to checkout.</li>
            <li>Fill out the delivery details before placing an order.</li>
            <li>Click Place Order.</li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'changeitems',
      title: 'Can I still change the items I selected after the order has been placed?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>
              No, as of now STUFF system does not have any option of doing this, but you may cancel
              the order and place a new one with your preferred items/products.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'stepbystep',
      title: 'Step by step Process of Cancellation',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Log in to your STUFF account.</li>
            <li>Go to “My Orders” choose the order you want to cancel.</li>
            <li>
              Fill out the form: Select the item you wish to cancel, choose your reason for
              Cancellation, Read, and understand Stuff Cancellation Policy, then click “Next.”
            </li>
            <li>Order status will be changed to “Cancelled”.</li>
            <li>
              Cancellation will be accepted within 1 hour upon placing the order and if the order
              has not been processed yet by the Merchant.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'changedelivery',
      title: 'How do I change my delivery address when placing an order?',

      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>First, select the item/product you wish to order.</li>
            <li>
              Proceed to check out and click the delivery address field for you to input your
              preferred address.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'deliveryaddress',
      title: 'Can I still change my delivery address once order has been made?',

      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>No, you can no longer change the delivery address once the order is placed.</li>
            <li>
              The only option you can do is to cancel the order and place a new one with the correct
              and preferred delivery address.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'paymentmethod',
      title: 'What payment methods are available and supported?',

      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Cash on Delivery</li>
            <li>Debit / Credit Card</li>
            <li>Mastercard / Visa / JCB</li>
            <li>GrabPay</li>

            <li>ECPay</li>
            <li>Alipay</li>

            <li>WeChat</li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    // Add other legal items here
  ],
  shipping: [
    {
      section: 'cancelmyorder',
      title: 'When can I cancel my order?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Customer may cancel the order within 1 hour after placing it.</li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'howtocancel',
      title: 'How to cancel my order?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Go to “My Orders” and choose the item you want to cancel.</li>
            <li>Click "Cancel Order button"</li>
            <li>Select the reason for cancellation.</li>
            <li>Your request of order cancellation will be forwarded to merchant.</li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'whystuff',
      title: 'Why did STUFF cancel my order?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para" style={{ marginBottom: '20px' }}>
            Here are the reasons why your order was cancelled by the system:
          </p>
          {/* <div className="subcontainer"> */}
          <ul style={{paddingLeft: '25px'}}>
            <li>
              <strong>Late Fulfilment by the Merchant</strong> – STUFF automatically cancels an
              order if it goes beyond the allowed period of fulfilment.
            </li>

            <li>
              <strong>Failure to Hand Over the Package to Logistics</strong> – Orders that were
              packed but not successfully given to logistics partner/s for delivery.
            </li>

            <li>
              <strong>System Glitch</strong> – Errors and bugs are things that we can’t avoid. This
              may cause automatic cancellation of orders especially when it comes to order statuses.
            </li>
            <li>
              <strong>Incorrect Pricing</strong> – This happens when Merchants on STUFF
              unintentionally provided wrong price list for their items/products.
            </li>

            <li>
              <strong>Lost Orders</strong> – If the package is lost in the warehouse or sorting hub
              and nowhere to be found.
            </li>

            <li>
              <strong>Prohibited Items</strong> – are any goods or materials the carriage of which
              is prohibited by any law, rule, or regulation of any country in or over which the
              shipment travels.
            </li>
            <li>
              <strong>Failed Top Up</strong> – Unsuccessful mobile top up due to system issues.
            </li>
            <li>
              <strong>STUFF’s Quality Standards</strong> – Quality of products/packages are of
              paramount to meet the standards of all courier partners of STUFF. Failure to not meet
              the standard is subject to cancellation.
            </li>

            <li>
              <strong>Unserviceable Area</strong> – These are the areas where logistic partners
              cannot deliver the orders/goods.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'cancellationrequest',
      title: 'How would I know if my cancellation request was approved?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>
              After submitting the cancellation request, a message will pop up saying “Your
              cancellation request was successfully submitted”. STUFF system will process your
              cancellation request in an hour upon receiving it
            </li>

            <li>
              To check if your order was in “Cancelled” status, just go to Account {'>'}{' '}
              Cancellation.
            </li>
            <li>
              In case your request is not processed by the system after an hour, your order may have
              been shipped out and cancellation is not possible anymore.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'accidentally',
      title: 'I accidentally ordered the same item twice, what should I do?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para" style={{ marginBottom: '25px' }}>
            You can cancel duplicate orders by following these steps:
          </p>
          <div className="subcontainer">
            <ul>
              <li>Log in to your STUFF account.</li>

              <li>Go to “My Orders” then choose the order you want to cancel.</li>
              <li>
                Fill out the form: Select the item you wish to cancel, choose your reason for
                cancellation, read, and understand STUFF’s Cancellation Policy, then click “Next”.
              </li>
              <li>Order status will be changed to “Cancelled”.</li>
              <li>
                Cancellation will be accepted within 24 hours upon placing the order and if the
                order has not been processed yet by the Merchant.
              </li>
            </ul>
          </div>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'retrievedback',
      title: ' If I cancel my order, will my pre-paid be retrieved back to my account?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para" style={{ marginBottom: '25px' }}>
            In case of cancellations, the pre-paid will be retrieved/refunded back to your account
            within the day after sending of cancellation request.
          </p>
          <p className="para">
            User/customer will be notified via email or SMS once refund has been initiated.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    // Add other shipping items here
  ],
  delivery: [
    {
      section: 'deliverystatus',
      title: 'Definition of delivery status',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>
              <strong>For Processing </strong>– order is received, merchant is preparing to pick and
              pack the item.
            </li>

            <li>
              <strong>Preparing for Shipment</strong> – the courier is assigned and has accepted it
              and is picking up the products from the seller/merchant.
            </li>

            <li>
              <strong>In-transit </strong> – the courier is delivering the products to the
              recipient.
            </li>

            <li>
              <strong>Delivered </strong> – the courier has successfully delivered the products.
            </li>

            <li>
              <strong>Cancelled </strong> – either courier and/or the third-party provider canceled
              the shipment order.
            </li>

            <li>
              <strong>Pickup Failed</strong> – the courier accepted and has departed to pick up
              address, but the seller/merchant failed to provide the products to the courier.
            </li>

            <li>
              <strong>Delivery Failed </strong> – the courier arrived at the delivery address, but
              the recipient failed to receive the products.
            </li>
            <li>
              <strong>Preparing Return </strong> – third party provider or the courier has scheduled
              to return the product to the seller/merchant.
            </li>
            <li>
              <strong>In-transit for Return </strong> – the courier is returning to the delivery
              address or returning address with the products.
            </li>
            <li>
              <strong>Returned</strong> – the courier has successfully returned the products to the
              seller/merchant and the sender now has the products.
            </li>
            <li>
              <strong>Return Failed</strong> – the courier failed to return the products to the
              seller/merchant.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'canstuff',
      title: 'Can STUFF deliver anywhere in the Philippines?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para">
            STUFF can deliver to ALL serviceable areas nationwide. If our couriers are not able to
            deliver to your area, we will notify you via email or SMS.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'partners',
      title: 'Who are STUFF’s delivery partners?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>TaranaPH</li>

            <li>2GO Express</li>

            <li>Flash Express</li>

            <li>Kerry Logistikus</li>

            <li>Primeline Logistics</li>
          </ul>
          <p className="para">
            The delivery service is assigned by STUFF based on your location and the couriers
            available in your area. This is to optimize the delivery time as soon as possible.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'severalitems',
      title: 'Can I purchase several items and have them delivered to different addresses?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para">
            We currently don’t deliver several items to different addresses. If they are part of the
            same order, we highly suggest placing separate orders per shipping address.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'request',
      title: 'Can I request for a delivery schedule?',
      content: (
        <div className="subcontainer">
          <p className="para">
            Scheduled delivery is not accommodated. If you are unsure of your availability, make
            sure that there is someone ready to pay or receive the order on your behalf.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'weekends',
      title: 'Do you deliver during weekends and holidays?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para">
            Yes, orders can be delivered during weekend and holidays. Once the order is in “Transit”
            status, you will be notified through your STUFF app. Make sure your availability upon
            the delivery of your order.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'receivecall',
      title: 'Can I receive a call before delivery?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para">
            Courier will contact the number you indicated in the order details once he/she arrives
            at the area. Be sure your communication lines are open and reachable.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'whenreceive',
      title: 'When will I receive my order/package?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para">
            Once you placed an order, the system will allow you to see the estimated date of
            delivery.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'exactdate',
      title: 'How will I know the exact date and time of my delivery?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para">
            Using your STUFF app, you will be notified when the item is Out for Delivery, when the
            package is arriving and when it will be Delivered.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'seperatedeliveries',
      title: 'Why did I receive my order in separate deliveries?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para" style={{ marginBottom: '25px' }}>
            When you order multiple items from different sellers under a single order number, your
            items may be delivered in separate shipment. Each item in your order is shipped as soon
            as it is packed and prepared by the seller.
          </p>
          <p className="para" style={{ marginBottom: '25px' }}>
            To know if your items will be shipped together or separately, check the estimated
            delivery time frame indicated in your “Order Being Processed” email notification.
          </p>
          <p className="para" style={{ marginBottom: '25px' }}>
            Items checked out together will only have one tracking number and one email
            confirmation. Items under one tracking number will be shipped together.
          </p>
          <p className="para" style={{ marginBottom: '25px' }}>
            <strong>Note:</strong> Items bought from different sellers will have separate packages.
            Our “Shipped” and “Out for Delivery” notifications are sent per package, not per item.
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'orderstatus',
      title: 'My order status is Delivered, but I did not receive my order, what should I do?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para">
            If your order status is Delivered but you didn’t receive the package, you may check your
            order status and file for a refund request if you cannot locate your item anymore.{' '}
          </p>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'checkdetails',
      title: 'Check your Details',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Check if the delivery address you indicated in the order details is correct. </li>
            <li>Check other possible recipients: (guards, receptionists, lobby personnels) </li>
            <li>
              Check the proof of the delivery and receiver name. Go to Account
              {'>'} View All Orders {'>'} Select the Order {'>'} Click on the Track Package
              {'>'} Click View.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'leadtime',
      title: 'What is courier delivery lead time?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>NCR – 4 to 6 working days </li>
            <li> Luzon – 4 to 8 working days </li>
            <li>Visayas/Mindanao – 7 to 12 working days </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'trackorder',
      title: 'How can I track my order?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Click the STUFF Shopping Bag icon at the upper rightmost part of your phone. </li>
            <li>From there, you can see the status of your orders even the previous ones. </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },

    {
      section: 'shippingfees',
      title: 'What are shipping fees and rates?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>
              The shipping fee is the cost used to ship items to a buyer. STUFF app will show the
              customers how much is the total shipping fee based on the orders being placed.
            </li>
            <li>Shipping fee may vary due to package weight and delivery address.</li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'checkshipping',
      title: 'Where can I check my shipping fee when placing an order?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Shipping fee will appear upon checkout and before placing the order.</li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    // Add other delivery items here
  ],
  refund: [
    {
      section: 'returnrefund',
      title: 'How can I request for return/refund?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li> Fill out the return button on the app.</li>
            <li>Indicate the reasons for return (detailed explanation required).</li>
            <li>Wait for the status of request (approximately 2 days).</li>
            <li>
              Once approved, the courier will then pick up the item on your location (3-5 days).
            </li>
            <li>
              Please make sure to keep your lines open (Courier will contact you for schedule of
              item pick up).
            </li>
            <li>Please make sure that the box and packaging plus airway bill are still intact.</li>
            <li>
              Please take note that the return of undergarments, swimsuits, and used items are not
              allowed.
            </li>
            <li>
              Requests for returns are strictly within seven (7) days only upon receiving the order.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },
    {
      section: 'validconditions',
      title: 'Valid Conditions for Return',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <ul>
            <li>Damaged product</li>
            <li> Defective product</li>
            <li>Expired item</li>

            <li>Wrong item received</li>
            <li>Missing item (refund)</li>
            <li>Change of mind is an invalid condition for return</li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },

    {
      section: 'guidelines',
      title: 'Are there packaging guidelines for returning an order?',
      content: (
        <div className="subcontainer" style={{paddingLeft: '20px'}}>
          <p className="para" style={{ marginBottom: '20px' }}>
            <strong>Damaged Packaging:</strong>
          </p>

          <ul>
            <li style={{ marginLeft: '25px' }}>Plastic wrap or seal must be intact.</li>

            <li style={{ marginLeft: '25px' }}>Item must not be used.</li>
            <li style={{ marginLeft: '25px' }}>Item must include all packaging and accessories.</li>
          </ul>
          <p
            className="para"
            style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '10px' }}
          >
            <strong>Wrong Item </strong>
          </p>

          <ul>
            <li style={{ marginLeft: '32px' }}>Item must not be used.</li>
            <li style={{ marginLeft: '32px' }}>
              Item must be sealed, in original condition, with all packaging and accessories.
            </li>
          </ul>
        </div>
      ),
      icon: <AiOutlinePlus size={20} style={{ color: '#f02f1b' }} />,
      activeIcon: <AiOutlineMinus size={20} style={{ color: '#f02f1b' }} />,
    },

    // Add other delivery items here
  ],
};

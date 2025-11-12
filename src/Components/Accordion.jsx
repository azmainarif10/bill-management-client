import React from 'react';

const Accordion = () => {
    return (
        <div>
              <div className='py-10'>
      <h2 className="text-2xl font-bold text-center dark:bg-base-200 text-violet-400 mb-8">
         Frequent asked question by user
      </h2>

      <div className="collapse collapse-plus bg-violet-100 border border-base-300">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title dark:bg-base-200 font-semibold">
      How can I pay my bill online?

        </div>
        <div className="collapse-content dark:bg-base-200 text-sm">
             You can pay your bill by logging into your account and navigating to
          the <strong>"My Bills"</strong> section. Select the unpaid bill and
          click <strong>"Pay Now"</strong> — you can pay securely using your
          preferred payment method such as card, mobile banking, or online
          transfer.
        </div>
      </div>

      <div className="collapse collapse-plus bg-violet-100 border border-base-300 mt-3">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title dark:bg-base-200 font-semibold">
      Can I download my bill report?

        </div>
        <div className="collapse-content dark:bg-base-200 text-sm">
           Yes! You can download your bill report in PDF format from the{" "}
          <strong>"My Bills"</strong> page. Simply click on the{" "}
          <strong>"Download Report"</strong> button next to the respective bill.
        
        </div>
      </div>

      <div className="collapse collapse-plus bg-violet-100 border border-base-300 mt-3">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title dark:bg-base-200 font-semibold">          Can I edit or delete a submitted bill?
</div>
        <div className="collapse-content dark:bg-base-200 text-sm">
           You can edit or delete a bill after it's marked as paid. Go to{" "}
          <strong>"My Bills"</strong>, click the bill you want to update, and
          choose either <strong>"Edit"</strong> or <strong>"Delete"</strong>.
         
        </div>
      </div>
       
        <div className="collapse dark:bg-base-200 collapse-plus bg-violet-100 border border-base-300 mt-3">
        <input type="radio" name="billing-accordion" />
        <div className="collapse-title font-semibold">
          How is my data protected?
        </div>
        <div className="collapse-content dark:bg-base-200 text-sm">
          Your billing data is securely stored and transmitted using
          end-to-end encryption. We never share your personal or financial
          information with third parties without your consent.
        </div>
      </div>



    </div>
        </div>
    );
};

export default Accordion;
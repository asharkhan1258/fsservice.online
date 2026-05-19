 const faqData = [
    {
      question: "What documents do I need to bring for my tax appointment?",
      answer: "You'll need your W-2 forms, 1099 forms, receipts for deductions, previous year's tax return, Social Security numbers for all dependents, and any other income-related documents. We'll provide you with a comprehensive checklist when you book your appointment to ensure you have everything needed."
    },
    {
      question: "How much does tax preparation cost?",
      answer: "Our pricing starts at $75 for simple individual returns. Complex returns, business filings, and specialized services are priced based on the specific work required. We provide transparent, upfront pricing with no hidden fees. Contact us for a personalized quote based on your specific situation."
    },
    {
      question: "How long does it take to prepare my tax return?",
      answer: "Simple individual returns can often be completed during your appointment. Complex returns may take 3-5 business days. We'll provide you with a timeline based on your specific situation and keep you updated throughout the process."
    },
    {
      question: "What is included in Protection Plus?",
      answer: "Protection Plus includes $1,000,000 Tax Audit Defense™ and Identity Theft Restoration services. If you receive a tax notice or audit, our expert team will handle all communications with the IRS and state tax authorities at no additional cost to you."
    },
    {
      question: "Is Protection Plus included with all services?",
      answer: "Yes! Protection Plus is automatically included at no additional cost when you file your tax return with us, whether it's an individual, business, or amended return. You get complete peace of mind with every filing."
    },
    {
      question: "Do you handle business tax returns?",
      answer: "Yes, we prepare all types of business returns including S-Corporations, C-Corporations, Partnerships (Form 1065), LLCs, and Sole Proprietorships. We also provide bookkeeping services and business consultation to help optimize your tax situation."
    },
    {
      question: "Can you help with amended returns?",
      answer: "Absolutely! We prepare Form 1040-X and supporting schedules to correct and optimize your returns. Whether you need to add missed deductions, correct errors, or file additional forms, we'll ensure your amended return is accurate and properly submitted."
    },
    {
      question: "What if I missed the tax deadline?",
      answer: "Don't worry! We can still help you file your return even after the deadline. While there may be penalties and interest for late filing, we'll work with you to minimize these costs and get you back in compliance as quickly as possible."
    },
    {
      question: "How do I track my refund?",
      answer: "You can track your federal refund using the IRS 'Where's My Refund?' tool on their website. For state refunds, check your state's tax department website. We also provide links to both tracking tools on our website for your convenience."
    },
    {
      question: "Do you offer remote tax preparation services?",
      answer: "Yes! We offer secure remote tax preparation services. You can upload your documents securely through our client portal, and we'll prepare your return remotely. We'll schedule a video consultation to review your return before filing, ensuring you're completely satisfied with the results."
    }
  ];

  // Inject FAQ items into HTML
  const faqAccordion = document.getElementById('faqAccordion');
  faqData.forEach((item, index) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('accordion-item');
    faqItem.innerHTML = `
      <h3 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false">
          ${item.question}
        </button>
      </h3>
      <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          ${item.answer}
        </div>
      </div>
    `;
    faqAccordion.appendChild(faqItem);
  });

  
  
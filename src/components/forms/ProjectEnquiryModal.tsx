import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { useModal } from '../../contexts/ModalContext';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Building2, Mail, Phone, User } from 'lucide-react';

const enquirySchema = z.object({
  serviceTypes: z.array(z.string()).min(1, 'Please select at least one capability'),
  projectDescription: z.string().min(10, 'Please describe your project in at least 10 characters'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select an estimated timeline'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid business email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const SERVICE_OPTIONS = [
  'Custom Software Engineering',
  'SaaS Platform Development',
  'Mobile App (iOS / Android)',
  'AI & Intelligent Automation',
  'Cloud Infrastructure & DevOps',
  'UI/UX & Product Design',
  'POS & Retail Systems',
  'Digital Growth & Strategy',
];

const BUDGET_RANGES = [
  '₹5L – ₹15L ($6K – $18K)',
  '₹15L – ₹40L ($18K – $50K)',
  '₹40L – ₹1Cr ($50K – $120K)',
  '₹1Cr+ ($120K+ Enterprise)',
];

const TIMELINES = ['Immediate (< 1 month)', '1 – 3 months', '3 – 6 months', 'Flexible / Long-term'];

export const ProjectEnquiryModal: React.FC = () => {
  const { isProjectModalOpen, closeProjectModal } = useModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      serviceTypes: [],
      projectDescription: '',
      budgetRange: '',
      timeline: '',
      name: '',
      email: '',
      phone: '',
      company: '',
    },
  });

  const selectedServices = watch('serviceTypes');
  const selectedBudget = watch('budgetRange');
  const selectedTimeline = watch('timeline');

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setValue(
        'serviceTypes',
        selectedServices.filter((s) => s !== service)
      );
    } else {
      setValue('serviceTypes', [...selectedServices, service]);
    }
  };

  const onSubmit = async (data: EnquiryFormData) => {
    console.log('Project Enquiry Submission (Local Mode):', data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D0DBE9', '#A1B6CF', '#819AB8', '#506A89', '#F4F7FC'],
    });
  };

  const handleClose = () => {
    closeProjectModal();
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      reset();
    }, 300);
  };

  if (!isProjectModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#253B54]/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#314A66]/95 border border-[#A1B6CF]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(37,59,84,0.8)] my-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:border-[#D0DBE9] text-[#A1B6CF] hover:text-[#F4F7FC] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#A1B6CF]" />
        </button>

        {isSubmitted ? (
          /* Submission Success State */
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#506A89]/30 border border-[#D0DBE9] flex items-center justify-center text-[#D0DBE9] shadow-[0_0_25px_rgba(208,219,233,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#F4F7FC]">Project Enquiry Received</h3>
            <p className="text-[#D0DBE9] max-w-md mx-auto text-sm leading-relaxed">
              Thank you for reaching out to Vantixio. Our technical architecture team will review your requirements and respond within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full text-sm font-semibold btn-glacier-primary"
              >
                Return to Experience
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Form */
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Step Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1B6CF]">
                  Step 0{currentStep} / 03
                </span>
                <span className="text-xs text-[#819AB8]">• Start a Project</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F4F7FC]">
                {currentStep === 1 && 'What capabilities do you require?'}
                {currentStep === 2 && 'Tell us about your project scope.'}
                {currentStep === 3 && 'Your business contact information.'}
              </h3>
            </div>

            {/* STEP 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-[#506A89]/50 border-[#D0DBE9] text-[#F4F7FC] shadow-[0_0_15px_rgba(161,182,207,0.25)]'
                            : 'bg-white/5 border-[#A1B6CF]/20 text-[#D0DBE9] hover:border-[#A1B6CF]/40 hover:bg-[#506A89]/20'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
                {errors.serviceTypes && (
                  <p className="text-xs text-rose-300">{errors.serviceTypes.message}</p>
                )}
              </div>
            )}

            {/* STEP 2: Description, Budget & Timeline */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#D0DBE9] mb-1.5">
                    Project Overview & Key Objectives *
                  </label>
                  <textarea
                    rows={4}
                    {...register('projectDescription')}
                    placeholder="Briefly describe what you're looking to build, key features, target audience..."
                    className="w-full rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/30 px-3.5 py-2.5 text-sm text-[#F4F7FC] placeholder-[#819AB8] focus:outline-none focus:border-[#D0DBE9] transition-colors"
                  />
                  {errors.projectDescription && (
                    <p className="text-xs text-rose-300 mt-1">{errors.projectDescription.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D0DBE9] mb-1.5">Estimated Budget</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setValue('budgetRange', b)}
                        className={`p-2.5 rounded-lg border text-xs font-medium text-left transition-all ${
                          selectedBudget === b
                            ? 'bg-[#506A89]/50 border-[#D0DBE9] text-[#F4F7FC]'
                            : 'bg-white/5 border-[#A1B6CF]/20 text-[#D0DBE9] hover:border-[#A1B6CF]/40 hover:bg-[#506A89]/20'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D0DBE9] mb-1.5">Target Timeline</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setValue('timeline', t)}
                        className={`p-2 rounded-lg border text-xs font-medium text-center transition-all ${
                          selectedTimeline === t
                            ? 'bg-[#506A89]/50 border-[#D0DBE9] text-[#F4F7FC]'
                            : 'bg-white/5 border-[#A1B6CF]/20 text-[#D0DBE9] hover:border-[#A1B6CF]/40 hover:bg-[#506A89]/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D0DBE9] mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 w-4 h-4 text-[#819AB8]" />
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/30 pl-9 pr-3.5 py-2 text-sm text-[#F4F7FC] placeholder-[#819AB8] focus:outline-none focus:border-[#D0DBE9]"
                      />
                    </div>
                    {errors.name && <p className="text-xs text-rose-300 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D0DBE9] mb-1">Business Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-[#819AB8]" />
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="john@company.com"
                        className="w-full rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/30 pl-9 pr-3.5 py-2 text-sm text-[#F4F7FC] placeholder-[#819AB8] focus:outline-none focus:border-[#D0DBE9]"
                      />
                    </div>
                    {errors.email && <p className="text-xs text-rose-300 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D0DBE9] mb-1">Company / Organization</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-[#819AB8]" />
                      <input
                        type="text"
                        {...register('company')}
                        placeholder="Acme Inc."
                        className="w-full rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/30 pl-9 pr-3.5 py-2 text-sm text-[#F4F7FC] placeholder-[#819AB8] focus:outline-none focus:border-[#D0DBE9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D0DBE9] mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 w-4 h-4 text-[#819AB8]" />
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/30 pl-9 pr-3.5 py-2 text-sm text-[#F4F7FC] placeholder-[#819AB8] focus:outline-none focus:border-[#D0DBE9]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#253B54]/60 border border-[#A1B6CF]/20 text-xs text-[#A1B6CF]">
                  🔒 We protect your intellectual property. All submissions are covered by mutual non-disclosure standard protocols.
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#A1B6CF]/20">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#A1B6CF] hover:text-[#F4F7FC] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (currentStep === 1 && selectedServices.length === 0) {
                      setValue('serviceTypes', ['Custom Software Engineering']);
                    }
                    setCurrentStep((prev) => prev + 1);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold btn-glacier-primary"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold btn-glacier-primary disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Submit Project Brief'}</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// OVERHAUL PLAN: Multi-step funding request form with accessible validation and upload; uses StepIndicator and FormField.
'use client';

import { useState } from 'react';
import { StepIndicator } from '../../../components/forms/StepIndicator';
import { FormField } from '../../../components/forms/FormField';

interface FormData {
  orgName: string;
  contactName: string;
  contactEmail: string;
  amount: string;
  description: string;
  file?: File | null;
}

const steps = ['Organization', 'Request', 'Review'];

export default function FundingRequestPage() {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<FormData>({
    orgName: '',
    contactName: '',
    contactEmail: '',
    amount: '',
    description: '',
    file: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const next = () => setCurrent((c) => Math.min(c + 1, steps.length - 1));
  const back = () => setCurrent((c) => Math.max(c - 1, 0));

  const validate = () => {
    const e: Record<string, string> = {};
    if (current === 0) {
      if (!data.orgName) e.orgName = 'Organization name is required';
      if (!data.contactName) e.contactName = 'Contact name is required';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.contactEmail)) e.contactEmail = 'Valid email is required';
    } else if (current === 1) {
      if (!data.amount) e.amount = 'Amount is required';
      if (!data.description) e.description = 'Description is required';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validate()) next(); };
  const handleSubmit = () => { if (validate()) alert('Submitted'); };

  return (
    <div className="container section-spacing">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1>Funding Request</h1>
          <StepIndicator steps={steps} current={current} />
        </div>

        <div className="asgc-card">
          {current === 0 && (
            <div className="space-y-4">
              <FormField id="orgName" label="Organization Name" required error={errors.orgName}>
                <input id="orgName" className="form-input" value={data.orgName} onChange={(e)=>setData({...data, orgName:e.target.value})} />
              </FormField>
              <FormField id="contactName" label="Contact Name" required error={errors.contactName}>
                <input id="contactName" className="form-input" value={data.contactName} onChange={(e)=>setData({...data, contactName:e.target.value})} />
              </FormField>
              <FormField id="contactEmail" label="Contact Email" required error={errors.contactEmail} help="We’ll use this to reach you about the request.">
                <input id="contactEmail" type="email" className="form-input" value={data.contactEmail} onChange={(e)=>setData({...data, contactEmail:e.target.value})} />
              </FormField>
            </div>
          )}

          {current === 1 && (
            <div className="space-y-4">
              <FormField id="amount" label="Requested Amount" required error={errors.amount}>
                <input id="amount" type="number" min={0} className="form-input" value={data.amount} onChange={(e)=>setData({...data, amount:e.target.value})} />
              </FormField>
              <FormField id="description" label="Description" required error={errors.description} help="Explain how funds will be used and who benefits.">
                <textarea id="description" rows={5} className="form-input" value={data.description} onChange={(e)=>setData({...data, description:e.target.value})} />
              </FormField>
              <div>
                <label className="sr-only" htmlFor="file">Attachment</label>
                <input id="file" type="file" className="hidden" onChange={(e)=>setData({...data, file:e.target.files?.[0] || null})} />
                <button onClick={()=>document.getElementById('file')?.click()} className="btn-primary">
                  Upload Attachment
                </button>
                {data.file && <span className="ml-3 text-sm text-[var(--color-muted)]">{data.file.name}</span>}
              </div>
            </div>
          )}

          {current === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Review</h3>
              <ul className="text-sm text-[var(--color-muted)] space-y-1">
                <li><strong className="text-[var(--color-foreground)]">Organization:</strong> {data.orgName}</li>
                <li><strong className="text-[var(--color-foreground)]">Contact:</strong> {data.contactName} ({data.contactEmail})</li>
                <li><strong className="text-[var(--color-foreground)]">Amount:</strong> {data.amount}</li>
                <li><strong className="text-[var(--color-foreground)]">Description:</strong> {data.description}</li>
                {data.file && <li><strong className="text-[var(--color-foreground)]">Attachment:</strong> {data.file.name}</li>}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button onClick={back} className="btn-secondary" disabled={current===0}>Back</button>
          {current < steps.length - 1 ? (
            <button onClick={handleNext} className="btn-primary">Continue</button>
          ) : (
            <button onClick={handleSubmit} className="btn-primary">Submit Request</button>
          )}
        </div>
      </div>
    </div>
  );
}

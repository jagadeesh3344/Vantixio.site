import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { X, Calendar, Clock, CheckCircle2, Globe } from 'lucide-react';

const DATES = [
  { day: 'Mon', date: 'Nov 09' },
  { day: 'Tue', date: 'Nov 10' },
  { day: 'Wed', date: 'Nov 11' },
  { day: 'Thu', date: 'Nov 12' },
  { day: 'Fri', date: 'Nov 13' },
];

const TIME_SLOTS = [
  '11:00 AM - 11:30 AM',
  '02:00 PM - 02:30 PM',
  '04:30 PM - 05:00 PM',
  '06:00 PM - 06:30 PM',
  '08:30 PM - 09:00 PM',
];

export const ScheduleCallModal: React.FC = () => {
  const { isScheduleModalOpen, closeScheduleModal } = useModal();
  const [selectedDate, setSelectedDate] = useState('Nov 10');
  const [selectedSlot, setSelectedSlot] = useState('02:00 PM - 02:30 PM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isScheduleModalOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleClose = () => {
    closeScheduleModal();
    setTimeout(() => {
      setIsBooked(false);
      setName('');
      setEmail('');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#253B54]/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#314A66]/95 border border-[#A1B6CF]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(37,59,84,0.8)] my-8">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:border-[#D0DBE9] text-[#A1B6CF] hover:text-[#F4F7FC] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#A1B6CF]" />
        </button>

        {isBooked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#506A89]/30 border border-[#D0DBE9] flex items-center justify-center text-[#D0DBE9] shadow-[0_0_25px_rgba(208,219,233,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#F4F7FC]">Discovery Call Scheduled</h3>
            <p className="text-sm text-[#D0DBE9] max-w-sm mx-auto">
              A calendar invite and Google Meet link have been sent to <span className="text-[#F4F7FC] font-semibold">{email || 'your email'}</span> for {selectedDate} at {selectedSlot}.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2 rounded-full text-sm font-semibold btn-glacier-primary"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-[#A1B6CF]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1B6CF]">
                  30-Min Technical Discovery
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#F4F7FC]">Schedule a Call</h3>
              <p className="text-xs text-[#A1B6CF] mt-1">
                Direct consultation with our engineering and product architecture leads.
              </p>
            </div>

            {/* Date Selector */}
            <div>
              <label className="block text-xs font-medium text-[#D0DBE9] mb-2">Select Date</label>
              <div className="grid grid-cols-5 gap-2">
                {DATES.map((d) => (
                  <button
                    type="button"
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`py-2 px-1 text-center rounded-xl border text-xs transition-all ${
                      selectedDate === d.date
                        ? 'bg-[#506A89]/50 border-[#D0DBE9] text-[#F4F7FC] shadow-[0_0_12px_rgba(161,182,207,0.25)]'
                        : 'bg-white/5 border-[#A1B6CF]/20 text-[#A1B6CF] hover:border-[#A1B6CF]/40 hover:bg-[#506A89]/20'
                    }`}
                  >
                    <span className="block text-[10px] text-[#819AB8] uppercase">{d.day}</span>
                    <span className="block font-semibold mt-0.5">{d.date.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Slot Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-medium text-[#D0DBE9]">Available Time Slots</label>
                <span className="text-[10px] text-[#819AB8] flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#A1B6CF]" /> IST (UTC +5:30)
                </span>
              </div>
              <div className="space-y-1.5">
                {TIME_SLOTS.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full py-2 px-3 rounded-lg border text-xs font-medium text-left flex items-center justify-between transition-all ${
                      selectedSlot === slot
                        ? 'bg-[#506A89]/50 border-[#D0DBE9] text-[#F4F7FC]'
                        : 'bg-white/5 border-[#A1B6CF]/20 text-[#D0DBE9] hover:border-[#A1B6CF]/40 hover:bg-[#506A89]/20'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#A1B6CF]" />
                      {slot}
                    </span>
                    {selectedSlot === slot && <span className="text-[10px] text-[#D0DBE9] font-mono">SELECTED</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-3 pt-2">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name *"
                className="w-full rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/30 px-3.5 py-2 text-xs text-[#F4F7FC] placeholder-[#819AB8] focus:outline-none focus:border-[#D0DBE9]"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Business Email *"
                className="w-full rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/30 px-3.5 py-2 text-xs text-[#F4F7FC] placeholder-[#819AB8] focus:outline-none focus:border-[#D0DBE9]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full text-xs font-semibold btn-glacier-primary"
            >
              Confirm 30-Min Discovery Call
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

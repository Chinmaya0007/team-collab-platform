import React, { useState } from 'react';
import { X, Loader2, Flag, ChevronDown } from 'lucide-react';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: {
    title: string;
    description: string;
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    assigneeId?: string;
  }) => void;
  isCreating?: boolean;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  isCreating = false,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<"LOW" | "MEDIUM" | "HIGH" | "URGENT">('MEDIUM');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || isCreating) return;
    
    onCreate({
      title: title.trim(),
      description: description.trim(),
      priority,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Create New Task</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Task Title */}
          <div className="space-y-1.5">
            <label htmlFor="task-title" className="block text-sm font-medium text-slate-700">
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Implement OAuth2 Middleware"
              disabled={isCreating}
              autoFocus
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 transition-all outline-none focus:ring-4 focus:ring-[#3525cd]/10 focus:border-[#3525cd] placeholder:text-slate-400"
            />
          </div>

          {/* Priority Selection */}
          <div className="space-y-1.5">
            <label htmlFor="task-priority" className="block text-sm font-medium text-slate-700">
              Priority
            </label>
            <div className="relative">
              <select
                id="task-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                disabled={isCreating}
                className="w-full appearance-none px-4 py-2.5 pl-10 rounded-xl border border-slate-200 transition-all outline-none focus:ring-4 focus:ring-[#3525cd]/10 focus:border-[#3525cd] bg-white cursor-pointer disabled:cursor-not-allowed"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <Flag 
                  size={18} 
                  className={
                    priority === 'URGENT' ? 'text-red-500' : 
                    priority === 'HIGH' ? 'text-orange-500' : 
                    priority === 'MEDIUM' ? 'text-blue-500' :
                    'text-slate-400'
                  } 
                />
              </div>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label htmlFor="task-desc" className="block text-sm font-medium text-slate-700">
              Description <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="task-desc"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide more details about this task..."
              disabled={isCreating}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 transition-all outline-none focus:ring-4 focus:ring-[#3525cd]/10 focus:border-[#3525cd] resize-none placeholder:text-slate-400"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isCreating}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim() || isCreating}
              className="flex-[1.5] px-4 py-2.5 rounded-xl bg-[#3525cd] text-white font-semibold hover:bg-[#2a1da3] shadow-lg shadow-[#3525cd]/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isCreating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Task'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
/**
 * EmailCapture — shared MailerLite signup form.
 * Variants: "light" (on warm/sand backgrounds), "dark" (on coral/teal/plum backgrounds).
 */

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Mail } from "lucide-react";
import { toast } from "sonner";

const MAILERLITE_FORM_URL =
  "https://assets.mailerlite.com/jsonp/2352345/forms/187583549959832732/subscribe";

export default function EmailCapture({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fields[name]", firstName);
      formData.append("fields[email]", email);
      formData.append("ml-submit", "1");
      formData.append("anticsrf", "true");

      await fetch(MAILERLITE_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setIsSuccess(true);
      toast.success(
        "Welcome to The Neuro Haven! Check your inbox for your free checklist."
      );
    } catch {
      toast.error("We couldn't submit your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className={`flex items-center gap-3 p-6 rounded-xl w-full max-w-md ${
          variant === "dark" ? "bg-white/10" : "bg-[#2B7A78]/10"
        }`}
      >
        <CheckCircle
          className={`w-8 h-8 flex-shrink-0 ${
            variant === "dark" ? "text-[#6BC4A6]" : "text-[#2B7A78]"
          }`}
        />
        <div>
          <p
            className="font-semibold text-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            You're in! Check your inbox.
          </p>
          <p
            className={`text-sm mt-1 ${
              variant === "dark" ? "text-white/70" : "text-[#2D2D2D]/70"
            }`}
          >
            Your Executive Function Checklist is on its way.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
      <Input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={`h-12 text-base rounded-lg border-2 ${
          variant === "dark"
            ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6BC4A6]"
            : "bg-white border-[#2B7A78]/20 text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:border-[#2B7A78]"
        }`}
      />
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`h-12 text-base rounded-lg border-2 ${
          variant === "dark"
            ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6BC4A6]"
            : "bg-white border-[#2B7A78]/20 text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:border-[#2B7A78]"
        }`}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full h-12 text-base font-semibold rounded-lg transition-all duration-200 ${
          variant === "dark"
            ? "bg-[#E8755A] hover:bg-[#d4654a] text-white"
            : "bg-[#2B7A78] hover:bg-[#236563] text-white"
        }`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Get My Free Checklist
          </span>
        )}
      </Button>
      <p
        className={`text-xs text-center ${
          variant === "dark" ? "text-white/50" : "text-[#2D2D2D]/50"
        }`}
      >
        No spam. Unsubscribe anytime. We respect your inbox.
      </p>
    </form>
  );
}

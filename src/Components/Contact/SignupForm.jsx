import { useState } from "react";
import { Label } from "../../ui/label";
import { Input, Textarea } from "../../ui/input";
import { cn } from "../../lib/utils";
import emailjs from "@emailjs/browser";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const [emailError, setEmailError] = useState("");
  const isDisabled = !name || !email || !message || isSending || !!emailError;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label>Full name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Write full name here "
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label>Email Address</Label>
          <Input
            id="email"
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              setEmailError(
                validateEmail(value) ? "" : "Invalid email address"
              );
            }}
            placeholder="email@gmail.com"
            type="email"
          />{" "}
          {emailError && (
            <div className="text-red-500 text-sm">{emailError}</div>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Your Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            type="email"
            className="text-xl text-white border-2 border-gray-400 rounded-2xl w-full h-50 px-2 py-1 align-top resize-none bg-zinc-800"
          />
        </LabelInputContainer>

        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`group/btn relative block ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          } h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]`}
          type="submit"
        >
          {isSending ? "Sending..." : "Send Message"} &rarr;
          <BottomGradient />
        </button>

        {status && (
          <div className="w-full flex justify-center text-green-600 font-semibold">
            {status}
          </div>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

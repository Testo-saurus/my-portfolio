"use client";

import Image from "next/image";
import { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative">
        {/* Close button */}
        <button
          className="cursor-pointer rounded-lg absolute p-1 top-4 right-4 hover:bg-black/50  focus:ring-blue-500 "
          onClick={onClose}
        >
          <Image alt="close icon" src="/x-mark.svg" width={24} height={24} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600">
            Let&#39;s discuss your project or just say hello.
          </p>
        </div>

        {/* Add these status messages: */}
        {submitStatus === "success" && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            ✅ Message sent successfully! I&#39;ll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            ❌ Failed to send message. Please try again.
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log("form data", formData);

            try {
              setSubmitStatus("sending");
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });
              if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" }); //clear form
                setTimeout(() => onClose(), 2000); // auto-close after 2 sec
              } else {
                alert("Failed to send E-mail.");
              }
            } catch (error) {
              alert("Error sending mail");
              console.log("error:", error);
            }
          }}
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              rows={4}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitStatus === "sending"}
            className="cursor-pointer w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {submitStatus === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

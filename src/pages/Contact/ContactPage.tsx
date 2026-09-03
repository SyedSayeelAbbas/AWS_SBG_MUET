import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  Sparkles,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import Container from "../../components/layout/Container";
import SectionWrapper from "../../components/common/SectionWrapper";
import { Button } from "../../components/ui/Button";

import {
  contactInfo,
  contactSocialLinks,
} from "../../constants/contact";

/* =========================================================
   BRAND ICONS
   Using inline SVG so no additional icon package is required.
========================================================= */

const BrandIcon = ({
  type,
  size = 19,
}: {
  type: string;
  size?: number;
}) => {
  if (type === "linkedin") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.606 0 4.267 2.373 4.267 5.467v6.275zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM3.555 20.452h3.562V8.999H3.555v11.453z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 21v-8h2.75l.5-3h-3.25V8.05c0-.87.24-1.46 1.5-1.46h1.6V3.91c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.06V10H7.65v3h2.65v8h3.2z" />
      </svg>
    );
  }

  return null;
};

/* =========================================================
   CONTACT ICON MAP
========================================================= */

const iconMap = {
  mail: Mail,
  "map-pin": MapPin,
  users: Users,
};

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSending(true);

    const form = event.currentTarget;

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS env values are missing.");
      }

      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });

      form.reset();
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      setSubmitError(
        "Message could not be sent right now. Please try again in a moment."
      );
      console.error("EmailJS send failed:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          PREMIUM HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#faf9ff] pt-28 sm:pt-28 md:pt-32 lg:pt-36">

        {/* Background effects */}

        <div className="pointer-events-none absolute inset-0">

          {/* Main glow */}

          <div className="absolute left-1/2 top-[-160px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand-200/30 blur-[90px] sm:top-[-220px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

          {/* Left glow */}

          <div className="absolute -left-32 top-40 hidden h-72 w-72 rounded-full bg-violet-200/30 blur-[100px] sm:block" />

          {/* Right glow */}

          <div className="absolute -right-32 top-20 hidden h-80 w-80 rounded-full bg-fuchsia-200/20 blur-[110px] sm:block" />

          {/* Subtle grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#6d28d9 1px, transparent 1px), linear-gradient(90deg, #6d28d9 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <Container>

          {/* Hero heading */}

          <div className="relative mx-auto max-w-4xl px-2 text-center sm:px-0">

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600 shadow-sm backdrop-blur-xl sm:mb-6 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
            >
              <Sparkles size={14} />

              Get In Touch
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="text-[2rem] font-black leading-[1.12] tracking-[-0.02em] text-heading sm:text-5xl sm:leading-[1.05] sm:tracking-[-0.04em] md:text-6xl lg:text-7xl"
            >
              Let's build something

              <span className="block bg-gradient-to-r from-brand-500 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                meaningful together.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.16,
              }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8"
            >
              Have a question, want to collaborate, or simply want to learn
              more about AWS Student Builder Club MUET? We'd love to hear from
              you.
            </motion.p>

          </div>

          {/* =================================================
              CONTACT CARDS
          ================================================= */}

          <div className="relative mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">

            {contactInfo.map((item, index) => {

              const Icon =
                iconMap[item.icon as keyof typeof iconMap] || Mail;

              return (
                <motion.a
                  key={item.id}
                  href={item.href || "#"}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-[22px] border border-white bg-white/75 p-5 shadow-[0_18px_60px_rgba(70,40,130,0.07)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_25px_80px_rgba(70,40,130,0.13)] sm:rounded-[28px] sm:p-6"
                >

                  {/* Hover glow */}

                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-100/70 blur-2xl transition-all duration-500 group-hover:scale-150" />

                  <div className="relative">

                    {/* Icon + arrow */}

                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-violet-100 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 sm:h-12 sm:w-12">
                        <Icon size={20} className="sm:hidden" />
                        <Icon size={22} className="hidden sm:block" />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-500"
                      />

                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-base font-bold text-heading sm:mt-6 sm:text-lg">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-2 min-h-[40px] text-sm leading-6 text-gray-500 sm:min-h-[48px]">
                      {item.description}
                    </p>

                    {/* Value */}

                    <p className="mt-4 truncate text-sm font-bold text-brand-600 sm:mt-5">
                      {item.value}
                    </p>

                  </div>
                </motion.a>
              );
            })}

          </div>

        </Container>

        <div className="h-12 sm:h-20" />

      </section>


      {/* =====================================================
          CONTACT FORM SECTION
      ===================================================== */}

      <SectionWrapper background="white">

        <Container>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              {/* Label */}

              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 sm:px-3.5 sm:py-2 sm:text-xs sm:tracking-[0.15em]">
                <MessageCircle size={14} />

                Contact Us
              </div>

              {/* Heading */}

              <h2 className="mt-4 max-w-xl text-2xl font-black leading-tight tracking-[-0.02em] text-heading sm:mt-5 sm:text-4xl sm:tracking-[-0.035em] md:text-5xl">
                Have something

                <span className="block bg-gradient-to-r from-brand-500 to-violet-600 bg-clip-text text-transparent">
                  in mind?
                </span>
              </h2>

              {/* Description */}

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:mt-6 sm:text-base sm:leading-7">
                Whether you're interested in joining the community,
                collaborating with us, attending an event, or simply learning
                more about AWS, feel free to reach out.
              </p>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">

                {/* Email */}
<a
                  href="mailto:awssbgmuet@gmail.com"
                  className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 p-3.5 transition-all duration-300 hover:border-brand-100 hover:bg-brand-50/40 sm:gap-4 sm:p-4"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm sm:h-11 sm:w-11">
                    <Mail size={18} className="sm:hidden" />
                    <Mail size={19} className="hidden sm:block" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm font-bold text-heading">
                      Email
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-500 transition-colors group-hover:text-brand-600 sm:text-sm">
                      awssbgmuet@gmail.com
                    </p>

                  </div>

                </a>


                {/* Location */}

                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 p-3.5 sm:gap-4 sm:p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm sm:h-11 sm:w-11">
                    <MapPin size={18} className="sm:hidden" />
                    <MapPin size={19} className="hidden sm:block" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm font-bold text-heading">
                      Location
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                      Mehran University of Engineering & Technology, Jamshoro
                    </p>

                  </div>

                </div>


                {/* Response */}

                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 p-3.5 sm:gap-4 sm:p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm sm:h-11 sm:w-11">
                    <Clock3 size={18} className="sm:hidden" />
                    <Clock3 size={19} className="hidden sm:block" />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-heading">
                      Let's connect
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                      Our team will get back to you as soon as possible.
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <div className="mt-7 sm:mt-9">

                <p className="text-sm font-bold text-heading">
                  Follow the community
                </p>

                <div className="mt-3 flex gap-3 sm:mt-4">

                  {contactSocialLinks.map((social) => (

                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 hover:shadow-lg hover:shadow-brand-500/10 sm:h-11 sm:w-11"
                    >

                      <BrandIcon
                        type={social.id}
                        size={18}
                      />

                      {/* Hover glow */}

                      <span
                        className="pointer-events-none absolute inset-0 rounded-full bg-brand-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                    </a>

                  ))}

                </div>

              </div>

            </motion.div>


            {/* =================================================
                FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              {/* Decorative glow */}

              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-r from-brand-100/30 via-violet-100/30 to-fuchsia-100/20 blur-2xl sm:-inset-5 sm:rounded-[40px]" />

              {/* Form card */}

              <div className="relative overflow-hidden rounded-[24px] border border-gray-200/80 bg-white p-5 shadow-[0_25px_90px_rgba(60,40,120,0.09)] sm:rounded-[32px] sm:p-6 md:p-9">

                {/* Top gradient */}

                <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 via-violet-500 to-fuchsia-500" />


                {submitted ? (

                  /* =================================================
                     SUCCESS STATE
                  ================================================= */

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.94,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="flex min-h-[360px] flex-col items-center justify-center px-4 text-center sm:min-h-[500px] sm:px-6"
                  >

                    <motion.div
                      initial={{
                        scale: 0.7,
                        rotate: -10,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 12,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 text-green-600 shadow-sm sm:h-20 sm:w-20"
                    >
                      <CheckCircle2 size={32} className="sm:hidden" />
                      <CheckCircle2 size={38} className="hidden sm:block" />
                    </motion.div>

                    <h3 className="mt-6 text-xl font-black text-heading sm:mt-7 sm:text-2xl">
                      Message Received
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:leading-7">
                      Thank you for reaching out. Your message has been
                      received and our team will get back to you as soon as
                      possible.
                    </p>

                  </motion.div>

                ) : (

                  /* =================================================
                     FORM STATE
                  ================================================= */

                  <>

                    {/* Form heading */}

                    <div>

                      <div className="flex items-center justify-between gap-4">

                        <div>

                          <h3 className="text-xl font-black tracking-tight text-heading sm:text-2xl">
                            Send us a message
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-gray-500">
                            Tell us what you're working on or how we can help.
                          </p>

                        </div>

                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 sm:flex sm:h-11 sm:w-11">
                          <Send size={18} />
                        </div>

                      </div>

                    </div>


                    {/* Form */}

                    <form
                      onSubmit={handleSubmit}
                      className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
                    >

                      {/* Name + Email */}

                      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

                        {/* Name */}

                        <div>

                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-bold text-heading"
                          >
                            Name
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your name"
                            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 text-sm text-heading outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100/70 sm:h-12"
                          />

                        </div>


                        {/* Email */}

                        <div>

                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-bold text-heading"
                          >
                            Email
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 text-sm text-heading outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100/70 sm:h-12"
                          />

                        </div>

                      </div>


                      {/* Subject */}

                      <div>

                        <label
                          htmlFor="subject"
                          className="mb-2 block text-sm font-bold text-heading"
                        >
                          Subject
                        </label>

                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          placeholder="How can we help?"
                          className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 text-sm text-heading outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100/70 sm:h-12"
                        />

                      </div>


                      {/* Message */}

                      <div>

                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-bold text-heading"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Write your message here..."
                          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-sm leading-6 text-heading outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100/70 sm:rows-6"
                        />

                      </div>


                      {/* Submit */}

                      <Button
                        type="submit"
                        size="lg"
                        showArrow
                        disabled={isSending}
                        className="group w-full !rounded-xl !bg-gradient-to-r !from-brand-500 !to-violet-600 !shadow-lg !shadow-brand-500/20 transition-all duration-300 hover:!from-brand-600 hover:!to-violet-700 hover:!shadow-xl hover:!shadow-brand-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSending ? "Sending..." : "Send Message"}

                        <Send
                          size={17}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />

                      </Button>

                      {submitError ? (
                        <p className="text-center text-sm text-red-500">
                          {submitError}
                        </p>
                      ) : null}


                      {/* Privacy */}

                      <p className="text-center text-xs text-gray-400">
                        We respect your privacy and will only use your
                        information to respond to your message.
                      </p>

                    </form>

                  </>

                )}

              </div>

            </motion.div>

          </div>

        </Container>

      </SectionWrapper>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section
        id="location"
        className="relative overflow-hidden bg-[#faf9ff] py-16 sm:py-20 md:py-28"
      >

        {/* Background glow */}

        <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-brand-100/30 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px]" />

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[26px] border border-white bg-white/70 p-5 shadow-[0_25px_90px_rgba(70,40,130,0.08)] backdrop-blur-xl sm:rounded-[34px] sm:p-7 md:p-10"
          >

            {/* Decorative glow */}

            <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-100/50 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 md:items-center md:gap-10">

              {/* =================================================
                  LOCATION CONTENT
              ================================================= */}

              <div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-violet-100 text-brand-600 sm:h-12 sm:w-12">
                  <MapPin size={20} className="sm:hidden" />
                  <MapPin size={23} className="hidden sm:block" />
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-600 sm:mt-6 sm:text-xs sm:tracking-[0.2em]">
                  Our Location
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-heading sm:text-3xl md:text-4xl">
                  Find us at MUET
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:mt-4 sm:leading-7">
                  AWS Student Builder Club MUET is a student community based
                  at Mehran University of Engineering & Technology, Jamshoro.
                </p>

                <div className="mt-6 sm:mt-7">

                  <p className="text-sm font-bold text-heading sm:text-base">
                    Mehran University of Engineering & Technology
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Jamshoro, Sindh, Pakistan
                  </p>

                </div>

              </div>


              {/* =================================================
                  LOCATION VISUAL
              ================================================= */}

<a
  href="https://www.google.com/maps/search/?api=1&query=Mehran+University+of+Engineering+and+Technology+Jamshoro+Sindh+Pakistan"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open MUET location in Google Maps"
  className="group relative block h-[240px] overflow-hidden rounded-[22px] border border-gray-200 bg-gray-100 shadow-inner sm:h-[300px] sm:rounded-[28px] md:h-[340px]"
>
  <iframe
    title="Mehran University of Engineering & Technology Location"
    src="https://www.google.com/maps?q=Mehran%20University%20of%20Engineering%20and%20Technology%2C%20Jamshoro%2C%20Sindh%2C%20Pakistan&output=embed"
    className="pointer-events-none h-full w-full border-0 grayscale-[15%] transition-all duration-700 group-hover:grayscale-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
    <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:px-4 sm:py-3">
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:h-10 sm:w-10">
          <MapPin size={17} className="sm:hidden" />
          <MapPin size={19} className="hidden sm:block" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-heading">
            MUET, Jamshoro
          </p>

          <p className="truncate text-xs text-gray-500">
            Sindh, Pakistan
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={18}
        className="shrink-0 text-brand-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>
  </div>
</a>

            </div>

          </motion.div>

        </Container>

      </section>

    </main>
  );
}
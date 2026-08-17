import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";

import Container from "./Container";
import FooterLinkGroup from "../common/FooterLinkGroup";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

import { footerLinks, socials } from "../../constants/footer.constants";
import { ROUTES } from "../../constants/routes";

import awsLogo from "../../assets/aws-sbg-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      {/* =====================================================
          TOP BORDER
      ====================================================== */}
      <div className="h-px w-full bg-[#E9D5FF]" />

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/4
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#8C52FF]/[0.06]
          blur-[140px]
          will-change-transform
        "
      />

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-32
          right-1/4
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#6B46C1]/[0.06]
          blur-[130px]
          will-change-transform
        "
      />

      {/* Faint dot grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.4]
          [background-image:radial-gradient(#E9D5FF_1px,transparent_1px)]
          [background-size:28px_28px]
          [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,black_35%,transparent_100%)]
        "
      />

      <Container className="relative z-10 pt-16 sm:pt-20 lg:pt-24">

        {/* =====================================================
            FOOTER BRAND HERO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            aria-label="AWS Student Builder Group MUET"
            className="
              group
              mx-auto
              inline-flex
              items-center
              gap-4
            "
          >
            <div
              className="
                relative
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-[#E9D5FF]
                bg-white
                shadow-[0_10px_35px_rgba(140,82,255,0.12)]
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:scale-105
                group-hover:border-[#C4B5FD]
                group-hover:shadow-[0_15px_45px_rgba(140,82,255,0.25)]
              "
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  bg-[#8C52FF]/[0.04]
                "
              />

              <img
                src={awsLogo}
                alt="AWS Student Builder Group MUET"
                className="
                  relative
                  z-10
                  h-12
                  w-12
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <div className="text-left">
              <h2
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-[#1F2937]
                  transition-colors
                  duration-300
                  group-hover:text-[#6B46C1]
                  sm:text-2xl
                "
              >
                AWS Student Builder Group
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-[#8C52FF]
                "
              >
                MUET Jamshoro
              </p>
            </div>
          </Link>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-body
              sm:text-base
            "
          >
            Empowering students to explore AWS, cloud computing,
            artificial intelligence and software development through
            workshops, certifications, hackathons and meaningful
            community collaboration.
          </p>

          {/* Socials */}
          <div className="mt-7 flex justify-center gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our social page"
                  whileHover={{
                    y: -4,
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E9D5FF]
                    bg-white
                    text-[#6B46C1]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-transparent
                    hover:bg-[#8C52FF]
                    hover:text-white
                    hover:shadow-[0_10px_30px_rgba(140,82,255,.30)]
                  "
                >
                  <Icon size={17} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            CTA + NEWSLETTER
        ====================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-14
            grid
            gap-8
            rounded-[28px]
            border
            border-[#E9D5FF]
            bg-[#F5F3FF]
            p-6
            shadow-[0_20px_60px_rgba(140,82,255,.10)]
            sm:mt-16
            sm:p-8
            lg:grid-cols-2
            lg:items-center
            lg:p-10
          "
        >

          {/* CTA */}
          <div>
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#E9D5FF]
                bg-white
                px-3
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-[#6B46C1]
              "
            >
              Join the Community
            </span>

            <h3
              className="
                mt-4
                text-2xl
                font-bold
                text-heading
                sm:text-3xl
              "
            >
              Build. Learn. Connect.
            </h3>

            <p
              className="
                mt-3
                max-w-md
                text-sm
                leading-7
                text-body
                sm:text-base
              "
            >
              Be part of the next generation of student builders
              at MUET and grow your skills alongside a community
              of ambitious students.
            </p>

            <Link
              to={ROUTES.JOIN}
              className="mt-6 inline-block"
            >
              <Button
                size="md"
                showArrow
              >
                Join Community
              </Button>
            </Link>
          </div>

          {/* Newsletter */}
          <div
            className="
              lg:border-l
              lg:border-[#E9D5FF]
              lg:pl-8
            "
          >
            <h4
              className="
                text-xl
                font-bold
                text-heading
              "
            >
              Stay Updated
            </h4>

            <p
              className="
                mt-2
                max-w-lg
                text-sm
                leading-6
                text-body
              "
            >
              Get updates about upcoming workshops,
              hackathons, certifications and AWS community
              sessions.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                mt-5
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <label
                htmlFor="footer-newsletter-email"
                className="sr-only"
              >
                Email address
              </label>

              <Input
                id="footer-newsletter-email"
                type="email"
                placeholder="Email Address"
                aria-label="Email address"
                className="
                  border-[#E9D5FF]
                  bg-white
                  focus:border-[#8C52FF]
                  focus:ring-[#8C52FF]/20
                "
              />

              <Button
                type="submit"
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                "
              >
                Subscribe
                <ArrowUpRight size={18} />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* =====================================================
            FOOTER LINKS
        ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-14
            grid
            grid-cols-1
            gap-10
            border-t
            border-[#E9D5FF]
            pt-12
            sm:mt-16
            sm:grid-cols-3
            sm:gap-8
            lg:pt-14
          "
        >
          {footerLinks.map((group) => (
            <div
              key={group.title}
              className="
                [&_h3]:relative
                [&_h3]:inline-block
                [&_h3]:pb-2
                [&_h3]:text-heading
                [&_h3]:tracking-wide
                [&_h3]:after:absolute
                [&_h3]:after:bottom-0
                [&_h3]:after:left-0
                [&_h3]:after:h-[3px]
                [&_h3]:after:w-6
                [&_h3]:after:rounded-full
                [&_h3]:after:bg-[linear-gradient(90deg,#6B46C1,#8C52FF)]
                [&_ul]:mt-5
                [&_a]:inline-flex
                [&_a]:items-center
                [&_a]:gap-1.5
                [&_a]:text-body
                [&_a]:transition-all
                [&_a]:duration-300
                [&_a:hover]:translate-x-1
                [&_a:hover]:text-[#6B46C1]
              "
            >
              <FooterLinkGroup {...group} />
            </div>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-[#E9D5FF]
            py-7
            sm:mt-14
            sm:flex-row
          "
        >
          <p
            className="
              text-center
              text-xs
              leading-6
              text-body
              sm:text-left
              sm:text-sm
            "
          >
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#6B46C1]">
              AWS Student Builder Group MUET
            </span>
            . All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Scroll back to top"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#E9D5FF]
              bg-white
              text-[#6B46C1]
              shadow-sm
              transition-all
              duration-300
              hover:border-transparent
              hover:bg-[#8C52FF]
              hover:text-white
              hover:shadow-[0_10px_30px_rgba(140,82,255,.30)]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#8C52FF]
            "
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}
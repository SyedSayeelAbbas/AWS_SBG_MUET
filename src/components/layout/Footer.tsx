import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

import Container from "./Container";
import FooterLinkGroup from "../common/FooterLinkGroup";
import { Button } from "../../components/ui/Button";

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
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#8C52FF]/[0.06]
          blur-[90px]
          will-change-transform
          sm:h-[320px]
          sm:w-[320px]
          sm:blur-[110px]
          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[140px]
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
          h-[200px]
          w-[200px]
          rounded-full
          bg-[#6B46C1]/[0.06]
          blur-[80px]
          will-change-transform
          sm:h-[300px]
          sm:w-[300px]
          sm:blur-[100px]
          lg:h-[380px]
          lg:w-[380px]
          lg:blur-[130px]
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
          [background-size:20px_20px]
          [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,black_35%,transparent_100%)]
          sm:[background-size:28px_28px]
        "
      />

      <Container className="relative z-10 pt-12 sm:pt-16 lg:pt-24">

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
              flex
              flex-col
              items-center
              gap-3
              sm:inline-flex
              sm:flex-row
              sm:gap-4
            "
          >
            <div
              className="
                relative
                flex
                h-14
                w-14
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
                sm:h-16
                sm:w-16
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
                  h-10
                  w-10
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                  sm:h-12
                  sm:w-12
                "
              />
            </div>

            <div className="text-center sm:text-left">
              <h2
                className="
                  text-lg
                  font-bold
                  tracking-tight
                  text-[#1F2937]
                  transition-colors
                  duration-300
                  group-hover:text-[#6B46C1]
                  sm:text-xl
                  lg:text-2xl
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
              mt-6
              max-w-2xl
              px-2
              text-sm
              leading-7
              text-body
              sm:mt-7
              sm:px-0
              sm:text-base
            "
          >
            Empowering students to explore AWS, cloud computing,
            artificial intelligence and software development through
            workshops, certifications, hackathons and meaningful
            community collaboration.
          </p>

          {/* Socials */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7">
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
                    h-10
                    w-10
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
                    sm:h-11
                    sm:w-11
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
            mt-12
            grid
            gap-8
            rounded-[24px]
            border
            border-[#E9D5FF]
            bg-[#F5F3FF]
            p-5
            shadow-[0_20px_60px_rgba(140,82,255,.10)]
            sm:mt-16
            sm:rounded-[28px]
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
                text-xl
                font-bold
                text-heading
                sm:text-2xl
                lg:text-3xl
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

            <a
              href="https://www.meetup.com/aws-sbg-at-mehran-uni-engineering-and-tech-jamshoro-pakistan/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full sm:w-auto"
            >
              <Button
                size="md"
                showArrow
                className="w-full sm:w-auto"
              >
                Join Community
              </Button>
            </a>
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
                text-lg
                font-bold
                text-heading
                sm:text-xl
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
            mt-12
            grid
            grid-cols-2
            gap-x-6
            gap-y-10
            border-t
            border-[#E9D5FF]
            pt-10
            text-left
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
                [&_h3]:text-sm
                [&_h3]:text-heading
                [&_h3]:tracking-wide
                [&_h3]:after:absolute
                [&_h3]:after:bottom-0
                [&_h3]:after:left-0
                [&_h3]:after:h-[3px]
                [&_h3]:after:w-6
                [&_h3]:after:rounded-full
                [&_h3]:after:bg-[linear-gradient(90deg,#6B46C1,#8C52FF)]
                sm:[&_h3]:text-base
                [&_ul]:mt-5
                [&_a]:inline-flex
                [&_a]:items-center
                [&_a]:gap-1.5
                [&_a]:text-sm
                [&_a]:text-body
                [&_a]:transition-all
                [&_a]:duration-300
                sm:[&_a]:text-base
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
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-[#E9D5FF]
            py-6
            sm:mt-14
            sm:flex-row
            sm:py-7
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
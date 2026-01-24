"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { contactConfig } from "@/config/contact";
import Container from "@/components/common/Container";
import { signUpBenefits } from "@/constants/data";
import { Star } from "lucide-react";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  return (
    <div className="min-h-screen bg-linear-to-br from-shop_orange/5 via-shop_light_bg to-shop_light_pink/60 relative overflow-hidden">
      <Container className="flex flex-col lg:flex-row min-h-screen gap-5 lg:gap-12">
        {/* Left Side - Benefits and welcome */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5 h-full py-8 lg:py-12 space-y-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-shop_dark_green mb-4">
              Join {contactConfig.company.name}
            </h1>
            <p className="max-w-lg text-lg text-dark-text mb-8 leading-relaxed">
              Create your account and unlock exclusive benefits, personalized
              recommendations and seamless shopping exeperiences .
            </p>
          </motion.div>
          {/* Benefits */}
          <div className="space-y-6">
            {signUpBenefits?.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-2 bg-shop_orange/10 rounded-lg shrink-0">
                  <benefit.icon className="w-5 h-5 text-shop_orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-shop_dark_green mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-dark-text">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/80 backdrop-blur-md rounded-xl border border-shop_orange/20 p-6 shadow-sm flex flex-col items-center justify-center"
          >
            <p className="text-base text-shop_dark_green">
              <strong>Trusted by 50,000+ customers</strong>
            </p>

            <div className="flex items-center mt-2 gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#fdc700]"
                    fill="#fdc700"
                  />
                  //   <svg
                  //     key={i}
                  //     className="w-5 h-5 text-yellow-400 fill-current"
                  //     viewBox="0 0 20 20"
                  //   >
                  //     <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  //   </svg>
                ))}
              </div>
              <span>4.5/5 average ratings</span>
            </div>
          </motion.div>
          {/* Support Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-6 flex items-center justify-center gap-1"
          >
            <p>Questions? Contact us at</p>
            <Link
              href={`matilto:${contactConfig.emails.support}`}
              className="text-shop_light_green hover:text-shop_dark_green font-medium hoverEffect"
            >
              {contactConfig.emails.support}
            </Link>
          </motion.div>
        </motion.div>
        {/* Right Side - Sign up form */}
        <div className="w-full lg:w-2/5 py-12">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="clerk-sign-up">
                <SignUp
                  signInUrl={`/sign-in${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`}
                  forceRedirectUrl={redirectTo || "/user/dashbaord"}
                  fallbackRedirectUrl={redirectTo || "user/dashbaord"}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUpPage;

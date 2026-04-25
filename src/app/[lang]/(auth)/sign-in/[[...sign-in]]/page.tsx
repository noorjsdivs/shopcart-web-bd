"use client";
import Container from "@/components/common/Container";
import { Shield, Star, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { contactConfig } from "@/config/contact";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

const SoignInPage = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const features = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join our community of satisfied customers",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Access exclusive deals and personalized recommendations",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-br from-shop_light_green/5 via-shop_light_bg to-shop_light_pink/50 relative overflow-hidden">
      <Container className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)]">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,156,60,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(251,108,8,0.08)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(252,240,228,0.3)_0%,transparent_50%)]" /> */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 lg:py-12"
        >
          <div className="max-w-md mx-auto lg:max-w-lg lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-shop_dark_green">
                Welcome Back!
              </h2>
              <p className="text-lg text-dark-text mb-8 leading-relaxed">
                Sign in to access your account, track orders, and enjoy
                presonalized shopping experiences at{" "}
                {contactConfig.company.name}
              </p>
            </motion.div>
            {/* Features */}
            <div className="space-y-6">
              {features?.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-shop_light_green/10 rounded-lg shrink-0">
                    <feature.icon className="w-5 h-5 text-shop_light_green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-shop_btn_dark_green mb-1">
                      {feature?.title}
                    </h3>
                    <p className="text-sm text-dark-text">
                      {feature?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Contact support */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-shop_light_green/20 shadow-sm"
            >
              <p className="text-sm text-dark-text">
                Need help? Contact our support team at{" "}
                <Link
                  className="text-shop_light_green hover:text-shop_dark_green hoverEffect font-medium"
                  href={`mailto:${contactConfig.emails.support}`}
                >
                  {contactConfig.emails.support}
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
        >
          <div className="clerk-sign-in">
            <SignIn
              signUpUrl={`/sign-up${redirectTo ? `redirectTo=${encodeURIComponent(redirectTo)}` : ""}`}
              forceRedirectUrl={redirectTo || "/user/dashbaord"}
              fallbackRedirectUrl={redirectTo || "user/dashboard"}
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default SoignInPage;

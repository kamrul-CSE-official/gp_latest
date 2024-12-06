"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlignStartVerticalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/shared/title";
// import {
//   useGetProductsQuery,
//   usePostCommentMutation,
// } from "@/redux/api/apiSlice";

export function HeroSection() {
  /*
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  const { data: singleProduct } = useGetProductsQuery(12);
  const [postComment, { isError, isLoading: postLoading, data: postData }] =
    usePostCommentMutation();
  console.log(postLoading, postData, isError);
  const options = {
    id: 12,
    data: { comment: "123" },
  };
  postComment(options);

  console.log(
    "RTK= data: ",
    data,
    " Loading: ",
    isLoading,
    " Error: ",
    error,
    " Single product: ",
    singleProduct
  );
  */
  return (
    <section className="text-center">
      <motion.h1
        className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title title=" Welcome to NATURAB" />
      </motion.h1>
      <motion.p
        className="mb-8 text-xl text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your Preferred Apparel Accessories Supplier
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/login">
          <Button size="lg" className="font-semibold">
            Get Started <AlignStartVerticalIcon className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

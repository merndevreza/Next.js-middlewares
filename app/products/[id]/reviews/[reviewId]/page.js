import { notFound } from "next/navigation";

const page = ({ params }) => {
  console.log(params);
  const { id, reviewId } = params;
  if (reviewId > 5) {
    notFound();
  }
  return <div>single review</div>;
};

export default page;

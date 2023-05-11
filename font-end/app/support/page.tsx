import Breadcrumb from "@/components/Common/Breadcrumb";
import Support from "@/components/Support";
import Link from "next/link";

const SupportPage = () => {
  return (
    <>
       <Breadcrumb
        pageName="Hỗ trợ"
        description="Các câu hỏi thường gặp"
      />
      <Support />
    </>
  );
};

export default SupportPage;

import { HeaderBlog } from "@/components/headerBlog";
import blog from "../../assets/blog.png"
import { Footer } from "@/components/footer";

export default function Blog() {
    return (
      <>
          <HeaderBlog />
          <main className="p-4 md:px-20 lg:px-50 min-h-[80vh] flex flex-col justify-center items-center">
            <img src={blog.src} alt="Blog imagem" className="max-w-full" />
            <p>Brevemente</p>
          </main>
          <Footer />
      </>

    )
}
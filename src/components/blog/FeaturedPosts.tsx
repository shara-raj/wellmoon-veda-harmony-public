import { BlogPost } from "@/types/blog";

type Props = {
  posts: BlogPost[];
};

export default function FeaturedPosts({ posts }: Props) {
  return (
    <aside
      className="
        w-full
        lg:w-[320px]
        lg:sticky lg:top-24
        space-y-4
      "
    >
      <h3 className=" text-lg">Featured Guides</h3>

      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="group flex items-center gap-3">
            <div className="w-[35%] overflow-hidden shrink-0 rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="h-28 w-auto object-cover align-middle transition-transform group-hover:scale-105"
              />
            </div>

            <p className="mt-2 font-body text-lg font-medium leading-snug group-hover:underline">
              {post.title}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

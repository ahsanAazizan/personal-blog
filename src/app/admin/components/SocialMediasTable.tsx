"use client";
import { SocialMedia } from "@/models/SocialMedia.model";
import Link from "next/link";
import { deleteSocialMediaAction } from "../actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SocialMediasTable({
  socialMedias,
}: {
  socialMedias: SocialMedia[];
}) {
  const router = useRouter();
  const simplifiedSocialMedias: SocialMedia[] = JSON.parse(
    JSON.stringify(socialMedias),
  );

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Social Medias</h4>
        <Link
          href={"/admin/social-medias/new"}
          className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
        >
          New{" "}
        </Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedSocialMedias.map((socialMedia, i) => (
          <div
            key={i}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current md:h-6 md:w-6"
                dangerouslySetInnerHTML={{
                  __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
                }}
              ></svg>
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {socialMedia.name}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteSocialMediaAction(socialMedia._id.toString()).then(
                    () => {
                      toast.success("Successfully deleted a social media", {
                        id: toastId,
                      });
                      router.refresh();
                    },
                  );
                }}
                className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
              >
                Delete
              </button>
              <Link
                href={"/admin/social-medias/" + socialMedia._id.toString()}
                className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

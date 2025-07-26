import { VideoCard } from "./VideoCard";
const VIDEO = [
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
  {
    title: "this is harkirat video",
    image: "photo.png",
    tumbimg: "photo.png",
    name: "harkirat",
    views: "25k",
    ago: "1 day ago",
  },
];
export const VideoGrid = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEO.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            tumbimg={video.image}
            name={video.name}
            views={video.views}
            ago={video.ago}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};

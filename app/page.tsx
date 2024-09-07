import Youtube from "./util/makeYoutube";

export default function Page() {
  return (
    <div className="w-4/5 m-auto pb-14">
      <p className="text-xl font-bold leading-6 text-gray-900 text-center pt-6 pb-8">
      港澳區會前鋒會 旅程回顧
      </p>
      <Youtube youtubeSource={"https://www.youtube.com/embed/S5P-y90MbKo?si=al6ydZQmOpkQPZGO"} youtubeTitle={"drill team hong kong pathfinder 2024"} />
      <p className="text-xl font-bold leading-6 text-gray-900 text-center pt-6 pb-8">
        花式步操隊 成長回顧
      </p>
      <Youtube youtubeSource={"https://www.youtube.com/embed/hcQc2IS5d4k?si=lbQuj7KvuC9LROgE"} youtubeTitle={"drill team hong kong pathfinder 2024"} />
      <p className="text-xl font-bold leading-6 text-gray-900 text-center pt-6 pb-8">
      相信祢應許 主題詩中文版
      </p>
      <Youtube youtubeSource={"https://www.youtube.com/embed/sFOc4lReAfs?si=CMGhe4g5d69upLJV"} youtubeTitle={"drill team hong kong pathfinder 2024"} />
    
    </div>
  );
}

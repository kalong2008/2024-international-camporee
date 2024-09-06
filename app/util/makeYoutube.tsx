export default function Youtube({youtubeSource, youtubeTitle}:{youtubeSource: string, youtubeTitle: string}) {
    return (   
        <div className="lg:w-3/5 m-auto">
          <div
            className="flex justify-center"
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={youtubeSource}
              title={youtubeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
    );
  }
  
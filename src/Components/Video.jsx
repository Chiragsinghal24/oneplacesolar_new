import { useEffect, useState } from "react"

const Video = ({ videoId }) => {
    return (
        <div onClick={() => location.href = `https://youtu.be/${videoId}`} className="card btn btn-ghost h-full p-0 w-full md:w-96 bg-base-100 shadow-xl image-full overflow-hidden" >
            <figure><img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="Shoes" /></figure>
            <div className="opacity-0 bg-black/50 hover:opacity-100 absolute top-0 bottom-0 left-0 right-0">
                <div className="card-body absolute bottom-0">
                    <div className="card-title normal-case text-white">{title}</div>
                </div>
            </div>
        </div >
    )
}

export default Video
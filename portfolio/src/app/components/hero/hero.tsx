import Link from 'next/link'
export default function Hero(){
    return(
        <div>
            <div>
                <h1>
                    Hey <br />
                    I am Umama Masroor Ali <br />
                    Frontend Developer
                </h1>
                <p>Web developer & designer specializing in building amazing websites.</p>
                <Link href={"https://github.com/UmamaMasroor?tab=repositories"}><button> See Projects</button></Link>
            </div>
        </div>
    )
}
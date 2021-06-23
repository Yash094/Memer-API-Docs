import { SITE_NAME, FOOTER_DESCRIPTION } from "../config";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-800 py-10">
            <div className="container mx-auto">
                <h1 className="text-center text-gray-300 text-2xl">
                    <Link href="/">{SITE_NAME}</Link>
                </h1>
                <p className="text-center text-gray-300">{FOOTER_DESCRIPTION}</p>
                <p className="text-center text-gray-300 mt-10">
                    © Memer Api - {new Date().getFullYear()}
                </p>
                 <p className="text-center text-gray-300 mt-10">
                    Website By - <a href="https://github.com/DevSnowflake">Snowflake Studio ❄</a>
                </p>
            </div>
        </div>
    );
}

import { ExternalLink } from "lucide-react";

export function PageHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center border-b  bg-gradient-to-b py-2 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit">
      <div className="container mx-auto flex items-center gap-2">
        <p className="text-lg md:text-2xl font-extrabold tracking-tight grow whitespace-nowrap">
          Aeternum Tracker
        </p>
        <a
          href="https://aeternum-map.th.gl?ref=aeternum-tracker"
          target="_blank"
          className="font-bold text-sm flex whitespace-nowrap items-center gap-1 hover:underline"
        >
          <span>Interactive Map</span>
          <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href="https://th.gl/discord"
          target="_blank"
          className="font-bold text-sm flex whitespace-nowrap items-center hover:underline"
        >
          <span className="hidden md:block">Join the Community</span>
          <svg viewBox="0 0 30 30" width="26" height="26" fill="currentColor">
            <path d="M12.1364 14.3253C11.2364 14.3253 10.5818 15.0753 10.5818 15.9002C10.5818 16.8002 11.3182 17.4752 12.1364 17.4752C13.0364 17.4752 13.6909 16.7252 13.6909 15.9002C13.6909 15.0753 13.0364 14.3253 12.1364 14.3253ZM17.7818 14.3253C16.8818 14.3253 16.2273 15.0753 16.2273 15.9002C16.2273 16.8002 16.9636 17.4752 17.7818 17.4752C18.6818 17.4752 19.3364 16.7252 19.3364 15.9002C19.3364 15.0753 18.6 14.3253 17.7818 14.3253ZM19.2545 21C19.2545 21 18.6818 20.4 18.2727 19.8751C20.3182 19.3501 21.0545 18.1501 21.0545 18.1501C20.4 18.5251 19.8273 18.8251 19.2545 18.9751C18.5182 19.2751 17.7818 19.5001 17.0455 19.5751C15.5727 19.8001 14.1818 19.7251 13.0364 19.5751C12.1364 19.4251 11.4 19.2001 10.7455 18.9751C10.4182 18.8251 10.0091 18.6751 9.6 18.5251C9.51818 18.5251 9.51818 18.4501 9.43636 18.4501C9.43636 18.4501 9.35455 18.4501 9.35455 18.3751C9.10909 18.2251 8.94545 18.1501 8.94545 18.1501C8.94545 18.1501 9.68182 19.2751 11.6455 19.8001C11.2364 20.325 10.6636 21 10.6636 21C7.30909 20.925 6 18.8251 6 18.8251C6 14.2503 8.20909 10.5005 8.20909 10.5005C10.4182 8.92557 12.5455 9.00057 12.5455 9.00057L12.7091 9.15056C9.92727 9.90052 8.61818 11.0255 8.61818 11.0255C8.61818 11.0255 8.94545 10.8755 9.51818 10.5755C11.2364 9.97552 12.5455 9.75053 13.0364 9.75053C13.1182 9.75053 13.2 9.75053 13.2818 9.75053C14.1818 9.60054 15.2455 9.60054 16.3909 9.75053C17.8636 9.90052 19.4182 10.2755 21.0545 11.1005C21.0545 11.1005 19.8273 10.0505 17.2091 9.30055L17.4545 9.00057C17.4545 9.00057 19.5818 8.92557 21.7909 10.5005C21.7909 10.5005 24 14.2503 24 18.8251C24 18.8251 22.6909 20.925 19.2545 21Z" />
          </svg>
        </a>
      </div>
    </header>
  );
}

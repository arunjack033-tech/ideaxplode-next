import Image from "next/image";

const links = ["About", "Technology", "Methodology", "Pricing", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] px-6 py-14 text-[#cfcfcf] md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <Image src="/assets/images/ideaXplode Logo.png" alt="ideaXplode" width={150} height={40} className="h-9 w-auto brightness-[2.8] saturate-0" />
          <p className="mt-4 max-w-md text-[14px] leading-7">
            ideaXplode is a No-Code + AI software development studio that helps founders launch real, market-ready apps in weeks, not months.
          </p>
          <p className="mt-4 text-[12px]">Made with love by ideaXplode © 2025</p>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold text-white">Links</h4>
          <ul className="mt-4 space-y-2 text-[14px]">
            {links.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold text-white">Contact us</h4>
          <p className="mt-4 text-[14px] leading-7">
            ideaXplode Technologies
            <br />
            #200, I Floor, 3rd Main Road,
            <br />
            C L R I Nagar, Neelankarai,
            <br />
            Chennai - 600115, India.
          </p>
          <p className="mt-3 text-[14px]">hola@ideaxplode.com</p>
          <p className="mt-1 text-[14px]">+91 6383-9530-22</p>
        </div>
      </div>
    </footer>
  );
}


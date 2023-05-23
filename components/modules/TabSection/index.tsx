import React from "react";
import Link from "next/link";
import Tabs from "@/components/modules/Tabs";

function TabSection() {
  return (
    <section>
        <Tabs>
          <div data-label="Details">
            <p className="text-sm">
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky. it has a straight fit with well defined shoulders and
              a shawl collar culminating in a button and has been flawlessly
              finished with three jet pockets with a sartorial feel.{" "}
            </p>
            <br />
            <p className="text-sm">
              See the{" "}
              <Link href="/" className="underline">
                EDITOR’S NOTE
              </Link>
            </p>
            <br />
            <p className="text-sm">
              Learn about the{" "}
              <Link href="/" className="underline">
                DESIGNER
              </Link>
            </p>
          </div>
          <div data-label="Delivery">
            <p className="text-sm">
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky. it has a straight fit with well defined shoulders and
              a shawl collar culminating in a button and has been flawlessly
              finished with three jet pockets with a sartorial feel.{" "}
            </p>

            <p className="text-sm">
              See the{" "}
              <Link href="/" className="underline">
                EDITOR’S NOTE
              </Link>
            </p>
            <br />
            <p className="text-sm">
              Learn about the{" "}
              <Link href="/" className="underline">
                DESIGNER
              </Link>
            </p>
          </div>
          <div data-label="Fit">
            <p className="text-sm">
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky. it has a straight fit with well defined shoulders and
              a shawl collar culminating in a button and has been flawlessly
              finished with three jet pockets with a sartorial feel.{" "}
            </p>

            <p className="text-sm">
              See the{" "}
              <Link href="/" className="underline">
                EDITOR’S NOTE
              </Link>
            </p>
            <br />
            <p className="text-sm">
              Learn about the{" "}
              <Link href="/" className="underline">
                DESIGNER
              </Link>
            </p>
          </div>
          <div data-label="Share">
            <p className="text-sm">
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky. it has a straight fit with well defined shoulders and
              a shawl collar culminating in a button and has been flawlessly
              finished with three jet pockets with a sartorial feel.{" "}
            </p>

            <p className="text-sm">
              See the{" "}
              <Link href="/" className="underline">
                EDITOR’S NOTE
              </Link>
            </p>
            <br />
            <p className="text-sm">
              Learn about the{" "}
              <Link href="/" className="underline">
                DESIGNER
              </Link>
            </p>
          </div>
        </Tabs>
    </section>
  );
}

export default TabSection;

"use client";

import { Reveal } from "./reveal";
import { useLocale } from "@/i18n/locale-context";

export function Capabilities() {
  const { t } = useLocale();

  const capabilities = [
    {
      title: t.capabilities.build,
      description: t.capabilities.buildDesc,
    },
    {
      title: t.capabilities.automate,
      description: t.capabilities.automateDesc,
    },
    {
      title: t.capabilities.operate,
      description: t.capabilities.operateDesc,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 mb-10">
      {capabilities.map((cap, i) => (
        <Reveal key={cap.title} delay={i * 80}>
          <div>
            <h3 className="text-xl font-medium mb-3">{cap.title}</h3>
            <p className="text-base text-muted leading-relaxed">
              {cap.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

"use client";
import { ReactNode, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Icon } from "@/src/shared/ui/kit";
import styles from "./accordion.module.scss";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({
  title,
  children,
  defaultOpen = true,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const updateHeight = () => {
      setContentHeight(contentElement.scrollHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(contentElement);

    const mutationObserver = new MutationObserver(updateHeight);
    mutationObserver.observe(contentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [children]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(styles.accordion, className)}>
      <button className={styles.accordion__header} onClick={toggleAccordion}>
        <p className={styles.accordion__title}>{title}</p>
        <Icon
          name="arrowBack"
          className={clsx(styles.accordion__arrowIcon, {
            [styles["accordion__arrowIcon--open"]]: isOpen,
            [styles["accordion__arrowIcon--closed"]]: !isOpen,
          })}
        />
      </button>
      <div
        className={clsx(styles.accordion__contentWrapper, {
          [styles["accordion__contentWrapper--open"]]: isOpen,
          [styles["accordion__contentWrapper--closed"]]: !isOpen,
        })}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
      >
        <div ref={contentRef} className={styles.accordion__content}>
          {children}
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { LottieAnimation } from '@/src/shared/ui/kit';
import styles from './lottie-link.module.scss';

type Contact = {
  href: string;
  icon: string;
  name: string;
  description: string;
  style?: { scale?: number };
};

export default function LottieLink({ contact }: { contact: Contact }) {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  return (
    <a
      key={contact.icon}
      className={styles.contactList__item}
      href={contact.href}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setHoveredContact(contact.icon)}
      onMouseLeave={() => setHoveredContact(null)}
    >
      <LottieAnimation
        animationUrl={contact.icon}
        className={styles.contactList__item__icon}
        loop={true}
        style={contact.style}
        autoplay={hoveredContact === contact.icon}
      />
      <p className={styles.contactList__item__name}>{contact.name}</p>
      <p className={styles.contactList__item__description}>
        {contact.description}
      </p>
    </a>
  );
}

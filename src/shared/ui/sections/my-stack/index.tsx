import { Icon } from '@/src/shared/ui/kit';
import styles from './my-stack.module.scss';

const stack = [
  { name: 'reactjs', label: 'React', sizeClass: styles.react },
  { name: 'typescript', label: 'TypeScript', sizeClass: styles.ts },
  { name: 'nextjs', label: 'Next.js', sizeClass: styles.next },
  { name: 'expoFull', label: 'Expo', sizeClass: styles.expo },
  { name: 'nodejs', label: 'Node.js', sizeClass: styles.node },
  { name: 'nestjs', label: 'NestJS', sizeClass: styles.nest },
  { name: 'postgresqlElephant', label: 'PostgreSQL', sizeClass: styles.pg },
  { name: 'docker', label: 'Docker', sizeClass: styles.docker },
  { name: 'cicd', label: 'CI/CD', sizeClass: styles.cicd }
] as const;

export default function MyStack() {
  return (
    <ul className={styles.myStack}>
      <p className={styles.title}>Технологический стек</p>
      {stack.map((item) => (
        <li key={item.name} className={styles.item}>
          <Icon
            name={item.name}
            className={`${styles.item__icon} ${item.sizeClass}`}
          />
        </li>
      ))}
    </ul>
  );
}

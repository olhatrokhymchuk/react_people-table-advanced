import { Person } from '../types/Person';

interface PersonLinkProps {
  person: Person;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  dataCy?: string;
}

export function PersonLink({ person, onClick, dataCy }: PersonLinkProps) {
  const { slug, name, sex } = person;

  const sexClass = sex === 'f' ? 'has-text-danger' : 'has-text-link';

  return (
    <a
      href={`#/people/${slug}`}
      className={sexClass}
      onClick={onClick}
      data-cy={dataCy}
    >
      {name}
    </a>
  );
}

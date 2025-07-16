import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export function SearchInput({ value, onChange, placeholder }: Props) {
  return (
    <SearchBar>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Search contacts'}
      />
    </SearchBar>
  );
}

const SearchBar = styled.div`
  margin: 1rem auto;
  max-width: 600px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.small};
    font-size: 1rem;
  }
`;

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Box, Form, Input, Button } from './Searchbar.styled';


interface IProps {
  propSubmit: (inputFilmValue: string) => void,
};


function Searchbar ({propSubmit}: IProps) {
const [inputFilmValue, setInputFilmValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInputFilmValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputFilmValue.trim() === '') {
      toast.error('Please, fill in the field of search');
      return;
    }

    propSubmit(inputFilmValue);

    setInputFilmValue('');
  };

  return (
     <Box>
        <Form onSubmit={handleSubmit}>
           <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies by keyword"
            value={inputFilmValue}
            onChange={handleChange}
                  />
            <Button type="submit">
           Search
          </Button>
        </Form>
      </Box>    
  );
};

export default Searchbar;


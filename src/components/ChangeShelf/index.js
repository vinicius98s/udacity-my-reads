import React from 'react';

import Select from 'react-select';

import { update } from '../../BooksAPI';

const ChangeShelf = (props) => {
    const options = [
        { value: 'wantToRead', label: 'Want to read' },
        { value: 'currentlyReading', label: 'Currently reading' },
        { value: 'read', label: 'Read' },
        { value: 'none', label: 'None' }
    ];

    const customStyles = {
        option: (provided) => ({
          ...provided,
          padding: 2
        })
    };

    const checkCurrentShelf = () => {
        if(props.addBook) {
            const options = {
                'wantToRead': 0,
                'currentlyReading': 1,
                'read': 2,
                'none': 3
            }

            for(const book of props.allBooks) {
                if(book.id === props.id) {
                    return options[book.shelf];
                }
            }
            return options['none'];
        }

        for (const [index, option] of options.entries()) {
            if(option.value === props.currentBookShelf) {
                return index;
            }
        }
    };

    const changeBookShelf = async (id, e) => {
        if(props.currentBookShelf === e.value) {
            return;
        }

        const book = {
            id: id
        };

        await update(book, e.value);

        await props.getBooks();

        if(props.closeModal) {
            props.closeModal();
        }

        if(e.value === 'none') {
            return;
        }

        props.handleShelfState(e.value);
    }

    return (
        <Select
            styles={customStyles}
            placeholder='Change shelf'
            options={options}
            defaultValue={options[checkCurrentShelf()]}
            isSearchable={false}
            onChange={e => changeBookShelf(props.id, e)}
        />
    )
}

export default ChangeShelf;
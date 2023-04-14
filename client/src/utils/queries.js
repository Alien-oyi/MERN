import {gql} from "@apollo/client";

export const QUERY_ME = gql`
    query getMe {
        me {
            email
            bookCount
            username
            savedBooks {
                authors
                description
                title
                bookId
            }
        }
    }`;
    
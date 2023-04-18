import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login_mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;

export const SAVE_BOOK = gql`
      mutation SaveBookMutation(
      $bookId: String!
      $image: String!
      $title: String!
      $authors: [String!]
      $link: String
      $description: String
    ) {
      saveBook(bookId: $bookId, image: $image, title: $title, authors: $authors, description: $description, link: $link)
      {
        id
        username
        email
        bookCount
        savedBooks {
            bookId
        }
        }
    }`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
            }
            }
        }`;

        
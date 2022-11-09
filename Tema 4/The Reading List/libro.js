class BookList{
    constructor(){
        this.readed_books=[];
        this.not_readed_books=[];
        this.nextBook=undefined;
        this.currentBook=Book;
        this.lastBook=undefined;
    }

    get readed_books(){
        return this.readed_books;
    }

    get not_readed_books(){
        return this.not_readed_books;
    }

    get nextBook(){
        return this.nextBook;
    }

    get currentBook(){
        return this.currentBook;
    }

    get lastBook(){
        return this.lastBook;
    }

    add(book){
        if(book.read==true){
            this.readed_books.push(book);
        }
        else{
            this.not_readed_books.push(book);
        }
    }

    finishCurrentBook(){
        this.currentBook.markAsRead();
        this.currentBook.date=new Date(Date.now());
        this.lastBook=this.currentBook;
        this.currentBook=this.nextBook;
        this.nextBook=this.not_readed_books[0];
        this.not_readed_books.shift();
    }
}   

class Book{
    constructor(title, genre, author){
        this.title=title;
        this.genre=genre,
        this.author=author;
        this.read=false;
        this.date=undefined;
    }

    get title(){
        return this.title;
    }

    get genre(){
        return this.genre;
    }

    get author(){
        return this.author;
    }

    get read(){
        return this.read;
    }

    get date(){
        return this.date;
    }

    markAsRead(){
        this.read=true;
        this.date=new Date();    
    }
}

export {BookList, Book};
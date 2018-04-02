/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import Module1 from './Module1';
import Module2 from './Module2';
import Head from './Head';
import Column from './Column';
import Footer from './Footer';
import Shufflingbox from './Shufflingbox'
import Search from './Search';
var headers = ["Book", "Author", "Language", "Published", "Sales","buy"];
var data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150","0"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943",
        "140","1"],
    ["Harry Potter and the Philosopher", "J. K. Rowling", "English", "1997", "107","2"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100","3"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100","4"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100","5"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100","6"],
];
window.initarr = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150","0"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943",
        "140","1"],
    ["Harry Potter and the Philosopher", "J. K. Rowling", "English", "1997", "107","2"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100","3"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100","4"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100","5"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100","6"],
];
window.shoppingcart = [];
class Home extends Component {
    render() {
        return (
            <div>
                <Head />
                <Column/>
                <Shufflingbox/>
                <Module1/>
                <Module2 initialData= {data} headers= {headers}/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
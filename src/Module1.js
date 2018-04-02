/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import Time from './Time'
var headers = ["Book", "Author", "Language", "Published", "Sales","buy"];
var data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943",
        "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
];
const dp={
    fontFamily:"Arial,Helvetica,sans-serif;font-size:100%",
}
class Module1 extends Component {
    constructor(props) {
        super(props);
        this.state = {j:""}
        this.click_1 = this.click_1.bind(this);


    }
    click_1(){
        this.setState({
            j:window.__yourReactComp__
        });
    }
    render() {
        return (
            <article id="109" className="post tag-android tag-ke-hu-duan" onClick={this.click_1}>
                <div className="post-head">
                    <h1 className="post-title"><a style={dp} >推荐书目</a></h1>

                </div>
                <div className="post-content">
                    <Time initialData= {data} headers= {headers}/>
                </div>
            </article>
        );
    }
}

export default Module1;
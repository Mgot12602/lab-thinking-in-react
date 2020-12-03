import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


export default class FilterableProductTable extends Component {

    state = {
    search:""
}
    handleChange=(event)=>{this.setState({search:event.target.value})}

    
    
    render() {
        const filteredProducts = this.props.products.data.filter((el)=>{
    
            return (el.name.toLowerCase().includes(this.state.search.toLowerCase()))
            })


        return (
            <div>
                <h1>IRONSTORE</h1>
                <SearchBar search={this.state.search} handleChange={this.handleChange}/>
                <ProductTable products={filteredProducts}/>
            </div>
        )
    }
}

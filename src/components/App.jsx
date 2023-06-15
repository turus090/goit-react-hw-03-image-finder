import axios from "axios";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { Component } from "react";
import Button from "./button/Button";
import Modal from "./modal/Modal";

export class App extends Component {
  state = { 
    images:[],
    searchText: "",
    page: 1,
    countOnPage: 20,
  }
  apiKey = "36205936-cd8fb584a14544fbe3836796c"
  baseUrl ="https://pixabay.com/api/"
  render (){
    const updateSearch = (newSearch) =>{
      this.setState({
        ...this.state, 
        searchText : newSearch
      })
    }
    const searchAPI = () => {
      console.log('click')
        axios.get(`${this.baseUrl}/?q=${this.state.searchText}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.countOnPage}&page=${this.state.page}`)
          .then(res=>{
            console.log(res)
            this.setState({
              ...this.state,
              images: [
                ...res.data.hits
              ]
            })
          })
    }
    const handleLoadMore = () => {
      axios.get(`${this.baseUrl}/?q=${this.state.searchText}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.countOnPage}&page=${this.state.page+1}`)
    .then(res=>{
    this.setState({
      ...this.state,
      images: [
        ...this.state.images,
        ...res.data.hits
      ], 
      page : this.state.page+1
    })
    })
    
    }
    return(
    <div>
      <Searchbar 
        updateSearch={updateSearch}
        searchAPI={searchAPI}
      />
      {this.state.images.length !== 0 ? <ImageGallery imagesStore = {this.state.images}/> : null}
      {this.state.images.length !== 0 ? <Button handleLoadMore = {handleLoadMore}/> : null}
      <Modal />
    </div>
  )};
};

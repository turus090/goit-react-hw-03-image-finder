import axios from 'axios';
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';
import { Component } from 'react';
import Button from './button/Button';
import Modal from './modal/Modal';
import Loader from './loader/Loader';

export class App extends Component {
  state = {
    images: [],
    searchText: '',
    page: 1,
    countOnPage: 20,
    modalOpen: false,
    imgModal: null,
    isLoading: false
  };
  apiKey = '36205936-cd8fb584a14544fbe3836796c';
  baseUrl = 'https://pixabay.com/api/';
  
  
   updateSearch = newSearch => {
    this.setState({
      ...this.state,
      searchText: newSearch,
    });
  };
   searchAPI = () => {
    this.setState(prevState=>{
      prevState.isLoading = true
    })
    console.log('click');
    axios
      .get(
        `${this.baseUrl}/?q=${this.state.searchText}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.countOnPage}&page=${this.state.page}`
      )
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          images: [...res.data.hits],
          isLoading:false
        });
      });
  };
   handleOpenModal = img => {
    this.setState({
      ...this.state,
      imgModal: img,
      modalOpen: true,
    });
  };
   handleCloseModal = () => {
    this.setState({
      ...this.state,
      imgModal: null,
      modalOpen: false,
    });
  };

   handleLoadMore = () => {
    this.setState(prevState=>{
      prevState.isLoading = true
    })
    axios
      .get(
        `${this.baseUrl}/?q=${this.state.searchText}&key=${
          this.apiKey
        }&image_type=photo&orientation=horizontal&per_page=${
          this.state.countOnPage
        }&page=${this.state.page + 1}`
      )
      .then(res => {
        this.setState({
          ...this.state,
          images: [...this.state.images, ...res.data.hits],
          page: this.state.page + 1,
          isLoading: false
        });
      });
    }
  render() {
  
    return (
      <div>
        {this.state.isLoading && <Loader/>}
        <Searchbar updateSearch={this.updateSearch} searchAPI={this.searchAPI} />
        {this.state.images.length !== 0 ? (
          <ImageGallery
            handleOpenModal={this.handleOpenModal}
            imagesStore={this.state.images}
          />
        ) : null}
        {this.state.images.length !== 0 ? (
          <Button handleLoadMore={this.handleLoadMore} />
        ) : null}
        {this.state.modalOpen && (
          <Modal
            imgModal={this.state.imgModal}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

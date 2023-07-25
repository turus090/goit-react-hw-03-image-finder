import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';
import { Component } from 'react';
import Button from './button/Button';
import Modal from './modal/Modal';
import Loader from './loader/Loader';
import getImages from 'api/api';

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
  

  updateImgs = (imgList) => {
    this.setState({
      ...this.state,
      images: [
        ...this.state.images,
        ...imgList
      ],
      isLoading:false
    });
  }
  componentDidUpdate(prevProps,prevState){
    console.log(prevState)
    console.log(this.state)
    if (prevState.searchText !== this.state.searchText || prevState.page !== this.state.page){
      getImages(prevState.searchText, prevState.countOnPage, prevState.page, this.updateImgs)
    }
  }
   updateSearch = newSearch => {
    this.setState(prevState =>{
      prevState.searchText = newSearch
      prevState.isLoading = false
    });
  };
   searchAPI = () => {
   this.setState(prevState=>{
      prevState.isLoading = true
    })
    getImages(this.state.searchText, this.state.countOnPage, this.state.page, this.updateImgs)
  };
   handleOpenModal = img => {
    this.setState(prevState => {
      prevState.imgModal = img
      prevState.modalOpen = true
    })
  };
   handleCloseModal = () => {
    this.setState(prevState=> {
      prevState.imgModal = null
      prevState.modalOpen = false
    })
  };

   handleLoadMore = () => {
      this.setState(prevState=>{
        prevState.page += 1 
        prevState.isLoading = true
      })
      getImages(this.state.searchText, this.state.countOnPage, this.state.page+1, this.updateImgs)
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

var galleryImages = [
  {
    description: 'Image 1',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 2',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 3',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 4',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 5',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 6',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 7',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 8',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 9',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 10',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 11',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  },
  {
    description: 'Image 12',
    thumbnailImage: 'http://placehold.it/150x150',
    mainImage: 'http://placehold.it/700x300'
  }
];


angular.module('simpleApp')
  .controller('AboutController', ['$scope', '$location', function ($scope,$filter) {
    this.title = 'About Us';
    this.images = galleryImages;
    this.activeImage = 0;
    this.showImage = function (index) {
      this.activeImage = index;
    }
  }]);

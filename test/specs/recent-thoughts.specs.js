(function() {
  'use strict';
  let expect = chai.expect;
  describe('Main module', function(){

    describe('showRecent function', function(){

      beforeEach(function(){
        let main = document.createElement('main');
        main.classList.add('recent');
        document.querySelector('body').appendChild(main);
      });

      afterEach(function(){
        let main = document.querySelector('main');
        main.parentNode.removeChild(main);
      });

      it('The argument isnt an array', function(){
        let result = window.thoughter.showRecent('hello');
        expect(result).to.be.undefined;
      });

      it('should be a function', function(){
        expect(window.thoughter.showRecent).to.be.a('function');
      });

      it('should create an article for every thought it is given', function(){
        window.thoughter.showRecent([
          {content:'This isnt easy', createTime: '09:00', id: 'Ryan'}
        ]);
        let articles = document.querySelectorAll('main.recent article');
        expect(articles.length).to.equal(1);
      });

      it('should handle an empty array by creating articles', function(){
        let result = window.thoughter.showRecent([]);
        let articles = document.querySelectorAll('main.recent article');
        expect(articles.length).to.equal(0);
      });

      it('should handle an array of objects that do not meet the criteria', function(){
        window.thoughter.showRecent([{content: 'ryan', number: 10 }]);
        let articles = document.querySelectorAll('main article');
        expect(articles.length).to.equal(0);
      });

      it('should add element for one piece of data', function(){
        window.thoughter.showRecent([{content: 'Ryan'}]);
        let articles = document.querySelectorAll('main article');
        expect(articles.length).to.equal(0);
      });

    });
  });
}());

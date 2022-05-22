import React from 'react';

const Banner = () => {
    return (
          <div>
                <div class='carousel w-full'>
                      <div id='slide1' class='carousel-item relative w-full'>
                            <img
                                  src='https://www.biostar.com.tw/upload/Banner/TZ590BTC-BANNER_-official_cCv8.jpg'
                                  className='w-full'
                                  alt='1'
                            />{' '}
                            /
                            <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                                  <a href='#slide4' class='btn btn-circle'>
                                        ❮
                                  </a>
                                  <a href='#slide2' class='btn btn-circle'>
                                        ❯
                                  </a>
                            </div>
                      </div>
                      <div id='slide2' class='carousel-item relative w-full'>
                            <img
                                  src='https://www.biostar.com.tw/upload/Banner/BIOSTAR_RACING_B660series_Banner_eng_rRaa.jpg'
                                  class='w-full'
                                  alt='2'
                            />{' '}
                            /
                            <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                                  <a href='#slide1' class='btn btn-circle'>
                                        ❮
                                  </a>
                                  <a href='#slide3' class='btn btn-circle'>
                                        ❯
                                  </a>
                            </div>
                      </div>
                      <div id='slide3' class='carousel-item relative w-full'>
                            <img
                                  src='https://www.biostar.com.tw/upload/Banner/FB-DIY-PC2000x800_7GhJ.png'
                                  class='w-full'
                                  alt='4'
                            />{' '}
                            /
                            <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                                  <a href='#slide2' class='btn btn-circle'>
                                        ❮
                                  </a>
                                  <a href='#slide4' class='btn btn-circle'>
                                        ❯
                                  </a>
                            </div>
                      </div>
                      <div id='slide4' class='carousel-item relative w-full'>
                            <img
                                  src='https://www.biostar.com.tw/upload/Banner/BIOSTAR_w11-2000x800_7JFx.jpg'
                                  class='w-full'
                                  alt='5'
                            />{' '}
                            /
                            <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                                  <a href='#slide3' class='btn btn-circle'>
                                        ❮
                                  </a>
                                  <a href='#slide1' class='btn btn-circle'>
                                        ❯
                                  </a>
                            </div>
                      </div>
                </div>
          </div>
    );
};

export default Banner;
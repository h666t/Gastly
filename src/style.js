const cssString = `
  #main {
    position: absolute;
    background: #392939;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(0.7);
    top: 50%;
    z-index: 1;
    animation: move 2s infinite;
  }

  #backgroundDiv{
    position: absolute;
    background: #8b6283;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(0.7);
    top: 50%;
    filter: blur(50px);
    animation: light 12s infinite alternate-reverse;
    animation: move 2s infinite;
  }


  @media (min-width: 500px) {
    #main {
      transform: translateX(-50%) translateY(-50%) scale(1);
      top: 50%;
    }

    #backgroundDiv {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
  
  #eyes {
    position: absolute;
    z-index: 5;
    left: 50%;
  }
  
  .eyePit {
    border-bottom: 3px solid black;
    width: 160px;
    height: 102px;
    border-radius: 50px/8px;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translateX(-112%) translateY(20%) rotate(-148deg);
    overflow: hidden;
  }
  
  .eyePit::before {
    content: "";
    position: absolute;
    width: 159px;
    height: 110px;
    background: white;
    top: 45px;
    border: 1px solid black;
    transform: rotate(46deg);
    border-radius: 50%;
  }
  
  .leftEyePit::before {
    box-shadow: inset -24px 16px 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .rightEyePit::before {
    box-shadow: inset 3px -11px 2px 1px rgba(0, 0, 0, 0.1);
  }
  
  #mirror {
    transform: rotateY(180deg);
  }
  
  .eyeBall {
    position: absolute;
    width: 3px;
    height: 10px;
    background: black;
    border-radius: 50%;
    top: 120px;
  }
  
  .leftEyeBall {
    right: 40px;
  }
  
  .rightEyeBall {
    left: 40px;
  }
  
  #mouthUp {
    background: #de5239;
    width: 165px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 120px;
    border-radius: 50%;
    z-index: 2;
  }
  
  #mouthDown {
    background: #392939;
    width: 205px;
    height: 100px;
    top: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    z-index: 4;
    
  }
  
  .tooth {
    background: white;
    width: 40px;
    height: 40px;
    position: absolute;
    border: 1px solid black;
    top: 152px;
    z-index: 3;
  }
  
  .tooth1st {
    transform: rotate(60deg) skew(30deg);
    left: 50px;
  }
  
  .tooth2nd {
    transform: rotate(240deg) skew(30deg);
    right: 50px;
  }
  
  @keyframes move {
    0% {
        transform: translateX(-50%) translateY(-50%) scale(0.7);
    }
    50% {
        transform: translateX(-50%) translateY(-52%) scale(0.71);
    }
    100% {
        transform: translateX(-50%) translateY(-50%) scale(0.7);
    }
  }
  
 @keyframes light {
   0% {
    filter: blur(50px);
    width:400px;
    height:400px;
   }
   50%{
    filter: blur(30px);
    width:300px;
    height:300px;
   }
   100% {
    filter: blur(50px);
    width:400px;
    height:400px;
   }
 }

  @media (min-width: 500px) {
    @keyframes move {
      0% {
        transform: translateX(-50%) translateY(-50%) scale(1);
      }
      50% {
        transform: translateX(-50%) translateY(-52%) scale(1.05);
      }
      100% {
        transform: translateX(-50%) translateY(-50%) scale(1);
      }
    }
  }
  `;

export default cssString;

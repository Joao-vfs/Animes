import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: #F46D1B;
  position: fixed;
  height: 100%;
  top: 0px;
  left: ${({ sidebar }) => sidebar ? '0px' : '-300px'};
  width: 300px;
  animation: ${({ sidebar }) => sidebar ? 'showSidebar .4s' : 'hideSidebar .4s'};
  overflow: auto;
  color: #484747;
  z-index: 1;

  svg {
    color: white;
    width: 30px;
    height: 30px;
    margin-left: 0.7rem;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  @keyframes hideSidebar {
    from {
      opacity: 1;
      width: 300px;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }


  @media (min-width: 300px) and (max-width: 700px) {
  
  left: ${({ sidebar }) => sidebar ? '0px' : '-150px'};
  width: 150px;


  h1{
    margin-top: 2rem;
    font-size: 20px;
  }

  svg {
    color: white;
    width: 30px;
    height: 30px;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      
      width: 150px;
    }
  }

  @keyframes hideSidebar {
    from {
      opacity: 1;
      width: 150px;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }

  @media (min-width: 0px) and (max-width: 400px) {
    left: ${({ sidebar }) => sidebar ? '0px' : '-100px'};
  width: 100px;

  h1{
  font-size: 18px;
  }
  
  svg {
    color: white;
    width: 20px;
    height: 20px;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      
      width: 100px;
    }
  }

  @keyframes hideSidebar {
    from {
      opacity: 1;
      width: 100px;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }
  }

  }
`;

export const SidebarContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  margin: 20% 0 10% 10%;
  cursor: pointer;

 a {
    transition: all 0.3s;
    color: white;
  }

 a:hover {
    transform: scale(0.9);
  }

  @media (max-width: 400px) {

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  margin: 20% 0 10% 10%;
  cursor: pointer;

 a {
    transition: all 0.3s;
    color: white;
    font-size: 16px;
  }

 a:hover {
    transform: scale(0.9);
  }


  }
`;
